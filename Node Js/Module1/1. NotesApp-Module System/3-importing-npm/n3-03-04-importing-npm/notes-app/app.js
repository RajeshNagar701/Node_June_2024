
/*
NPM Modules or Third Party Module

There are many modules available online which could be used in Node.js.

Node Package Manager (NPM) helps to install those modules, extend them if 
necessary and publish them to repositories like Github for access to
distributed machines

To start working with npm module

1. we have to initialize npm in our application

npm init

2. we have to install all module we want to use

npm install validator@versi




*/

const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isURL('https://www.tops-int.com/'))
console.log(validator.isEmail('abcgmail.com'))
