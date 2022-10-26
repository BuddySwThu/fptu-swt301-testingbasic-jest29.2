import fetch from 'node-fetch'
import orderTotal from './order-total'

const result = orderTotal(fetch, process, {
    country: 'DE',
    items: [
        { 'name': 'Dragon waffles', price: 20, quantity: 2 }
    ]
})