<template>
    <div class="project">
        <div class="container-m">
            <div class="row">
                <div class="imgs col-lg-4 col-sm-12" :data-aos="project.animateI" data-aos-duration="2000">
                    <img :src="project.src1"/>
                    <img :src="project.src2"/>
                </div>
                <div class="project-details col-lg-8 col-sm-12">
                    <div class="details"  :data-aos="project.animateT" data-aos-duration="2000">
                        <h2>{{project.title}}</h2>
                        <p>{{project.description}}</p>
                        <div class="project-data">
                            <span>Downloads <br> {{project.downloads}}</span>
                        </div>
                        <div class="project-data">
                            <span>Region <br> <img src="@/assets/img/home/EG - Egypt.png" align="center"/>{{project.region}}</span>
                        </div>
                        <div class="clear"></div>
                        <div class="project-data">
                            <span>Platforms <br> {{project.platforms}}</span>
                        </div>
                        <div>
                            <span>technology <br> {{project.technology}}</span>
                        </div>
                        <comman-btn class="back-none">Read More 
                        <i class="fa-solid fa-arrow-right"></i>
                        </comman-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"> 

.project{
    width: 100%;
    margin: 25px auto;
    display: flex;
    overflow: hidden;
    .imgs{
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 3;
        img{
            width: 70%;
            display:inline-block;
            height: auto;
            position: relative;
            bottom: 0;
        }
        img:last-of-type{
            right:4%;
            border-radius: 11.2%;
            
        }
        img:first-of-type{
            position: relative;
            z-index: 1;
            height: 90%;
            left: 13.8%;
            top:10%
        }

    }
    .project-details{
        position: relative; 
        left: -20px;
        z-index: 2;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        .details{
            padding:50px 0 ;
            width: 110%;
            background: linear-gradient(to left,#D5FFF8 85%,#afc9c4 );
            padding-left: 10%;
            border-radius: 20px;
            box-shadow: 5px 5px 5px rgb(222, 220, 220);
            display: flex;
            flex-direction:row;
            align-content: center;
            flex-wrap: wrap;
            h2{
                font-size: 39px;
                font-weight: 900 !important;
                margin-bottom:  15px;
            }
            p{
                color:#141324;
                font-size: 13px;
                width: 50%;
                margin-right:  50%;
            }
            div{
                margin: 15px 0 0;
                display: flex;
                span{
                    color:#141324;
                    display: inline-block;
                    margin-right: 80px;
                    line-height: 25px;
                    font-size: 13px;
                    img{
                        display: inline-block;
                        margin-right: 3px;
                        width: 18px;
                    }
                }
            }
            div.back-none{
                width: 100% !important;
                display: block;
                button{
                    margin: 15px 0 0 !important;
                }

            }
        }
        >*{
            width: 100%;
            display: block;
        }
        
        
    }
}
.clear{
    width: 100%;
    margin: 0 !important;
}
@media (max-width:768px) {
    .project .imgs img:last-of-type {
        height: 75% !important;
        right: 15% !important;
    }
    .project .imgs img:first-of-type {
        height: 65% !important;
        left: 0 !important;
    }
    .row{
        justify-content: space-evenly;
    }
    

}  
@media (max-width:1024px) {
    .project .project-details .details {
        padding: 0px 0 45px !important;
        width: 100%;
        padding-left: 0 !important;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        align-content: center;
        flex-wrap: wrap;
        position: relative;
        box-shadow: none !important;
        background: none !important;
        top: 0;
    }
    .project:nth-last-of-type(odd) .project-details .details {
        padding: 0px 0 45px !important;
        width: 100%;
        padding-left: 0 !important;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        align-content: center;
        flex-wrap: wrap;
        position: relative;
        box-shadow: none !important;
        background: none !important;
        top: 0;
        left:0;
    }
    .project .imgs img:last-of-type {
        height: 90% !important;
        right: 15% !important;
    }
    .project .imgs img:first-of-type {
        height: 80% !important;
        left: 0 !important;
    }

}      
@media (max-width:426px) {
    .project .project-details .details h2 {
        font-size: 27px;
        font-weight: 700 !important;
        margin: 15px 0;
    }
    .project .project-details .details p{
        width: 100% !important;
        margin-right: 0 !important;
    }
    .project-data{
        width: 33.33% !important;

    }
    .project .project-details .details div span {
        margin-right: 20px !important;
    }
}
@media (max-width:2560 px) {
    .project:nth-of-type(even) .project-details {
        left: -7%;
    }
    .project:nth-of-type(even) .imgs img:first-of-type {
    left: 6.8%;
    }
}
</style>
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
}
</script>