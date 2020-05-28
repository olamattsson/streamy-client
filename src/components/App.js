import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";

const PageOne = () => {
    return (
        <div>
            PageOne<br/>
            <Link to={"/pagetwo"}>Go to PageTwo</Link>
        </div>
    );
}
const PageTwo = () => {
    return (
        <div>
            PageTwo<br/>
            <Link to={"/"}>Go to PageOne</Link>
        </div>
    );
}
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path={"/"} exact component={PageOne}/>
                <Route path={"/pagetwo"} component={PageTwo}/>
            </BrowserRouter>
        </div>
    );
}

export default App;