<!--
描述：报名信息-新增组件
开发人：fj
开发日期：2017年9月13日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="signup" ref="kalixBizDialog" v-bind:form-model.sync="formModel" v-bind:targetURL="targetURL")
        div.el-form(slot="dialogFormSlot" style="max-height:550px;overflow:auto;")
            el-collapse(v-model="activeNames")
                el-collapse-item(title="个人信息" name="1")
                    div.kalix-form-table
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="参加展赛" prop="competitionId"
                            v-bind:rules="rules.competitionId" v-bind:label-width="labelWidth")
                                kalix-object-select2(v-model="formModel.competitionId" v-bind:objectsUrl="competitionInfoURL")
                            el-form-item.s-flex_item.kalix-form-table-td(label="姓名" prop="name" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.name")
                            el-form-item.s-flex_item.kalix-form-table-td(label="拼音" prop="phoneticize" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.phoneticize")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="性别" prop="sex" v-bind:label-width="labelWidth")
                                kalix-dict-select(v-model="formModel.sex" appName="research" dictType="性别")
                            el-form-item.s-flex_item.kalix-form-table-td(label="出生日期" prop="birthday" v-bind:label-width="labelWidth")
                                kalix-date-picker(v-model="formModel.birthday")
                            el-form-item.s-flex_item.kalix-form-table-td(label="国籍" prop="nationality" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.nationality")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="身份证号" prop="identificationCard" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.identificationCard")
                            el-form-item.s-flex_item.kalix-form-table-td(label="省份" prop="province" v-bind:label-width="labelWidth")
                                kalix-dict-select(v-model="formModel.province" appName="research" dictType="省份")
                            el-form-item.s-flex_item.kalix-form-table-td(label="城市" prop="city" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.city")
                        div.s-flex
                            div.s-flex_item
                                el-form-item.s-flex_item.kalix-form-table-td(label="笔名" prop="penName" v-bind:label-width="labelWidth" style="border-right:1px solid #000")
                                    el-input(v-model="formModel.penName")
                            div.s-flex_item(style="flex:2")
                                el-form-item.s-flex_item.kalix-form-table-td(label="通讯地址" prop="postalAddress" v-bind:label-width="labelWidth")
                                    el-input(v-model="formModel.postalAddress")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="作者简介" prop="authorIntroduction" v-bind:label-width="labelWidth")
                                el-input(type="textarea" v-model="formModel.authorIntroduction")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="邮政编码" prop="postalCode" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.postalCode")
                            el-form-item.s-flex_item.kalix-form-table-td(label="移动电话" prop="mobilePhone" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.mobilePhone")
                            el-form-item.s-flex_item.kalix-form-table-td(label="固定电话" prop="fixedPhone" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.fixedPhone")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="电子邮箱" prop="email" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.email")
                            el-form-item.s-flex_item.kalix-form-table-td(label="QQ" prop="qq" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.qq")
                            el-form-item.s-flex_item.kalix-form-table-td(label="传真" prop="fax" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.fax")
                        div.s-flex
                            div.s-flex_item
                                el-form-item.s-flex_item(label="微博" prop="microBlog" v-bind:label-width="labelWidth" style="border-right:1px solid #000")
                                    el-input(v-model="formModel.microBlog")
                            div.s-flex_item(style="flex:2")
                                el-form-item.s-flex_item(label="其他联系方式" prop="otherContactWay" v-bind:label-width="labelWidth")
                                    el-input(v-model="formModel.otherContactWay")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="所在学校" prop="school" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.school")
                            el-form-item.s-flex_item.kalix-form-table-td(label="专业/班级" prop="majorclass" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.majorclass")
                            el-form-item.s-flex_item.kalix-form-table-td(label="网址" prop="url" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.url")
                el-collapse-item(title="作品信息" name="2")
                    div.kalix-form-table
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="作品中文名" prop="worksCnName" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.worksCnName")
                            el-form-item.s-flex_item.kalix-form-table-td(label="作品英文名" prop="worksEnName" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.worksEnName")
                            el-form-item.s-flex_item.kalix-form-table-td(label="主创人员" prop="creator" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.creator")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="作品介绍" prop="worksIntroduction" v-bind:label-width="labelWidth")
                                el-input(type="textarea" v-model="formModel.worksIntroduction")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="出品国家" prop="country" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.country")
                            el-form-item.s-flex_item.kalix-form-table-td(label="获奖情况" prop="award" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.award")
                            el-form-item.s-flex_item.kalix-form-table-td(label="播出情况" prop="broadcasting" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.broadcasting")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="指导教师" prop="tutor" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.tutor")
                            el-form-item.s-flex_item.kalix-form-table-td(label="制作完成时间" prop="finishingDate" v-bind:label-width="labelWidth")
                                kalix-date-picker(v-model="formModel.finishingDate" style="width:100%")
                            el-form-item.s-flex_item.kalix-form-table-td(label="作品时长" prop="lengthOfWork" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.lengthOfWork")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="版权所有者" prop="copyrightOwner" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.copyrightOwner")
                            el-form-item.s-flex_item.kalix-form-table-td(label="出品单位" prop="unit" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.unit")
                            el-form-item.s-flex_item.kalix-form-table-td(label="出品单位联系人" prop="unitContacter" v-bind:label-width="labelWidth")
                                el-input(v-model="formModel.unitContacter")
                el-collapse-item(title="团队信息" name="3")
                    div.kalix-form-table
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="团队中文名" prop="teamCnName" lv-bind:label-width="labelWidthTeam")
                                el-input(v-model="formModel.teamCnName")
                            el-form-item.s-flex_item.kalix-form-table-td(label="团队英文名" prop="teamEnName" v-bind:label-width="labelWidthTeam")
                                el-input(v-model="formModel.teamEnName")
                        div.s-flex
                            el-form-item.s-flex_item.kalix-form-table-td(label="团队联系人" prop="teamContacter" v-bind:label-width="labelWidthTeam")
                                el-input(v-model="formModel.teamContacter")
                            el-form-item.s-flex_item.kalix-form-table-td(label="团队所在地" prop="teamAddress" v-bind:label-width="labelWidthTeam")
                                el-input(v-model="formModel.teamAddress")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {CompetitionInfoURL, SignupURL} from '../../config.toml'

    export default {
        name: 'ResearchSignupAdd',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                rules: {
                    competitionId: [{type: 'number', required: true, message: '请选择参加展赛名称', trigger: 'change'}]
                },
                targetURL: SignupURL,
                competitionInfoURL: CompetitionInfoURL,
                activeNames: ['1'],
                labelWidth: '120px',
                labelWidthTeam: '100px'
            }
        },
        components: {}
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/stylus/color.styl"
    .dd
        width 50px

    .line
        height 1px
        background-color br_color3
        margin-bottom 20px
</style>
