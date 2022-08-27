import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  "pk_test_51LTP9YSG1B5MBJeuCbAamO21kEjR6wcS08b4xiOmO96H7lr6BNdYGvow1TmfqpGKMJE4tLTPIDep6zsgbTWgInVa00N2LQWndW";

const stripeTestPromise = loadStripe(PUBLIC_KEY)
function Payment() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>
  )
}

export default Payment

