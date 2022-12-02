// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
//   ApiDomain: 'modcxblog.cn',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
      'ur1883342-c029d33116e2111ffda7b937'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'WordPress-version',
      url: 'https://modcxblog.cn/'
    },
    {
      text: 'Hexo-version'.
      url: 'https://hexo.modcxblog.cn/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/LeNotFound/modcxblog.cn-uptime-status'
    }
  ]
};
