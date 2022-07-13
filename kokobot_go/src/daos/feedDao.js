const dbConfig = require('../database.js');

// const postgres = awiat db();

let list = (req, res) => {
    let sql = "SELECT * FROM feed";
    dbConfig.query(sql, (err, list) => {
        if (err){
            console.log(err)
        }
        res.send({success:true, list:list})
    })
}

// exports.list = list;
module.exports = { list: list }