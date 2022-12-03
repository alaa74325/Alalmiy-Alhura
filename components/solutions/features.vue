<template>
    <div class="features">
        <div class="container-m">
            <div class="row">
                <div class="col-lg-6 col-md-12 feature-img"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="500">
                    <img src="../../assets/img/solutions/Group 17825.png"/>
                </div>
                <div class="col-lg-6 col-md-12 flex-column"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    data-aos-delay="500">
                    <solutionsFeaturesDetails></solutionsFeaturesDetails>
                </div>
                <img src="@/assets/img/home/Group.png" class="lastest-img"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.flex-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.features{
    position: relative;
    z-index: 1;
    .feature-img{
        background: url("../../assets/img/solutions/Ellipse 1109.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 90%;
        padding: 50px 0;
        transition: background-size 0.2s ease-in-out;
        img{
            width: 70%;
            display: inline-block;
            margin: 0 15%;
            transition: width 0.2s ease-in-out;
        }
        &:hover{
            cursor: pointer;
            background-size: 94% !important;
            img{
                width: 68%;
            }
        }
    }
}
</style>