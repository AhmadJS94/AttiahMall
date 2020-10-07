import React from 'react';
import { DataProvider } from '../contexts/DataContext';

export default function Cart() {
  const { cartItems, removeItemFromCart, EditItemFromCart } = React.useContext(
    DataProvider
  );
  const calculateItemsPrice = cartItems => {
    let price = 0;
    cartItems.forEach(item => {
      price = price + item.quantity * item.price;
    });
    return price;
  };
  return (
    <div className="cart py-2 px-4">
      <div className="">
        <div className="cart__title font-semibold">
          <h1 className="text-xl font-bold ">Shopping Cart</h1>
          <h1 className="text-center">Price</h1>
        </div>
        <hr />
        {cartItems.map((item, i) => {
          return (
            <>
              <div key={i} className=" py-2 cart__item">
                <img
                  className=""
                  style={{ maxHeight: '', maxWidth: '' }}
                  src={item.photo}
                  alt={item.name}
                />
                <div className="">
                  <h1 className="font-semibold text-xl">{item.name}</h1>
                  <h1 className=" font-semibold mb-1 text-green-700">
                    In Stock
                  </h1>
                  <div className=" mr-2 flex items-center mb-1">
                    <h1 className=" mr-2 font-semibold">Quantity : </h1>
                    <select
                      value={item.quantity}
                      onChange={e => EditItemFromCart(e.target.value, item)}
                      className="pr-8 py-0 form-select border-gray-400 border rounded"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="flex text-sm  items-center ">
                    <button
                      onClick={() => removeItemFromCart(item)}
                      className="p-1 text-red-700 font-semibold hover:underline"
                    >
                      Remove from cart
                    </button>
                    <button
                      onClick={() => removeItemFromCart(item)}
                      className="p-1 text-blue-700 font-semibold hover:underline"
                    >
                      Add to wishlist
                    </button>
                  </div>
                </div>
                <div className="text-center font-bold">
                  {item.price * item.quantity} KD
                </div>
              </div>
              <hr />
            </>
          );
        })}
        <hr />
        <div className="flex justify-end pr-2">
          <h1 className="text-lg font-semibold">
            Subtotal ({cartItems.length}{' '}
            {cartItems.length === 1 ? 'item' : 'items'}) :{' '}
            {calculateItemsPrice(cartItems)} KD
          </h1>
        </div>
      </div>
      <div className="font-semibold">
        <div className=" rounded border bg-gray-100 p-2 flex justify-start flex-col ">
          <h1 className="text-base font-semibold mb-2 ">
            Subtotal ({cartItems.length}{' '}
            {cartItems.length === 1 ? 'item' : 'items'}) :{' '}
            {calculateItemsPrice(cartItems)} KD
          </h1>
          <button className="p-1 rounded text-gray-100 bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <h1 className="text-sm">
        The price and availability of items at AlAtiah.com are subject to
        change. The Cart is a temporary place to store a list of your items and
        reflects each item's most recent price.
      </h1>
    </div>
  );
}