const {Pool} = require('pg')
const pool = new Pool ({
    host: 'containers-us-west-140.railway.app',
    user: 'postgres',
    port: '6574',
    password: "meWSLNWPD8Eo2RKykgt6",
    database: 'railway'
})

const createBigTableCommand = 'CREATE TABLE IF NOT EXISTS opportunities (number serial PRIMARY KEY, name VARCHAR (255) UNIQUE NOT NULL, imageURL VARCHAR (255) UNIQUE NOT NULL, height VARCHAR (255) UNIQUE NOT NULL, weight VARCHAR (255) UNIQUE NOT NULL, speciesURL VARCHAR (255) UNIQUE NOT NULL, blurb VARCHAR (255) UNIQUE NOT NULL);'
const createSmallTableCommand = 'CREATE TABLE IF NOT EXISTS opportunitiesNumberNameSprite (number serial PRIMARY KEY, name VARCHAR (255) UNIQUE NOT NULL, imageURL VARCHAR (255) UNIQUE NOT NULL);'
const getDBrecordsCommand = 'Select * from opportunities'


const executeQuery = async (query) => {
    console.log('in the query executer')
   
    try {
        console.log("trying to connect")
        await pool.connect()     // gets connection
        console.log("connected to database")
        await pool.query(query)  // sends queries
        console.log("query sent")
        //return true;
    } catch (error) {
        console.error(error.stack)
        //return false;
    } //finally {
    //     await pool.end()
    //     console.log(' pool has drained')
    // }

}

export default executeQuery

// exports.giveMeString = (string) => {
//     console.log(string)
// }

   // await executeQuery(inputRecordCommand).then(result => {
        //     if (result) {
        //         console.log('query success');
        //     }
        // })




// const loadDB = () => {

// }

// export default loadDB