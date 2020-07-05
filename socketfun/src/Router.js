import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GameMenu from './components/GameMenu'
import CreateTyper from './components/Typer/CreateTyper'
import JoinTyper from './components/Typer/JoinTyper'
import TypeRacer from './components/Typer/TypeRacer'

 function RouterSocket(props) {
    return (
        <Switch>
            <Route exact path="/" component={GameMenu}/>
            <Route exact path="/typer/create" component={CreateTyper}/>
            <Route exact path="/typer/join" component={JoinTyper}/>
            <Route exact path="/typer/game/:gameID" render={()=> <TypeRacer  gameState={props.gameState}/>}/>
        </Switch>
    )
}

export default RouterSocket;