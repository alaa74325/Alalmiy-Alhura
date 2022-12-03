<template>
    <div class="details-section">
        <h6 class="h6">Web Hosting</h6>
        <h2>Explore How Defi Lending Works</h2>
        <span>2433 Views | 7 Min | Published On: Sep 8, 2022 - Last Updated: Oct 9, 2022</span>
        <img :src="section.img"/>
        <p>The coming future is surrounded by the buzz of blockchain technology and cryptocurrency as a whole. Decentralized Finance is the main bridge that is keeping the prominence of cryptocurrency intact and contributing to its stature. DeFi has managed to earn the interest of massive financial institutions, leading them to earn huge capital from distinct businesses. How DeFi lending works is a buzzing topic all around.</p>
        <p>There are myriad aspects related to DeFi Lending, and most of the integral factors are still untold to many. Hence, having a keen comprehension of every facet related to DeFi working is highly crucial for every business enthusiast or business organization. So, here we are to bring every needed detail with scrutiny. So buckle up your zeal to shine in the market and read the blog with keen vigilance!</p>
    </div>
</template>
<script>
export default {
    props: {
        section:{
            type:Object,
            required:true,
        }
    },
}
</script>
<style lang="scss">
.details-section{
    margin-bottom: 25px;
    h2 {
        font-size: 38px;
        font-weight: 700;
        margin: 10px auto 0px;
    }
    span{
        font-size: 13px;
        color:#8F98C5;
        margin-bottom: 15px;
        display: inline-block;
    }
    img{
        width: 100%;
    }
    p{
        color:black;
        font-size: 14px;
        margin-top: 20px;
    }
}
@media (max-width:500px) {
    h2{
        font-size: 30px;
        margin-bottom: 10px;
    }
}
</style>