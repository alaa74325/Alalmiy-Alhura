<template>
    <div class="why-us">
        <div class="container-m">
            <div class="row">
                <div  class="col-lg-6 col-sm-12">
                    <h6 class="h6">Quality. Reliability. Competence</h6>
                    <h2>
                        Why<br>
                        Choose US!
                    </h2>
                    <p>
                        While we are at the forefront of and specialize in design-build, 
                        we are very familiar with a number of delivery methods and
                        confident we can find the process that will best help you meet
                        your goals.
                    </p>
                    <comman-btn class="back-none">Let's Work Togother <i class="fa-solid fa-arrow-right"></i></comman-btn>
                    <img src="@/assets/img/home/Group (2).png"  data-aos="fade-up-right"  data-aos-delay="1000"/>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <homeWhyCom 
                    v-for="(why, index) in whyUs" 
                    :key="why.id" :why="why"
                    data-aos="fade-left" :data-aos-duration="(index*500) + 500"
                    ></homeWhyCom>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.why-us{
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
        display: block;
    }
    img{
        width: 50%;
        display: block;
    }
}
@media (max-width:1024px) {
    .why-us{
        img{
            width: 30%;
            display: inline-block;
        }
    }
    
}
@media (max-width:376px) {
    .why-us{
        img{
            display: none;
        }
    }
}
</style>
<script>
export default{
data(){
        return{
            whyUs:[
                {
                    id: 1,
                    description:'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
                    title:'Quality',
                },
                {
                    id: 2,
                    description:'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
                    title:'Quality',
                },
                {
                    id: 3,
                    description:'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
                    title:'Quality',
                },
                ]
        }
    }
}
</script>