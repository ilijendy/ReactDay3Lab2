import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
    const { totalItems } = useCart();

    return (
        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
            <Link to="/" className="text-xl font-bold text-blue-600">
                Product App
            </Link>
            <div className="flex gap-6 items-center">
                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
                    Products
                </Link>
                <Link to="/cart" className="relative text-gray-600 hover:text-blue-600 font-medium flex items-center">
                    <span className="text-xl mr-1">🛒</span> Cart
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    )
}
