<template>
    <div class="feed-back">
        <div class="container-m">
            <h6 class="h6">It's All About Trust</h6>
            <h2>
                Let’s Hear<br>
                What Our Clients Say
            </h2>
            <div class="border-feed">
                <VueSlickCarousel
                    ref="c1"
                    :asNavFor="$refs.c2"
                    :focusOnSelect="true"
                    class="feed-con">
                    <div class="inner-feed" v-for="i in 5" :key="i">
                        <img src="@/assets/img/home/Ellipse 1105.png"/>
                        <div class="feed-content">
                            <h4>Mohamed Tarek</h4>
                            <p>ceo, Co-Founder</p>
                            <p>The teams are very responsive and understanding. they managed to understand my business idea well and I am highly satisfied with the quality of work they deliver I 
                                appreciate all the assistance you guys have offered and I would definitely recommend Al Almiya Al Hura for transforming your business.</p>
                        </div>
                    </div>
                </VueSlickCarousel>
                <VueSlickCarousel
                    ref="c2"
                    :asNavFor="$refs.c1"
                    :slidesToShow="5"
                    :focusOnSelect="true">
                    <div class="feed-bottom"  v-for="i in 5" :key="i">
                        <div class="others">
                            <img src="@/assets/img/home/Ellipse 1106.png"/>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            options1:{
                animateOut: 'fadeOut',
                items:1,
                margin:30,
                stagePadding:30,
                smartSpeed:450,
                nav:true,
                dotsData: true,
                URLhashListener:true,
                startPosition:'URLHash',
            },
            optionsSlider:{
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
            }
        }
    },
    methods:{
    }

}
</script>
<style lang="scss">

.feed-back{
    margin-bottom: 60px;
    .container-m{
        display: block;
        background: url("@/assets/img/home/Union_60.png");
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size:36% 95%;
        h5{
            margin-top: 30px;
            font-size: 13px;
            color: #29398C;
        }
        h2{
            font-weight: 700;
            font-size: 40px;
            line-height: 55px;
            margin-bottom: 35px;
        }
        .inner-feed{
            display: flex !important;
            justify-content: flex-start;
            padding: 35px;
            img{
                width: 90px;
                height: 90px;
                display: inline-block;
                margin-right:30px;
            }
            .feed-content{
                width: 50%;
                margin-right: 2%;
                h4{
                    font-size: 19px;
                    font-weight: 600;
                }
                p{
                    color:#141324;
                    font-size: 13px;
                }
                p:last-of-type{
                    font-size: 16px;
                }
                
            }
        }
    }
}
.feed-back{
    .slick-slider:first-of-type .slick-current{
        animation: fade-on 3s ease-in-out;
    }
    .border-feed{
        border:1px solid hsla(230, 32%, 67%, 0.252);
        border-radius: 15px;
    }
    .slick-slider {
        width: 100% !important;
        position: relative;
        .slick-arrow::before {
            color: #29398C;
            opacity: 1;
        }
        .slick-arrow::before {
            font-family: "Font Awesome 5 Free"; 
            content: '\f061';
            font-size: 18px;
            color: #29398C;
            opacity: 1 !important;
            cursor: pointer;
            font-weight: 600;
            padding:12px  25px ;
            background: #F2F4FB;
            border-radius: 8px;
        }
        .slick-next{
                position: absolute;
                top: 105%;
                right: 45%;
                display: inline-block;
                cursor: pointer;
                z-index: 1;
                
        }
        .slick-prev {
            cursor: pointer;
            position: absolute;
            top: 105%;
            left: 45%;
            z-index: 1;
            &::before{
                    font-family: "Font Awesome 5 Free"; 
                    content: '\f060';
                    font-weight: 600;
                    padding:12px  25px ;
                    background: #F2F4FB;
                    border-radius: 8px;
                    font-size: 18px;
        }
            }
    }
    .slick-disabled{
        &:before{
            color:#ccc !important;
        }
    }
    .feed-bottom{
        display: flex;
        justify-content: space-between;
        .others{
            position: relative;
            display: flex;
            width: 50px !important;
            img{
                width: 50px;
                height: 50px;
                display: inline;
                border-radius: 70%;
                margin:0;
                position:relative;
                top:0;
                bottom: 0;
                left:-10px;
                cursor: pointer;
                border:1px solid #fff;
            }
        }
        button{
            background:#F2F4FB;
            border-radius: 5px;
            margin-left: 15px;
            display: inline-block;
            padding: 8px 12px;
            border:none;
            position: relative;
            img{
                width: 18px;
                height: 18px;
                display: inline-block;
                margin: auto;
                color: #29398C !important;
            }
        }
        .right:hover{
            transition: 4s all ease-in-out;
            right: -20px;
        }
        .left:hover{
            transition: 4s all ease-in-out;
            left: -20px;
        }
    }
    .slick-slider:last-of-type{ 
        .slick-slide{
            width: 50px !important;
            position: relative;
            &:nth-of-type(2){
                left:-20px;
            }
            &:nth-of-type(3){
                left:-40px;
            }
            &:nth-of-type(4){
                left:-60px;
            }
            &:nth-of-type(5){
                left:-80px;
            }
            &:nth-of-type(6){
                left:-100px;
            }
            &:nth-of-type(7){
                left:-120px;
            }
            &:first-of-type{
                left:0;
                margin-left: 30px;
            }
        }
    }
}
@media (max-width:1024px) {
    .inner-feed{
        padding-bottom: 80px !important;
    }
    .slick-prev{
        left:42% !important;
    }
    .slick-next{
        right:42% !important;
    }
    .feed-content{
        width: 70% !important;
    }
    .feed-back{
        .container-m{
            display: block;
            background: url("@/assets/img/home/Union_60.png");
            background-position: bottom right;
            background-repeat: no-repeat;
            background-size:50% 70%;
        }
    }    
}
@media (max-width:768px) {
    .inner-feed{
        display: flex !important;
        justify-content: flex-start;
        border-radius: 15px;
        padding: 20px 10px 100px !important;
        >img{
            width: 70px !important;
            height: 70px !important;
            display: inline-block;
            margin-right:15px !important;
        }
        .feed-content{
            width: 80%;
            margin-right: 1%;
        }
    }
    .slick-next{
            position: absolute;
            top: 88%;
            right: 40% !important;
            display: inline-block;
            cursor: pointer;
            z-index: 1;
            
    }
    .slick-prev {
        cursor: pointer;
        position: absolute;
        top: 88%;
        left: 40% !important;
        z-index: 1;
        }        
}
@keyframes fade-on {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@media (max-width:426px) {
    .feed-back .container-m h2 {
        font-weight: 700;
        font-size: 33px;
        line-height: 43px;
        margin-bottom: 35px;
    }
    .feed-back .container-m p:last-of-type{
        width: 130%;
        position: relative;
        left:-27%;
        margin-top: 35px;
    }
    .inner-feed {
        display: flex !important;
        justify-content: flex-start;
        padding: 20px 10px 70px !important;
    }
    .feed-back .slick-slider .slick-next{
            position: absolute;
            top: 90%;
            right: 30% !important;
            display: inline-block;
            cursor: pointer;
            z-index: 1;
            
    }
    .feed-back .slick-slider .slick-prev{
        cursor: pointer;
        position: absolute;
        top: 90%;
        left: 30% !important;
        z-index: 1;
        } 
}
</style>