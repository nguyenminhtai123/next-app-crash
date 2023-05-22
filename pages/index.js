
import Layout from '../components/Layouts'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <Layout>
      <div className="jumbotron">
        <h1>Hello My Next App</h1>
        <p>
          This is my next.js app
        </p>
        <p>
          <Link href='/posts'>
            <Button bsstyle="primary">My posts</Button>

          </Link>
        </p>
        
        
      </div>
    </Layout>
  )
}
export default Home
