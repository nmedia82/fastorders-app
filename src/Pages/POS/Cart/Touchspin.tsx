import React, { useState } from "react";
import { Btn } from "../../../AbstractElements";

export interface TouchspinProp {
  color: string;
  arrowIcon?: boolean;
  outline?: boolean;
  btnClass?: string;
  onIncrement: any;
  onDecrement: any;
  item: any;
}

export default function POSTouchSpin({
  color,
  arrowIcon,
  outline,
  btnClass,
  onIncrement,
  onDecrement,
  item,
}: TouchspinProp) {
  const [touchspinValue, setTouchspinValue] = useState(
    Math.floor(Math.random() * 10)
  );

  const decrementHandle = () => {
    if (touchspinValue > 0) {
      setTouchspinValue(touchspinValue - 1);
    }
  };
  const incrementHandle = () => {
    setTouchspinValue(touchspinValue + 1);
  };

  return (
    <div className="touchspin-wrapper d-flex align-items-center justify-content-center">
      <Btn
        onClick={onDecrement}
        color="transparent"
        outline={outline}
        className={`me-1 decrement-touchspin btn-touchspin ${
          btnClass ? btnClass : ""
        }`}
      >
        {arrowIcon ? (
          <i className="fa fa-angle-left d-flex align-items-center justify-content-center" />
        ) : (
          <i className="fa fa-minus d-flex align-items-center justify-content-center" />
        )}
      </Btn>
      <input
        style={{ width: 60 }}
        className={`me-1 input-touchspin spin-outline-${color}`}
        type="number"
        value={item.quantity}
        readOnly
      />
      <Btn
        onClick={onIncrement}
        color="transparent"
        outline={outline}
        className={`increment-touchspin btn-touchspin ${
          btnClass ? btnClass : ""
        }`}
      >
        {arrowIcon ? (
          <i className="fa fa-angle-right d-flex align-items-center justify-content-center" />
        ) : (
          <i className="fa fa-plus d-flex align-items-center justify-content-center" />
        )}
      </Btn>
    </div>
  );
}
