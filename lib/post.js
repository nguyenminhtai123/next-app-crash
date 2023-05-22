import axios from 'axios'

export const getPosts = async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=5'
        )

        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getPostIds = async () => {
    const posts = await getPosts()

    return posts.map(post => ({
        params: {
            id: `${post.id}`,
        }
    }))
}

export const getPostById = async id => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}