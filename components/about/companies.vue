<template>
    <div class="companies">
        <div class="container-m">
            <h4>Trusted by Top Companies</h4>
            <div class="companies-content">
                <img src="@/assets/img/about/1.2ca23b8.png"/>
                <img src="@/assets/img/about/2.a1c2e24.png"/>
                <img src="@/assets/img/about/3.1b8c1ca.png"/>
                <img src="@/assets/img/about/5.978444a.png"/>
                <img src="@/assets/img/about/6.4cac449.png"/>
                <img src="@/assets/img/about/16.47ed8a2.png"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.companies{
    padding: 60px 0 30px;
    background: #F5F5F6;
    .container-m{
        display: block;
    }
    h4{
        font-size: 27px;
        font-weight: 500;
        margin-bottom: 15px;
    }
    .companies-content{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        img{
            width: 150px;
            filter: grayscale(100%);
            transition: all 1s linear;
            &:hover{
                filter: grayscale(0);
            }
        }
    }
}
</style>