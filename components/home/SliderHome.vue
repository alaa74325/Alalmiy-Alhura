<template>
    <div class="container-m">
        <div class="slider-home">
            <div class="header-text">
                <h1>At <span class="name"> Almiya Al Hura </span> Make<br/>
                Your Ideas Work.</h1>
                <p>We turn your ideas into reality. partner with us to drive digitization<br/>
                to your business with innovation and technology.</p>
                <comman-btn>Get a Quote</comman-btn>
                <comman-btn class="back-none">Contact Us</comman-btn>
            </div>
            <div class=" row">
                <div class="col-lg-4 col-md-6 col-sm-12 flex-sp divs"  data-aos="fade-up"  data-aos-duration="1500">
                    <div>
                        <h3><img src="@/assets/img/home/vuesax-linear-headphone.png"/>Innovative Solutions</h3>
                        <p>We are distinguished in the field of design and development with innovative solutions that we provide to make our projects of the highest degree of efficiency and quality</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 flex-sp divs"  data-aos="fade-up"  data-aos-duration="1500">
                    <div>
                        <h3><img src="@/assets/img/home/vuesax-linear-flash.png"/>Fast Performance</h3>
                        <p>We are distinguished in the field of design and development with innovative solutions that we provide to make our projects of the highest degree of efficiency and quality</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 flex-sp divs"  data-aos="fade-up"  data-aos-duration="1500">
                    <div>
                        <h3><img src="@/assets/img/home/vuesax-linear-medal-star.png"/>Fast Technical Support</h3>
                        <p>We are distinguished in the field of design and development with innovative solutions that we provide to make our projects of the highest degree of efficiency and quality</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.slider-home{
    background-image:url('@/assets/img/home/Union_60.png') ;
    background-clip: border-box;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
    margin: auto;
    text-align: center;
    width: 100%;

}
.header-text{
    margin: 100px auto;
    p{
        font-size: 14px;
        margin-bottom: 30px;
    }
    h1 .name{
        color:#2A398C;
    }
}
h1{
    color:#141324;
    font-size: 80px;
    margin-bottom: 30px;
    font-weight: bold;
}

.divs{
    div{
        text-align: left;
        padding: 17px 15px;
        border-radius: 8px;
        background: #F2F4FB;
        width: 99.5%;
        p{
            font-size: 13px;
            color:#141324;
        }
        h3{
            font-size: 17px;
            margin-bottom: 12px;
            font-weight: 500;
            color: #141324;
            img{
                display: inline-block;
                margin-right: 8px;
                width:15px;
            }
        }
        
    }

    

}
.divs:first-of-type div{
    background: #FFFBEB;
}
.divs:last-of-type div{
    background:#F2F9FF;
}    
@media (max-width:1024px) {
    .divs{
        div{
            width: 90%;
            padding:auto 4%;
            margin: auto;
            margin-bottom: 30px;
        }
    }
    .header-text{
        h1 {
            font-size: 68px;
        }
    }
    .divs{
        justify-content: center;
    }
    
}
@media (max-width:768px) {
    
    .header-text{
        h1 {
            font-size: 50px;
        }
    }
    .divs{
        justify-content: center;
    }
    
}
@media (max-width:1024px) {
    
    .header-text{
        h1 {
            font-size: 50px;
            font-weight: 600;
        }
    }
    .slider-home{
        .row{
            justify-content: center;
        }
    }
    
}
@media (max-width:425px) {
    .header-text h1 {
        font-size: 37px;
        font-weight: 600;
    }
    .header-text {
        margin: 50px auto;
    }
}
</style>