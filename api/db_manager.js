const {mongoose} = require('mongoose');

const init = async (mongo_string_connection) => {
    try {
        await mongoose.connect(mongo_string_connection, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log(error);
        console.log("Connection Failed!");
    }
}
module.exports = init;