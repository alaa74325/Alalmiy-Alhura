<template>
    <div class="success">
        <div class="container-m inner-success">
                <h6>Contact Us</h6>
                <h2>What About Some Facts<br>
                    About<span>Al Almiya Al Hura</span></h2>
                <div class="suc">
                    <div class="overlay"></div>
                    <img src="@/assets/img/about/success.png"/>
                </div>    
                <div class="our-achive">
                    <p>
                        106+<br>
                        <span>Clients</span>
                    </p>
                    <p>
                        24+<br>
                        <span>Projects</span>
                    </p>
                    <p>
                        10+<br>
                        <span>Services</span>
                    </p>
                    <p>
                        80+<br>
                        <span>Our Team</span>
                    </p>
                    <span class="bottom">We're here to help you finding the best way.</span>
                </div>
            </div>
    </div>
</template>
<style lang="scss">

.inner-success{
    .row{
        >*{
            padding: 0 !important;
        }
    }
    background:#fff;
    display:block !important;
    .suc{
        position: relative;
        .overlay{
            background: linear-gradient(#14132479,#0000);
            position: absolute;
            z-index: 1;
            border-radius: 13px;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        img{
            width: 100%;
        }
    }
    .our-achive{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        top:-50px;
        flex-wrap: wrap;
        p{
            background: #29398C;
            color:#fff;
            border-radius: 10px;
            width: 120px;
            font-size: 28px;
            padding: 30px 0;
            text-align: center;
            margin: 0 10px;
            position: relative;
            line-height: 23px;
            span{
                display: inline-block;
                font-size: 13px;
            }

        }
    }  
    h2{
        font-size: 42px;
        font-weight: 900;
        line-height: 60px;
        span{
            color: #29398C;
        }
    }
    h6{
        color: #29398C;
        font-size: 15px;
    }
    span.bottom{
        display: block;
        margin: 20px auto;
        font-style: italic;
        font-size: 12px;
        color: #29398C;
        text-align: center;
        width: 100%;
    }    
}
@media (max-width:1024px) {
    .inner-success h2 {
        font-size: 36px !important;
    }   
}
@media (max-width:768px) {
    .inner-success h2 {
        font-size: 36px !important;
        height: auto !important;
    }    

}
@media (max-width: 500px){
    .inner-success h2 {
        font-size: 25px !important;
        line-height: 39px;
        margin-bottom: 17px;
    }
    .our-achive{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        top:0px !important;
        flex-wrap: wrap;
        margin-top: 20px;
        p{
            width: 100px !important;

            font-size: 20px !important;
            padding: 15px 0 !important;
            text-align: center;
            margin-bottom: 10px !important;
            position: relative;
            line-height: 23px;
            span{
                display: inline-block;
                font-size: 13px;
            }

        }
    }
}
</style>        