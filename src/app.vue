<!-- app.vue -->
<template>
<div>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
        
    </div>
    <!-- 底部导行 -->
    <div class="weui-tabbar">
       45454
    </div>
    <!-- /底部导行 -->
</div>

</template>
<script>
export default {
    data() {
        return {
            name: "guowenfh",
            age: "21"
        }
    },
    created() {
        // weui.alert('alert');
    }
}

</script>


