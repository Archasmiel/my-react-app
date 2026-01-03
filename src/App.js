import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TestQuestion from "./TestQuestion";

export class App extends Component {
    render() {
        return (<>
            <Header />
            <main>
                <TestQuestion
                    questionId={1}
                    questionText="which tag is used for styling"
                    answers={["h1", "style", "script", "input"]}
                />;
            </main>
            <Footer />
        </>);
    }
}

export default App;
