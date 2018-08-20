<style scoped>
.filediv {
  position: relative;
}
.file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.list li {
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  width: 152px;
  height: 152px;
  position: relative;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: solid 1px #e9eaec;
}
.img_name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  color: #fff;
  word-wrap: break-word;
  word-break: break-all;
  background-color: rgba(0, 0, 0, 0.7);
  line-height: 20px;
}
.select_close {
  display: inline-block;
  position: absolute;
  height: 26px;
  width: 26px;
  top: -10px;
  right: -7px;
  background: red;
  z-index: 30;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #fff;
}
.select_close .ivu-icon {
  color: #fff;
  float: left;
  margin: 6px 0 0 6px;
}
.size_ul li {
  float: left;
  border: solid 1px #dddee1;
  padding: 0 6px;
  line-height: 24px;
  border-radius: 3px;
  margin-right: 5px;
  margin-top: 5px;
}
.size_ul li.check {
  border-color: #57a3f3;
  color: #57a3f3;
}
</style>
<template>
    <div>
        <Button icon="ios-cloud-upload-outline" size="large" class="filediv">图片上传<input type="file" accept="image/*" capture="camera" @change="readFile" class="file" v-if="!show"></Button>

        <ul class="list clear">
            <li v-for="(item,index) in images" :key="item.filename" :style="{'backgroundImage': 'url(' + item.base64 + ')'}">
                <div class="img_name">{{item.filename}}</div>
                <div @click="remove(index);" class="select_close">
                    <Icon type="md-close" />
                </div>
            </li>
        </ul>

        <!-- <Button icon="md-trash" v-if="images.length>0" @click="clearimg();" class="mt10">清空</Button> -->
    </div>
</template>
<script>
// 不同尺寸上传
export default {
    name: "addUploadImgs",
    props: ["value", "mediatype"],
    data() {
        return {
            id: this.$route.query.id,
            loading: false,
            show: false,
            images: []
        };
    },
    watch: {
        mediatype() {
            this.images = [];
        },
        images() {

        }
    },
    methods: {
        readFile(e) { //选择图片路径
            var that = this;
            var tmpFile = e.target.files;
            for (var i = 0; i < tmpFile.length; i++) {
                var file = tmpFile[i]
                if (!/image\/\w+/.test(file.type)) { //判断是否是图片类型
                    that.$Message.info(file.name + "格式不正确");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);

                that.getResult(reader, file).then((resolve) => {
                    that.images.push(resolve);
                    this.$emit('input', this.images);
                })

            }
            that.show = true;
            setTimeout(function () {
                that.show = false;
            }, 50)
        },
        // 异步操作结果
        getResult(fileReader, file) {
            var that = this;
            return new Promise(function (resolve, reject) {
                fileReader.onload = function (e) {
                    var image = new Image();
                    image.src = this.result;
                    image.onload = function () {
                        // 异步回调
                        resolve({
                            filename: file.name,
                            base64: this.src
                        });
                    };
                }
            });
        },
        // 清空图片
        clearimg() {
            this.images = [];
            this.$emit('input', this.images);
        },
        // 删除图片
        remove(index) {
            this.images.splice(index, 1);
            this.$emit('input', this.images);
        }
    }
};
</script>
