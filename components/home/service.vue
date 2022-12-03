<template>
    <div class="service">
        <div class="child">
            <h2>{{service.id}}.</h2>
            <div class="top">
                <h3>{{service.title}}</h3>
                <img  src="@/assets/img/home/arrow-right.svg"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.service{
    padding: 0.5%;
    .child{
        background: #29398C;
        border-radius:8px;
        border:1.5px solid #8F98C5;
        color:#fff;
        padding: 10px 20px;
        transition: all 0.6s ease-in-out 0.6s;
        h2{
            font-size: 40px;
            line-height: 60px;
            margin-top: 15px;
            font-weight: bold;
            transition: all 0.6s ease-in-out;
        }
        h3{
            font-size:22px;
            font-weight: 400;
        }
        img{
            color:#fff;
            display: inline-block;
            margin-bottom: 10px;
            width: 20px;
            position: relative;
        }
    }
    .top{
        position: relative;
        transition: all 0.6s ease-in-out ;
        transform: translateY(0px);
    }
    &:hover{
        .child{
            transition: border 0.6s ease-in-out 0.6s;
            border:0;
            cursor: pointer;
            position: relative;
            background:transparent;
            padding: 0 auto;
        }
        .top{
            transition:all 0.6s ease-in-out;
            z-index: 3;
            transform: translateY(-80px);
            img{
                width: 35px;
            }
        }
        h2{
            font-size: 130px;
            line-height: 100px;
            color: rgba(255, 255, 255, 0.079);
            position: relative;
            font-weight: 800;
            z-index: 2;
            top:5%;
            left:5%;
            transition:all 0.6s ease-in-out;
        }
        
    } 
}
@media (max-width:768px) {
    .service{
        padding: 1.5% 0.5%;
        &:hover{
            margin-bottom: 50px;
        }
    }
    
}
</style>
<script>
export default {
    props:{
        service: {
            type:Object,
            required:true

        },

    }
}
</script>