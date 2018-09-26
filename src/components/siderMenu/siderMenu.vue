<style scoped>
.item {
  position: relative;
  height: 22px;
  line-height: 22px;
}
.menu_item i {
  position: absolute;
  top: 50%;
  left: 0;
  vertical-align: middle;
  font-size: 16px;
  transform: translateY(-50%);
  transition: all 0.2s;
}

.menu_item span {
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 20px;
  transition: all 0.2s;
}

.side_hide span {
  display: none;
}
.side_hide i {
  transform: translate(-12px, -50%);
  font-size: 26px;
}
</style>
<template>
    <Menu ref="sideMenu" :active-name="$route.name" theme="dark" width="auto" class="menu_item" @on-select="changeMenu">
        <template v-for="item in menuList">
            <MenuItem  :name="item.name">
            <div class="item">
                <Icon :type="item.icon"></Icon>
                <span class="layout-text">{{item.meta.title }}</span>
            </div>
            </MenuItem>
        </template>

        <!-- <MenuItem name="1-1">
        <div class="item">
            <Icon type="md-list"></Icon>
            <span>程序列表</span>
        </div>
        </MenuItem>
        <MenuItem name="1-2">
        <div class="item">
            <Icon type="md-apps"></Icon>
            <span>分类设置</span>
        </div>
        </MenuItem>
        <MenuItem name="1-3">
        <div class="item">
            <Icon type="md-add"></Icon>
            <span>新增分类</span>
        </div>
        </MenuItem> -->
    </Menu>
</template>
<script>
export default {
    name: 'siderMenu',
    data() {
        return {
        }
    },
    methods: {
        changeMenu(name) {
            this.$router.push({
                name: name
            });
        }
    },
    computed: {
        menuList() {
            console.log(this.$store.state.app.menuList[0].children,1)
            return this.$store.state.app.menuList[0].children;
        }
    },
}
</script>

