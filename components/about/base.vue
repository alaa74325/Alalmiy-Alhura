<template>
<div class="about">
    <div class="container-m">
    <div class="row">
        <div
        class="about-text col-lg-6 col-sm-12 col-md-12"
        data-aos-delay="1000"
        data-aos="zoom-in-down"
        >
        <h6>About Us</h6>
        <h3>Best IT Solution For Your Business Theme</h3>
        <p>
            Business solution company sit our any how site used the our company
            any site us it-solve theme is very professional theme business &
            corporate, finance, advisor, solution, company and all project used.
        </p>
        <span class="img">5+</span>
        <span class="after-img">Years of experience in software services.</span>
        </div>
        <div
        class="about-img col-lg-6 col-sm-12 col-md-12"
        data-aos="zoom-in-up"
        data-aos-delay="1000"
        >
        <img src="@/assets/img/home/Group 17781.png" />
        </div>
    </div>
    </div>
</div>
</template>
<style lang="scss">
.about {
margin: 150px auto 0;
.about-img {
    height: auto;
    img {
    width: 100%;
    }
}
.about-text {
    padding-left: 40px;
    h6 {
    color: #29398c;
    font-size: 13px;
    }
    h3 {
    line-height: 55px;
    font-size: 44px;
    font-weight: 700;
    margin: 10px auto 15px;
    }
    p {
    color: #141324;
    font-size: 15px;
    margin-bottom: 15px;
    line-height: 30px;
    }
    span.after-img {
    font-size: 14px;
    line-height: 50px;
    display: inline-block;
    color: #8f98c5;
    margin-left: 15px;
    margin-bottom: 20px;
    }
    .img {
    color: #8f98c5;
    font-size: 32px;
    font-weight: bold;
    line-height: 70px;
    padding: 15px 20px;
    background: url('@/assets/img/home/6797f87605103139e83a9e0c379b689b.png');
    background-repeat: no-repeat;
    background-size: contain;
    }
    p {
    button {
        margin: 25px 0 !important;
        padding: 8px 25px;
    }
    }
}
}
@media (max-width: 768px) {
.about-text {
    margin-top: 50px;
}
.about-img {
    height: 450px;
}
}
@media (max-width:425px) {
.container-m{
width: 90%;

}

.about .about-text{
padding-left: 0;
}
.about .about-text h3 {
    line-height: 36px;
    font-size: 28px;
    font-weight: 700;
    margin: 10px auto 15px;
}
.about .about-text .img {
    color: #8f98c5;
    font-size: 23px;
    font-weight: bold;
    line-height: 30px;
    padding: 12px 20px;
}
    .about .about-text span.after-img {
        font-size: 10px;
        line-height: 20px;
        display: inline-block;
        color: #8f98c5;
        margin-left: 0;
        margin-bottom: 20px;
    }
}
</style>