import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Select, Button, Popover, message } from 'antd';
import bows from 'bows';
import { callApiWithCallBack } from '../../../../common/utils/FetchUtils.js';
import { API_ROOT } from '../../ModuleConfig.js';
import TextField from '../../../views/TextField';
import qq from '../../../assets/imgs/qq.png';
import wechat from '../../../assets/imgs/wechat.png';
import user from '../../../assets/imgs/icon_phonenumber_normal.png';
import useronfocus from '../../../assets/imgs/icon_phonenumber_selected.png';
import pwd from '../../../assets/imgs/icon_password_normal.png';
import pwdonfocus from '../../../assets/imgs/icon_password_selected.png';
import hospital from '../../../assets/imgs/icon_hospital_normal.png';
import hospitalfocus from '../../../assets/imgs/icon_hospital_selected.png';

const log = bows('Login');
const Option = Select.Option;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: user,
      pwd,
      hLoc: hospital,
      userType: '2',
      doctorLogin: false, // 是否是医生登录
      phonenoOk: false,
      logined: false,
    };
    this.selectChange = this.selectChange.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.login = this.login.bind(this);
    this.keydown = this.keydown.bind(this);
    this.validPhoneno = this.validPhoneno.bind(this);
    this.phoneBlur = this.phoneBlur.bind(this);
  }
  componentWillMount() {

  }

  componentWillReceiveProps(props) {
    const { status } = props.model;
    if (status) {
      if (!status.error && status.status !== '0') {
        this.setState({
          logined: false,
        });

        if (this.state.userType === '2') {
          this.context.router.push({ pathname: '/antrm/doctor/docindex', state: { select: '1' } });
        } else if (this.state.userType === '1') {
          this.context.router.push({ pathname: '/antrm/patient/center', state: { select: '5' } });
        }
        message.info(status.msg, 4);
      } else if (status.status === '0') {
        this.setState({
          logined: true,
        });
        message.info(status.msg, 4);
      } else if (status.error) {
        message.info('登录失败', 4);
      }
      this.props.loginPassed();
    }
  }

  onfocus(role) {
    switch (role) {
      case 'phone':
        this.setState({ phone: useronfocus });
        break;
      case 'pwd':
        this.setState({ pwd: pwdonfocus });
        break;
      case 'hloc':
        this.setState({ hLoc: hospitalfocus });
        break;
      default:
        return;
    }
  }
  onBlur(role) {
    switch (role) {
      case 'phone':
        this.setState({ phone: user });
        break;
      case 'pwd':
        this.setState({ pwd });
        break;
      case 'hloc':
        this.setState({ hLoc: hospital });
        break;
      default:
        return;
    }
  }
  validPhoneno(value) {
    if ((/^\w{11}$/g).test(value)) {
      this.state.phonenoOk = false;
    } else {
      this.state.phonenoOk = true;
    }
  }
  keydown(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }
  login() {
      // this.context.router.push({pathname:'/antrm/userInfo',state:{select:'1'}})

    const { phoneno } = this.state;
    let { password } = this.state;
    const username = phoneno.replace(/\s/g, '');
    password = password.replace(/\s/g, '');
    const router = this.context.router;
      // this.props.login({path:'/login',param:{phoneno,password,userType:this.state.userType}})
    callApiWithCallBack(
        API_ROOT,
        { path: '/login', param: { username, password, userType: this.state.userType } },
        'post',
        (res) => {
          log('res', res);
          router.push({ pathname: '/antrm/userInfo', state: { select: '1' } });
        },
        (error) => {
          log('err', error);
        }
      );
  }
  selectChange(value) {
    // const isdoctor = value === '1' ? true : false;
    this.setState({
      userType: value,
      doctorLogin: false,
    });
  }

  phoneBlur() {
    this.onBlur('phone');
      // this.validPhoneno(this.state.phoneno)
  }

  render() {
    const material = (
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 28, paddingBottom: 18, paddingLeft: 100, paddingRight: 100 }}>
        <div style={{ float: 'left', marginLeft: 60 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Select
              showSearch
              className="selectrole"
              placeholder="请选择人员"
              defaultValue={this.state.userType}
              optionFilterProp="children"
              notFoundContent="暂无数据"
              onChange={this.selectChange}
            >
              <Option value="2">医生登录1111111</Option>
              <Option value="1">患者登录</Option>
            </Select>
            <span style={{ display: 'inline-block', paddingTop: 3 }}>还没有账号？
              <Link to={{ pathname: '/antrm/patient/regist', state: { select: '' } }}>立即注册</Link></span>
          </div>

          <div style={{ width: 300, position: 'relative' }}>
            <img role="presentation" src={this.state.phone} style={{ position: 'absolute', top: 40 }} />
            <Popover content="请输入您的手机号" placement="right" trigger="focus">
              <TextField
                className="text"
                labelText="请输入手机号"
                onFocus={() => this.onfocus('phone')}
                onChange={(e, value) => { this.state.phoneno = value; }}
                onBlur={this.phoneBlur}
              />
            </Popover>
          </div>
          <div style={{ width: 300, position: 'relative', marginBottom: 20 }}>
            <img role="presentation" src={this.state.pwd} style={{ position: 'absolute', top: 40 }} />
            <TextField
              className="text"
              labelText="请输入密码"
              type="password"
              onFocus={() => this.onfocus('pwd')}
              onBlur={() => this.onBlur('pwd')}
              onKeyDown={this.keydown}
              onChange={(e, value) => { this.state.password = value; }}
            />
          </div>
          {this.state.logined ?
            <div style={{ width: 300, position: 'relative', marginBottom: 20 }}>
              <div className="text-red">登录失败</div>
              <div className="text-red">1.登录类型错误</div>
              <div className="text-red">2.用户名或密码错误</div>
              <div className="text-red">3.未验证
                <Link style={{ marginLeft: 10 }} to={{ pathname: '/antrm/patient/verification', state: { select: '', phoneno: this.state.phoneno } }}>我要验证</Link>
              </div>
            </div>
              : null
              }
          <div className="login-btn">
            <Button type="ghost" onClick={this.login}>登录</Button>
          </div>
          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <p><Link to={{ pathname: '/antrm/patient/reset', state: { select: '' } }}>忘记密码</Link></p>
          </div>
        </div>
        <div style={{ float: 'right', marginRight: 60 }}>
          <h3 style={{ textAlign: 'center' }}>第三方账号登录</h3>
          <div style={{ textAlign: 'center', marginTop: 25 }}><img role="presentation" src={qq} /></div>
          <div style={{ textAlign: 'center', marginTop: 16 }}><img role="presentation" src={wechat} /></div>
        </div>
      </div>
            );

    return material;
  }
}
Login.propTypes = {
  model: PropTypes.object,
};
Login.contextTypes = {
  router: PropTypes.object,
};

export default Login;
