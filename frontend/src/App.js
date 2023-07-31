```javascript
import React from 'react';
import AgentList from './components/AgentList';
import AgentManagement from './components/AgentManagement';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={AgentList} />
          <Route path="/manage/:id" component={AgentManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```