"use client";

import { useState } from "react";
import CheckoutOptions from "./CheckoutOptions";
import CustomerInformation from "./CustomerInformation";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import OrderButton from "./OrderButton";

export default function Checkout({ orderData }) {
  const [checkoutType, setCheckoutType] = useState("Delivery");

  return (
    <div>
      <CheckoutOptions onSelect={setCheckoutType} />

      <div className="flex flex-col mt-5 mx-5 gap-5">
        <CustomerInformation includeDelivery={checkoutType === "Delivery"} />
        <PaymentMethod />
        <OrderSummary orderData={orderData} />
        <OrderButton />
      </div>
    </div>
  );
}
