<template>
    <div id="header">
        <header>
            <div class="header-bg">
                <a href="https://github.com" target="_blank"></a>    
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
<style scoped>

</style>
