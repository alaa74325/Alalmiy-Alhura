<template>
    <div class="partners">
        <div class="container-m">
            <div class="row">
                <div  class="col-lg-6 col-sm-12"  data-aos="zoom-in" data-aos-delay="500">
                    <h6  class="h6">Team. Customer. Community</h6>
                    <h2>
                        We Work With The<br>
                        Best Partners
                    </h2>
                    <p>
                        While we are at the forefront of and specialize in design-build, 
                        we are very familiar with a number of delivery methods and
                        confident we can find the process that will best help you meet
                        your goals.
                    </p>
                </div>
                <div class="col-lg-6 col-md-12">
                    <VueSlickCarousel v-bind="settings" class="carousel">
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            <img src="@/assets/img/home/1.2ca23b8.png"/>
                            
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
    return{
        settings:{
            "rows": 2,
            "arrows": false,
            "dots": false,
            "infinite": true,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "autoplay": true,
            "speed": 2000,
            "autoplaySpeed": 2000,
            "cssEase": "linear"
        }   
    }
    }
}
</script>
<style lang="scss">

.partners{
    margin: 70px auto;
    p{
        font-size: 13px;
        width: 80%;
    }
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
    }
    button{
        margin: 20px 0 !important;
        padding: 15px 20px;
    }
    .list-img{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 0px auto;
        position: relative;
        padding-bottom: 10px;
        /*img{
            width: 26%;
            cursor: pointer;
            filter:grayscale(100%);
            transition: 0.3s all ease-in-out;
            &:hover{
                filter:grayscale(0);
                
        }
        img:nth-type-of(2){
            left:10px;
        }*/
    }
}
.carousel{
    img{
        display: inline-block;
        width: 78% !important;
        filter:grayscale(100%);
        &:hover{
            filter:grayscale(0);
            transition: all .8s linear;
        }
    }
}
.slick-slider {
	width: 500px;
	div {
		outline: none;
	}
	h1 {
		text-align: center;
		background-color: #2f3241;
		color: #abe8f6;
		line-height: 100px;
		margin: 3px;
	}
	::v-deep .slick-arrow:before {
		color: #2f3241;
    opacity: 1;
  }
}
@media (max-width:425px) {
    .partners{
        .slick-slider {
            width: auto; 
        }
        h2 {
            font-size: 33px;
            font-weight: 700;
            line-height: 42px;
        }
    }
}
</style>