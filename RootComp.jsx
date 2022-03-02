import React, { Component } from 'react'
import Question from './Question';
import Quiz from './Quiz';
import QuizHead from './QuizHead';
import './Quiz.css'


class RootComp extends Component {
    constructor(){
        super()
        this.state={
            problem:Question
        }
    }
    render() { 
        const newProblem=this.state.problem.map(ite => <Quiz 
        key={ite.id}
        ques={ite.id}
        firstq={ite.firstq}
        firsta={ite.firsta}
        firstop={ite.firstop}
        seconda={ite.seconda}
        secondop={ite.secondop}
        thirda={ite.thirda}
        thirdop={ite.thirdop}
        />)

   
        return (
            <div>
            <QuizHead />
             {newProblem}
             <input type="submit" value="Submit" />  
            </div>
        );
    }
}
 
export default RootComp;