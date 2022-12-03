<template>
    <div class="container-m register">
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <h3>Sign Up</h3>
                <form @submit.prevent="onsubmit">
                    <div>
                        <input type="text" placeholder="Enter Full Name" v-model="user.fullname"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter E-mail" v-model="user.email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Phone" v-model="user.phone"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Password" v-model="user.password"/>
                        <i class="lab la-accessible-icon"></i>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter password confirm" v-model="user.password_confirm"/>
                        <i class="lab la-accessible-icon"></i>
                    </div>
                    <input type="submit" value="Sign Up"/>
                </form>
                <p>Are your Have an Account,already?<router-link to="login">Sign In</router-link></p>
            </div>
            <div class="col-lg-6 col-sm-12 img-login">
                <img src="../assets/login.jpg"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.register{
    margin: 100px auto;
    h3{
        text-align: center;
    }
    form{
        margin: 60px 0 0;
        div{
            width: 100%;
            line-height: 40px;
            border-radius: 8px;
            border:1px solid rgb(221, 219, 219);
            margin: 10px 0;
            padding: 5px;
            input{
                width: 100%;
                border:0;
                outline: 0;
                &::placeholder{
                    color:inherit;
                    font-size: inherit;
                }
            }
        }
        input[type="submit"]{
            width: 98%;
            line-height: 40px;
            color:rgb(255, 230, 0);
            background: rgb(90, 3, 114);
            border: 0;
            margin: 10px 0;
            border-radius: 8px;
            padding: 8px 1%;
        }
    }
    p{
        text-align: center;
        a{
            text-decoration: none;
        }
    }
    .img-login{
        border-radius: 0 20px 20px 0;
        overflow: hidden;
        padding: 0;
        img{
            width: 100%;
        }
    }
}
</style>
<script>
export default {
    layout:'empty',
    data(){
        return{
            user:{
                fullname:'',
                phone:null,
                password:null,
                password_confirm:null,
                email:null,
            }
        }
    },
    methods:{
        onsubmit(){
            console.log("hi");
        }
    }
}
</script>






/*import Vue from 'vue'

import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/Posts/PostList'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList) */