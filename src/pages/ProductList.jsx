import { useEffect, useState } from "react"
import axiosInstance from "../api/axiosInstance";
import ProductCard from "../components/Card/card";
import HeroSlider from "../components/HeroSlider/HeroSlider";

const productList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        axiosInstance.get('/products').then(res => {
            setProducts(res.data.products)
            setIsLoading(false)
        })
    },[])

    if (isLoading) return (
        <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
return (
  <div>
    <HeroSlider />  
    
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        Welcome to our shopping website, start browsing...
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
)
}

export default productList