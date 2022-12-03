<template>
    <div class="nav ">
        <div class="container-m">
            <div class="logo col-3 "  data-aos="zoom-in-up"  data-aos-delay="500">
                <router-link to="#"><img src="../assets/img/home/EN2.png"/></router-link>
            </div>
            <div class=" nav-list  col-9" ref="sidebar">
                <ul>
                    <li><router-link to="/"  >Home</router-link></li>
                    <li><router-link to="/solutions"  >Solutions <i class="uil uil-angle-down"></i></router-link>
                        <div class="dropdown  d-none">
                            <router-link to="/">Solution One</router-link>
                            <router-link to="/">Solution Two</router-link>
                            <router-link to="/">Solution Three</router-link>
                        </div>
                    </li>
                    <li><router-link  to="/services"  > Services<i class="uil uil-angle-down"></i></router-link>
                        <div class="dropdown d-none"> 
                            <router-link to="/">Service One</router-link>
                            <router-link to="/">Service Two</router-link>
                            <router-link to="/">Service Three</router-link>
                        </div>
                    </li>
                    <li><router-link to="/portfolio">Portfolio</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
                <comman-btn>Get a Quote</comman-btn>
                <button class="menu" @click="toggleMenu('sidebar')">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
            <button class="menu" @click="toggleMenu('sidebar')">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMenu:false,

        };
    },
    methods: {
        toggleMenu(elementRef) {
            this.$refs[elementRef].classList.toggle('d-block-m');
        },
    },
};
</script>
<style lang="scss"> 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.nav{
    width:100%;
    line-height: 100px;
}
.logo{
    img{
        width: 200px;
        display: inline-block;
        object-fit: contain;
        line-height: 100px;
    }
    a{
        display: inline-block;
        line-height: 100px;
    }
}
.nav-list ul{
    list-style: none;

}
.nav-list {
    display: flex;
    justify-content:flex-end;
    ul li{
        display: inline-block;
        color: #8F98C5;
        font-size: 15px;
        margin-right: 21px;
        a{
            text-decoration: none;
            color:#8F98C5;
            font-size: 15px;
            position: relative;
            padding-bottom: 2px;
            transition:  all .6s ease-in-out;
            &:hover{
                color:#2A398C;
                transition:  all .6s ease-in-out;
                font-size: 16px;
            }
            &::before{
                content: "";
                width: 0%;
                height: 2.4px;
                position: absolute;
                left: 0%;
                bottom: -3px;
                background: linear-gradient(to right, #2A398c,#35428d,#fff);
            }
            &:hover::before{
                transition: all .6s linear;
                width: 100%;
            }
        }
        
    }
}
.menu{
    display: none;
    z-index: 1;
    border: 0;
    background: transparent;
    .fa-bars{
        font-size: 20px;
        line-height: 50px;
        color:#2A398C;
    }
    .fa-x{
        color:#fff;
        font-size:20px;
    }
}
.d-block{
    display: block !important;
    transition: all 0.9s linear;
}
a.nuxt-link-exact-active{
    color:#2A398C !important;
    font-size: 16px !important;
    &::before{
        width: 100% !important;
        transition: all 0.6s ease-in-out;
    }
}
@media (max-width:1024px) {
    .nav{
        line-height: 60px;
        z-index: 1000;
        .commanbtn button{
            color: #2A398C;
            background:#fff;
            margin-left: 2rem;
            width: auto;
            display: block;
        }
        }
    .nav-list{
        justify-content: flex-end;
        display: block;
        position: fixed;
        width: 30% !important;
        height: 100%;
        background: #2A398C;
        top: 0;
        right: -100%;
        bottom: 0;
        z-index: 100;
        transition: all 0.9s linear;
        button.menu{
            position: absolute;
            top: 20px;
            right: 8%;
        }
        ul{
            margin-top: 60px;
            li{
                display: block;
                a{
                    &:hover{
                        color:#fff;
                        transition: all 0.8s linear;
                    }
                    &::before{
                        background: linear-gradient(to right,#fff, #2A398c);
                    }
                }    
            }
        }
    }
    a.nuxt-link-exact-active{
        color:#FFF !important;
        &::before{
            background: linear-gradient(to right,#fff, #2A398c);
        }
    }
    .menu{
        display:inline-block;
    }
    .header-com{
        display: none;
    }
    
    
}
.d-block-m{
    right: 0px!important;
}
@media (max-width:768px) {
        .nav-list{
            width: 50% !important;
            
        }
}
@media (max-width:500px) {
        .nav-list{
            width: 100% !important;
            
        }
        
}
</style>