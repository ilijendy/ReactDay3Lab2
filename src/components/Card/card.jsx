import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-xl transition"
        >
            <span className={`text-xs text-white px-2 py-1 rounded-full 
        ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>

            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-contain my-3"
            />

            <h2 className="font-semibold text-gray-800 text-sm">{product.title}</h2>
            <p className="text-gray-400 text-xs mb-2">{product.description.slice(0, 40)}...</p>
            
            {[1, 2, 3, 4, 5].map(star => (
                <span
                    key={star}
                    className={star <= Math.round(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'}
                >
                    ★
                </span>
            ))}

            <p className="text-blue-600 font-bold">${product.price}</p>

            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg 
        hover:bg-blue-700 transition text-sm">
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard