
import Footer from '@/components/Footer'
import NavBar from '../components/Navbar'
import './globals.css'
import { Inter ,Poppins,Urbanist, Inconsolata, Lora} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const urbanist = Urbanist({ subsets: ['latin'] })



export const inconsolata = Inconsolata({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inconsolata',
  fallback: ['Courier New', 'Courier', 'monospace'],
  subsets: ['latin'],
});
export const poppins = Poppins({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['Courier New', 'Courier', 'monospace'],
  subsets: ['latin'],
});

export const lora = Lora({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lora',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ['latin'],
});



export const metadata = {
  title: 'Vision Group of Companies',
  description: '',
  icons:{
    icon:'/favicon.ico?v=4',
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  },
  manifest:'/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={`${urbanist.className} ${inter.variable}  ${poppins.variable} ${inconsolata.variable} ${lora.variable}`}>
      <NavBar/>
      
      <div className='  mx-auto '>
        {children}
      
        </div>
      <Footer/>
        </body>
    </html>
  )
}
