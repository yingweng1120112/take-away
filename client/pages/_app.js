// import '@/styles/globals.css'
// import '@/styles/product-table.css'
//  3. 最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它:
import { ThemeProvider } from '@/hooks/use-theme'
import { AuthProvider } from '@/hooks/use-auth'
import { CartProvider } from '@/hooks/use-cart'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}
