<style scoped>
.sider {
  position: relative;
  height: 100vh;
  overflow: auto;
  z-index: 3;
}
.header {
  position: relative;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.menu_icon {
  transition: all 0.2s;
}
.side_hide .menu_icon {
  transform: rotate(-90deg);
}

.main-breadcrumb {
  display: inline-block;
  position: relative;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.content {
  position: fixed;
  top: 64px;
  left: 200px;
  right: 0;
  bottom: 0;
  padding: 10px;
  overflow: auto;
  z-index: 1;
  transition: all 0.2s;
}
.logo-con {
  background: #363e4f;
  margin-bottom: 1px;
}
.side_hide .content {
  left: 50px;
}
</style>
<template>
    <Layout :class="{ side_hide: isCollapsed}">
        <Sider hide-trigger collapsible :collapsed-width="50" v-model="isCollapsed" class="sider">
            <div class="logo-con">
                <img v-show="!isCollapsed" src="../images/logo.png" width="100%" />
                <img v-show="isCollapsed" src="../images/logo-min.png" width="100%" />
            </div>
            <!-- 侧边菜单 -->
            <siderMenu></siderMenu>
        </Sider>
        <Layout>
            <Header class="header">
                <Row>
                    <Col span="12">
                    <Button @click="isCollapsed=!isCollapsed" type="text">
                        <Icon type="md-menu" size="24" class="menu_icon"></Icon>
                    </Button>
                    <!-- 全屏 -->
                    <fullScreen v-model="isFullScreen" @on-change="fullscreenChange"></fullScreen>
                    </Col>
                    <Col span="12" style="text-align: right">
                    <div class="main-breadcrumb">
                        <span>欢迎您：</span>
                        <a class="main-user-name">userName</a>
                    </div>
                    <Button @click="quitLogin" icon="md-power">退出</Button>
                    </Col>
                </Row>
            </Header>
            <Content class="content">
                <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import util from '~/utils/index';
import siderMenu from "~/components/siderMenu/siderMenu.vue";
import fullScreen from "~/components/fullScreen/fullScreen.vue";
export default {
    components: {
        siderMenu,
        fullScreen
    },
    data() {
        return {
            isCollapsed: false,//是否收起侧导行
            isFullScreen: false, //是否全屏
        }
    },
    mounted(){
       

    },
    methods: {
        //退出登录
        quitLogin() {
            //清除信息          
            util.removeItem('token');
            util.removeItem('menu');
            location.reload();

            // this.http.get('api.php', {
            //     action: 'sys',
            //     opt: 'logout',
            //     sessionid: util.getItem('sessionid')
            // }).then(res => {
            //     //清除信息
            //     util.removeItem('token');
            //location.reload();
            // })
        },
        //全屏
        fullscreenChange(isFullScreen) {
            // console.log(isFullScreen);
        },
    }
}
</script>

