module.exports = {
  account: {
    type: String,
    default: '知乎小透明',
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number, //0未知 1男 2女
    default: 0
  },
  intro: {
    type: String,
    default: ''
  },
  area: {
    type: String,
    default: ''
  },
  industry: {
    type: String,
    default: ''
  },
  job: {
    type: String,
    default: ''
  },
  education: {
    type: String,
    default: ''
  },
  collect: Array, //收藏列表
  focus: Array, //关注列表
  stars: {
    type: Number, //获赞总数
    default: 0
  },
  visit:  {
    type: Number, //总访问量
    default: 0
  },
  creatTime: {
    type: Date,
    default: Date.now()
  },
};