<template>
    <div id="index">
        <vHeader info="Repositories List"></vHeader>
        <section>
            <div id="wrapper">
                <mu-raised-button label="View Your Repositories" class="demo-raised-button view-btn" backgroundColor="black" @click="goToLogin"/>
            </div>
        </section>
    </div>
</template>
<script>
import router from '@/router/index'
import header from '@/components/head'
export default {
    data() {
        return {

        }
    },
    methods:{
        goToLogin(){
            router.push({path:'/repository'})
        }
    },
    components:{
        'vHeader':header
    }
}

</script>
<style lang="css" scoped>
#wrapper{
    height: 100px;
}
.view-btn{
    display: block;
    margin:60px auto;
    width:210px;
}
</style>
