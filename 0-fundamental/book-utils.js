// book-utils.js
export const validateBook = book => {
    return Boolean(book.id && book.id > 0);
}