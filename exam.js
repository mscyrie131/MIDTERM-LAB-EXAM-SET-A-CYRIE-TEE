const add = require('./add')
const read = require('./read')
const employee = require('./employee')

const cmd = process.argv

if(cmd[2] == 'add') {
    const note = {
        employee: cmd[3],
        role: cmd[4],
        department: cmd[5]
    }

    const oldNote = read()

    add(note, oldNote)
}

if(cmd[2] == 'employee') {
    employee(read())
}