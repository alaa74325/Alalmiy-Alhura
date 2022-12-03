<template>
    <div class="tools">
        <div class="inner-text">
                <h6  class="h6">We always improve</h6>
                <h2>Technologies and Tools</h2>
                <p>Turning your ideas into cutting-edge technologies. Turning <br>your ideas
                into cutting-edge technologies</p>
                <img src="@/assets/img/home/Group 17774.png" />
        </div> 
        <div class="container-m">
            <div class="row">
                <homeTool 
                    v-for="tool in tools " 
                    :key="tool.title"
                    :tool="tool"
                    class="col-lg-6 col-md-12"
                ></homeTool>
            </div>

        </div>
    </div>
</template>
<style lang="scss">
.tools{
    margin:50px auto;
    .row{
        width: 100%;
    }
    .inner-text{
        color:black;
        width: 84%;
        margin:50px  8% 30px;
        position: relative;
        
        h2{
            font-size: 42px;
            font-weight: bold;
        }
        p{
            font-size: 13px;
        }
        img{
            width: 100px;
            height: 100px;
            position: absolute;
            top: 45%;
            right: 52%;
            z-index: -1;
            object-fit: contain;
            animation: fitMode 1.5s ease-in-out infinite;
        }
    }
    
    
}
@keyframes fitMode {
    0%{
        object-fit: contain;
    }
    50%{
        object-fit: cover;
    }
    100%{
        object-fit: contain;
    }
}
@media (max-width:768px) {
    .inner-text{
        h2{
            font-size:28px !important;
            font-weight: 400;
        }
        img{
            width: 80px;
            height: 160px;
            position: absolute;
            top: 45%;
            right: 3% !important;
            z-index: -1;
        }
    }
}
</style>
<script>
export default {
    data(){
        return{
            tools:[
                {
                    title:'Design',
                },
                {
                    title:'Mobile Development',
                },
                {
                    title:'Front-End',
                },
                {
                    title:'Back-End',
                },
            ]
        }
    }
}
</script>