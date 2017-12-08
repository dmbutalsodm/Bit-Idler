import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BuyingBoard, buttonEmitter} from './BuyingBoard.js';

class HashButton extends React.Component{
	constructor(props) {
		super(props);
		buttonEmitter.on('buyAttempt', (data, cost) => {
			console.log(data, cost);
		})
	}

	render() {
		return(
			<button className="button" onClick={this.props.clickFunction}>Generate Hash</button>
		);
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			hashes: 0,
			hashesPerSecond: 0
		}
	}

	handleClick() {
		let newHashes = this.state.hashes
		this.setState({
			hashes: newHashes + 1,
		})
	}
	
	render() {
		return (
			<div id="board">
				<div className="hashButton">
					<p>{this.state.hashes}</p>
					<HashButton clickFunction={this.handleClick}/>
				</div>
				<div style={{width: '70%', textAlign: "center"}}>mining block tbd</div>
				<BuyingBoard/>
			</div>
		);
	}
}

ReactDOM.render(
	<Board/>,
	document.getElementById('root')
);
