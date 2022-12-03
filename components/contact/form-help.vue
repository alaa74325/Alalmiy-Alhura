<template>
    <div class="form">
        <div class="container-m form-help">
                <h6 class="h6">Contact Us</h6>
                <h2>You Want to Grow?<br>
                <span>We’re Here to Help.</span></h2>
                <div>
                    <form class="row flex-sp">
                        <div class="col-lg-6 col-sm-12">
                            <input type="text" placeholder="Your Full Name"/>
                            <input type="email" placeholder="Your Email"/>
                            <input type="phone" placeholder="Phone Number"/>
                            <input type="text" placeholder="Your Subject"/>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <textarea>Type Youe Messagr Here</textarea>
                        </div>
                        <div class="input-submit col-lg-12">
                            <input type="submit" value="Send Your Message"/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</template>
<style lang="scss">

.form-help{
    .row{
        >*{
            padding: 0 !important;
        }
    }
    background:#fff;
    display:block !important;
        form{
            div{
                margin-bottom: 15px;
                *{
                    width: 99%;
                    outline: 0;
                    border: 1px solid #8d93ae;
                    border-radius: 8px;
                    font-size: 16px;
                    color:#8d93ae;
                    background: transparent;
                    margin: 15px 1% 0px 0;
                    padding: 17px ;
                }
                input{
                    &::placeholder{
                        color: inherit;
                        font-size: 16px;
                    }
                } 
                textarea{
                    height:calc(100% - 15px);
                }
                
            }
        }
        input[type=submit]{
            padding:  15px 18px ;
            font-size: 16px;
            width:200px;
            border:2px solid #29398C;
            border-radius: 8px;
            position: relative;
            display: inline-block;
            background: #29398C !important;
            color: #fff;
            &:hover{
                transition: 0.5s all ease-in-out;
                color:#29398C;
                background: #fff !important;

            }
        }
        h2{
            font-size: 43px;
            font-weight: 900;
            span{
                color: #29398C;
            }
        }
}
.email-field{
    width: 70%;
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
            background: #fff;
            border:1px solid #29398C;
            transition: 0.5s all ease-in-out;
        }
    }
}
.input-submit{
    display: flex;
    justify-content: flex-end;
    input{
        background: #fff !important;
        &:hover{
            transition: 0.5s all ease-in-out;
        }
    }
} 
@media (max-width:1024px) {
    .form-help h2 {
        font-size: 36px !important;
    }   
}
@media (max-width:768px) {
    .form-help h2 {
        font-size: 36px !important;
        height: auto !important;
    }    

}
</style>        