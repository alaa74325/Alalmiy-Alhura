<template>
    <div class="header-solutions">
        <div class="container-m">
            <div class="row flex-sp">
                <div class="col-lg-6 col-md-12 flex-column hi">
                    <h2 class="header-h2">Launch a <span>Fashion</span></h2>
                    <h3>Ecommerce App</h3>
                    <p>With online stores being the most popular type of marketplace today, having an e-commerce app can offer affordability, flexibility, and a wide range of products that users can choose from.</p>
                    <comman-btn class="solutions-btn">Get Started</comman-btn>
                </div>
                <div class="col-lg-6 col-md-12 " style="background:transparent">
                    <video width="850" height="650" autoplay loop>
                        <source src="../../assets/img/solutions/mockrocket-export (1).mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <solutionsEcommerceApps></solutionsEcommerceApps>
    </div>
</template>
<script>
import CommanBtn from '../CommanBtn.vue'
export default {
    components: { CommanBtn },
    
}
</script>
<style lang="scss">
/* main variables */
$solutionsColor:#339989;
/* Main Classes */

.flex-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
/* Start  Styling */
.header-solutions{
    background: url("../../assets/img/solutions/Vector.png");
    background-repeat: no-repeat;    
    background-position: -29% 33%;
    background-size: 56% 44%;
    video{
        width: 120%;
        height: 630px;
    }
    .header-h2{
        font-size:53px;
        font-weight: 900;
        line-height: 60px;
        margin-bottom: 10px;
        span{
            color:$solutionsColor;
        }
    }
    h3{
        font-size: 44px;
        margin-bottom: 15px;

    }
    p{
        font-size: 15px;
        margin-bottom: 30px;
        line-height: 25px;
        font-weight: 300;
    }
    
}
/* Comman Solutions Button Re-Styling */
.solutions-btn button{
    padding:8px 22px !important;
    border-color:$solutionsColor ;
    font-size: 15px !important;
    font-weight: 300;
    background: $solutionsColor !important;
    &:hover {
        color:$solutionsColor;
        background: #fff !important;

    }
}
/* Media Handling*/
@media (max-width:768px) {
    .header-solutions{
        background-position: -30% 6%;
        background-size: 63% 25%;
        .header-h2{
            margin-top: 50px;
        }
    }
    
}
@media (max-width:500) {
    .header-solutions{
        background-position: -177% 6%;
        background-size: 90% 27%;
        h3{
            font-size: 32px;
        }
        h2{
            font-size: 50px;
        }
    }
    
}
</style>