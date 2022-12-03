<template>
    <div class="want-increase">
        <div class="container">
            <div class="row">
                <div 
                class="increase-img col-lg-6 col-md-12"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-delay="800">
                    <img src="../../assets/img/solutions/Group 17822.png"/>
                </div>
                <div 
                class="col-lg-6 col-md-12 increase-text"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-delay="800">
                    <h3>Want to increase your income
                    <br/>of your store?</h3>
                    <p>With the help of our best-in-class online ecommerce delivery app development solution, 
                    take it online and attract more users. our all solutions include - a customer app, a seller 
                    app, and a robust admin panel that can attract not just traffic but sales and revenue as 
                    well.</p>
                    <comman-btn class="back-none">Get Started</comman-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
/* main variables */
$solutionsColor:#339989;
.want-increase{
    background:$solutionsColor;
    position: relative;
    margin: 115px 0;
    .increase-img{
        position: relative;
        
        img{
            position: absolute;
                top: -94px;
                width: 60%;
        }
    }
    .increase-text{
        padding: 80px 0 ;
        color: #fff;
        h3{
            margin-bottom: 20px;
            font-size: 30px;
            font-weight: 600;
        }
        button{
            margin:10px 0 !important;
            color:#fff !important;
            display: inline-block;
            border-color: #fff;
            &:hover{
                color: $solutionsColor !important;
                background: #fff !important;
            }
        }

    }
}
/* Media Handling */

@media (max-width:768px) {
    .want-increase{
        background:$solutionsColor;
        position: relative;
        margin: 20px 0 0;
        .increase-img{
            margin: 50px 0;
            z-index: 1;
            img{
                position: relative;
                width: 70%;
                margin: 0 15%;
                top: 0;
            }
        }
        .increase-text{
            padding: 30px 0;
            z-index: 1;
        }
    }
}
@media (max-width:426px) {
    .want-increase{
        background:$solutionsColor;
        position: relative;
        margin: 20px 0 0;
        .increase-img{
            margin: 20px 0;
            img{
                position: relative;
                width: 70%;
                margin: 0 15%;
                top: 0;
            }
        }
        .increase-text{
            padding: 0 0 30px;
        }
    }
}
</style>