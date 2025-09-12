import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Free Recipe Ebook | Delicious Recipes with Meal Planners',
  description: 'Download our free collection of 20 tested recipes with complete meal planners and grocery lists. Start creating delicious, healthy meals tonight!',
  keywords: ['free recipe ebook', 'meal planning', 'healthy recipes', 'grocery lists', 'cooking guide'],
  authors: [{ name: 'Recipe Ebook' }],
  openGraph: {
    title: 'Free Recipe Ebook Collection',
    description: 'Download 20 tested recipes with meal planners absolutely free',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <head>
        {/* 🔧 YOUR TRACKING SCRIPTS */}
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var rFimx_vwW_aaSQqc={"it":4548566,"key":"16b80"};`
          }}
        />
        <script src="https://d167xx758yszc9.cloudfront.net/1fe0bf2.js" />
        
        {/* 🔧 ADD YOUR CUSTOM JAVASCRIPT HERE */}
        {/* Example:
        <script>
          // Add your custom code here
          // window.addEventListener('load', function() {
          //   _Ht();
          // });
        </script>
        */}
      </head>
      <body className={cn(
        "min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 font-sans antialiased",
        "selection:bg-orange-200 selection:text-orange-900"
      )}>
        <div className="relative min-h-screen">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 pointer-events-none" />
          
          {/* Floating orbs for ambient lighting */}
          <div className="fixed top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="fixed bottom-20 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-500 pointer-events-none" />
          
          {/* Content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}