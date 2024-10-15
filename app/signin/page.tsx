"use client"

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function SignIn() {
  const router = useRouter()

  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/' })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Welcome to CodeBriefs</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Sign in to access your account</p>
        <div className="space-y-4">
          <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 transition-colors border border-gray-300"
           onClick={() => handleSignIn('google')}>
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            Sign in with Google
          </Button>
          <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 transition-colors" onClick={() => handleSignIn('github')}>
            <Github className="w-5 h-5 mr-2" />
            Sign in with GitHub
          </Button>
          {/* <Button
            className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            onClick={() => handleSignIn('email')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Sign in with Email
          </Button> */}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Do not have an account?{" "}
          <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}