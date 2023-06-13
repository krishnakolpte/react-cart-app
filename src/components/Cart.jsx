/** @format */

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const { cartItems, subTotal, shipping, tax, total } = useSelector(
        (state) => state.cart
    );
    const dispatch = useDispatch();

    const decreament = (id) => {
        dispatch({ type: "decreament", payload: id });
        dispatch({ type: "calculatePrce" });
    };
    const increament = (id) => {
        dispatch({ type: "addToCart", payload: { id } });
        dispatch({ type: "calculatePrce" });
    };
    const deletehandler = (id) => {
        dispatch({ type: "deleteItem", payload: id });
        dispatch({ type: "calculatePrce" });
    };

    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? (
                    cartItems.map((i) => (
                        <CartItem
                            imgSrc={i.imgSrc}
                            name={i.name}
                            price={i.price}
                            qty={i.quantity}
                            increament={increament}
                            decreament={decreament}
                            deletehandler={deletehandler}
                            id={i.id}
                            key={i.id}
                        />
                    ))
                ) : (
                    <h1>No items yet</h1>
                )}
            </main>
            <aside>
                <h2>subtotal: ${subTotal}</h2>
                <h2>shipping: ${shipping}</h2>
                <h2>tax: ${tax}</h2>
                <h2>total: ${total}</h2>
            </aside>
        </div>
    );
}

const CartItem = ({
    imgSrc,
    name,
    price,
    qty,
    increament,
    decreament,
    deletehandler,
    id,
}) => (
    <div className="cartItem">
        <img
            src={imgSrc}
            alt={name}
        />
        <article>
            <h3>{name}</h3>
            <p>{price}</p>
        </article>
        <div>
            <button onClick={() => decreament(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increament(id)}>+</button>
        </div>
        <AiFillDelete onClick={() => deletehandler(id)} />
    </div>
);

export default Cart;
