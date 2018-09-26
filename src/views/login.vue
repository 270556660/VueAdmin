<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../images/login_bg.jpg) no-repeat center/cover;
}
.logo_box {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  height: 500px;
  padding: 35px;
  margin-left: -200px;
  margin-top: -250px;
}
.logo_box h3 {
  text-align: center;
  color: #ffffff;
  line-height: 30px;
  padding-bottom: 30px;
  font-size: 20px;
  font-weight: normal;
}
.input_outer {
  height: 50px;
  margin-bottom: 30px;
  border-radius: 50px;
  border: rgba(255, 255, 255, 0.2) 2px solid;
}
.icon {
  background: url(../images/login_ico.png);
  width: 25px;
  height: 25px;
  position: absolute;
  margin: 10px 13px;
}
.icon_user {
  background-position: -125px 0;
}
.icon_password {
  background-position: -125px -34px;
}
.inp {
  width: 240px;
  height: 46px;
  outline: none;
  display: inline-block;
  margin-left: 50px;
  border: none;
  background: none;
  line-height: 46px;
  color: #fff;
  font-size: 16px;
}
.submit {
  display: block;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  border-radius: 50px;
  background: #0096e6;
  color: #fff;
}
</style>

<template>
    <div class="login">
        <form class="logo_box" onsubmit="return;">
            <h3>欢迎你</h3>
            <div class="input_outer">
                <i class="icon icon_user"></i>
                <input class="inp" type="text" placeholder="请输入账户" />
            </div>
            <div class="input_outer">
                <i class="icon icon_password"></i>
                <input class="inp" type="password" autocomplete='tel' placeholder="请输入密码" />
            </div>
            <a class="submit" @click="Login();">登录</a>
        </form>
    </div>
</template>

<script>
import dynamicRouters from '~/router/routes';

export default {
    data() {
        return {
            userName: "",
            passWord: ""
        }
    },
    methods: {
        Login() {

            var nemu = ["index", "404", "appList", "addApp"];

            this.util.filterNemu(dynamicRouters, nemu);

            // 保存vuex
            this.$store.dispatch('setToken', "123");
            this.$store.dispatch('setMenuList', dynamicRouters);

            // 保存本地
            this.util.setItem('token', "123");
            this.util.setItem('menu', JSON.stringify(nemu));

            this.$router.push({
                name: "appList"
            });



            // this.http.post('/user', {
            //     userName: this.userName,
            //     passWord: this.passWord
            // }).then(function (response) {
            //     // 保存token
            //     this.$store.dispatch('setToken', "123");
            //     util.setItem('token', "123");
            //     this.$router.push({
            //         name: "index"
            //     });
            // })
        }
    }
}

</script>
