import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import style from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {db} from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'

const ItemDetailContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([null])

    const { itemId } = useParams()
    const { showNotification } = useNotification()

    useEffect(()=>{
        if (product) document.title = product.name
            return () =>{
                document.title = 'Ecommerce'
            }
    })

    useEffect(() => {
        setLoading(true)

        const productDocument = doc(db, 'products', itemId)

        getDoc(productDocument)
            .then(queryDocumentSnapshot =>{
                const fields = queryDocumentSnapshot.data()
                const productAdapter = {id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapter)
           
            })
            .catch(error =>{
                showNotification('error', 'Hubo un error')
            })
            .finally(()=>{
                setLoading(false)
            })
   
    }, [itemId])

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">Cargando el producto...</p>
                </div>
            </>
        )
    }

    if (!product) {
        return <h1 className='text-center mt-4 mb-4'>El producto no existe</h1>
    }

    return (
        <>
            <h1 className='text-center mt-4 mb-4'>{greeting}</h1>
            <div className={style.cardDetail}>
                <ItemDetail {...product} />
            </div>
        </>

    )
}

export default ItemDetailContainer