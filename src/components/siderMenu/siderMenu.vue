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
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
  transform: translateY(-50%);
}

.menu_item span {
  width: 100%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-indent: 20px;
  transition: width 0.2s ease 0.2s;
}

.collapsed_menu span {
  display: none;
}

.collapsed_menu i {
  transform: translate(-12px, -50%);
  font-size: 26px;
}
</style>
<template>
    <Menu active-name="1-2" theme="dark" width="auto" class="menu_item" :class="{ collapsed_menu: isCollapsed}">
        <MenuItem name="1-1">
        <div class="item">
            <Icon type="ios-navigate"></Icon>
            <span>Option4545ssfd1</span>
        </div>
        </MenuItem>
        <MenuItem name="1-2">
        <div class="item">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
        </div>
        </MenuItem>
        <MenuItem name="1-3">
        <div class="item">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
        </div>
        </MenuItem>
    </Menu>
</template>
<script>
export default {
    name: 'siderMenu',
    props: ["title"],
    data() {
        return {
            isCollapsed: false
        }
    },
    props: {
        info: String
    }
}
</script>

