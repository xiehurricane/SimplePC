import React, { Component, PropTypes } from 'react';
import {toggleClass,removeClass,addClass} from '../../../common/utils/ClassUtils.js'

export default class TextField extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.onfocus = this.onfocus.bind(this);
		this.onblur = this.onblur.bind(this);
		this.onchange = this.onchange.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.labelClick = this.labelClick.bind(this);
		this.onContextMenu = this.onContextMenu.bind(this);
		this.onCut = this.onCut.bind(this);
		this.onCopy = this.onCopy.bind(this);
		this.onPaste = this.onPaste.bind(this);
	}
	onfocus(e){
		const {label,hr} = this.refs;
		addClass(label,'input-label-onfocus');
		addClass(hr,'input-animateline-onfocus');
		// if(document.classList){
		// 	label.classList.add('input-label-onfocus');
		// 	hr.classList.add('input-animateline-onfocus');
		// }
		// else{
		// 	label.className+=' input-label-onfocus';
		// 	hr.className+= ' input-animateline-onfocus'
		// }
		if(this.props.onFocus){
			this.props.onFocus(e);
		}
	}
	onblur(e){
		const {label,hr} = this.refs;

		if(!e.target.value){
			removeClass(label,'input-label-onfocus');
			removeClass(hr,'input-animateline-onfocus');

			// if(document.classList){
			// 	label.classList.remove('input-label-onfocus');
			// 	hr.classList.remove('input-animateline-onfocus');
			// }
			// else{
			// 	label.className.replace(/input-label-onfocus/g,' ');
			// 	hr.className.replace(/input-animateline-onfocus/g,' ')
			// }
		}
		if(this.props.onBlur){
			this.props.onBlur(e);
		}
	}
	onchange(e){
		if(this.props.onChange){
			this.props.onChange(e,e.target.value);
		}
	}
	onkeydown(e){
		if(this.props.onKeyDown){
			this.props.onKeyDown(e);
		}
	}
	labelClick(e){
		const { text } = this.refs;
		text.focus();
	}
	onContextMenu(e){
		if(this.props.onContextMenu){
			this.props.onContextMenu(e);
		}
	}
	onCut(e,data){
		if(this.props.onCut){
			this.props.onCut(e,data);
		}
	}
	onCopy(e,data){
		if(this.props.onCopy){
			this.props.onCopy(e,data);
		}
	}
	onPaste(e,data){
		if(this.props.onPaste){
			this.props.onPaste(e,data);
		}
	}
	render(){
		return (
			<div className='input-box'>
				<label ref='label' className='input-label' onClick={this.labelClick}>{this.props.labelText}</label>
				<input ref='text' className='input-text' onChange={this.onchange} onKeyDown={this.onkeydown} onFocus={this.onfocus} onBlur={this.onblur} type={this.props.type}  onContextMenu={this.onContextMenu} onCut={this.onCut} onCopy={this.onCopy} onPaste={this.onPaste}/>
				<div className='input-mask'></div>
				<div>
					<hr className='input-line'/>
					<hr ref='hr' className='input-animateline'/>
				</div>
			</div>
		)
	}

};
TextField.PropTypes={
	labelText: React.PropTypes.string
}

TextField.defaultProps = {
	type : 'text'
}
