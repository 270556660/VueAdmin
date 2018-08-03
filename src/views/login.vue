<template>
    <div id="login">
        <vHeader info="Login"></vHeader>
        <section>
            <mu-text-field label="Github Personal Token" hintText="" type="password" labelFloat class="token-input" underlineFocusClass="line" labelFocusClass="label" v-model="token" />
            <div class="btn-wrapper">
                <mu-raised-button label="login" class="demo-raised-button" backgroundColor="black" @click="Login"/>
                <mu-raised-button label="generate token" class="demo-raised-button" backgroundColor="black" href="https://github.com/settings/tokens/new" target="_blank" />
            </div>
        </section>
    </div>
</template>
<script>
import header from '@/components/head'

export default {
    data() {
        return {
            token:''
        }
    },
    components:{
        'vHeader':header
    },
    methods:{
        Login(){
            if(this.token){
                this.$store.dispatch('Login',this.token)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/')
                this.$router.push({
                    path:redirect
                })
            }
        }
    }
}

</script>
<style lang="css">
.token-input{
    display: block !important;
    margin:auto;
    margin-top:60px;
    margin-bottom: 30px !important;
}
.line{
    background-color: black !important;
}
.label{
    color: black !important;
}
.btn-wrapper{
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 260px;
}
</style>
