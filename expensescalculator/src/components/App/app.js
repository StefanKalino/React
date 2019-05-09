import react from "react";
import { Route } from "react-route-dom";
import { Login } from "../Login/login";
import { Register } from "../Register/register"; 

export class App extends React.Component {
    render() {
        return (
            <main id="app">
             <Route exact path="/" components={Login} />
            </main>
        )
    }
}


//<link href="https://fonts.googleapis.com/css?family=Roboto:300i,400,400i,700" rel="stylesheet">