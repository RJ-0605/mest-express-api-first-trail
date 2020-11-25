import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Homepage';
import Readmore from '../pages/Readmore';
import Login from '../pages/Loginpage';
import Newpost from '../pages/Newpost';
import StudentDashboard from '../pages/Studashboard';
import TeachDashboard from '../pages/Teachdashboard';
import SignUp from '../pages/SignUp';


export default function RouterComponent() {
  return(
    <Router>
      <Switch>
      	
      	<Route exact path="/student-dashboard" component={StudentDashboard} />
      	<Route exact path="/signup" component={SignUp} />
      	<Route exact path="/teach-dashboard" component={TeachDashboard} />
        <Route exact path="/newpost" component={Newpost} />
        <Route exact path="/readmore" component={Readmore} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>

  );
}
