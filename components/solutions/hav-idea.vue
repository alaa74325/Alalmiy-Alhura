<template>
    <div class="have-idea">
        <div class="container-m">
            <div class="row">
                <div class="col-lg-12 have-content">
                    <img src="../../assets/img/solutions/Group 17827.png"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"/>
                    <h3>have an idea? Let's bring it to life</h3>
                    <comman-btn class="back-none"
                        data-aos="fade-up"
                        data-aos-duration="3000">Contact Us</comman-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CommanBtn from '../CommanBtn.vue'
export default {
  components: { CommanBtn },
    
}
</script>
<style lang="scss">
/* Main Varibles */
$haveBackground:#D2E7FF;
/* Start Styling of have content*/
.have-content{
    background: $haveBackground;
    align-content: center;
    border-radius: 20px;
    text-align: center;
    position: relative;
    height: calc(400px);
    margin: 200px auto 150px;
    img{
        width: 50%;
        display: block;
        margin: auto;
        position: relative;
        top: -100px;
    }
    h3{
        font-size: 30px;
        margin: 0 auto 20px;
        position: relative;
        top:-70px;
    }
    .back-none{
        position: relative;
        top:-70px;
    }
}
@media (max-width:768px) {
    .have-content{
        img {
            width: 70%;
            display: block;
            margin: auto;
            position: relative;
            top: -60px;
        }
        h3{
            top:0px;
        }
        .back-none{
            top:0px;
        }
    }
        
    
}
@media (max-width:426px) {
    .have-content {
        border-radius: 20px;
        height: auto; 
        margin: 50px auto;
        img {
            width: 85%;
            display: block;
            margin: auto;
            position: relative;
            top: 10px;
            margin-bottom: 20px;
        }
        h3{
            font-size: 25px;
        }
        .back-none{
            margin-bottom: 30px;
        }
    }
}
</style>