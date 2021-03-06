import React from "react";
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import '../homepage/homepage.scss'
import MainPieChart from '../homepage/piechart_container'
// import DataVis from './data_vis'; 

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 1,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllQuestionsFromAQuiz(1)
    }

    handleClick(field) {
        this.setState({
            questionNumber: field,
        })
    }

    render() {
        const texts = this.props.allPromptTexts;
        const demographicsArray = ["age", "ethnicity", "gender", "location", "petChoice", "religiousAffilation", "politicalLeaning", "education"]    
        return (
            <div className="jake-result-master-div">
                <div className="quizzes-taken-directory">
                    <h1 className="quizzes-taken-header">Questions</h1>
                    <div className="quizzes-taken-links">
                        {texts.map ( (text, i) => (
                            <button className="question-taken-item" onClick={() => this.handleClick(`${i + 1}`)}>Question {i + 1}: {text.split(" ").slice(0,4).join(" ")}...</button>
                        ))}
                    </div>
                </div>
               
                <div className="jake-results-div">
                    <div className="jakes-data-box">                     
                        <MainPieChart demo={demographicsArray} questionNumber={this.state.questionNumber} />
                    </div>
                </div>

            </div>
        );
    }
}

export default ResultsPage;