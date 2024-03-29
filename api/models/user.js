const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    dateOfBirth: {
        type: Date,
    },
    dateOfRetirement: {
        type: Date,
    },
    age: {
        type: Number,
        default: 0
    },
    dateOfJoining: {
        type: Date,
    },
    title: {
        type: String,
        default: ''
    },
    department: {
        type: String,
        default: ''
    },
    employeeType: {
        type: String,
        default: ''
    },
    currentStatus: {
        type: Boolean,
        default: false
    }
});

const model = new mongoose.model('employee', UserSchema);
module.exports = model
