<template>
    <div class="our-services">
        <div class="overlay">
            <div class="container-m">
                <div class="row">
                    <div class="inner-text col-sm-12 col-md-8 col-lg-6">
                        <h5>Web Serve</h5>
                        <h2>Discover Our Services.</h2>
                        <p>Turning your ideas into cutting-edge technologies. Turning your ideas
                        into cutting-edge technologies</p>
                    </div>
                        <homeService 
                            v-for="service in services"    
                            :key="service.id" 
                            :service="service" 
                            class="col-sm-6	col-md-4 col-lg-3"
                            ></homeService>
                </div>
            </div>
        </div> 
        

    </div>
</template>
<style lang="scss">
.our-services{
    background:#29398C;
    .overlay{
        padding: 60px 0 80px;
        width: 100%;
        background: url('@/assets/img/home/home_webdeveloper_slider_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        .inner-text{
            color:#fff;
            padding-right:10% ;
            margin: 15px 0 25px;
            h5{
                font-size: 13px;
            }
            p{
                font-size: 13px;
            }
            h2{
                font-size: 40px;
                font-weight: 700;
            }

        }
        
    }
}
</style>
<script>
export default{
data(){
        return{
            services:[
                {
                    id:'01',
                    title:'Marketing',
                },
                {
                    title:'E-commerce',
                    id:'02',
                },
                {
                    title:'Web Design',
                    id:'03',
                },
                {
                    title:'UX/UI Design',
                    id:'04',
                },
                {
                    title:'Technical Analysis',
                    id:'05',
                },
                {
                    title:'Busness Identity',
                    id:'06',
                },
                {
                    title:'Motion Graphic',
                    id:'07',
                },
                {
                    title:'Web Hosting',
                    id:'08',
                },
                {
                    title:'Web Hosting',
                    id:'09',
                },
                {
                    title:'Web Hosting',
                    id:'10',
                },
                ]
        }
    }
}
</script>