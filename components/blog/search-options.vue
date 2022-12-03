<template>
    <div class="search-options">
        <div class="container-m">
            <div class="row">
                <div class="col-lg-9 col-sm-12">
                    <div class="list-options">
                        <ul>
                            <li>All</li>
                            <li>Business</li>
                            <li>Technology</li>
                            <li>Business Punch</li>
                            <li>News</li>
                            <li>Development Guide</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                    <div class="search-box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search Blog"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-m">
            <div class="filter-options row">
                <blogCard 
                class="col-lg-4 col-md-6 col-sm-12"
                v-for="i in 9 " :key="i">
                </blogCard>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.search-options{
    margin-bottom: 80px ;
    .row{
        width: 100%;
        >div{
            padding: 0 !important;
        }
    }
    .list-options{
        width:95%;
        border:1px solid #8F98C5;
        border-radius: 17px;
        margin-bottom: 30px;
        ul{
            padding: 0;
            list-style: none;
            margin: 0;
            display: flex;
            justify-content: space-between;
            line-height: 40px;
            padding: 7px 15px;
            li{
                display: inline-block;
                padding:3px 12px;
                transition: all 0.8s linear;
                border-radius: 10px;
                &:hover{
                    background:#29398C;
                    color:#fff;
                    cursor: pointer;
                }
            }

        }
    }
    .search-box{
        border:1px solid #8F98C5;
        padding: 0 15px;
        border-radius: 17px;
        color:#8F98C5;
        margin-bottom: 30px;
        input{
            border: none;
            background: transparent;
            outline: 0;
            display: inline-block;
            line-height:55px;
            color:#8F98C5
        }

    }
}
li.active{
    background:#29398C;
    color:#fff;
}
@media (max-width:500px) {
    .search-box{
        padding: 0 ;
        margin: auto;
        input{
        }

    }
    .list-options{
        width:100% !important;
        ul{
            justify-content: space-evenly !important;
            flex-wrap: wrap;
        }
    }
}
</style>