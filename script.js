*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    background:#050d1b;
    color:#e8eef8;
    min-height:100vh;
}

button,
input{
    font-family:inherit;
}

button{
    cursor:pointer;
}

.topbar{
    height:65px;
    background:#071326;
    border-bottom:1px solid #182b46;
    display:flex;
    align-items:center;
    padding:0 18px;
    gap:30px;
    position:sticky;
    top:0;
    z-index:20;
}

.brand{
    width:215px;
    display:flex;
    align-items:center;
    gap:10px;
}

.brand-icon{
    width:39px;
    height:39px;
    border-radius:12px;
    background:linear-gradient(135deg,#536dff,#8b36ff);
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:23px;
}

.brand strong{
    display:block;
    font-size:18px;
}

.brand small{
    display:block;
    color:#7586a2;
    font-size:9px;
}

.search{
    height:38px;
    max-width:620px;
    flex:1;
    background:#101e36;
    border:1px solid #29405f;
    border-radius:9px;
    display:flex;
    align-items:center;
    padding:0 13px;
    color:#8495b0;
    gap:10px;
}

.search input{
    background:none;
    border:0;
    outline:0;
    color:white;
    width:100%;
}

.top-actions{
    display:flex;
    align-items:center;
    gap:15px;
}

.top-actions button{
    background:none;
    border:0;
    color:#a5b4ca;
    font-size:18px;
}

.profile-mini{
    display:flex;
    align-items:center;
    gap:9px;
}

.profile-mini b{
    font-size:12px;
    display:block;
}

.profile-mini small{
    color:#7b8ba3;
    font-size:10px;
}

.avatar{
    width:35px;
    height:35px;
    border-radius:50%;
    background:linear-gradient(135deg,#ef9b68,#5b7cff);
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
}

.app{
    display:flex;
}

.sidebar{
    width:215px;
    min-height:calc(100vh - 65px);
    background:#061225;
    border-right:1px solid #182b46;
    padding:23px 12px;
    position:sticky;
    top:65px;
    height:calc(100vh - 65px);
    overflow:auto;
}

.side-link{
    width:100%;
    background:none;
    border:0;
    color:#91a2bd;
    padding:11px 14px;
    margin-bottom:4px;
    border-radius:9px;
    text-align:left;
    display:flex;
    gap:13px;
    align-items:center;
    font-size:13px;
}

.side-link:hover{
    background:#101f39;
    color:white;
}

.side-link.active{
    color:white;
    background:linear-gradient(90deg,#315cff,#5230e9);
    box-shadow:0 8px 25px #304dff22;
}

.sidebar-bottom{
    margin:28px 6px 0;
    padding:20px 15px;
    border:1px solid #1c3453;
    border-radius:12px;
    background:#091a31;
}

.rocket{
    font-size:28px;
    margin-bottom:12px;
}

.sidebar-bottom h3{
    font-size:12px;
    line-height:1.6;
}

.sidebar-bottom small{
    color:#8091aa;
    display:block;
    margin-top:9px;
}

.sidebar-bottom b{
    font-size:10px;
    color:#8ba5ff;
}

.xp-bar{
    height:6px;
    background:#172c49;
    border-radius:20px;
    margin-top:15px;
    overflow:hidden;
}

#sideXPBar{
    width:64%;
    height:100%;
    background:linear-gradient(90deg,#6b55ff,#35baff);
}

main{
    flex:1;
    min-width:0;
}

.page{
    display:none;
}

.page.active{
    display:block;
}

.dashboard-wrap{
    max-width:1400px;
    margin:auto;
    padding:23px;
}

.welcome-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:20px;
    margin-bottom:20px;
}

.welcome-row h1{
    font-size:21px;
    margin-bottom:7px;
}

.welcome-row p{
    color:#8495ad;
    font-size:13px;
}

.quote{
    background:linear-gradient(135deg,#25175e,#181448);
    border:1px solid #3b297b;
    border-radius:12px;
    padding:12px 22px;
    text-align:center;
    font-size:12px;
    line-height:1.5;
    min-width:200px;
}

.quote small{
    display:block;
    color:#a79bcf;
    margin-top:5px;
}

.main-grid{
    display:grid;
    grid-template-columns:minmax(0,1fr) 290px;
    gap:20px;
}

.content{
    min-width:0;
}

.right-column{
    display:flex;
    flex-direction:column;
    gap:18px;
}

.mission-card{
    min-height:220px;
    background:
        radial-gradient(circle at 85% 20%,#6135b650,transparent 28%),
        linear-gradient(110deg,#2936b5,#26217e 60%,#20165d);
    border:1px solid #4342bf;
    border-radius:16px;
    overflow:hidden;
    display:flex;
    position:relative;
}

.mission-content{
    padding:23px;
    flex:1;
    z-index:2;
}

.eyebrow{
    font-size:14px;
    font-weight:bold;
}

.mission-card h2{
    font-size:23px;
    margin:15px 0 22px;
}

.mission-info{
    display:flex;
    gap:25px;
    color:#bdc7f1;
}

.mission-info div{
    display:flex;
    gap:7px;
    font-size:18px;
}

.mission-info span{
    font-size:10px;
    line-height:1.4;
}

.mission-info b{
    color:white;
}

.primary{
    border:0;
    background:linear-gradient(90deg,#5665ff,#6950ff);
    color:white;
    padding:11px 25px;
    border-radius:9px;
    font-weight:bold;
    margin-top:20px;
    box-shadow:0 7px 22px #1b0cff40;
}

.primary:hover{
    transform:translateY(-1px);
}

.mission-art{
    width:260px;
    position:relative;
}

.python{
    position:absolute;
    top:28px;
    left:50px;
    font-size:60px;
}

.student-art{
    position:absolute;
    bottom:10px;
    right:50px;
    font-size:85px;
}

.chart-art{
    position:absolute;
    bottom:22px;
    left:30px;
    font-size:35px;
}

.panel{
    background:#08172b;
    border:1px solid #1a304e;
    border-radius:13px;
    padding:17px;
    margin-top:18px;
    box-shadow:0 10px 30px #00000012;
}

.panel-heading{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:15px;
    margin-bottom:17px;
}

.panel-heading b{
    font-size:14px;
}

.panel-heading button{
    background:none;
    border:0;
    color:#6da3ff;
    font-size:11px;
}

.panel-heading small{
    display:block;
    color:#73849d;
    font-size:10px;
    margin-top:5px;
}

.panel-icon{
    margin-right:8px;
}

.mini-roadmap{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:8px;
    overflow:auto;
    padding:5px 4px;
}

.mini-roadmap i{
    color:#536783;
    padding-top:19px;
}

.road-step{
    min-width:85px;
    text-align:center;
}

.road-step .circle{
    width:39px;
    height:39px;
    margin:auto auto 8px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#1a2d4c;
    border:1px solid #3a5274;
}

.road-step.completed .circle{
    background:#0d735b;
    border-color:#28d8ad;
}

.road-step.current .circle{
    background:#3d3410;
    border-color:#e5b52d;
}

.road-step b{
    font-size:10px;
    display:block;
}

.road-step small{
    color:#70829b;
    font-size:8px;
    display:block;
    margin-top:5px;
}

.road-step.completed small{
    color:#27d8a8;
}

.road-step.current small{
    color:#e2b42d;
}

.two-column{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:0 18px;
}

.gap-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
}

.gap-grid > div{
    border-right:1px solid #243957;
    padding:5px 10px;
}

.gap-grid > div:last-child{
    border:0;
}

.big-icon{
    display:block;
    font-size:21px;
    margin-bottom:10px;
}

.gap-grid small{
    display:block;
    color:#71839e;
    font-size:9px;
}

.gap-grid strong{
    display:block;
    font-size:12px;
    margin-top:5px;
}

.small{
    padding:8px 13px;
    font-size:10px;
    margin-top:17px;
}

.project-card{
    display:flex;
    gap:12px;
}

.project-icon{
    width:45px;
    height:45px;
    border-radius:10px;
    background:#1672e9;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:22px;
    flex-shrink:0;
}

.project-card h3{
    font-size:12px;
    margin-bottom:7px;
}

.project-card p{
    color:#8494aa;
    font-size:9px;
    line-height:1.5;
    margin:8px 0;
}

.tags{
    display:flex;
    flex-wrap:wrap;
    gap:4px;
}

.tags span{
    background:#142e50;
    color:#87aaff;
    padding:3px 7px;
    border-radius:10px;
    font-size:8px;
}

.project-card > div:last-child > small{
    color:#a1aabd;
    font-size:9px;
}

.tiny{
    padding:7px 11px;
    font-size:9px;
    margin-top:8px;
}

.skill-cards{
    display:flex;
    gap:8px;
    overflow:auto;
}

.user-skill{
    min-width:105px;
    background:#0e2037;
    border:1px solid #1d4d59;
    border-radius:10px;
    padding:10px;
    font-size:10px;
}

.user-skill span{
    color:#31d5a4;
}

.user-skill small{
    display:block;
    color:#2dc7a5;
    margin-top:6px;
    font-size:8px;
}

.user-skill.beginner{
    border-color:#7c5926;
}

.user-skill.beginner span,
.user-skill.beginner small{
    color:#e0a62b;
}

.more-skills{
    margin-top:10px;
    color:#6f9cff;
    font-size:9px;
}

.game-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    text-align:center;
}

.game-grid span{
    display:block;
    font-size:22px;
    margin-bottom:7px;
}

.game-grid b{
    display:block;
    font-size:12px;
}

.game-grid small{
    color:#7789a1;
    font-size:9px;
}

.level-progress{
    height:7px;
    background:#172b47;
    border-radius:10px;
    overflow:hidden;
    margin-top:17px;
}

#levelProgress{
    width:64%;
    height:100%;
    background:linear-gradient(90deg,#7658ff,#35b9ff);
}

.xp-text{
    display:block;
    text-align:right;
    color:#8494aa;
    font-size:9px;
    margin-top:6px;
}

.career-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:10px;
}

.career{
    border-radius:9px;
    padding:13px;
    min-height:105px;
}

.career span{
    display:block;
    font-size:18px;
    margin-bottom:10px;
}

.career b{
    display:block;
    font-size:10px;
}

.career small{
    display:block;
    color:#a6b1c4;
    font-size:8px;
    margin:5px 0 10px;
}

.career button{
    background:none;
    border:0;
    color:#c5d1ff;
    font-size:8px;
}

.ai{background:#172a68;}
.web{background:#173b66;}
.cyber{background:#103e45;}
.data{background:#302064;}

.progress-panel{
    margin-top:0;
}

.progress-panel h2{
    font-size:15px;
    margin-bottom:20px;
}

.progress-ring{
    width:105px;
    height:105px;
    border-radius:50%;
    margin:0 auto 20px;
    background:conic-gradient(#2acbd1 0 42%,#263a56 42% 100%);
    display:flex;
    align-items:center;
    justify-content:center;
}

.progress-ring > div{
    width:81px;
    height:81px;
    border-radius:50%;
    background:#08172b;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}

.progress-ring b{
    font-size:19px;
}

.progress-ring small{
    color:#7789a1;
    font-size:7px;
    margin-top:4px;
}

.progress-stat{
    display:flex;
    justify-content:space-between;
    border-top:1px solid #1c304c;
    padding:12px 0;
    font-size:10px;
}

.progress-stat span{
    color:#a0aec1;
}

.progress-stat b{
    color:#dfe7f4;
}

.check-item{
    display:flex;
    align-items:center;
    gap:9px;
    padding:10px 0;
    font-size:10px;
    color:#d0d9e8;
}

.check-item input{
    width:19px;
    height:19px;
    accent-color:#43a5ff;
}

.check-item small{
    color:#70839e;
}

.quick-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:9px;
}

.quick-grid button{
    border:0;
    border-radius:9px;
    padding:12px 8px;
    color:white;
    background:#2723a0;
    display:flex;
    align-items:center;
    gap:8px;
    font-size:17px;
    text-align:left;
}

.quick-grid button:nth-child(2){
    background:#116a76;
}

.quick-grid button:nth-child(3){
    background:#4b20b0;
}

.quick-grid button:nth-child(4){
    background:#9b6717;
}

.quick-grid span{
    font-size:9px;
    line-height:1.3;
}

.journey > div{
    display:flex;
    gap:10px;
    padding:8px 0;
}

.journey > div > span{
    font-size:14px;
}

.journey p{
    font-size:9px;
}

.journey small{
    display:block;
    color:#697d97;
    margin-top:3px;
}

.motivation{
    background:linear-gradient(135deg,#151e6a,#152b69);
    border:1px solid #3045a1;
    border-radius:12px;
    padding:20px;
    text-align:center;
}

.motivation div{
    font-size:35px;
}

.motivation h2{
    font-size:14px;
    margin:8px 0;
}

.motivation p{
    color:#abb8e2;
    font-size:10px;
    line-height:1.5;
}

.simple-page{
    max-width:1000px;
    margin:auto;
    padding:55px 25px;
}

.simple-page h1{
    font-size:34px;
    margin-bottom:10px;
}

.simple-page > p{
    color:#8495ac;
    margin-bottom:25px;
}

.full-roadmap{
    display:grid;
    gap:12px;
}

.full-roadmap .roadmap-item{
    background:#08172b;
    border:1px solid #1c3555;
    border-radius:12px;
    padding:20px;
}

.large-skill-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:15px;
}

.large-skill-grid div{
    background:#08172b;
    border:1px solid #1c3555;
    padding:22px;
    border-radius:12px;
}

.large-skill-grid b{
    display:block;
    color:#6fa5ff;
    margin-top:10px;
    font-size:12px;
}

.dashboard-big-card{
    background:#08172b;
    border:1px solid #1c3555;
    border-radius:15px;
    padding:30px;
}

.dashboard-big-card strong{
    display:block;
    font-size:45px;
    margin:15px 0;
}

.big-bar{
    height:14px;
    background:#172c48;
    border-radius:20px;
    overflow:hidden;
}

#dashboardProgress{
    width:42%;
    height:100%;
    background:linear-gradient(90deg,#6255ff,#30c9dd);
}

footer{
    text-align:center;
    border-top:1px solid #182b46;
    padding:20px;
    color:#62748e;
    font-size:10px;
}


@media(max-width:1100px){

    .sidebar{
        width:180px;
    }

    .main-grid{
        grid-template-columns:1fr;
    }

    .right-column{
        display:grid;
        grid-template-columns:1fr 1fr;
    }

    .progress-panel{
        margin-top:18px;
    }

    .career-grid{
        grid-template-columns:1fr 1fr;
    }
}


@media(max-width:800px){

    .topbar{
        gap:10px;
    }

    .brand{
        width:auto;
    }

    .search{
        display:none;
    }

    .sidebar{
        width:70px;
        padding:15px 8px;
    }

    .side-link{
        justify-content:center;
        padding:12px 5px;
    }

    .side-link span{
        display:none;
    }

    .sidebar-bottom{
        display:none;
    }

    .two-column{
        grid-template-columns:1fr;
    }

    .right-column{
        grid-template-columns:1fr;
    }

    .mission-art{
        display:none;
    }

    .career-grid{
        grid-template-columns:1fr 1fr;
    }
}


@media(max-width:550px){

    .top-actions button{
        display:none;
    }

    .profile-mini div:last-child{
        display:none;
    }

    .dashboard-wrap{
        padding:13px;
    }

    .welcome-row{
        flex-direction:column;
        align-items:flex-start;
    }

    .quote{
        width:100%;
    }

    .mission-info{
        gap:10px;
        flex-wrap:wrap;
    }

    .mission-info div{
        font-size:15px;
    }

    .career-grid{
        grid-template-columns:1fr;
    }

    .gap-grid{
        grid-template-columns:1fr;
    }

    .gap-grid > div{
        border-right:0;
        border-bottom:1px solid #243957;
        padding:10px;
    }

    .mini-roadmap{
        justify-content:flex-start;
    }
       }
