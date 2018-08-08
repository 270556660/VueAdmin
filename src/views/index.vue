<template>
    <div id="index">
        <vHeader info="Repositories List"></vHeader>
        <section>
            <div id="wrapper">
                <div class="classA">wq</div>
                <div label="View Your Repositories" class="demo-raised-button view-btn"  @click="goToLogin">45</div>
            </div>
        </section>
    </div>
</template>
<script>
import router from '@/router/index';
import header from '@/components/head';
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
<style scoped>
#wrapper{
    height: 100px;
    color: blue;
}
.view-btn{
    display: block;
    margin:60px auto;
    width:210px;
}
</style>
