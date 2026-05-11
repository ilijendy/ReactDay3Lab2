import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any products yet.</p>
        <Link to="/">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between border-b pb-4 mb-4">
              <span className="font-semibold text-gray-600">Product details</span>
              <span className="font-semibold text-gray-600">Quantity</span>
              <span className="font-semibold text-gray-600">Total Price</span>
              <span className="font-semibold text-gray-600">Action</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                <div className="flex items-center gap-4 w-2/5">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="w-20 h-20 object-contain rounded-lg bg-gray-50"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.product.title}</h3>
                    <p className="text-sm text-gray-500">${item.product.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-1/5">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 font-bold"
                  >
                    -
                  </button>
                  <span className="font-semibold w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="w-1/5 font-bold text-blue-600">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>

                <div className="w-1/5 text-right">
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 flex justify-between">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                ← Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-red-600 font-semibold"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-bold text-lg shadow-lg shadow-blue-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;