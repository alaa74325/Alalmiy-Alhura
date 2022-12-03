<template>
    <div class="layout">
        <header-cont />
        <nav-bar/>
        <Nuxt/>
        <footer-com></footer-com>
    </div>
</template>
<script>
import footerCom from '../components/footerCom.vue'
export default {
  components: { footerCom },
    head(){
        return{
            titleTemplete:'%s - Al Alamiya Alhura',
            meta:[{
                hid:'description',
                name:'description',
                content:'We turn your ideas into parther ',
            }]
        }
    }
}
</script>
<style lang="scss">
body{
    overflow-x: hidden;
}
body::-webkit-scrollbar{
    background:  #e4e4e4e4;
    width: 15px;
}
body::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background:#29398C;
    width:0;
}
*{
    font-family: 'Poppins', sans-serif;
}
/* start Global Classes*/
.h6 {
    color: #29398c;
    font-size: 13px;
    }
.d-none{
    display: none;
}
.col-3{
    width: 25%;
}
.col-4{
    width: 32%;
}
.col-6{
    width: 50%;
}
.col-12{
    width: 100%;
}
.container-m{
    width: 84%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.row{
    margin: auto !important;
}
.layout{
    width: 100%;
    overflow-x: hidden;
}
.back-none button{
    background: transparent !important;
    color:#29398C !important;
    margin-left: 15px !important;
    display: block !important;
    cursor: pointer;
    z-index: 100 !important;
    &:hover {
        background: #29398C !important;
        color: #fff !important;
        transition: all 0.8s ease-in-out;
    }
    .fa-arrow-right{
        font-size: 16px !important;
        line-height: 24px;
        display: inline-block;
        margin-left: 5px;
    }
}
.flex-sp{
    display: flex;
    justify-content: space-between !important;
}
.row{
    width: 100%;
    margin: auto;
    height: auto;
}
.slick-slider {
    width:auto !important;
}
@media (max-width:425px) {
    .container-m{
        width: 95%;
        margin: auto;
    }
    .footer .logo {
        width: 100%;
    }
    .inner-subscribe .overlay {
        padding: 20px 5% !important;
    }
    
}
/* End Global Classes*/
</style>