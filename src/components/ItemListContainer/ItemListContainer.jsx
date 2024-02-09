import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore' 

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    useEffect(()=>{
        if (categoryId) document.title = 'Ecommerce: ' + categoryId 
            return () =>{
                document.title = 'Ecommerce'
            }
    })
    useEffect(() => {
        setLoading(true)

        const productsCollection = categoryId 
            ? query (collection(db, 'products'), where('category', '==', categoryId))
            : collection(db,'products')
        getDocs(productsCollection)
            .then(querySnapshot =>{
               const productsAdapter = querySnapshot.docs.map(doc =>{
                    const fields = doc.data()
                    return{id: doc.id, ...fields}
               })
               setProducts(productsAdapter)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">Cargando los productos...</p>
                </div>
            </>
        )
    }
    return (
        <div>
            <h1 className="text-center mt-4">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer