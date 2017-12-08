import React from 'react';
import './css/BuyingBoard.css';
import coin from './img/coin.png'
const EventEmitter = require('events');
class ButtonEmitter extends EventEmitter {}
export const buttonEmitter = new ButtonEmitter();
const listOfBuyableThings = require('./data/listOfBuyableThings.json');


class BuyableThing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: parseInt(props.cost, 10),
            owned: 0
        }
        this.name  = props.name;
    }
    render() {
        return (
            <div>
                <button className="buyingBoardButton" onClick={() => {buttonEmitter.emit("buyAttempt", this.props.name, this.props.cost)}}>{this.name}<br/>
                    <img src={coin} width="20" height="20" alt="B" style={{verticalAlign: "bottom"}}/>
                    <span>{this.state.cost}</span>&nbsp;  
                    <span style={{opacity: ".6"}}>{this.state.owned}</span>
                </button>
                <br/>
            </div>
        )
    }
}

export class BuyingBoard extends React.Component {
    render() {
        return (
            <div className="buyingBoard">
                {listOfBuyableThings.map((data, index) => {
                    return(
                        <BuyableThing name={data[0]} cost={data[1]} key={index}/>
                    )
                })}
            </div>
        )
    }
}
