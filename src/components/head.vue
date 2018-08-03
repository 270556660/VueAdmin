<template>
    <div id="header">
        <header>
            <div class="header-bg">
                <a href="https://github.com" target="_blank"><img src="../assets/timg.jpeg" alt=""></a>    
                <span>{{info}}</span>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props:{
        info:String
    }
}

</script>
<style lang="css" scoped>
.header-bg{
    height: 54px;
    width:100%;
    /*background-color: #24292e;*/
    background-color: black;
    /*position: fixed;*/
}
.header-bg img{
    height: 40px;
    width: 40px;
    margin-left: 13.3%;
    position: relative;
    top:7px;
    border-radius: 50%;
    cursor: pointer;
}
.header-bg span{
    color: white;
    font-size: 18px;
    position: relative;
    bottom:6px;
    margin-left: 10px;
    user-select:none;
    cursor: default;
}
</style>
