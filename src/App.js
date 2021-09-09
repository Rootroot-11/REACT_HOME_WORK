import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/MoviesPage/Movies";
import MovieDetails from "./components/Movie_Details/MovieDetails";
import { Redirect } from "react-router";
import './App.css'

export default function App () {

    return (
        <Router>
                <div className={'App'}>
                <Switch>
                    <Route exact path={'/movies'} component={Movies}/>
                    <Route exact path={'/movies/:id'} component={MovieDetails}/>
                    <Redirect exact to="/movies"/>
                </Switch>
                </div>
        </Router>
    )

}