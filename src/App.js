import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestQuestion from "./components/TestQuestion";

export class App extends Component {
    render() {
        return (<>
            <Header />
            <main>
                <TestQuestion
                    questionId={1}
                    questionText="which tag is used for styling"
                    answers={["h1", "style", "script", "input"]}
                />
            </main>
            <Footer />
        </>);
    }
}

export default App;
