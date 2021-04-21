import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import home from './home';
//hooks
import demo from './hooks/demo/index';
import DemoClock from './hooks/demoClock/index';

//useState
import hello from './hooks/useState/hello';
import count1 from './hooks/useState/count1';
import count2 from './hooks/useState/count2';

//reducer
import add from './hooks/reducer/add';
import count from './hooks/reducer/count';

//css
import styles from './hooks/css/styles';

//redux
import redux from './hooks/redux/redux';

import login from './hooks/useState/login';

//test
import demo_ from './test/demo';

function App() {
  return (

        <Router>
            <Switch>
            {/* hooks */}
            <Route path="/hooks/demo/index" component={demo} />
            <Route path="/hooks/demoClock/index" component={DemoClock} />

            {/* usestate */}
            <Route path="/hooks/useState/hello" component={hello} />
            <Route path="/hooks/useState/count1" component={count1} />
            <Route path="/hooks/useState/count2" component={count2} />
            <Route path="/hooks/useState/login" component={login} />

            {/* reducer */}
            <Route path="/hooks/reducer/add" component={add} />
            <Route path="/hooks/reducer/count" component={count} />

            {/* css */}
            <Route path="/hooks/css/styles" component={styles} />
            <Route path="/hooks/redux/redux" component={redux} />


            <Route path="/test/demo" component={demo_} />


            <Route path="/" component={home} />
            </Switch>
        </Router>
  );
}

export default App;
