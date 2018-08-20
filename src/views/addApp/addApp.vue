<template>
    <Card dis-hover>
        <p slot="title">新增小程序</p>
        <div>
            <Form :label-width="80" style="width:500px;">
                <FormItem label="分类名称">
                    <Input v-model="app_name" placeholder="请输入分类名称" />
                </FormItem>
                <FormItem label="图标">
                    <addUploadImgs v-model="images"></addUploadImgs>
                </FormItem>
                <FormItem label="分类">
                    <Select v-model="classify" multiple clearable>
                        <Option value="1">推荐</Option>
                        <Option value="2">宠物</Option>
                    </Select>
                </FormItem>
                <FormItem label="调用小程序">
                    <Select v-model="app_id" clearable>
                        <Option value="1">测试</Option>
                        <Option value="2">测试2</Option>
                    </Select>
                </FormItem>
                <FormItem label="介绍">
                    <Input v-model="describe" type="textarea" :rows="4" />
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submit()">提交</Button>
                </FormItem>
            </Form>
        </div>
    </Card>
</template>

<script>
import addUploadImgs from "./components/addUploadImgs.vue";
export default {
    components: {
        addUploadImgs
    },
    data() {
        return {
            app_name: "",
            images: "",
            classify: "",
            app_id: "",
            describe: ""
        }
    },
    methods: {
        // 提交
        submit() {
            if (this.app_name == "") {
                this.$Message.info("请输入分类名称");
                return;
            }
            if (this.images.length == 0) {
                this.$Message.info("请上传图标");
                return;
            }
            if (this.classify == "") {
                this.$Message.info("请选择分类");
                return;
            }
            if (this.app_id == "") {
                this.$Message.info("请选择调用小程序");
                return;
            }

            this.http.post("api.php", {
                action: "material",
                opt: "deleteMaterials",
                ids: this.taCheckids
            }).then(res => {
                if (res.ret == 1) {
                    this.$Message.info(res.msg);
                    this.getList();
                }
            });
        }
    }
};
</script>