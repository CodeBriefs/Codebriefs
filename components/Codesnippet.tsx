"use client";

import { useState, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ClipboardIcon, CheckIcon } from 'lucide-react'

interface CodeSnippetProps {
  children: string;
  className?: string;
}

export default function CodeSnippet({ children, className }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)
  const language = className ? className.replace(/language-/, '') : 'text'

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [children])

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 my-6">
      <button onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        aria-label={copied ? "Copied!" : "Copy code"}
      >
        {copied ? <CheckIcon className="w-4 h-4" /> : <ClipboardIcon className="w-4 h-4" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          padding: '20px 18px',
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '16px',
          lineHeight: '1.5',
        }}
        wrapLines={true}
        showLineNumbers={false}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}