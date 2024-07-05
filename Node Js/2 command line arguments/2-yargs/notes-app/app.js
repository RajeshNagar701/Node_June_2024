/*

Arguments Parsing with Yargs
Now in above example

node app.js add –title=“This is Title”

This will print same text that we pass through commands

We need to parse the value for that we can use yargs

npm install yargs@version

As shown in code snippet for adding note we can also write code for removing note, listing
notes, and reading note similarly

*/


const yargs = require('yargs')


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

console.log(yargs.argv)