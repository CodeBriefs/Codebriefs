import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import payment from "@/models/payment";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID ?? "",
          clientSecret: process.env.GITHUB_SECRET ?? ""
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          const isAllowedToSignIn = true
          if (isAllowedToSignIn) 
            return true
          else {
            // Return false to display a default error message
            return false
            // Or you can return a URL to redirect to:
            // return '/unauthorized'
          }
        }
      }
})

export { handler as GET, handler as POST }