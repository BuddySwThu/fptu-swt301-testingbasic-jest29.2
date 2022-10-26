// book.js
import { validateBook } from './book-utils'

export default function createBook(id, name) {
    const book = { id, name };
    if (!validateBook(book)) {
        throw new Error('Invalid book: it doesnt have an id')
    }
    return book
}