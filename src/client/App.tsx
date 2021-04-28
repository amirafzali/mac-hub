import React from 'react';
import GradeIndex from './Components/GradeIndex/GradeIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Switch, Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route component={GradeIndex}/>
            <GradeIndex></GradeIndex>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
