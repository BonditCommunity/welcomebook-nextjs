import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { useAuth } from "@/contexts/AuthContext";
import { signInWithCustomToken } from "@firebase/auth";
import { firebaseAuth } from "@/firebase/firebase";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID!,
            clientSecret: process.env.APPLE_KEY!,
        }),

    ],

    callbacks: {
        async signIn({ user, account }) {
            const provider = account?.provider === "google" ? "Google" : "Apple";
            const { getIdToken } = useAuth();
            const idToken = await getIdToken();
            if (provider === 'Google') {
                const response = await fetch(`${process.env.WELCOMEBOOK_SERVER_URL}/api/v1/auth`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${idToken}`,
                    },
                    body: JSON.stringify({
                        'snsToken': account?.id_token,
                        'snsType': 'GOOGLE',
                        'snsId': user.id,
                        'email': user.email,
                        'displayName': user.name,
                        'code': account?.access_token,
                    }),
                });

                const data = await response.json();
                if (data.customToken) {
                    await signInWithCustomToken(firebaseAuth, data.customToken);
                    user.accessToken = data.customToken; // Access token을 user 객체에 저장
                    return true;
                }
                return false;

            } else if (provider === 'Apple') {
                const response = await fetch(`${process.env.WELCOMEBOOK_SERVER_URL}/api/v1/auth`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${idToken}`,
                    },
                    body: JSON.stringify({
                        'snsToken': account?.id_token,
                        'snsType': 'APPLE',
                        'snsId': user.id,
                        'email': user.email,
                        'displayName': user.name,
                        'code': account?.access_token,
                    }),
                });

                const data = await response.json();
                if (data.customToken) {
                    await signInWithCustomToken(firebaseAuth, data.customToken);
                    user.accessToken = data.customToken; // Access token을 user 객체에 저장
                    return true;
                }
                return false;

            }
            return false;
        },
        async jwt({ token, account }) {
            // if (account?.provider === "apple") {
            //     const appleToken = getAppleToken(account.id_token!, process.env.APPLE_PRIVATE_KEY!);
            //     token.appleId = appleToken.sub;
            // }
            return token;
        },
        async session({ session, token }) {
            // if (token.appleId) {
            //     session.user.appleId = token.appleId;
            // }
            return session;
        },
    },

});

export { handler as GET, handler as POST };