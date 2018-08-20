<template>
    <span>
        <Button @click="show_win=true;" icon="md-add">创建素材</Button>
        <Modal v-model="show_win" title="选择媒体" @on-ok="addAapp()" :loading="loading" ok-text="确定">
            <Form :label-width="60">
                <FormItem label="分类名称">
                    <Input v-model="classify" placeholder="请输入分类名称" />
                </FormItem>
                <FormItem label="顺序">
                    <Input v-model="order" placeholder="请输入顺序" />
                </FormItem>
            </Form>
        </Modal>
    </span>
</template>
<script>
export default {
    name: 'addClassification',
    data() {
        return {
            show_win: false,
            loading: false,
            classify: "",
            order: ""
        }
    },
    methods: {
        addAapp() {
            if (this.classify == "") {
                this.$Message.info("请输入分类名称");
                return;
            }
            if (this.order == "") {
                this.$Message.info("请输入顺序");
                return;
            }
            this.loading = true;
            this.http.post("api.php", {
                action: "material",
                opt: "deleteMaterials",
                ids: this.taCheckids
            }).then(res => {
                if (res.ret == 1) {
                    this.loading = false;
                    this.$Message.info(res.msg);
                    this.$emit('on-change');
                }
            });
        }
    }
}
</script>

