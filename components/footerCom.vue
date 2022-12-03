<template>
    <div class="footer">
        <div class="container-m">
                <div class="row flex-sp">
                    <div class="col-lg-4 col-md-12 col-sm-12 logo-div">
                        <img src="../assets/img/home/EN2.png" class="logo">
                        <p>We are Keen to Provide You with Innovative Digital Solutions; 
                            depending On Our Extensive Experience in The Field of
                            Information Technology.
                        </p>
                        <img src="../assets/img/home/Group 17751.png">
                        <img src="../assets/img/home/Group 17751.png">
                        <img src="../assets/img/home/Group 17751.png">
                        <img src="../assets/img/home/Group 17751.png">
                        <img src="../assets/img/home/Group 17751.png">
                        <img src="../assets/img/home/Group 17751.png">
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <h6>Quick Access</h6>
                        <ul>
                            <li>Mobile App Development</li>
                            <li>UX/UI Designing</li>
                            <li>Web Design</li>
                            <li>Website Development</li>
                            <li>Mobile Development</li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <h6>Main Links</h6>
                        <ul>
                            <li>Home</li>
                            <li><router-link to="/about">About Us</router-link></li>
                            <li>Alalmiya World</li>
                            <li>Protfolio</li>
                            <li>Blog</li>
                        </ul> 
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 foot-last">
                        <h6>Subscribe For Latest Updates</h6>
                        <p>Make the right business move.</p>
                        <p class="email-field">
                            <input type="email" placeholder="Enter Your Email"/>
                            <button>Subscribe</button>
                        </p>
                        <p style="background:#E8EBF6;border-radius:8px;padding:10px;margin-bottom:8px">
                            <i class="fa-solid fa-envelope"></i> 
                            <span ref="copy">
                                sales@alalmiyaalhura.com
                            </span>
                            <button @click="copyLink('copy')">
                                <i class="fa-regular fa-copy"></i>
                            </button>
                        </p>
                        <p style="background:#E8EBF6;border-radius:8px;padding:10px;margin-bottom:8px">
                            <i class="fa-solid fa-envelope"></i> 
                            <span ref="copy1">
                                sales2@alalmiyaalhura.com
                            </span>
                            <button @click="copyLink('copy1')">
                                <i class="fa-regular fa-copy"></i>
                            </button>
                        </p>
                    </div>
                </div>
        </div>
        <footer>
                &copy; 2022 Al Almiya Al Hura. All Rights Reserved
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
        copyLink(elementRef){
            let targetElementText =this.$refs[elementRef].innerText;
            // targetElementText.execCommand("copy");
            navigator.clipboard.writeText(targetElementText);
            this.$notify.success({
                title: 'OK',
                message:  `${ targetElementText } copied`,
            })
        }
    }
}
</script>
<style lang="scss">
.footer{
    background: #F2F4FB;
    padding: 150px 0 0;
    .logo-div{
        p{
            border-bottom: 2px solid #eee;
        }
        img{
            cursor: pointer;
        }
    }
    .logo{
        width: 300px;
        height: auto;
        margin-bottom: 50px;
        object-fit: contain;
        
    }
    h6{
        font-weight: 600;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 40px;
        li{
            display:block;
            cursor: pointer;
            font-size: 15px;
            margin-top:20px;
            transition: all 0.6s linear;
            &:hover{
                color:#29398c;
                font-weight: 600;
            }
            a{
                color:inherit;
                text-decoration: none;
            }
        }

    }
    p{
        display: flex;
        font-size: 13px;
        padding-bottom: 10px;
        justify-content: space-between;
        button{
            outline: 0;
            border: 0;
            background: transparent;
        }
        span{
            display: inline-block;
            font-size: 14px;
            .fa-envelope{
                display: inline-block;
                margin-right: 10px;
                color: black;

            }
        }
        .fa-envelope, .fa-copy{
            display: inline-block;
            font-size: 18px;
            color:rgb(177, 176, 176)
        }
    }
    img{
        width: 37px;
        height: 37px;
        display: inline-block;
        margin-right: 15px;
        margin-bottom:50px;
        object-fit: contain;
        .email-field{
            width: 100% !important;
            margin: 0;
            }
    }
    .foot-last{
        margin-bottom: 40px;
        p{
            width: 100%;
        }
    }
}
footer{
    background: #29398C;
    width:100%;
    font-size: 15px;
    line-height: 80px;
    color:#fff;
    text-align: center;
    font-weight: 300;
}
.email-field{
    position: relative;
    background: #fff;
    padding:  8px;
    border-radius: 8px;
    margin-bottom: 25px;
    width: 100%;
    input{
        width: 100%;
        border: 0;
        outline: 0;
        &::placeholder{
            color:#29398C;
            font-size: 13px;
        }

    }
    button{
        background: #29398C !important;
        outline: 0;
        border-radius: 8px;
        border:0;
        color:#fff;
        padding:  8px ;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
    }
}
@media (max-width:768px) {
    .footer{
        padding-top:150px !important;
    }
    
}
@media (max-width:1024px) {
    .footer{
        padding-top:150px !important;
        .col-md-6{
            width: 50% ;        
        }
    }
    .row{
        justify-content: center;
    }
    
    
}
@media (max-width:425px) {
    footer {
    font-size: 13px;
    line-height: 70px;
    }
}
</style>