const eventEmitter = require('events');

class sales extends eventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
    console.log('The customer is Manasa');
});

myEmitter.on('newSale', stock => {
    console.log(`There are ${stock} items left in the stock.`);
});

myEmitter.emit('newSale', 9);