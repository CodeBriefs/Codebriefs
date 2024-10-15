// "use client";
// import React, { useState, useCallback, useMemo } from 'react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { ClipboardIcon, CheckIcon, DownloadIcon, XIcon, MenuIcon } from 'lucide-react'

// interface CodeSnippet {
//   id: string;
//   title: string;
//   language: string;
//   code: string;
// }

// interface Topic {
//   id: string;
//   title: string;
// }

// export default function Component() {
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
//   // const [showPaymentModal, setShowPaymentModal] = useState(false)
//   const [showSidebar, setShowSidebar] = useState(false)
//   // const [mounted, setMounted] = useState(false);
//   // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const topics: Topic[] = [
//     { id: 'introduction', title: 'Introduction to Version Control Systems' },
//     { id: 'jargons', title: 'Some important Git and GitHub Jargons' },
//     { id: 'commands', title: 'Important Git Commands' },
//     // { id: 'loops', title: 'Loops' },
//   ]

//   /*const codeSnippets: CodeSnippet[] = useMemo(()=>[
//     {
//       id: 'hello-world',
//       title: "Hello World in Java",
//       language: "java",
//       code: `
// public class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//     }
// }
//       `
//     },
//     {
//       id: 'variables',
//       title: "Variable Declaration in Java",
//       language: "java",
//       code: `
// public class Variables {
//     public static void main(String[] args) {
//         int number = 10;
//         String text = "Hello";
//         boolean isTrue = true;
//         System.out.println(number + " " + text + " " + isTrue);
//     }
// }
//       `
//     },
//     {
//       id: 'loops',
//       title: "For Loop in Java",
//       language: "java",
//       code: `
// public class ForLoop {
//     public static void main(String[] args) {
//         for (int i = 0; i < 5; i++) {
//             System.out.println("Iteration: " + i);
//         }
//     }
// }
//       `
//     }], []);*/

//   /*const handleCopy = useCallback((index: number) => {
//     navigator.clipboard.writeText(codeSnippets[index].code.trim()).then(() => {
//       setCopiedIndex(index)
//       setTimeout(() => setCopiedIndex(null), 2000)
//     })}, [codeSnippets]);*/

//   // const handleDownload = () => { setShowPaymentModal(true) };

//   /*const handlePayment = () => {
//     setTimeout(() => {
//       setShowPaymentModal(false)
//       alert('Payment successful! Your PDF is downloading.')
//     }, 1000)
//   };*/

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) 
//       element.scrollIntoView({ behavior: 'smooth' })
//     setShowSidebar(false)
//   }

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">      
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white dark:bg-gray-800 overflow-y-auto transition duration-200 ease-in-out z-30 md:relative md:translate-x-0`}>
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Topics</h2>
//           <ul className="space-y-2">
//             {topics.map((topic) => (
//               <li key={topic.id}>
//                 <button onClick={() => scrollToSection(topic.id)}
//                   className="w-full text-left px-4 py-2 rounded hover:bg-purple-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition duration-150 ease-in-out"
//                 >
//                   {topic.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 overflow-hidden">
//         <div className="max-w-4xl mx-auto px-4 py-8">
//           <button
//             className="md:hidden fixed top-4 left-4 z-40 bg-white dark:bg-gray-800 p-2 rounded-md shadow-md"
//             onClick={() => setShowSidebar(!showSidebar)}
//           >
//             <MenuIcon className="w-6 h-6 text-gray-800 dark:text-white" />
//           </button>

//           <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
//             <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white p-6 bg-gradient-to-r from-purple-400 to-indigo-500">Introduction to Java Programming</h1>
            
//             <div className="p-6 space-y-8">
//               <section id="introduction" className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">What is Java?</h2>
//                 <p className="mb-4 text-gray-700 dark:text-gray-300">
//                   Java is a popular, versatile, and object-oriented programming language. Its known for its &quot;write once, run anywhere&quot; 
//                   principle, which means that compiled Java code can run on all platforms that support Java without the need for recompilation.
//                 </p>
//                 <p className="mb-4 text-gray-700 dark:text-gray-300">
//                   Java is used for developing a wide range of applications, including:
//                 </p>
//                 <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
//                   <li>Desktop applications</li>
//                   <li>Web applications</li>
//                   <li>Mobile applications (Android)</li>
//                   <li>Enterprise software</li>
//                   <li>Big data technologies</li>
//                 </ul>
//               </section>

//               {codeSnippets.map((snippet, index) => (
//                 <section key={snippet.id} id={snippet.id} className="mb-8">
//                   <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{snippet.title}</h2>
//                   <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
//                     <button
//                       onClick={() => handleCopy(index)}
//                       className="absolute top-2 right-2 p-2 bg-gray-800 dark:bg-gray-700 rounded-md text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//                       aria-label={copiedIndex === index ? "Copied!" : "Copy code"}>
//                       {copiedIndex === index ? ( <CheckIcon className="w-5 h-5 text-green-500"/> ) : ( <ClipboardIcon className="w-5 h-5"/> )}
//                     </button>
//                     <SyntaxHighlighter language={snippet.language} style={vscDarkPlus} customStyle={{
//                         padding: '40px 20px 20px', 
//                         margin: 0, 
//                         borderRadius: '0.5rem'
//                       }}>
//                       {snippet.code.trim()}
//                     </SyntaxHighlighter>
//                   </div>
//                 </section>
//               ))}
//             </div>
//           </div>
//         </div>

//         <button onClick={handleDownload}
//           className="fixed bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         >
//           <DownloadIcon className="w-5 h-5" />
//           <span>Download as PDF</span>
//         </button>

//         {/* {showPaymentModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">Payment Required</h3>
//                 <button onClick={() => setShowPaymentModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
//                   <XIcon className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">To download the PDF, please complete the payment of $5.99.</p>
//               <button onClick={handlePayment}
//                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Pay $5.99 and Download
//               </button>
//             </div>
//           </div>
//         )} */}
//       </div>
//     </div>
//   )
// }

export default function Component (){
  return (
    <div className="container">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white text-center">
                  Tutorial coming soon
                </h1>
    </div>
  )
}