import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {Select,Input,Button,Popover,message } from 'antd';
// import { update } from '../../GlobalConfig.js'
// import div from '../../../views/Flexbox/div.jsx'
import TextField from '../../../views/TextField'
import bows from 'bows';
const log = bows('UserInfo');

// const Option = Select.Option;

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){

    }

    componentWillReceiveProps(props){
      // const {status} = props.model;
   }
    componentDidMount(){
        log('location:',this.props.location);
        log('state:',this.props.location.state);
    }


    render() {
      return (<div>TEST：{this.props.location.state.select}</div>);
    }
}

UserInfo.contextTypes = {
  router:PropTypes.object
}

export default UserInfo;
