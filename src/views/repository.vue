<template>
    <div id="repository">
        <vHeader info="Your Repositories"></vHeader>
        <div id="list-wrapper">
            <div class="item" v-for="(item,index) in dataSource">
                <mu-card class="mask">
                    <mu-card-header :title="item.name" :subTitle="item.description">
                        <mu-avatar :src="item.owner.avatar_url" slot="avatar" />
                    </mu-card-header>
                    <div class="box">
                        <div class="item-info">
                            <mu-icon value="turned_in" :size="20" class="icon" /><span>{{item.language}}</span>
                            <mu-icon value="cached" :size="20" class="icon right-icon" /><span>{{item.updated_at}}</span>
                        </div>
                        <div class="right-btn">
                            <mu-flat-button label="View Detail" class="demo-flat-button" :href="item.html_url" target="_blank" />
                        </div>
                    </div>
                </mu-card>
            </div>
        </div>
        <mu-raised-button label="Logout" class="demo-raised-button logout-btn" backgroundColor="black" @click="Logout"/>
    </div>
</template>


<script>
import header from '@/components/head'
import axios from '../http'
import router from '@/router/index'
export default {

    name: 'repository',

    data() {
        return {
            dataSource:[]
        }
    },
    mounted(){
        this.getRepositoryInfo()
    },
    methods:{
        getRepositoryInfo(){
            let params={
                sort:'updated'
            }
            axios.get('/user/repos',params)
                .then((res) => {
                    this.dataSource=res.data
                    console.log(this.dataSource)
                })
        },
        Logout(){
            this.$store.dispatch('Logout')
            router.push({
                path:'/'
            })
        }
    },
    components:{
        'vHeader':header
    }
}

</script>
<style lang="css" scoped>
#repository{
    position: relative;
}
.item{
    width:600px;
    height: 150px;
    margin:15px auto;
}
.mask{
    transition: box-shadow .25s;
}
.mask:hover{
    box-shadow: 5px 5px 10px rgba(7,17,27,.2);
}
.item-info{
    margin-left: 15px;
}
.item-info span{
    cursor: default;
}
.icon{
    position: relative;
    top:5px;
    margin-right: 2px;
    user-select:none;
    cursor: default;
}
.icon span{
    font-size: 40px;
}
.right-icon{
    margin-left: 10px;
    margin-right: 5px;
}
.box{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logout-btn{
    position: absolute;
    top:9px;
    right:150px;
}
</style>
