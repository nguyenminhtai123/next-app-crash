import Layout from '@/components/Layouts'
import { getRandomJokes } from '@/lib/jokes'
import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className='my-3 shadow'>
        <Card.Body>
          <Card.Title>Here's random joke for you today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href='/'>
            <Button variant='dark'>Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const joke = await getRandomJokes()
  return {
    props: {
      joke
    }
  }
}

export default Random