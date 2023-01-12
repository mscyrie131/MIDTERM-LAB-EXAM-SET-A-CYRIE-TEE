const fs = require('fs')

const employee = function(oldNote) {
    const newNote = JSON.parse(oldNote)

    const content = newNote.map(function(n) {
        return n.employee;
    })

    console.log("Employee:" + content)
}

module.exports = employee 