
const express = require('express');

var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

const app = express();


const server = app.listen(3030, () => {
    console.log('Start Sever : localhost:3030');
});

const { request } = require('express');

app.set ('views', __dirname+'/views');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//메인 호출
app.get('/', function (req, res){
    res.render('index.html')
});

// 대시보드 페이지 호출
app.get('/Farmstatus', function (req, res){
    res.render('Farmstatus.html')
});
app.get('/Farmdong', function (req, res){
    res.render('Farmdong.html')
});
app.get('/traceabiltty', function (req, res){
    res.render('traceabiltty.html')
});
app.get('/access_management', function (req, res){
    res.render('access_management.html')
});
app.get('/GP_management', function (req, res){
    res.render('GP_management.html')
});
app.get('/medicine_management', function (req, res){
    res.render('medicine_management.html')
});
app.get('/feed_management', function (req, res){
    res.render('feed_management.html')
});
app.get('/clinical_observation', function (req, res){
    res.render('clinical_observation.html')
});
app.get('/testresults', function (req, res){
    res.render('testresults.html')
});
app.get('/EPIS_management', function (req, res){
    res.render('EPIS_management.html')
});
app.get('/spawn_analysis', function (req, res){
    res.render('spawn_analysis.html')
});
app.get('/hatch_management', function (req, res){
    res.render('hatch_management.html')
});
app.get('/Environmental_management', function (req, res){
    res.render('Environmental_management.html')
});
app.get('/disease_management', function (req, res){
    res.render('disease_management.html')
});
app.get('/management', function (req, res){
    res.render('management.html')
});
app.get('/upbringing_analysis', function (req, res){
    res.render('upbringing_analysis.html')
});
app.get('/haccp_monitoring', function (req, res){
    res.render('haccp_monitoring.html')
});
app.get('/messenger', function (req, res){
    res.render('messenger.html')
});
app.get('/Environmental_analysis', function (req, res){
    res.render('Environmental_analysis.html')
});

//22.04.25 부화동 기초정보
app.get('/basicInfo_hatch', function (req, res){
    res.render('basicInfo_hatch.html')
});
// 대시보드 창고 온도관리 
app.get('/Temperature_management', function (req, res){
    res.render('Temperature_management.html')
});
// 대시보드 창고 온도관리 
app.get('/fullcalendar', function (req, res){
    res.render('fullcalendar.html')
});

//========================== 입력폼 페이지 호출 ============================

// 기초정보 
app.get('/Z_basicInfo_account', function (req, res){
    res.render('Z_basicInfo_account.html')
});
app.get('/Z_basicInfo_hatch01', function (req, res){
    res.render('Z_basicInfo_hatch01.html')
});
app.get('/Z_basicInfo_user', function (req, res){
    res.render('Z_basicInfo_user.html')
});
app.get('/Z_basicInfo_price', function (req, res){
    res.render('Z_basicInfo_price.html')
});
app.get('/Z_basicInfo_user_jeje', function (req, res){
    res.render('Z_basicInfo_user_jeje.html')
});
app.get('/Z_basicInfo_farm', function (req, res){
    res.render('Z_basicInfo_farm.html')
});
app.get('/Z_basicInfo_dong', function (req, res){
    res.render('Z_basicInfo_dong.html')
});

//검교정관리
app.get('/Z_farm_system1_fix', function (req, res){
    res.render('Z_farm_system1_fix.html')
});
app.get('/Z_farm_system2_sensor', function (req, res){
    res.render('Z_farm_system2_sensor.html')
});
app.get('/Z_farm_system3_waterTank', function (req, res){
    res.render('Z_farm_system3_waterTank.html')
});
app.get('/Z_farm_system4_storage', function (req, res){
    res.render('Z_farm_system4_storage.html')
});

//검고정관리 - 인증관리(검사신청 페이지인데 인증관리 딱히 없어서 검사신청넣음)
app.get('/Z_farm_test1_apply', function (req, res){
    res.render('Z_farm_test1_apply.html')
});
app.get('/Z_farm_test2_search', function (req, res){
    res.render('Z_farm_test2_search.html')
});
app.get('/Z_farm_test3_result', function (req, res){
    res.render('Z_farm_test3_result.html')
});

// GP관리 - 부자재
app.get('/Z_farm_sm1_eggplate', function (req, res){
    res.render('Z_farm_sm1_eggplate.html')
});
//GP관리 - 계란/입출고
app.get('/Z_egg1_product', function (req, res){
    res.render('Z_egg1_product.html')
});
app.get('/Z_egg2_out', function (req, res){
    res.render('Z_egg2_out.html')
});
app.get('/Z_egg3_return', function (req, res){
    res.render('Z_egg3_return.html')
});
app.get('/Z_egg4_in', function (req, res){
    res.render('Z_egg4_in.html')
});
app.get('/Z_egg5_waste', function (req, res){
    res.render('Z_egg5_waste.html')
});

// haccp - 닭/입출고 
app.get('/Z_farm_chicken1_weight', function (req, res){
    res.render('Z_farm_chicken1_weight.html')
});
app.get('/Z_farm_chicken2_move', function (req, res){
    res.render('Z_farm_chicken3_move.html')
});
app.get('/Z_farm_chicken3_in', function (req, res){
    res.render('Z_farm_chicken3_in.html')
});
app.get('/Z_farm_chicken5_out', function (req, res){
    res.render('Z_farm_chicken5_out.html')
});
app.get('/Z_farm_chicken6_return', function (req, res){
    res.render('Z_farm_chicken6_return.html')
});
app.get('/Z_farm_chicken7_destroy', function (req, res){
    res.render('Z_farm_chicken7_destroy.html')
});
// haccp 프로그램
app.get('/Z_haccp_test1_self_hen', function (req, res){
    res.render('Z_haccp_test1_self_hen.html')
});
// haccp 임상관찰 

app.get('/Z_watch1_list', function (req, res){
    res.render('Z_watch1_list.html')
});

//haccp - 음용수
app.get('/Z_farm_water1-d-use', function (req, res){
    res.render('Z_farm_water1-d-use.html')
});
app.get('/Z_farm_water2-a-use', function (req, res){
    res.render('Z_farm_water2-a-use.html')
});
app.get('/Z_farm_water3-manage', function (req, res){
    res.render('Z_farm_water3-manage.html')
});
app.get('/Z_farm_water4_quality', function (req, res){
    res.render('Z_farm_water4_quality.html')
});

// haccp - 교육회의
app.get('/Z_farm_edu1_edu', function (req, res){
    res.render('Z_farm_edu1_edu.html')
});
app.get('/Z_farm_edu2_meet', function (req, res){
    res.render('Z_farm_edu2_meet.html')
});
//haccp - 사료
app.get('/Z_farm_feed1_in', function (req, res){
    res.render('Z_farm_feed1_in.html')
});
app.get('/Z_farm_feed2_move', function (req, res){
    res.render('Z_farm_feed2_move.html')
});
app.get('/Z_farm_feed3_use', function (req, res){
    res.render('Z_farm_feed3_use.html')
});
app.get('/Z_farm_feed4_out', function (req, res){
    res.render('Z_farm_feed4_out.html')
});
app.get('/Z_farm_feed5_return', function (req, res){
    res.render('Z_farm_feed5_return.html')
});
app.get('/Z_farm_feed6_waste', function (req, res){
    res.render('Z_farm_feed6_waste.html')
});
// haccp - 약품 -첫페이지만 연결했음
app.get('/Z_farm_medicine1_in', function (req, res){
    res.render('Z_farm_medicine1_in.html')
});
//haccp - 반품/폐기물 내용 없어서 분뇨로 대체
app.get('/Z_farm_poop1_bunyo', function (req, res){
    res.render('Z_farm_poop1_bunyo.html')
});

// 로그아웃
app.get('/login', function (req, res){
    res.render('login.html')
});