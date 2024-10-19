import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
                Stay Updated
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                Subscribe to our newsletter for the latest articles, tutorials, and coding tips.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-purple-300 dark:border-purple-700"
                  placeholder="Enter your email" type="email"
                />
                <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }