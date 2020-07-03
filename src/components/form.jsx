import React, { Component } from 'react';
import Input from '../common/input';

class Form extends Component {
    state = { 
        userInput: '',
        userOutput: ''
     }


     clr = () => {
         this.setState({
             userInput: '',
             userOutput: ''
         });
     }


     calculatedResult = () => {
         if(this.state.userInput !== '') {
            var ans = eval(this.state.userInput);
            this.setState({
                userInput: '',
                userOutput: ans
            });
         }
     }


     removeInput = () => {
        var str = this.state.userInput;
        str = str.substr(0, str.length-1);
        this.setState({
            userInput: str
        });
     }



     handleClick = (e) => {
        let userValues = e.target.value;
        switch(userValues) {
            case 'c' : this.clr()
            break;
            case '=' : this.calculatedResult()
            break;
            case 'X' : this.removeInput()
            break;
            default : {
                this.setState({
                    userInput: this.state.userInput += userValues
                })
            }
            break;
        }
    }


    renderInput(type, value) {
        return(
            <Input 
            type={type}
            value={value}
            onClick={this.handleClick} />
        );
    }
}
 
export default Form;