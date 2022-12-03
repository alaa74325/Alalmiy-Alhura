<template>
    <div class="subscribe">
        <div class="inner-subscribe">
            <div class="overlay">
                <h1>
                    Subscribe To Our Newsletter
                    To Get New Updates
                </h1>
                <p>Stay in touch with our team here at Al Almiya Al Hura and learn about our latest creations<br>
                    and projects from our regular newsletter.</p>
                <p class='email-field'  data-aos="zoom-out"  data-aos-delay="500">
                    <input type="email" placeholder="Enter Your Email"/>
                    <button>Subscribe</button>
                </p>
                
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.inner-subscribe{
    background:#29398C;
    margin-bottom: 50px;
    .email-field{
        width: 70%;
    }
    .overlay{
        width: 100%;
        background: url('@/assets/img/home/bg - img.png');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 60px 15%;
        text-align: center;
        h1{
            color:#fff;
            font-size: 49px;
            font-weight: 800;
            line-height: 70px;
        }
        p{
            color:#fff;
            font-size: 13px;
        }
        .email-field{
            margin: 40px auto;
            padding:  18px;
            input{
                &::placeholder{
                    font-size: 15px;
                }
            }
            button{
                padding:  8px 18px ;
                top: 2px;
                right: 2px;
                bottom: 2px;
                font-size: 16px;
                border:2px solid #29398C;
                &:hover{
                    color: #29398C;
                    background:#fff !important;
                    border:1px solid #29398C;
                    transition: 0.5s all ease-in-out;
                }
            }
        }
    }
}
@media (max-width:1024px) {
    .overlay{
        h1{
            font-size: 33px !important;
            line-height: 40px !important;
        }
        p {
        width: 100% !important;
        }
    }
}
@media (max-width:425px) {
    div.overlay{
        padding: 50px 5% !important;
    }
    .inner-subscribe .overlay .email-field[data-v-7c6e64c2] {
        margin: 20px auto;
    }
}
</style>