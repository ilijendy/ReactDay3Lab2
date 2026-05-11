import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
                Product App
            </Link>
            <div className="flex gap-6 items-center">
                <Link to="/" className="text-gray-600 hover:text-blue-600">
                    Products
                </Link>
                <Link to="/cart" className="text-gray-600 hover:text-blue-600">
                    🛒 Cart
                </Link>
            </div>
        </nav>

    )
}
