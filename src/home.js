import React, {Component} from 'react';
import Flexbox from 'flexbox-react';

import styles from './public/css.js';


export default class home extends Component {

  componentDidMount() {
 
  }

  render() {
    return (
        <div >
            <a href="/test" >test</a>
          <Flexbox flexDirection="column">
            <h3> hooks </h3>
            <a href="/hooks/demoClock/index" >DemoClock</a>
            <a href="/hooks/demo/index" >demo</a>

            <h5> useState </h5>
            <a href="/hooks/useState/hello" >hello</a>
            <a href="/hooks/useState/count1" >count1</a>
            <a href="/hooks/useState/count2" >count2</a>
            <a href="/hooks/useState/login" >login</a>

            <h5> reducer </h5>
            <a href="/hooks/reducer/add" >add</a>
            <a href="/hooks/reducer/count" >count</a>
          </Flexbox>

          <Flexbox flexDirection="column">
            <h3> reducer </h3>
            <a href="/redux" >redux</a>
          </Flexbox>

          <Flexbox flexDirection="column">
            <h3> test </h3>
            <a href="/test/demo" >demo</a>
          </Flexbox>


        </div>
    );
  }
}
