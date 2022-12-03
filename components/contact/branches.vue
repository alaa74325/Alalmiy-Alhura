<template>
    <div class="branches">
        <div class="container-m">
                <h6>Contact Us</h6>
                <h2>Our Branches</h2>
                <div class="row flex-sp">
                        <div class="col-lg-6 col-sm-12"> 
                            <div class="branch">
                                <span role="button" @click="toggleshowp('inner-p1')">
                                    <i class="fa-solid fa-plus " v-if="!showp" ></i>
                                    <i class="fa-solid fa-minus " v-else></i>
                                </span>
                                <h3>Egypt, Mansoura</h3> 
                                <div ref="inner-p1" class="d-none" style="transition:all .8s linear">
                                    <p>
                                        <span>
                                            <i class="fa-solid fa-location-dot"></i>
                                            Sandoub, Beside Taha Hussein School, above Bank Masr
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <i class="fa-regular fa-envelope"></i>
                                            info@alalmiyalhura.com
                                        </span>
                                    </p>
                                    <p >
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            +201050224949
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            +201050224949
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="branch">
                                <span role="button" @click="toggleshowp('inner-p2')">
                                    <i class="fa-solid fa-plus " v-if="!showp" ></i>
                                    <i class="fa-solid fa-minus " v-else></i>
                                </span>
                                <h3>Egypt, Mansoura</h3>
                                <div ref="inner-p2" class="d-none" style="transition:all .8s linear">
                                    <p>
                                        <span>
                                            <i class="fa-solid fa-location-dot"></i>
                                            Sandoub, Beside Taha Hussein School, above Bank Masr
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <i class="fa-regular fa-envelope"></i>
                                            info@alalmiyalhura.com
                                        </span>
                                    </p>
                                    <p >
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            +201050224949
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            +201050224949
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="branch">
                                    <span role="button" @click="toggleshowp('inner-p3')">
                                        <i class="fa-solid fa-plus " v-if="!showp" ></i>
                                        <i class="fa-solid fa-minus " v-else></i>
                                    </span>
                                <h3>Egypt, Mansoura</h3>
                                <div ref="inner-p3" class="d-none" style="transition:height 2s linear">
                                    <p>
                                        <span>
                                            <i class="fa-solid fa-location-dot"></i>
                                            Sandoub, Beside Taha Hussein School, above Bank Masr
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <i class="fa-regular fa-envelope"></i>
                                            info@alalmiyalhura.com
                                        </span>
                                    </p>
                                    <p >
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            +201050224949
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                            +201050224949
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <iframe width="100%" height="500"  
                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            ></iframe>
                        </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showp:false,
        }
    },
    methods:{ 
        toggleshowp(elementRef){
            this.$refs[elementRef].classList.toggle('d-none');
            this.showp = !this.showp;
            console.log("hi")
        }
    },
}
</script>
<style lang="scss">

.branches{
    .row{
        >*{
            padding: 0 !important;
        }
    }
    background:#fff;
    display:block !important;
    margin: 50px 0;
    .container-m{
        display: block !important;
    }
    h2{
        font-size: 43px;
        font-weight: 900;
        span{
            color: #29398C;
        }
    }
    h6{
        color: #29398C;
        font-size: 15px;
    }
    .branch{
        border:1px solid #8d93ae;
        border-radius: 13px;
        margin-bottom: 20px;
        padding: 10px ;
        width: 98%;
        position: relative;
        >span{
            position: absolute;
            top: 20px;
            right: 15px;
            color: #fff;
            background: #29398C;
            padding: 5px;
            font-size: 15px;
            border-radius: 4px;
            transition: all 0.8s linear;
            cursor: pointer;
            .svg-inline--fa{
                color: inherit;
                font-size: inherit;
            }
        }
        h3{
            font-weight: 300;
            font-size: 16px;
            color: #29398C;
            padding: 15px 0;
        }
        p{
            font-size: 14px;
            justify-content: space-between;
            transition: all 0.8s linear ;
            span{
                display: inline-block;
                margin-right: 30px;
            }
        }
        :last-of-type{
            margin-bottom: 0;
        }
    }

}
@media (max-width:1024px) {
    .form-help h2 {
        font-size: 36px !important;
    }   
}
@media (max-width:768px) {
    .form-help h2 {
        font-size: 36px !important;
        height: auto !important;
    }    

}
</style>        