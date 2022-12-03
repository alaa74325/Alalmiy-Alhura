<template>
    <div class="header-com">
        <div class="container-m">
            <div class="left">
                <img src="../assets/img/home/EG - Egypt.png" /><span>+201018930559</span>
                <img src="../assets/img/home/AE - United Arab Emirates.png" /><span>+201018930559</span>
                <img src="../assets/img/home/SA - Saudi Arabia.png" /><span>+201018930559</span>
            </div>
            <div class="right">
                <router-link to=""><img src="../assets/img/home/Icon awesome-behance-square.png" /></router-link>
                <router-link to=""><img src="../assets/img/home/Icon awesome-twitter-square.png" /></router-link>
                <router-link to=""><img src="../assets/img/home/Icon awesome-instagram.png" /></router-link>
                <router-link to=""><img src="../assets/img/home/Icon awesome-facebook-square.png" /></router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.left,.right{
    margin-top:15px;
    font-size: 14px;
    img{
        width: 18px;
    }
    span{
        display: inline-block;
        margin-right: 20px;
        margin-left: 5px;
    }
}

.right img{
    margin-left: 15px;
    height: 17px;
}

</style>