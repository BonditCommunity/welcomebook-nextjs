'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Screen() {
    const [amount, setAmount] = useState(0);

    const handleCheckout = async () => {
        console.log('click payment');
        const stripe = await stripePromise;
        console.log(stripe);
        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        });
        console.log(response);

        const session = await response.json();

        const result = await stripe?.redirectToCheckout({
            sessionId: session.id,
        });

        if (result?.error) {
            console.error(result.error.message);
        }
    };

    return (
        <div>
            <h1>Donate</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount"
            />
            <button onClick={handleCheckout}>결제하기</button>
        </div>
    );
}
