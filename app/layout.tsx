import './globals.css'
import Navbar from './components/Navbar'
import SupabaseProvider from './supabase-provider' // ✅ Import our wrapper

export const metadata = {
  title: 'My Pastel App',
  description: 'A cool app with a pastel theme!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="wireframe">
      <body className="bg-[#ecefff]">
        <SupabaseProvider> {/* ✅ Wrap entire app in context */}
          <Navbar />
          <main className="pt-4 px-4">
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  )
}
