import { useNavigate } from "react-router-dom"
import './footer.css'


function Footer() {
      const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white mt-10">
      
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-3 gap-8">
        
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-blue-400 mb-3">Products App</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for everything you need.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li onClick={()=>{navigate("/")}}>Home</li>
            <li onClick={()=>{navigate('/')}}>Products</li>
            <li onClick={()=>navigate('/cart')}>Cart</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📧 support@productsapp.com</li>
            <li>📞 +20 100 000 0000</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2026 Products App. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer