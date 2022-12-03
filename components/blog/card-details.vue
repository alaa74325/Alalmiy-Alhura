<template>
    <div class="card-details">
        <div class="container-m">
            <div class="row">
                <div class="col-lg-1">
                    <div class="left-div">
                        <span>Share</span>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div class="col-lg-8">
                    <blogDetailsSection v-for="section in sections" :key="section.id" :section="section"></blogDetailsSection>
                </div>
                <div class="col-lg-3">
                    <div class="right-div">
                        <h4>Content</h4>
                        <ul>
                            <li><router-link to="">Explore How Defi Lending Works</router-link></li>
                            <li><router-link to="">Explore How Defi Lending Works</router-link></li>
                            <li><router-link to="">Explore How Defi Lending Works</router-link></li>
                            <li><router-link to="">Explore How Defi Lending Works</router-link></li>
                            <li><router-link to="">Explore How Defi Lending Works</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sections:[
                {
                    img:require('@/assets/img/blog/d1.png'),
                    id:1
                },
                {
                    img:require('@/assets/img/blog/d2.png'),
                    id:2
                },
                {
                    img:require('@/assets/img/blog/d3.png'),
                    id:3
                }

            ]
        }
    }
    
}
</script>
<style lang="scss">
.card-details{
    .left-div{
        margin-top: 115px;
        justify-content: flex-start;
        flex-wrap: wrap;
        span{
            margin: 0 0 5px;
            color:#29398C;
            font-size: 15px;
            display: inline-block;
        }
        .svg-inline--fa {
            margin: 15px 0;
            font-size: 14px;
            padding: 10px 0;
            width: 34px;
            border:1px solid #29398C;
            border-radius: 50%;
            color:#29398C;
            display: block;
            cursor: pointer;
            transition: color 0.8s  linear;
            &:hover{
                color:#8F98C5;
            }
        }
    }
    .right-div{
        width: 98%;
        margin-left: 2%;
        border:1px solid #8F98C5;
        border-radius: 10px;
        padding: 0 10px ;
        margin-top:118px;
        h4{
            margin: 10px 0 15px;
            font-size: 16px;
        }
        ul{
            padding: 0;
            list-style: none;
            margin: 0;
            margin-bottom: 15px;
            li{
                padding: 5px 0;
                a{
                    text-decoration: none;
                    font-size: 13px !important;
                    color: #8F98C5 !important;
                    position: relative;
                    &:hover{
                        color:#2A398C!important;
                        transition:  all .6s ease-in-out;
                        font-size: 16px;
                    }
                    &::before{
                        content: "";
                        width: 0% !important;
                        height: 2.4px;
                        position: absolute;
                        left: 0%;
                        bottom: -3px;
                        background: linear-gradient(to right, #2A398c,#35428d,#fff) !important;
                    }
                    &:hover::before{
                        transition: all .6s linear;
                        width: 100% !important;
                    }
                }
            }

        }
    }
}
@media (max-width:768px) {
    .left-div,.right-div{
        display: none;
    }
}
</style>