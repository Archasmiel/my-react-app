import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestQuestion from "./components/TestQuestion";
import StartQuiz from "./components/StartQuiz";

export class App extends Component {
    render() {
        return (<>
            <Header />
            <main>
                {this.state.isQuizStarted ? (
                    <TestQuestion
                        questionId={this.quiz1.questions[this.state.questionId].questionId}
                        questionText={this.quiz1.questions[this.state.questionId].questionText}
                        answers={this.quiz1.questions[this.state.questionId].answers}
                        correctAnswer={this.quiz1.questions[this.state.questionId].correctAnswer}
                        nextQuestion={this.nextQuestion}
                        previousQuestion={this.previousQuestion}
                        stopQuiz={this.stopQuiz}
                    />
                ) : (
                    <StartQuiz
                        name={this.quiz1.quizName}
                        description={this.quiz1.quizDescription}
                        startQuiz={this.startQuiz}
                    />
                )}
            </main>
            <Footer />
        </>);
    }

    constructor(props) {
        super(props);
        this.state = {
            isQuizStarted: false,
            questionId: 0,
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.stopQuiz = this.stopQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
    }

    quiz1 = {
        quizName: "HTML test",
        quizDescription: "Test your HTML knowledge",
        questions: [
            {
                questionId: 1,
                questionText: "Which tag is used for styling?",
                answers: ["h1", "style", "script", "input"],
                correctAnswer: "style",
            },
            {
                questionId: 2,
                questionText:
                    "What is the correct HTML tag for inserting a line break?",
                answers: ["br", "break", "lb", "line"],
                correctAnswer: "br",
            },
            {
                questionId: 3,
                questionText: "Which tag is used to define a hyperlink?",
                answers: ["link", "a", "href", "hyper"],
                correctAnswer: "a",
            },
            {
                questionId: 4,
                questionText:
                    "Which attribute is used to specify the URL in an anchor tag?",
                answers: ["href", "src", "link", "url"],
                correctAnswer: "href",
            },
            {
                questionId: 5,
                questionText:
                    "What is the correct HTML element for the largest heading?",
                answers: ["heading", "h6", "h1", "head"],
                correctAnswer: "h1",
            },
            {
                questionId: 6,
                questionText:
                    "Which HTML attribute specifies an alternative text for an image?",
                answers: ["src", "alt", "caption", "title"],
                correctAnswer: "alt",
            },
            {
                questionId: 7,
                questionText:
                    "Which of the following is the correct HTML for creating a checkbox?",
                answers: [
                    "<input type='checkbox'>",
                    "<checkbox>",
                    "<input checkbox='true'>",
                    "<check>",
                ],
                correctAnswer: "<input type='checkbox'>",
            },
            {
                questionId: 8,
                questionText: "How can you open a link in a new tab?",
                answers: [
                    'target="_new"',
                    'target="newtab"',
                    'target="_self"',
                    'target="_blank"',
                ],
                correctAnswer: 'target="_blank"',
            },
            {
                questionId: 9,
                questionText: "Which tag is used to define a table header?",
                answers: ["th", "tr", "td", "table"],
                correctAnswer: "th",
            },
            {
                questionId: 10,
                questionText:
                    "Which element is used to define an unordered list?",
                answers: ["ul", "ol", "li", "list"],
                correctAnswer: "ul",
            },
        ],
    };

    startQuiz() {
        this.setState({
            isQuizStarted: true,
        });
    }

    stopQuiz() {
        this.setState({
            isQuizStarted: false,
        });
    }

    nextQuestion() {
        if (this.state.questionId !== this.quiz1.questions.length - 1) {
            this.setState({
                questionId: this.state.questionId + 1,
            });
        }
    }

    previousQuestion() {
        if (this.state.questionId > 0) {
            this.setState({
                questionId: this.state.questionId - 1,
            });
        }
    }

}

export default App;
