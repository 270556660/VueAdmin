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
    <span>
        <Button @click="addClassification" icon="md-add">创建素材</Button>
    </span>
</template>
<script>
export default {
    name: 'addClassification',
    data() {
        return {
        }
    },
    methods: {
        addClassification() {

        }
    }
}
</script>

