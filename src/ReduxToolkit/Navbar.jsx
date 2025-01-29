import React from 'react';

const Navbar = ({ cartCount, totalPrice }) => {
  return (
    <nav className="bg-black py-4">
      <div className="flex justify-center space-x-4">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
          Cart Items: {cartCount}
        </span>
        <span className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
          Total Price: ${totalPrice.toFixed(2)}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
