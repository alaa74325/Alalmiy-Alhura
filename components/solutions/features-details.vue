<template>
    <div class="features-details">
        <h6>Some Features Of Our</h6>
        <h2>Ecommerce App Solution</h2>
        <p>Let Your Customers Order Hassle-Free From Your App & Website And Provide Them An Omnichannel Experience Using Amazing Features.</p>
        <div class="features-examples">
            <span>
                <i class="fa-solid fa-filter"></i>
                Filter Products
            </span>
            <span>
                <i class="fa-solid fa-wallet"></i>
                Multi Payment Options
            </span>
            <span>
                <i class="fa-solid fa-bag-shopping"></i>
                Order Status
            </span>
            <span>
                <i class="fa-solid fa-layer-group"></i>
                User-Friendly Interface
            </span>
            <span>
                <i class="fa-solid fa-bag-shopping"></i>
                Order Status
            </span>
            <span>
                <i class="fa-solid fa-grip"></i>
                Hassle-Free Ordering
            </span>
        </div>
        <comman-btn class="solutions-btn"> Get Started</comman-btn>
    </div>
</template>
<style lang="scss">
/* main variables */
$solutionsColor:#339989;
$fontColor:#141324;

.features-details{
    h6{
        font-size: 13px;
        color:$solutionsColor;
    }
    p{
        margin-top: 15px;
        font-size: 14px;
        width: 70%;
        line-height: 30px;
        color: $fontColor;
    }
    .features-examples{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        span{
            display:inline-block;
            margin: 10px 0;
            width:35%;
            font-size: 14px;
            color:$fontColor;
            .svg-inline--fa{
                display: inline-block;
                color: $solutionsColor;
                font-size: 18px;
                margin-right: 10px;
                
            }
            &:hover{
                cursor: pointer;
                font-size: 15px;
                .svg-inline--fa{
                    animation: swing 0.5s ease-in-out;
                    font-size: 19px;
                }
            }
        }
    }
    button{
        margin: 30px 0;
    }
}
@keyframes swing {
    0%,30%,50%,70%,100% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(10deg);
    }

    40% {
        transform: rotate(-10deg);
    }

    60% {
        transform: rotate(5deg);
    }

    80% {
        transform: rotate(-5deg);
    }
}
/* Media Handling */
@media (max-width:1024px) {
    .features-details{
        .features-examples{
            span{
                width: 50%;
            }
        } 
    } 
}
@media (max-width:768px) {
    .features-details{
        margin: 50px 0 !important;
        .features-examples{
            span{
            }
        } 
    } 
    
    
}
@media (max-width: 426px){
    .features-details{
        p{
            width: 100%;
        }
        .features-examples{
            span{
                width: 100%;
            }
        } 
    }
}
@media (max-width:321px) {
    .header-solutions{ 
        .header-h2 {
            font-size: 40px;
            line-height: 45px;
        }
        h3{
            font-size: 30px;
        }
    }    
}
</style>