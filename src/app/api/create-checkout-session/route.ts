import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
    typescript: true,
});

export async function POST(req: NextRequest) {
    try {
        const { amount, userInfoId, orderUid } = await req.json();
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Donation',
                        },
                        unit_amount: amount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.nextUrl.origin}/funding/success/${userInfoId}?orderUid=${orderUid}&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.nextUrl.origin}/funding/user/${userInfoId}`,
        });
        return NextResponse.json({ id: session.id });
    } catch (err) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
