<template>
    <div class="last-projects">
        <div class="container-m">
            <div class="header col-12">
                <h6 class="h6">Featured Projects</h6>
                <h2>Lastest Projects</h2>
            </div>
        </div>
        <img src="@/assets/img/home/Group.png" class="lastest-img"/>
        <homeProject v-for="project in projects " :key="project.id" :project="project">
        </homeProject>
        <comman-btn class="back-none">Show More <i class="fa-solid fa-arrow-right"></i></comman-btn>
    
    </div>
</template>
<style lang="scss">
.lastest-img{
    position:absolute;
    top:0;
    right: 0;
    height: 150px;
    width:  110px;
    display: inline-block;
    animation: fitMode 1.5s ease-in-out infinite;
    object-fit: contain;
}
.last-projects{
    padding-top: 100px;
    position: relative;
    overflow-x: hidden;
    .container-m{
        display: block !important;
        .header{
            width: 100%;
            margin: 20px auto;
            h2{
                font-size: 42px;
                letter-spacing: 0px;
                color:#141324;
                font-weight:bolder;
            }
        }
    }  
    .project:nth-of-type(odd){
        .row{
            flex-direction: row-reverse;
        }
        .imgs{
            display: flex;
            flex-direction: row-reverse;
            img:first-of-type{
                position: relative;
                left: -17%;
            }
        }
        .project-details{
            left: 0;
            right: -20px;
            .details{
                background: linear-gradient(to right,#D2E7FF 85%,#A4B4C7 );
                padding-left:5% !important;
            }
        }    
    }
    >.back-none{
        padding: 10px 20px;
        display: flex;
        width: 100%;
        margin: 10px auto 30px ;
        justify-content: center;
    }
}

@keyframes fitMode {
    0%{
        object-fit: contain;
    }
    50%{
        object-fit: cover;
    }
    100%{
        object-fit: contain;
    }
}
@media (max-width:1024px) {
    .project:nth-of-type(odd){
        .row{
        }
        .imgs{
            display: flex;
            flex-direction: row-reverse;
            img:first-of-type{
                position: relative;
                left: -14% !important;
            }
            img:last-of-type{
                position: relative;
                right: -4% !important ;
            }
        }
        .project-details{
            left: 0;
            right: -20px;
            .details{
                background:#D2E7FF !important;
                }
        }    
    }
}
@media (max-width:425px) {
    .last-projects .container-m .header h2 {
        font-size: 32px;
        letter-spacing: 0px;
        color: #141324;
        font-weight: bolder;
    }
}
</style>
<script>
export default {
    data(){
        return{
            projects:[
                {
                    id:1,
                    src1:require('@/assets/img/home/iPhone (1).png'),
                    src2:require('@/assets/img/home/iPhone.png'),
                    title:'Outfit - Fashion E-Commerce App',
                    description:'A Kuwait-Based On Demand Pickup And Delivery Service That Allows Its Users To Schedule Their Pickup Anytime And Anywhere',
                    downloads:'3000+',
                    region:'Egypt',
                    platforms:'IOS, Android',
                    technology:'Swift, Kotlin, Angular, Node.Mangodb',
                    animateT:'fade-left',
                    animateI:'fade-right'

                },
                {
                    id:2,
                    src1:require('@/assets/img/home/iPhone (5).png'),
                    src2:require('@/assets/img/home/iPhone (4).png'),
                    title:'Captian One - Pickup App',
                    description:'A Kuwait-Based On Demand Pickup And Delivery Service That Allows Its Users To Schedule Their Pickup Anytime And Anywhere',
                    downloads:'3000+',
                    region:'Egypt',
                    platforms:'IOS, Android',
                    technology:'Swift, Kotlin, Angular, Node.Mangodb',
                    animateT:'fade-right',
                    animateI:'fade-left'

                },
                {
                    id:3,
                    src1:require('@/assets/img/home/iPhone (2).png'),
                    src2:require('@/assets/img/home/iPhone (3).png'),
                    title:'Wasselna - Pickup And Delivery App',
                    description:'A Kuwait-Based On Demand Pickup And Delivery Service That Allows Its Users To Schedule Their Pickup Anytime And Anywhere',
                    downloads:'3000+',
                    region:'Egypt',
                    platforms:'IOS, Android',
                    technology:'Swift, Kotlin, Angular, Node.Mangodb',
                    animateT:'fade-left',
                    animateI:'fade-right'

                }
                ]
        }
    }
}
</script>