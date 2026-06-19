'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { role } from "better-auth/client"
import { redirect } from "next/navigation"

export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return session?.user || null
}

export const requiredRole = async (role) => {
    const user = await getUserSession();
    if (!user) {
        redirect('/sign-in')
    }
    if (user.role !== role) {
        redirect('/redirect/access-restricted')
    }
}

export const checkForUser = async () => {
    const user = await getUserSession()
    if (user) {
        redirect('/redirect/already-logged-in');
    }
}