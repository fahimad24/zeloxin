import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "https://zelonix.vercel.app" as string,
})

export const { signIn, signUp, useSession, signOut } = createAuthClient()