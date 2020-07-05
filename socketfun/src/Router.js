import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GameMenu from './components/GameMenu'
import CreateTyper from './components/Typer/CreateTyper'

 function RouterSocket() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={GameMenu}/>
                <Route exact path="/typer/create" component={CreateTyper}/>
            </Switch>
        </Router>
    )
}

export default RouterSocket;