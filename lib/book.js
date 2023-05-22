import fs from 'fs'
import path from 'path'

const booksDir = path.join(process.cwd(), 'books')

export const getBooks = () => {
    const bookFileNames = fs.readdirSync(booksDir)
    const booksData = bookFileNames.map(bookFileNames => {
        const fullBookPath = path.join(booksDir, bookFileNames)
        const bookContent = fs.readFileSync(fullBookPath, 'utf8')

        return {
            bookName: bookFileNames.replace(/\.txt$/, ''),
            bookContent
        }
    })

    return booksData
}