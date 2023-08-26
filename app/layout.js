import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'Portfolio | Destiny Adebayo',
  description: '"Crafting immersive digital experiences through elegant code. Explore my journey as a passionate front-end developer, showcasing a collection of stunning web projects that blend creativity and technology seamlessly. Elevate your online presence with cutting-edge design and seamless interactivity. Welcome to the world where design meets functionality."',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
