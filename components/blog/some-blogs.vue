<template>
    <div class="some-blogs">
        <div class="container-m">
            <h6>Be Update</h6>
            <h2>What's Happening</h2>
            <div class="row">
                <div class="col-lg-6 col-md-12" style="height:100%">
                    <blogCard class="one-card" >
                        <img src="@/assets/img/blog/s1.png"/>
                    </blogCard>
                </div>
                <div class="col-lg-6 col-md-12 cards-flex">
                    <blogCard v-for="card in cards" :key="card.id">
                    </blogCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cards:[
                {
                    src:'@/assets/img/blog/s2img2.png',
                    id:1
                },
                {
                    src:'@/assets/img/blog/s2img2.png',
                    id:2
                },
                {
                    src:'@/assets/img/blog/s2img2.png',
                    id:3
                },{
                    src:'@/assets/img/blog/s2img2.png',
                    id:4
                },
            ],
            src1:'@/assets/img/blog/s1.png'
        }
    }
}
</script>
<style lang="scss">
.some-blogs{
    .container-m{
        display: block !important;
    }
    .row{
        padding: 0 !important;
        >div{
            padding: 0 !important;
        }
    }
    .cards-flex{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        >div{
            width: 50%;
        }
    }
    h6 {
        color: #29398c;
        font-size: 13px;
    }
    h2 {
        line-height: 55px;
        font-size: 44px;
        font-weight: 700;
        margin: 10px auto 15px;
    }
}
.one-card{
    .card-blog {
        width: 98%;
        padding-bottom: 0px;
    }
    .overlay{
        height:100% ;
        bottom: 0;
    }
    img{
        height: 100% !important;
    }
    .card-content{
        width: 55%;
        .header-content{
            span{
            }
        }
    }
}
@media (max-width:500px) {
    .cards-flex{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        >div{
            width: 100% !important;
        }
    }
    .one-card{
        .card-content{
            width: 90%;
            
        }
}
}
</style>