<style scoped>
.sider {
  position: relative;
  height: 100vh;
  overflow: auto;
  z-index: 3;
}
.sider i {
  position: absolute;
  top: 50%;
  left: 0;
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
  transform: translateY(-50%);
}
.sider span {
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 20px;
  transition: width 0.2s ease 0.2s;
}
.item {
  position: relative;
  height: 22px;
  line-height: 22px;
}
.collapsed_menu span {
  display: none;
}

.collapsed_menu i {
  transform: translate(-12px, -50%);
  font-size: 26px;
}

.header {
  position: relative;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.menu_icon {
  transition: all 0.3s;
}
.rotate_icon {
  transform: rotate(-90deg);
}
.content {
  position: fixed;
  top: 64px;
  left: 200px;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 1;
}
</style>
<template>
    <Layout>
        <Sider hide-trigger collapsible :collapsed-width="50" v-model="isCollapsed" class="sider" :class="{ collapsed_menu: isCollapsed}">
            <!-- 侧边菜单 -->
            <siderMenu></siderMenu>
        </Sider>
        <Layout>
            <Header class="header">
                <Button @click="isCollapsed=!isCollapsed" type="text">
                    <Icon type="md-menu" size="32" class="menu_icon" :class="{ rotate_icon: isCollapsed}"></Icon>
                </Button>
            </Header>
            <Content class="content">
                 <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
import siderMenu from "~/components/siderMenu/siderMenu.vue";
export default {
     components: {
        siderMenu
    },
    data() {
        return {
            isCollapsed: false
        }
    }
}

</script>

