<template>
    <div class="features-third" ref="festures-scroll">
        <div class="container-m">
            <div class="row">
                <div 
                class="col-lg-6 col-md-12 flex-column"
                data-aos="fade-up-right"
                data-aos-delay="500">
                    <solutionsFeaturesDetails></solutionsFeaturesDetails>
                </div>
                <div 
                class="col-lg-6 col-md-12 feature-img"
                data-aos="fade-up-left"
                data-aos-delay="500">
                    <img src="../../assets/img/solutions/Group 1 (2).png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    /*
    created() {
        if(process.client){
            window.addEventListener("scroll", this.handleScroll);
        }

    },
    methods:{
        handleScroll() {
            if(process.client){
            var currentScrollPosition = window.scrollY

            if(currentScrollPosition < this.scrollPosition){
                console.log("Scrolling up");
                this.showFullNav = true;
                this.$refs['festures-scroll'].style.backgroundSize-='5%';
            }
            else{
                this.showFullNav = false
                console.log("Scrolling down");
                this.$refs['festures-scroll'].style.backgroundSize+='5%';
                
            }
            this.scrollPosition = window.scrollY
            }
        }, 
    },
    destroyed() {
        if(process.client){
        window.removeEventListener("scroll",this.handleScroll);  
        }

    },*/
}
</script>
<style lang="scss">
.flex-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
}
.features-third{
    background: url("../../assets/img/solutions/Ellipse 1109.png");
    background-repeat: no-repeat;
    background-position: 120% bottom;
    background-size: 32%;
    padding: 50px 0 100px;
    .feature-img{
        z-index: 1;
        img{
            width: 95%;
            display: inline-block;
            margin: 0 5%;
        }
    }
}
@keyframes animatedBackground {
    from {
        background-position: 50% 22%;
    }
    to {
        background-position: 100% 22%;
    }
}
@media (max-width:768px) {
    .features-third {
        background-position: 150% 90%;
        background-size: 49%;
        padding: 50px 0 50px;
    }
}
</style>