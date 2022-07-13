const dbConfig = require('../database.js');

let basicFarmDao = (req, res) => {
    let body = req.body;
    let sql = "INSERT INTO farm_info (farm_name, ceo_name, reg_date, com_reg_num) VALUES ($1, $2, NOW(), $3)";
    let value = [body.farmName, body.ceoName, body.comRegNum]
    dbConfig.query(sql, value, (err, data) => {
        if (err){
            console.log(err)
        } else {
            console.log(body);
        }
        res.send({success:true})
    })
}

let basicFarmList = (req, res) => {
    let body = req.body;
    let sql = "SELECT * FROM farm_info";
    dbConfig.query(sql, (err, list) => {
        if (err){
            console.log(err)
        }
        res.send({success:true, list:list})
    })
}

module.exports = { basicFarmDao : basicFarmDao , basicFarmList : basicFarmList}