<template>
    <div class="what-happen">
        <div class="container-m">
            <h6 class="h6">Be Updated</h6>
                <h2>
                    What's Happening!
                </h2>
            <div class="row">
                <homeWhatCom v-for="(what,index) in whathappen" :key="what.id" :what="what" class="col-lg-4 col-md-6 col-sm-12"
                    data-aos="zoom-in"  :data-aos-delay="(index*1000)+500"
                ></homeWhatCom>
                <comman-btn class="back-none">Show More <i class="fa-solid fa-arrow-right"></i></comman-btn>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.what-happen{
    .container-m{
        display: block;
    }
    h2{
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 50px;
    }
    button{
        margin: 20px auto !important;
        display: block;
        padding: 15px 20px;
        margin: auto;
    }
}
@media (max-width:425px) {
    .what-happen h2 {
    font-size: 34px;
    line-height: 34px;
    margin-bottom:30px;
}
}
</style>
<script>
export default{
data(){
        return{
            whathappen:[
                {
                    id:1,
                    description:'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
                    title:'The Complete Guide to Web Hosting',
                    date:'30 Oct',
                },
                {
                    id:2,
                    description:'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
                    title:'The Complete Guide to Web Hosting',
                    date:'20 Oct',
                },
                {
                    id:3,
                    description:'We aim to deliver high-quality products. Hence, we take care of everything at the granular level.',
                    title:'The Complete Guide to Web Hosting',
                    date:'25 Oct',
                },
                ]
        }
    }
}
</script>