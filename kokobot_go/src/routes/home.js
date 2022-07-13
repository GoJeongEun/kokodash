const express = require('express');
const dao = require('../daos/feedDao.js');
const farm = require('../daos/basicFarmDao.js');

const router = express.Router();

router.get('/', function (req, res){
    res.render('index.html')
});

router.get('/feedList', dao.list);

router.post('/basicFarmDao', farm.basicFarmDao);
router.get('/basicFarmList', farm.basicFarmList);

// 대시보드
router.get('/Farmstatus', function (req, res){
    res.render('Farmstatus.html')
});
router.get('/Farmdong', function (req, res){
    res.render('Farmdong.html')
});
router.get('/traceabiltty', function (req, res){
    res.render('traceabiltty.html')
});
router.get('/access_management', function (req, res){
    res.render('access_management.html')
});
router.get('/GP_management', function (req, res){
    res.render('GP_management.html')
});
router.get('/medicine_management', function (req, res){
    res.render('medicine_management.html')
});
router.get('/feed_management', function (req, res){
    res.render('feed_management.html')
});
router.get('/clinical_observation', function (req, res){
    res.render('clinical_observation.html')
});
router.get('/testresults', function (req, res){
    res.render('testresults.html')
});
router.get('/EPIS_management', function (req, res){
    res.render('EPIS_management.html')
});
router.get('/spawn_analysis', function (req, res){
    res.render('spawn_analysis.html')
});
router.get('/hatch_management', function (req, res){
    res.render('hatch_management.html')
});
router.get('/Environmental_management', function (req, res){
    res.render('Environmental_management.html')
});
router.get('/disease_management', function (req, res){
    res.render('disease_management.html')
});
router.get('/management', function (req, res){
    res.render('management.html')
});
router.get('/upbringing_analysis', function (req, res){
    res.render('upbringing_analysis.html')
});
router.get('/haccp_monitoring', function (req, res){
    res.render('haccp_monitoring.html')
});
router.get('/messenger', function (req, res){
    res.render('messenger.html')
});
router.get('/Environmental_analysis', function (req, res){
    res.render('Environmental_analysis.html')
});

//=============================입력폼===============================

// 기초정보 
router.get('/Z_basicInfo_account', function (req, res){
    res.render('Z_basicInfo_account.html')
});
router.get('/Z_basicInfo_user', function (req, res){
    res.render('Z_basicInfo_user.html')
});
router.get('/Z_basicInfo_price', function (req, res){
    res.render('Z_basicInfo_price.html')
});
router.get('/Z_basicInfo_user_jeje', function (req, res){
    res.render('Z_basicInfo_user_jeje.html')
});
router.get('/Z_basicInfo_farm', function (req, res){
    res.render('Z_basicInfo_farm.html')
});
router.get('/Z_basicInfo_dong', function (req, res){
    res.render('Z_basicInfo_dong.html')
});

//검교정관리
router.get('/Z_farm_system1_fix', function (req, res){
    res.render('Z_farm_system1_fix.html')
});
router.get('/Z_farm_system2_sensor', function (req, res){
    res.render('Z_farm_system2_sensor.html')
});
router.get('/Z_farm_system3_waterTank', function (req, res){
    res.render('Z_farm_system3_waterTank.html')
});
router.get('/Z_farm_system4_storage', function (req, res){
    res.render('Z_farm_system4_storage.html')
});

//검고정관리 - 인증관리(검사신청 페이지인데 인증관리 딱히 없어서 검사신청넣음)
router.get('/Z_farm_test1_apply', function (req, res){
    res.render('Z_farm_test1_apply.html')
});
router.get('/Z_farm_test2_search', function (req, res){
    res.render('Z_farm_test2_search.html')
});
router.get('/Z_farm_test3_result', function (req, res){
    res.render('Z_farm_test3_result.html')
});

// GP관리 - 부자재
router.get('/Z_farm_sm1_eggplate', function (req, res){
    res.render('Z_farm_sm1_eggplate.html')
});
//GP관리 - 계란/입출고
router.get('/Z_egg1_product', function (req, res){
    res.render('Z_egg1_product.html')
});
router.get('/Z_egg2_out', function (req, res){
    res.render('Z_egg2_out.html')
});
router.get('/Z_egg3_return', function (req, res){
    res.render('Z_egg3_return.html')
});
router.get('/Z_egg4_in', function (req, res){
    res.render('Z_egg4_in.html')
});
router.get('/Z_egg5_waste', function (req, res){
    res.render('Z_egg5_waste.html')
});

// haccp - 닭/입출고
router.get('/Z_farm_chicken1_weight', function (req, res){
    res.render('Z_farm_chicken1_weight.html')
});
router.get('/Z_farm_chicken2_move', function (req, res){
    res.render('Z_farm_chicken3_move.html')
});
router.get('/Z_farm_chicken3_in', function (req, res){
    res.render('Z_farm_chicken3_in.html')
});
router.get('/Z_farm_chicken5_out', function (req, res){
    res.render('Z_farm_chicken5_out.html')
});
router.get('/Z_farm_chicken6_return', function (req, res){
    res.render('Z_farm_chicken6_return.html')
});
router.get('/Z_farm_chicken7_destroy', function (req, res){
    res.render('Z_farm_chicken7_destroy.html')
});
// haccp 프로그램
router.get('/Z_haccp_test1_self_hen', function (req, res){
    res.render('Z_haccp_test1_self_hen.html')
});
// haccp 임상관찰 

router.get('/Z_watch1_list', function (req, res){
    res.render('Z_watch1_list.html')
});

//haccp - 음용수
router.get('/Z_farm_water1-d-use', function (req, res){
    res.render('Z_farm_water1-d-use.html')
});
router.get('/Z_farm_water2-a-use', function (req, res){
    res.render('Z_farm_water2-a-use.html')
});
router.get('/Z_farm_water3-manage', function (req, res){
    res.render('Z_farm_water3-manage.html')
});
router.get('/Z_farm_water4_quality', function (req, res){
    res.render('Z_farm_water4_quality.html')
});

// haccp - 교육회의
router.get('/Z_farm_edu1_edu', function (req, res){
    res.render('Z_farm_edu1_edu.html')
});
router.get('/Z_farm_edu2_meet', function (req, res){
    res.render('Z_farm_edu2_meet.html')
});
//haccp - 사료
router.get('/Z_farm_feed1_in', function (req, res){
    res.render('Z_farm_feed1_in.html')
});
router.get('/Z_farm_feed2_move', function (req, res){
    res.render('Z_farm_feed2_move.html')
});
router.get('/Z_farm_feed3_use', function (req, res){
    res.render('Z_farm_feed3_use.html')
});
router.get('/Z_farm_feed4_out', function (req, res){
    res.render('Z_farm_feed4_out.html')
});
router.get('/Z_farm_feed5_return', function (req, res){
    res.render('Z_farm_feed5_return.html')
});
router.get('/Z_farm_feed6_waste', function (req, res){
    res.render('Z_farm_feed6_waste.html')
});
// haccp - 약품 -첫페이지만 연결했음
router.get('/Z_farm_medicine1_in', function (req, res){
    res.render('Z_farm_medicine1_in.html')
});
//haccp - 반품/폐기물 내용 없어서 분뇨로 대체
router.get('/Z_farm_poop1_bunyo', function (req, res){
    res.render('Z_farm_poop1_bunyo.html')
});

module.exports = router;