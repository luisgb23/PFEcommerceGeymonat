import { useState } from "react"
import { Link } from 'react-router-dom'
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useCart } from "../../context/CartContext"
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, doc, collection, query, where, documentId, addDoc } from 'firebase/firestore'
import { Timestamp , writeBatch } from "firebase/firestore"
import { useNotification } from "../../notification/NotificationService"
const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useCart()
    const { showNotification } = useNotification()

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        const buyer = ''
        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                
                setOrderId(orderAdded.id)
                clearCart()
            } else{
                showNotification('error', 'Hay productos que no tienen stock disponible')
            }

        } catch (error) {
            showNotification('error', 'Hubo un error al crear la orden')
        }
        finally{
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta cargando su orden...</h1>
    }

    if (orderId) {

        return (
            <>
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center mt-4">Compra realizada con éxito</h3>
                        </div>
                        <h4 className="text-center mt-4">El id de su orden es: {orderId}</h4>
                        <div className="text-center mt4 mb-4">
                            <Link to='/' className="btn btn-danger">Seguir comprando</Link>
                        </div>
                    </div>
                </div>
            </>)
        
    }

    return (
        <div className="container">
            <h1 className="text-center">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>

    )
}

export default Checkout