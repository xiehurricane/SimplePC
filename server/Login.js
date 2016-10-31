const tempAdmin = {
  username: 'admin',
  password: 'adminpwd',
  lead: [{
    path: '/infoManager/hospital/hospital',
    name: '医院',
  },{
    path:'/infoManager/hospital/bill',
    name:'对账信息'
  }, {
    path: '/infoManager/hospital/cardRecord',
    name: '就诊卡信息查询',
  },{
    path:'/infoManager/hospital/BreachRecord',
    name:'就诊卡违约查询'
  },{
    path:'/infoManager/hospital/DocScheduling',
    name:'医生排班'
  },{
    path:'/infoManager/hospital/ErrorLog',
    name:'错误日志查询'
  },{
    path:'/infoManager/hospital/MessageRecordQuery',
    name:'通知消息记录查询'
  },{
    path:'/infoManager/hospital/SendingRecordQuery',
    name:'验证码发送记录查询'
  },{
    path:'/infoManager/chronicDisease/users',
    name:'慢病管理-用户维护'
  },{
    path:'/infoManager/chronicDisease/docTeam',
    name:'慢病管理-医师团队维护'
  },{
    path:'/infoManager/chronicDisease/serviceProject',
    name:'慢病管理-服务项目维护'
  },{
    path:'/infoManager/chronicDisease/servicePackage',
    name:'慢病管理-服务包维护'
  },{
    path:'/infoManager/chronicDisease/medical',
    name:'慢病管理-药品管理'
  }],
};
const tempUser = {
  username: 'user',
  password: 'useruser',
  lead: [{
    path: '/infoManager/hospital/cardRecord',
    name: '就诊卡信息查询',
  },{
    path:'/infoManager/hospital/BreachRecord',
    name:'就诊卡违约查询'
  },{
    path:'/infoManager/hospital/DocScheduling',
    name:'医生排班'
  },{
    path:'/infoManager/hospital/ErrorLog',
    name:'错误日志查询'
  },{
    path:'/infoManager/hospital/MessageRecordQuery',
    name:'通知消息记录查询'
  },{
    path:'/infoManager/hospital/SendingRecordQuery',
    name:'验证码发送记录查询'
  }],
};
const hxUser = {
  username: 'hxUser',
  password: 'hxUser!@',
  lead: [{
    path: '/infoManager/hospital/doctor/1',
    name: '医生',
  }],
};
// 远程医疗用户
const rmUser = {
  username: 'rmUser',
  password: 'rm123456',
  lead: [{
    path:'/infoManager/chronicDisease/users',
    name:'慢病管理-用户维护'
  },{
    path:'/infoManager/chronicDisease/docTeam',
    name:'慢病管理-医师团队维护'
  },{
    path:'/infoManager/chronicDisease/serviceProject',
    name:'慢病管理-服务项目维护'
  },{
    path:'/infoManager/chronicDisease/servicePackage',
    name:'慢病管理-服务包维护'
  },{
    path:'/infoManager/chronicDisease/medical',
    name:'慢病管理-药品管理'
  }],
};

const userList = [tempAdmin,tempUser,hxUser,rmUser];

export const handleAuthority = function ({username}) {
  // const password = reactCookie.load('password');
  // const username = reactCookie.load('username');
  console.log('--',username)
  for (let user of userList) {
    if (user.username === username) {
      return {
        response: user.lead,
        error: null,
      };
    }
  }

  // if (tempAdmin.username === username) {
  //   return {
  //     response: tempAdmin.lead,
  //     error: null,
  //   };
  // } else if (tempUser.username === username) {
  //   return {
  //     response: tempUser.lead,
  //     error: null,
  //   };
  // }
  // if (hxUser.username === username) {
  //   return {
  //     response: hxUser.lead,
  //     error: null,
  //   };
  // }

  return {
    response: false,
    error: '不好意思，出错了',
  };
};


export const handleLogin = function ({
  username,
  password,
}) {
  const options = {
    expires: new Date(Date.now() + 1000 * 3600 * 24),
    path: '/',
  };
  // if (tempAdmin.username === username && tempAdmin.password === password) {
  //   return {
  //     response: [],
  //     error: null,
  //   };
  // }
  // if (tempUser.username === username && tempUser.password === password) {
  //   return {
  //     response: [],
  //     error: null,
  //   };
  // }
  // if (hxUser.username === username && hxUser.password === password) {
  //   return {
  //     response: [],
  //     error: null,
  //   };
  // }
  for (let user of userList) {
    // console.log('--new login',user)
    if (user.username === username && user.password === password) {
      return {
        response: [],
        error: null,
      };
    }
  }

  return {
    response: false,
    error: '哎呀，你确定是这个密码？',
  };

};
