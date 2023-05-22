import { getPostById, getPostIds } from '../../lib/post'
import { Card, Spinner } from "react-bootstrap"
import Layout from "../../components/Layouts"
import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Post = ({ post }) => {
    const router = useRouter()
    //  nếu trang chưa tạo ra, isFallBack của router === true
    // và trang tạm thời sau đấy sẽ được render
    if(router.isFallback) {
        return (
            <Spinner animation='border' role='status' variant='dark'>
                <span className= 'sr-only'>Loading .... </span>
            </Spinner>
        )
    }

    // Khi getStaticProps() chạy xong lần đầu tiên thì trang số 6 sẽ được thêm vào danh sách rerender
  return (
          <Layout>
                  <Card key={post.id} className='my-3 shadow'>
                      <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>{post.body}</Card.Text>
                          <Link href='/posts'>
                              <Button variant='dark'>Back</Button>
                          </Link>
                      </Card.Body>
                  </Card>
          </Layout>
  )
}
// Lấy dữ liệu kiểu tĩnh, nhưng dữ liệu tĩnh còn phụ thuộc vào path params
export const getStaticPaths = async () => {
    const paths = await getPostIds(5) 
    console.log(paths)

    return {
        paths,
        // fallback: false // bất kì path nào không returned bởi getStaticPaths sẽ tới trang 404 
        fallback: true  // path nào ko returned ngay lập tức sẽ show trang tạm thời => đợi getStaticProps chyaj => getStaticprops chạy xong => return trang hoàn chỉnh
    }
}


export const getStaticProps = async({ params }) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        },
        revalidate: 1
    }
}
export default Post