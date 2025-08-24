"use client";

import { useState } from "react";
import CheckoutOptions from "./CheckoutOptions";
import CustomerInformation from "./CustomerInformation";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import OrderButton from "./OrderButton";

export default function Checkout({ orderData, dark = false }) {
  const [checkoutType, setCheckoutType] = useState("Delivery");

  return (
    <div className={dark ? "text-white" : "text-black"}>
      <CheckoutOptions onSelect={setCheckoutType} dark={dark} />

      <div className="flex flex-col mt-5 mx-5 gap-5">
        <CustomerInformation includeDelivery={checkoutType === "Delivery"} dark={dark} />
        <PaymentMethod dark={dark} />
        <OrderSummary orderData={orderData} dark={dark} />
        <OrderButton dark={dark} />
      </div>
    </div>
  );
}
