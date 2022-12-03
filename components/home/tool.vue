<template>
    <div class="tool">
        <div class="tool-content">
            <h3>{{tool.title}}</h3>
            <img src="@/assets/img/home/Group 17730.png"/>
            <img src="@/assets/img/home/Group 17725.png"/>
            <img src="@/assets/img/home/Group 17728.png"/>
            <img src="@/assets/img/home/Group 17726.png" />
        </div>
    </div>
</template>
<style lang="scss">
.tool{
    padding: 1% 1%;
    .tool-content{
        border:1.5px solid rgb(207, 203, 203);
        width: 100%;
        border-radius: 8px;
        padding: 6%;
        background: #fff;
        z-index: 1;
        h3{
            font-size: 25px;
            margin-bottom:25px;
        }
        img{
            display: inline-block;
            margin-right: 25px;
            width:40px;
            filter: grayscale(100%);
            position: relative;
            &:hover{
                transition: all 0.6s linear;
                filter: grayscale(0%);
                cursor: pointer;
                top:-4px;
            }
        }

    }
}
</style>
<script>
export default {
    props:{
        tool:{
            type:Object,
            required:true,
            }
    }
}
</script>