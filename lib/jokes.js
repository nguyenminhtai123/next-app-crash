import axios from 'axios'

export const getRandomJokes = async () => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        return response.data
    } catch (err) {
        console.log(err)
    }
}