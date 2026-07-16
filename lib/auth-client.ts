import { createAuthClient } from "better-auth/react"
const Auth_url = process.env.NEXT_PUBLIC_URL
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: Auth_url
})

export const { signIn, signUp, useSession, signOut } = createAuthClient()