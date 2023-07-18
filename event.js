import { EventEmitter } from "node:events"

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('notice', () => {
    console.log('notice has been Arrived, trying to fetch it give us 5 seconds.');
    setTimeout(() => {
            console.log('notice has been fetched');
            console.log('You Got Selected For the Google Cloud Manager Post.');
        }, 5000);
});

myEmitter.emit('notice');