import { ThemeProvider } from "./../components/theme-provider"
import './globals.css';
import Providers from "./providers";

export const metadata ={
  title : "CodeBriefs : Clean and Concise way to learn to code",
  description : "CodeBriefs is a clean and concise way to learn to code, designed to be easy to understand and follow along with.",
}

//@ts-ignore
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}