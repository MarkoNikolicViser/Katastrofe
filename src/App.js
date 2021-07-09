import './App.css';
import {TProvider} from './components/context'
import IzborProcene from './components/izborProcene'
import IzborOpasnosti from './components/izborOpasnosti'
import Test from './components/test'
import Test2 from './components/test2'
import IzborScenarija from './components/izborScenarija';
import Kalkulator from './components/kalkulator'
import ProcenaVerovatnoce from './components/procenaVerovatnoce'
import ProcenaPosledica from './components/procenaPosledica'
import {BrowserRouter as Router, Route, Switch, Fragment} from 'react-router-dom';
import Preview from './components/preview'
import Save from './components/save'

function App() {
  return (
    <Router>
    <TProvider>
    <div className="App">
    <Switch>

      <Route exact path='/' render={() =>
          <div className="home">
      <IzborProcene/>
      <IzborOpasnosti/>
      <IzborScenarija/>
      <Kalkulator/>
      <ProcenaVerovatnoce/>
      <ProcenaPosledica/>
      <Save/>
        </div>
      } />

      <Route path='/preview' component={Preview}/>

      </Switch>
    </div>
    </TProvider>
    </Router>
  );
}

export default App;