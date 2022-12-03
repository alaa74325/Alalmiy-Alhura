<template>
    <div>
        <div class="ecommerce-app">
            <i class="fa-solid fa-list-check"></i>
            <div class="app-content">
                <h4>Track Orders</h4>
                <p>
                    Track your drivers in real-time, analyze their 
                    performance, and improve your business 
                    processes to streamline deliveries using a 
                    robust admin panel.
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
/* Main Colors of Solutions page*/
$solutionsColor:#339989;
$fontColor:#141324;
.ecommerce-app{
    padding:20px  15px;
    display: flex;
    border:1px solid #8F98C5;
    border-radius:10px ;
    position: relative;
    width: 99.8%;
    margin: 10px 0;
    background: #fff;
    p{
        font-size: 13px;
        color:$fontColor;
        margin-bottom: 0 !important;
    }
    h4{
        font-size: 18px;
        font-weight: 600;
    }
    .fa-list-check{
        font-size:18px;
        padding: 10px 10px;
        background:$solutionsColor;
        border-radius: 50% ;
        display: inline-block;
        margin-right: 15px;
        transition: top 8s ease-in-out;
        color:#fff;
        position: relative;
    }
    .app-content{
        transition: left 8s ease-in-out;
    }
    &:hover{
        padding-top: 25px;
        .fa-list-check{
            position: absolute;
            background: #fff;
            color:$solutionsColor;
            transition: top 8s linear;
            top: -20px;
            border:1px solid #8F98C5;
        }
        .app-content{
            transition: left 8s ease-in-out;
            position: relative;
            left: 0;
        
        }
    }
}
</style>