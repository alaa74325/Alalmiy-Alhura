<template>
    <div class="why-com">
        <div>
            <img src="@/assets/img/home/medal-star.png" />
        </div>
        <div  class="details">
            <h4>{{why.title}}</h4>
            <p>{{why.description}}</p>
        </div>
    </div>
</template>
<style lang="scss"> 
.why-com{
    width: 100%;
    margin: 40px 50px 0;
    padding:30px 10px ;
    background: #D5FFF8;
    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    border:1px solid rgb(230, 226, 226);
        .details{
            h4{
                font-size: 25px;
                line-height: 25px;
            }
            p{
                color:#141324;
                font-size: 13px;
                line-height: 20px;
            }
        } 
        img{
            display: inline-block;
            margin: 0 20px;
            width: 45px;
        }
}
.why-com:nth-of-type(2){
    left:-25%;
    background: #F2F9FF;
}
.why-com:nth-of-type(3){
    left:-50%;
    background: #F2F4FB;
}
@media (max-width:1024px) {
    .why-com{
        left:0% !important;
        margin: 30px auto;
        left: 0 !important;;
    }
}
</style>
<script>
export default {
    props: {
        why: {
            type: Object,
            required: true,
        }
    },
}
</script>