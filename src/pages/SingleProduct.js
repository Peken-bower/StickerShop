import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductImages from "../components/ProductImages/ProductImage"
import ProductData from '../components/ProductData/ProductData'
import Header from '../layouts/Header/Header'
import Spinner from '../components/Spinner/Spinner'
import Breadcrumbs from "../components/Breadcrumbs";
const SingleProduct = (props) => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const baseUrl = "https://flerbo.herokuapp.com/api"
        const pathname = props.location.pathname
        const endpoint = baseUrl + pathname
        axios.get(endpoint).then( ({ data }) => {
            if(data.status == 200) {
                setProduct(()=>{
                    return data.product
                })
            }

        })
    },[])
    return (
        Object.keys(product).length === 0? <Spinner height="100vh"/> :
    <div>
        <Header/>
        <div style={{width: "1200px", justifyContent:"center", margin: "0 auto"}}>
            <Breadcrumbs>
                <a href="/">Home</a>
                <a href={`/${product.category}`}>{product.category}</a>
                <a href={`/${product.category}/${product.title}`}>{product.title}</a>
            </Breadcrumbs>
        <div className="container"  style={{display: "flex", justifyContent: "space-around"}}>

            <ProductImages
                images={product.images} />
            {
                console.log("single product state")
            }
            {
            }
            <ProductData title={product.title}
                         category={product.category}
                         price={product.price}
                         description={product.description}
                         types={product.types}
                         sizes={product.sizes}
            />
        </div>
    </div>
    </div>
    )
}
export default SingleProduct
