// const {MongoClient} = require('mongodb')
// let dbConnection

// module.exports = {
//     conmectToDb: (cb) => {
//         MondgoClient.connect('mongodb+srv://SWEDebuggers:192Faj279da@fagrance.xeeioqu.mongodb.net/?retryWrites=true&w=majority')
//         .then((client) => {
//             dbConnection = client.db()
//             return cb()
//         })
//         .catch(err =>{
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb:() => dbConnection
//     }


