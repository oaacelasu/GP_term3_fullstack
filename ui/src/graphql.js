const GET_EMPLOYEES = (data) => `query {
                          employeeList(employeeType: ${data.employeeType}, department: ${data.department}, title: ${data.title}) {
                            title
                            lastName
                            firstName
                            id
                            employeeType
                            department
                            dateOfJoining
                            dateOfBirth
                            dateOfRetirement
                            age,
                            currentStatus
                          }
                        }`;

const GET_UPCOMING_RETIREMENTS = (data) => `query {
                              upcomingRetirements {
                                title
                                lastName
                                firstName
                                id
                                employeeType
                                department
                                dateOfJoining
                                dateOfBirth
                                dateOfRetirement
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
                            dateOfBirth
                            dateOfRetirement
                            age
                            currentStatus
                            }
                        }`;
const NEW_EMPLOYEE = (data) => `mutation {
                            employeeAdd(employee:{ 
                            firstName: "${data.firstName}",
                            lastName: "${data.lastName}",
                            dateOfBirth: "${data.dateOfBirth.toISOString()}",
                            dateOfRetirement: "${data.dateOfRetirement.toISOString()}",
                            age: ${data.age},
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
                            age: ${data.age},
                            employeeType: ${data.employeeType},
                            department: ${data.department},
                            title: ${data.title},
                            dateOfBirth: "${data.dateOfBirth.toISOString()}",
                            dateOfJoining: "${data.dateOfJoining.toISOString()}",
                            dateOfRetirement: "${data.dateOfRetirement.toISOString()}",
                            currentStatus: ${data.currentStatus}
                            }) {
                            id
                        } }`;

const DELETE_EMPLOYEE = (data) => `mutation {
                            employeeDelete(id: "${data.id}") {
                            id
                        } }`;

export {GET_EMPLOYEES, NEW_EMPLOYEE, GET_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, GET_UPCOMING_RETIREMENTS};