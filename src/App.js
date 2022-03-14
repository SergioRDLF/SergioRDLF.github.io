import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Projects from './Pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// function App() {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={ HomePage } />
//         </Switch>
//       </BrowserRouter>
//     );
//   };
// }

// export default App;
