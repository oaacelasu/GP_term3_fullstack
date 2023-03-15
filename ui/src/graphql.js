const GET_EMPLOYEES = (data) => `query {
                          employeeList(employeeType: ${data.employeeType}, department: ${data.department}, title: ${data.title}) {
                            title
                            lastName
                            firstName
                            id
                            employeeType
                            department
                            dateOfJoining
                            age
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
                            dateOfJoining: "${data.dateOfJoining.toISOString()}"
                            }) {
                            id
                        } }`;

export {GET_EMPLOYEES, NEW_EMPLOYEE};