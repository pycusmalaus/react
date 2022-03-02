import React, { Component } from 'react'
import'./Quiz.css'

class Quiz extends Component {
 
    render() { 
        
        return (
            <div className='quesbox'>
                <div className="quesbox2">
                <h5>{this.props.ques}. {this.props.firstq}</h5>
                <table>
                    <tr>
                       <td>
                        <input type="radio" onChange={ () =>{
                        if(this.props.firstop){
                            alert("Answer is True");
                        }else{
                             alert("Answer is False");
                        }
                      }
                     }/>
                      </td>
                    <td>
                        <p>{this.props.firsta}</p>
                    </td>

                    </tr>
                    <tr>
                        <td>
                       <input type="radio" onChange={ () =>{
                        if(this.props.secondop){
                           alert("Answer is True");
                        }else{
                           alert("Answer is False");
                         }
                        }
                      }/>
                      </td>
            
                    <td>
                    <p>{this.props.seconda}</p>
                    </td>
                    </tr>

                    <tr>
                        <td>
                       <input type="radio" onChange={ () =>{
                          if(this.props.thirdop){
                            alert("Answer is True");
                          }else{
                            alert("Answer is False");
                         }
                        } 
                       }/>
                       </td>
                    <td>
                     <p>{this.props.thirda}</p>
                    </td>
                    </tr>

                 </table>
                 </div>
            </div>
        );
    }
}
 
export default Quiz;