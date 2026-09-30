*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,sans-serif;
    background:#07111f;
    color:white;
    min-height:100vh;
}

button{
    font-family:inherit;
}

.navbar{
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 7%;
    border-bottom:1px solid #17263a;
}

.logo{
    font-size:23px;
    font-weight:bold;
}

.logo span{
    color:#6d9cff;
}

.signin{
    background:#101d30;
    color:white;
    border:1px solid #29405e;
    padding:9px 17px;
    border-radius:9px;
}

.page{
    display:none;
    min-height:calc(100vh - 115px);
}

.page.active{
    display:block;
}

.hero{
    max-width:1000px;
    margin:auto;
    padding:80px 20px 55px;
    text-align:center;
}

.badge,
.step,
.success{
    color:#7ea5ff;
    font-size:13px;
    font-weight:bold;
}

.badge{
    display:inline-block;
    padding:8px 15px;
    background:#10213b;
    border:1px solid #29436b;
    border-radius:30px;
    margin-bottom:22px;
}

.hero h1{
    font-size:clamp(42px,8vw,75px);
    line-height:1.05;
    margin-bottom:22px;
}

.hero h1 span{
    color:#6d9cff;
}

.hero p{
    max-width:620px;
    margin:auto;
    color:#9baabd;
    line-height:1.7;
}

.primary{
    margin-top:30px;
    padding:15px 27px;
    border:none;
    border-radius:12px;
    background:#5b8cff;
    color:white;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
}

.secondary{
    padding:14px 22px;
    border-radius:11px;
    border:1px solid #304762;
    background:#0d1a2c;
    color:#cbd5e1;
    cursor:pointer;
}

.features{
    max-width:1000px;
    margin:auto;
    padding:20px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
}

.card,
.goal,
.level,
.time{
    background:#0d1a2c;
    border:1px solid #1d314c;
    border-radius:16px;
    padding:22px;
}

.card div{
    font-size:26px;
    margin-bottom:14px;
}

.card h3{
    margin-bottom:8px;
}

.card p,
.goal p,
.level p,
.time p,
.subtitle{
    color:#8d9bb0;
    font-size:13px;
    line-height:1.5;
}

.setup{
    max-width:850px;
    margin:auto;
    padding:45px 20px;
}

.back{
    background:none;
    border:none;
    color:#91a5c1;
    cursor:pointer;
    margin-bottom:25px;
    font-size:14px;
}

.setup h1{
    font-size:36px;
    margin:10px 0;
}

.subtitle{
    margin-bottom:30px;
}

.goal-grid,
.level-grid,
.time-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:14px;
}

.goal,
.level,
.time{
    cursor:pointer;
    transition:.2s;
}

.goal:hover,
.level:hover,
.time:hover{
    border-color:#557fc4;
    transform:translateY(-2px);
}

.goal.selected,
.level.selected,
.time.selected{
    border-color:#6d9cff;
    background:#122541;
}

.goal span,
.level span,
.time span{
    font-size:28px;
    display:block;
    margin-bottom:12px;
}

.skill-list,
.interest-list{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
}

.skill,
.interest{
    padding:12px 17px;
    background:#0d1a2c;
    border:1px solid #263d5b;
    border-radius:10px;
    color:#c7d1df;
    cursor:pointer;
}

.skill.selected,
.interest.selected{
    background:#162e50;
    border-color:#6d9cff;
    color:white;
}

.input{
    width:100%;
    margin-top:20px;
    padding:14px;
    background:#0d1a2c;
    color:white;
    border:1px solid #263d5b;
    border-radius:10px;
    outline:none;
}

.next{
    text-align:right;
}

.result{
    max-width:800px;
    margin:auto;
    padding:80px 20px;
    text-align:center;
}

.result h1{
    font-size:42px;
    margin:15px 0;
}

.result p{
    color:#94a3b8;
    line-height:1.6;
}

.profile-summary{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    margin:35px 0;
}

.profile-summary div{
    background:#0d1a2c;
    border:1px solid #1d314c;
    padding:18px;
    border-radius:14px;
}

.profile-summary small{
    display:block;
    color:#71829a;
    font-size:10px;
    margin-bottom:8px;
}

.profile-summary strong{
    display:block;
    color:#dce6f5;
}


/* ASSESSMENT */

.assessment{
    max-width:800px;
    margin:auto;
    padding:40px 20px;
}

.assessment-top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#91a5c1;
}

.assessment-top .back{
    margin-bottom:0;
}

.progress{
    height:7px;
    background:#17283e;
    border-radius:20px;
    margin:20px 0 30px;
    overflow:hidden;
}

#progressBar{
    width:10%;
    height:100%;
    background:#5b8cff;
    transition:.3s;
}

.assessment-card{
    background:#0d1a2c;
    border:1px solid #1d314c;
    border-radius:20px;
    padding:30px;
}

.assessment-tag{
    color:#6d9cff;
    font-size:12px;
    font-weight:bold;
    margin-bottom:15px;
}

.assessment-card h1{
    font-size:27px;
    line-height:1.4;
    margin-bottom:25px;
}

.options{
    display:grid;
    gap:12px;
}

.option{
    width:100%;
    padding:16px;
    text-align:left;
    background:#101f33;
    border:1px solid #29415f;
    color:#d5deea;
    border-radius:12px;
    cursor:pointer;
}

.option:hover{
    border-color:#6d9cff;
}

.option.selected{
    background:#17345b;
    border-color:#6d9cff;
}

.assessment-actions{
    display:flex;
    justify-content:space-between;
    margin-top:28px;
}

.assessment-result{
    max-width:750px;
    margin:auto;
    padding:55px 20px;
    text-align:center;
}

.assessment-result h1{
    font-size:40px;
    margin:12px 0 20px;
}

.score-circle{
    width:145px;
    height:145px;
    border-radius:50%;
    border:8px solid #31548b;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:25px auto;
}

.score-circle span{
    font-size:32px;
    font-weight:bold;
}

.assessment-result h2{
    color:#7ea5ff;
    margin-bottom:10px;
}

.assessment-result > p{
    color:#91a0b3;
}

.analysis-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:12px;
    margin:30px 0;
}

.analysis-box{
    background:#0d1a2c;
    border:1px solid #1d314c;
    border-radius:14px;
    padding:18px;
}

.analysis-box span{
    display:block;
    font-size:24px;
    margin-bottom:8px;
}

.analysis-box strong{
    display:block;
    font-size:24px;
}

.analysis-box small{
    color:#7d8da3;
}

.weak-area{
    background:#0d1a2c;
    border:1px solid #1d314c;
    border-radius:15px;
    padding:20px;
    text-align:left;
    margin-bottom:10px;
}

.weak-area h3{
    margin-bottom:8px;
}

.weak-area p{
    color:#9aa8ba;
    line-height:1.6;
}


/* ROADMAP */

.roadmap{
    max-width:850px;
    margin:auto;
    padding:55px 20px;
}

.roadmap h1{
    font-size:42px;
    margin:12px 0;
}

.roadmap > p{
    color:#8e9db1;
    margin-bottom:35px;
}

.roadmap-list{
    display:grid;
    gap:14px;
}

.roadmap-item{
    display:flex;
    gap:18px;
    align-items:center;
    background:#0d1a2c;
    border:1px solid #1d314c;
    border-radius:16px;
    padding:20px;
}

.roadmap-number{
    min-width:45px;
    height:45px;
    border-radius:50%;
    background:#162e50;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#7ea5ff;
    font-weight:bold;
}

.roadmap-item h3{
    margin-bottom:5px;
}

.roadmap-item p{
    color:#8998ac;
    font-size:13px;
}

footer{
    text-align:center;
    padding:22px;
    border-top:1px solid #17263a;
    color:#66758c;
    font-size:12px;
}

@media(max-width:700px){

    .navbar{
        padding:0 20px;
    }

    .hero{
        padding-top:65px;
    }

    .hero h1{
        font-size:43px;
    }

    .features,
    .profile-summary{
        grid-template-columns:1fr 1fr;
    }

    .goal-grid,
    .level-grid,
    .time-grid{
        grid-template-columns:1fr;
    }

    .setup h1{
        font-size:30px;
    }

    .result h1,
    .roadmap h1{
        font-size:32px;
    }

    .assessment-card{
        padding:22px;
    }

    .analysis-grid{
        grid-template-columns:1fr;
    }
}

@media(max-width:430px){

    .features,
    .profile-summary{
        grid-template-columns:1fr;
    }

    .signin{
        display:none;
    }

    .assessment-card h1{
        font-size:22px;
    }

    .assessment-actions{
        gap:10px;
    }

    .assessment-actions button{
        flex:1;
    }
        }
