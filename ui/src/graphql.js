const GET_EMPLOYEES = (data) => `query {
                          employeeList(employeeType: ${data.employeeType}, department: ${data.department}, title: ${data.title}) {
                            title
                            lastName
                            firstName
                            id
                            employeeType
                            department
                            dateOfJoining
                            age,
                            currentStatus
                          }
                        }`;

const GET_EMPLOYEE = (data) => `query {
                          employee(id: "${data.id}") {
                            title
                            lastName
                            firstName
                            id
                            employeeType
                            department
                            dateOfJoining
                            age
                            currentStatus
                            }
                        }`;
const NEW_EMPLOYEE = (data) => `mutation {
                            employeeAdd(employee:{ 
                            firstName: "${data.firstName}",
                            lastName: "${data.lastName}",
                            age: ${data.age}
                            employeeType: ${data.employeeType},
                            department: ${data.department},
                            title: ${data.title},
                            dateOfJoining: "${data.dateOfJoining.toISOString()}",
                            currentStatus: ${data.currentStatus}
                            }) {
                            id
                        } }`;

const EDIT_EMPLOYEE = (data) => `mutation {
                            employeeUpdate(
                            id: "${data.id}",
                            employee:{
                            firstName: "${data.firstName}",
                            lastName: "${data.lastName}",
                            age: ${data.age}
                            employeeType: ${data.employeeType},
                            department: ${data.department},
                            title: ${data.title},
                            dateOfJoining: "${data.dateOfJoining.toISOString()}",
                            currentStatus: ${data.currentStatus}
                            }) {
                            id
                        } }`;

const DELETE_EMPLOYEE = (data) => `mutation {
                            employeeDelete(id: "${data.id}") {
                            id
                        } }`;

export {GET_EMPLOYEES, NEW_EMPLOYEE, GET_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE};