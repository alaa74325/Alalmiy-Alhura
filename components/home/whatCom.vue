<template>
    <div class="what" >
        <img src="@/assets/img/home/pramod-tiwari-AI-fDmJwNfc-unsplash.png"/>
        <div class="what-content">
            <div style="position:relative;">
                <h6>{{what.date}}</h6>
            </div>
            <h5>{{what.title}}</h5>
            <p>{{what.description}}</p>
            <comman-btn class="back-none"> Show More <i class="fa-solid fa-arrow-right"></i></comman-btn>
        </div>
    </div>
</template>
<style lang="scss"> 
.what{
    position: relative;
    padding-bottom:50px;
    margin-bottom: 50px;
    .what-content{
        background: #fff;
        position: absolute;
        right: 0;
        bottom: 0%;
        width: 80%;
        padding: 10px ;
        box-shadow: 2px 2px 8px #d3d2dc;
        h5{
            font-size: 15px;
            line-height: 22px;
        }
        p{
            color:#7A7A7A;
            font-size: 12px;
            line-height: 18px;
            margin-top: 0;
        }
        h6{
            position: absolute;
            bottom:2px;
            z-index: 1;
            background: #404D96;
            padding: 8px;
            left: -10px;
            color:#fff
        }
        button{
            line-height: initial;
            border: 0;
            display: block;
            margin: 0 !important; 
            img{
                margin-bottom: 0;
            }
        }
    } 
    img{
        display: inline-block;
        width: 102%;
        height: 90%;
    }
}
@media (max-width:1024px) {
    .what{
        button{
            left:90% !important;
        }
    }
}
@media (max-width:426px) {
    .what-content p{
        margin-bottom: 0 !important;
    }
}
</style>
<script>
export default {
    props: {
        what: {
            type: Object,
            required: true,
        }
    },
}
</script>