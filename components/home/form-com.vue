<template>
    <div class="form">
        <div class="container-m inner-form">
            <div class="overlay">
                <h2>Let's Take.</h2>
                <p>Let's Build Best Digital Solutions For Your Business Now!</p>
                <div>
                    <form class="row flex-sp">
                        <div class="col-lg-6 col-sm-12">
                            <input type="text" placeholder="Your Full Name"/>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <input type="text" placeholder="Your Email"/>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <input type="phone" placeholder="Phone Number"/>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <select>
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                                <option>option4</option>
                            </select>
                        </div>
                        <div class="col-lg-12">
                            <textarea>Your Email</textarea>
                        </div>
                        <div class="input-submit col-lg-12">
                            <input type="submit" value="Send Request"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.form{
    height: auto;
}
.inner-form{
    background:#29398C;
    border-radius: 25px;
    position: relative;
    top:100px;
    z-index: 1;
    .overlay{
        width: 100%;
        background: url('@/assets/img/home/bg - img.png');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 50px 3%;
        color:#fff;
        form{
            div{
                *{
                    width: 99%;
                    outline: 0;
                    border: 1px solid #8d93ae;
                    border-radius: 8px;
                    font-size: 16px;
                    color:#fff;
                    background: transparent;
                    margin: 10px 0.5%;
                    padding: 17px ;
                }
                input{
                    &::placeholder{
                        color: #fff;
                        font-size: 16px;
                    }
                } 
                textarea{
                    height: 200px;
                    margin-bottom: 15px;
                }
                
            }
        }
        input[type=submit]{
            padding:  8px 18px ;
            font-size: 16px;
            width: 150px;
            border:2px solid #29398C;
            border-radius: 8px;
            color:#29398C;
            position: relative;
            display: inline-block;
            &:hover{
                color: #29398C;
                background: #fff;
                border:1px solid #29398C;
                transition: 0.5s all ease-in-out;
            }
        }
        h2{
            font-size: 43px;
            font-weight: 800;
        }
        p{
            font-size: 12px;
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
            background:rgb(227, 220, 220) !important;
            transition: 0.5s all ease-in-out;
        }
    }
} 
@media (max-width:1024px) {
    .inner-form .overlay h2 {
        font-size: 36px !important;
    }   
}
@media (max-width:768px) {
    .inner-form .overlay h2 {
        font-size: 36px !important;
        height: auto !important;
    }    

}
</style>        