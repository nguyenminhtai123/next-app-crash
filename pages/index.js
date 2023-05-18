import Layout from '../my-next-app/components/Layouts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout><h1>My next app</h1></Layout>
  )
}
