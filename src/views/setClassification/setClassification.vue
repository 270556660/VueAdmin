<template>
    <Card dis-hover>
        <Row>
            <Col span="12">
            <Input v-model="search" style="width:150px;" clearable placeholder="请输入素材名或创意ID"></Input>
            <Button type="primary" icon="search" @click="getList();">搜索</Button>
            </Col>
            <Col span="12" style="text-align: right;">
            <Poptip confirm title="您确认删除选中内容吗？" style="text-align: left;" @on-ok="deleteMaterials();">
                <Button icon="md-trash">批量删除</Button>
            </Poptip>
            <!-- 增加分类 -->
            <addClassification></addClassification>
            </Col>
        </Row>
        <Table :columns="tacolumns" :data="tadata" :loading="loading" @on-selection-change="taCheck" class="mt10"></Table>
        <Page :total="total_number" :current="page" :page-size="page_size" ref="page" @on-change="getList" show-elevator show-total show-sizer class="mt10"></Page>
    </Card>
</template>

<script>
import addClassification from "./components/addClassification.vue";
export default {
    components: {
        addClassification
    },
    data() {
        return {
            loading: false,
            search: "",
            taCheckids: [], //选中ids
            page: 1, //第N页
            page_size: 20, //每页数量
            total_number: 1, //总数量
            total_page: 1, //总页数
            orderField: "", //排序参数名
            orderDirection: "SORT_DESC", //排序方向
            tacolumns: [
                {
                    type: "selection",
                    width: 50,
                    key: ""
                },
                {
                    title: 'ID',
                    key: 'id'
                },
                {
                    title: '分类名称',
                    key: 'classify'
                },
                {
                    title: '添加时间',
                    key: 'date'
                },
                {
                    title: '操作',
                    key: '',
                    render: (h, params) => {
                        return [
                            h(
                                "span",
                                {
                                    class: "del_link",
                                    on: {
                                        click: () => {

                                        }
                                    }
                                },
                                "删除"
                            )
                        ];
                    }
                }
            ],
            tadata: [
                {
                    id: 1,
                    classify: '宠物',
                    date: '2018.01.01 10:10:10',
                }
            ]

        }
    },
    methods: {
        //获取列表
        getList(page) {
            if (page === undefined) {
                this.$refs["page"].currentPage = 1;
                this.page = 1;
            } else {
                this.page = page;
            }

            this.loading = true;
            Axios.post("api.php", {
                action: "material",
                opt: "getMaterials",
                name: this.name,
                media_type: this.media_type,
                original: this.original,
                subtheme_ids: this.subtheme_ids,
                file_type: this.file_type,
                author: this.author,
                child: this.child == true ? "1" : "",
                created_time: this.DateDomain,
                //last_modified_time: [],
                display_score: 0,
                page: this.page, //页码
                page_size: this.page_size, //每页数量
                orderField: this.orderField, //排序的orderField参数名
                orderDirection: this.orderDirection, //排序的方向值SORT_ASC顺序 SORT_DESC倒序
            }).then(res => {
                this.loading = false;
                if (res.ret == 1) {
                    this.tableData = res.data.list;
                    this.total_number = parseInt(res.data.total_number);
                    this.total_page = res.data.total_page;
                    this.get_img_list(res.data.list);
                }
            }).catch(err => {
                this.loading = false;
                console.log("获取素材库" + err);
            });
        },
        //获取选中的id
        taCheck(row) {
            let ids = [];
            row.forEach(item => {
                ids.push(item.id);
            });
            this.taCheckids = ids;
        },
        deleteMaterials() {
            if (this.taCheckids.length == 0) {
                this.$Message.info("请勾选需要修改的内容");
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