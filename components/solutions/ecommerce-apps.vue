<template>
    <div class="ecommerce-apps">
        <div class="container-m">
            <div class="row">
                <div class="apps-text col-lg-12">
                    <h3>Ecommerce App Solution</h3>
                    <p>Expand your business with our ecommerce app
                    <br>development solutions</p>
                </div>
                <SolutionsEcomApp 
                v-for="i in 6 " :key="i"
                class="col-lg-4 col-md-6 col-sm-12"
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                :data-aos-delay="(i*100)+500"
                ></SolutionsEcomApp>
                <comman-btn class="solutions-btn">Get Started</comman-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.ecommerce-apps{
    .solutions-btn{
        display: block;
        button{
            margin: 30px auto;
            display: block;
        }
    }
    .apps-text {
        text-align: center;
        h3{
            font-size: 25px;
        }
        p{
            font-size: 15px;
        }
    }
}
</style>