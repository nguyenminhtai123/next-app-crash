import Layout from '@/components/Layouts'
import { getBooks } from '@/lib/book'
import Link from 'next/link'
import { Button, Card } from 'react-bootstrap'

const Random = ({ books }) => {
  return (
    <Layout>
        {books.map(book => (
            <Card className='my-3 shadow' key={book.bookName}>
                <Card.Body>
                <Card.Title>{book.bookName}</Card.Title>
                <Card.Text>{book.bookContent}</Card.Text>
                <Link href='/'>
                    <Button variant='dark'>Back</Button>
                </Link>
                </Card.Body>
            </Card>
        ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const books = await getBooks()
  console.log(books)
  return {
    props: {
      books
    }
  }
}

export default Random