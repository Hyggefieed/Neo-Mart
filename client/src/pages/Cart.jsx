import React from "react";
import { useApp } from "../context/AppContext";

export default function CartPage() {
  const { cart, removeFromCart } = useApp();

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleRemove = (id) => removeFromCart(id);
  const handleCheckout = () => alert("Proceeding to checkout...");

  return (
    <div className="min-h-screen bg-[#f6f8fa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow border border-[#e3e6e9] p-8">
        <h2 className="text-3xl font-bold text-[#2f3f50] mb-6 text-center">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-16 text-lg">
            Your cart is empty.
          </div>
        ) : (
          <>
            <ul className="divide-y divide-[#e3e6e9] mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={
                        item.thumbnail ||
                        item.image ||
                        "https://via.placeholder.com/60x60.png?text=No+Image"
                      }
                      alt={item.title || "Product"}
                      className="w-14 h-14 rounded border bg-[#f6f8fa] object-cover"
                    />
                    <div className="min-w-0">
                      <div className="font-medium text-[#2f3f50] truncate">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        Quantity:{" "}
                        <span className="font-semibold text-[#2f3f50]">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end min-w-[90px]">
                    <div className="font-semibold text-[#2f3f50] text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="text-xs text-red-500 mt-2 px-2 py-1 rounded hover:bg-red-50 border hover:border-red-300 transition"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-[#2f3f50]">
                Subtotal
              </span>
              <span className="text-lg font-bold text-[#2f3f50]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button
              className="w-full py-3 rounded bg-[#2f3f50] text-white font-bold text-base uppercase tracking-wider hover:bg-[#1e2c3d] transition"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
