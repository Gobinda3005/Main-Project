import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../Redux/Store";

function Cart() {
  const { id } = useParams(); // Get the id parameter from the URL
  const cart = useSelector((state) => state.products.cart); // Get the cart items from Redux store
  const [product, setProduct] = useState(null); // State to store the product data
  const dispatch = useDispatch(); // Initialize the dispatch function

  useEffect(() => {
    console.log("ID:", id); // Check if id is logged correctly

    // Fetch the product data based on the id parameter
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Product data:", data); // Log the fetched product data
        setProduct(data); // Set the product data to the state
      })
      .catch((error) => {
        console.error("Error fetching product data:", error); // Log any fetch errors
        setProduct(null); // Set product to null if there's an error
      });
  }, [id]); // Run this effect whenever the id parameter changes

  console.log("Product state:", product); // Check the product state in the console

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {product && (
              <img
                alt="Product thumbnail"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.thumbnail} // Display the product thumbnail
              />
            )}
            {item.title}{" "}
            <button
              className="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0"
              onClick={() => dispatch(removeCart(item))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h1>Total: {cart.reduce((sum, pr) => sum + pr.price, 0)}</h1>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
