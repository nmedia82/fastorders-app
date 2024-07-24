import React, { useState } from 'react'
import { Input } from 'reactstrap'
import { Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import { Btn, H5, H6, Image, LI, UL } from '../../../../AbstractElements'
import { Checkout, EmptyCart, Gotoyourcart, Href, OrderTotal } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'
import { cartHeaderData } from '../../../../Data/Layout/RightHeader'

export default function CartHeaderList() {
  const [items, setItems] = useState(cartHeaderData);

  const handleIncrement = (id: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const handleDecrement = (id: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <UL className="cart-main-wrapper simple-list">
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <LI className="cart-product" key={item.id}>
              <div className="d-flex">
                <Image className="img-fluid b-r-5 me-3 img-60" src={dynamicImage(`other-images/cart-${item.image}`)} alt="cosmetic" />
                <div className="flex-grow-1">
                  <span className="f-w-500">{item.name}</span>
                  <div className="qty-box">
                    <div className="touchspin-wrapper d-flex flex-row">
                      <Btn className="decrement-touchspin btn-touchspin" onClick={() => handleDecrement(item.id)}>
                        <i className="fa fa-minus text-gray"></i>
                      </Btn>
                      <Input className="input-touchspin" id="inputData" type="number" value={item.quantity} readOnly />
                      <Btn className="increment-touchspin btn-touchspin" onClick={() => handleIncrement(item.id)}>
                        <i className="fa fa-plus text-gray"></i>
                      </Btn>
                    </div>
                    <H6 className="font-primary">{'$'}{item.price * item.quantity} </H6>
                  </div>
                </div>
                <div className="close-circle">
                  <a href={Href} onClick={() => handleDelete(item.id)}>
                    <Trash2 />
                  </a>
                </div>
              </div>
            </LI>
          ))}
          <LI className="total">
            <H6 className="mb-0">{OrderTotal} <span className="f-right">{'$' + items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span></H6>
          </LI>
          <LI className="text-center">
            <Link className="d-block mb-3 view-cart f-w-700" to={Href}>{Gotoyourcart}</Link>
            <Link className="btn btn-primary view-checkout w-100" to={Href}>{Checkout}</Link>
          </LI>
        </>
      ) : (
        <div className={`cart-empty ${items.length === 0 ? 'show':''}`}>
          <div className="cart-image">
            <Image className="img-fluid" src={dynamicImage(`product/order-trash.gif`)} alt="empty" />
          </div>
          <H5>{EmptyCart}</H5>
        </div>
      )}
    </UL>
  );
}