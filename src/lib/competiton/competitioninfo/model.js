/**
 * Created by Administrator on 2017/9/22.
 */
const FormModel = {
    name: '',                   // 展赛名称
    type: null,                 // 展赛类别，字典[展赛类别]
    address: '',                // 展赛地点
    collectionStartTime: null,  // 作品征集开始时间
    collectionEndTime: null,    // 作品征集结束时间
    preEvalEndTime: null,       // 初评开始时间
    preEvalStartTime: null,     // 初评结束时间
    lastEvalStartTime: null,    // 终评开始时间
    lastEvalEndTime: null,      // 终评结束时间
    compStartTime: null,        // 展览开始时间
    compEndTime: null,          // 展览结束时间
    contentNeed: '',            // 作品内容要求
    technologyNeed: '',         // 作品技术要求
    contactor: '',              // 联系人
    phone: '',                  // 联系人电话
    email: '',                  // 联系人邮箱
    signupStyle: '',            // 报名表样式
    detail: '',                 // 详细信息
    remark: ''                  // 备注
}
export default FormModel
