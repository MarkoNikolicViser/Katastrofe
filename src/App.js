import './App.css';
import { TProvider } from './components/context'
import IzborProcene from './components/izborProcene'
import IzborOpasnosti from './components/izborOpasnosti'
import Test from './components/test'
import Test2 from './components/test2'
import IzborScenarija from './components/izborScenarija';
import Kalkulator from './components/kalkulator'
import ProcenaVerovatnoce from './components/procenaVerovatnoce'
import ProcenaPosledica from './components/procenaPosledica'
import ProcenaVerovatnoceNajtezi from './components/procenaVerovatnoceNajtezi'
import ProcenaPosledicaNajtezi from './components/procenaPosledicaNajtezi'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preview from './components/preview'
import Save from './components/save'

function App() {
  return (
    <Router>
      <TProvider>
        <div className="app">
          <Switch>

            <Route exact path='/' render={() =>
              <div className="home">
                <IzborProcene />
                <IzborOpasnosti />
                {/* <IzborScenarija /> */}
                <Kalkulator />
                <div className="proba">
                  <div className="proba1">
                    <h1>Највероватнији нежељени догађај</h1>
                    <div>
                    <ProcenaVerovatnoce />
                    <ProcenaPosledica />
                    </div>
                  </div>
                  <div className="proba1">
                  <h1>Нежељени догађај са најтежим могућим последицама</h1>
                  <div>
                    <ProcenaVerovatnoceNajtezi />
                    <ProcenaPosledicaNajtezi />
                    </div>
                  </div>
                </div>
                <Save />
              </div>
            } />

            <Route path='/preview' component={Preview} />

          </Switch>
        </div>
      </TProvider>
    </Router>
  );
}

export default App;