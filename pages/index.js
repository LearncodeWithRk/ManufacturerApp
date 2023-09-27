import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Explore from '@/components/Explore'
import Feature from '@/components/Feature'
import Brand from '@/components/Brand'
import Product from '@/components/Product'
import Categories from '@/components/Categories'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<Hero />
<Brand />
<Explore />
<Categories />
<Feature />
<Product />
</>
  )
}
