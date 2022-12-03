<template>
    <div class="features">
        <div class="container-m">
            <div class="row">
                <div class="col-lg-6 col-md-12 flex-column"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="500">
                    <solutionsFeaturesDetails></solutionsFeaturesDetails>
                </div>
                <div class="col-lg-6 col-md-12 " style="background:transparent">
                    <video  autoplay loop>
                        <source src="../../assets/img/solutions/mockrocket-export (3).mp4" type="video/mp4">
                    </video>
                </div>
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
    video{
        width: 100%;
        height: 100%;
    }
}
</style>