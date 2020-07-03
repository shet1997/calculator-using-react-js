import React from 'react';
import Form from './components/form';

class Calculate extends Form {
    render() { 
        let {userInput, userOutput} = this.state;
        return ( 
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                {this.renderInput("text", userInput)}
                                {this.renderInput("text", userOutput)}
                                </td>
                            <td>{this.renderInput("button", "c")}</td>
                        </tr>
                        <tr>
                            <td>
                                {this.renderInput("button", "1")}
                            </td>
                            <td>
                                {this.renderInput("button", "2")}
                            </td>
                            <td>
                                {this.renderInput("button", "3")}
                            </td>
                            <td>
                                {this.renderInput("button", "/")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.renderInput("button", "4")}
                            </td>
                            <td>
                                {this.renderInput("button", "5")}
                            </td>
                            <td>
                                {this.renderInput("button", "6")}
                            </td>
                            <td>
                                {this.renderInput("button", "-")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.renderInput("button", "4")}
                            </td>
                            <td>
                                {this.renderInput("button", "5")}
                            </td>
                            <td>
                                {this.renderInput("button", "6")}
                            </td>
                            <td>
                                {this.renderInput("button", "*")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.renderInput("button", "7")}
                            </td>
                            <td>
                                {this.renderInput("button", "8")}
                            </td>
                            <td>
                                {this.renderInput("button", "9")}
                            </td>
                            <td>
                                {this.renderInput("button", "+")}
                            </td>   
                        </tr>
                        <tr>
                            <td>
                                {this.renderInput("button", "X")}
                            </td>
                            <td>
                                {this.renderInput("button", "0")}
                            </td>
                            <td>
                                {this.renderInput("button", "=")}
                            </td>
                            <td>
                                {this.renderInput("button", "*")}
                            </td>   
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default Calculate;