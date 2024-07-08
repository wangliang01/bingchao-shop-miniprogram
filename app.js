import updateManager from './common/updateManager';

App({
  onLaunch: function () {
       //云开发初始化
       wx.cloud.init({
        traceUser: true,
        env: "bingchao-3gg0kmk5aea28b93"
      })
  },
  onShow: function () {
    updateManager();
  },
});
