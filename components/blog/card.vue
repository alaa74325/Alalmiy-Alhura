<template>
    <div>
        <div class="card-blog">
            <span class="categery">News</span>
            <slot>
                <img src="@/assets/img/blog/s2img3.png"/>
            </slot>
            <div class="overlay">
            </div>
            <div class="card-content">
                <p class="header-content">
                    <span>27 Oct 2022</span>
                    <span>
                        <i class="fa-regular fa-eye"></i>
                        2433
                    </span>
                </p>
                <h4>The Complete Guide to Web Hosting</h4>
                <p>Learn about web hosting, what it entails, and 
                why it's necessary if you want to share any 
                type of website on the internet.</p>
                <comman-btn class="back-none"> 
                    <router-link to="/blog/blog-details">Show More </router-link>
                    <i class="fa-solid fa-arrow-right"></i>
                </comman-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        card: {
            type: Object,
        }
    }    
}
</script>
<style lang="scss">
/* main colors */
$mainColor:#29398C;
.card-blog{
    width: 96%;
    margin: 15px auto;
    position: relative;
    border-radius: 10px;
    padding-bottom:100px ;
    .overlay{
        background: linear-gradient(#14132479,#0000);
        z-index: 2;
        position: absolute;
        width: 100%;
        height:calc(100% - 100px);
        top: 0;
        left:0;
        right: 0;
        border-radius: 10px;
    }
    .categery{
        position: absolute;
        border:1px solid #fff;
        border-radius: 5px;
        padding: 6px 15px ;
        color:#fff;
        top: 10px;
        left:10px;
        z-index: 3;
        font-size: 14px;
    }
    img{
        z-index: 1;
        width: 100%;
        display: inline-block;
        border-radius: 10px;
    }
    .card-content{
        background: #fff;
        border-radius: 0 0 10px 10px ;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 4;
        border:1px solid #8F98C5;
        width: 85%;
        padding-bottom: 10px;
        .header-content{
            background:$mainColor;
            color:#fff;
            font-size: 14px;
            display: flex;
            padding: 5px;
            justify-content: space-between;
            position: relative;
            top: -1px;
            left: -1px;
            width: calc(100% +  2px);
            span{
                display: inline-block;
            }
        }
        h4{
            font-size: 13px;
            padding: 5px;
            margin-bottom: 0;
        }
        p{
            font-size: 11px;
            padding: 5px ;
            margin-bottom: 0;
        }
        .commanbtn{
            position: relative;
            display: block;
            height: 30px;
            button{
                border:none;
                display: inline-block !important;
                position: absolute;
                right: 10px;
            }

        }
    }

}
</style>