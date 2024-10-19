import { Button } from "./ui/button";

export default function CodeChallengeSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Daily Code Challenge
              </h2>
              <p className="text-xl text-purple-100">
                Sharpen your coding skills with our daily challenges. Are you up for it?
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Challenge
              </Button>
            </div>
            <div className="lg:ml-auto">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                <pre className="text-sm overflow-x-auto">
                  <code className="language-javascript">
                    {`function findMissingNumber(nums) {
    // Your code here
    return missingNumber;
  }
  
  // Test the function
  console.log(findMissingNumber([3, 0, 1])); // Should return 2
  console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Should return 8`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }