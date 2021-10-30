import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/MoviesPage/Movies";
import MovieDetails from "./components/Movie_Details/MovieDetails";
import './App.css'
import {Redirect} from "react-router";
import {Header} from "./components/header/Header";
import {useSelector} from "react-redux";

export default function App() {

    return (
        <Router>
            <Header/>
            <div className={'App'}>
                <div className={'box'}>
                    <Switch>
                        <Route exact path={'/movies'} component={Movies}/>
                        <Route exact path={'/movies/:id'} component={MovieDetails}/>
                        <Redirect exact to="/movies"/>
                    </Switch>
                </div>
            </div>
        </Router>
    )

}