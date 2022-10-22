const express = require('express');

const app = express();

const name = 'Rasel';
app.get('/', (_req, res) => {
    return "hello"
});
console.log('ba');

console.log('hello');
app.listen(4000, () => console.log('ok'));
