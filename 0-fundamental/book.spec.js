// book.spec.js
import createBook from './book'
import * as utils from './book-utils'

describe('Book++', () => {
    const spy = jest.spyOn(utils, 'validateBook')

    afterEach(() => {
        spy.mockClear()
    })

    it('calls the validateBook function', () => {
        createBook(1, 'End game hay End nhau')
        expect(utils.validateBook).toHaveBeenCalledTimes(1)
    })

    it('calls the validateBook function second', () => {
        createBook(2, 'End game hay End nhau 2')
        expect(utils.validateBook).toHaveBeenCalledTimes(1)
    })

    it('calls the validateBook function third', () => {
        expect(() => createBook(null, 'End game hay End nhau 3')).toThrow('Invalid book: it doesnt have an id');
    })
})
