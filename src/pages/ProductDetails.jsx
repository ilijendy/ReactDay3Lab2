import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    axiosInstance.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data)
        setSelectedImage(res.data.thumbnail)
        setLoading(false)
      })
  }, [id])

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <div className="flex gap-10">

        <div className="w-1/2">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-96 object-contain rounded-xl shadow-md"
          />

          <div className="flex gap-3 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={index}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-contain rounded-lg cursor-pointer border-2 
                  ${selectedImage === img ? 'border-blue-500' : 'border-gray-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>

          <div className="flex items-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={star <= Math.round(product.rating)
                  ? 'text-yellow-400 text-xl'
                  : 'text-gray-300 text-xl'}
              >
                ★
              </span>
            ))}
            <span className="text-gray-400 text-sm">({product.rating})</span>
          </div>

          <p className="text-3xl font-bold text-blue-600 mt-4">${product.price}</p>

          <span className={`inline-block mt-2 text-sm text-white px-3 py-1 rounded-full
            ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>

          <div className="flex gap-3 mt-4">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              📦 {product.category}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              🏷️ {product.brand}
            </span>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
            >
              +
            </button>
            <span className="text-sm text-red-400">Only {product.stock} left!</span>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl 
              hover:bg-blue-700 transition font-semibold">
              Buy Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 
              rounded-xl hover:bg-blue-50 transition font-semibold">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails