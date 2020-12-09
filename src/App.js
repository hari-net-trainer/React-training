import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import StatefulApp from './components/StateDemos/StatefulApp';
import ChildParentInvoke from './components/Intercomp/ChildParentInvoke'
import TextInput from './components/Intercomp/TextInput';
import Grid from './components/Grid';
import RefDemo from './components/Intercomp/RefDemo';
import CompLifeCycle from './components/LifeCycle/CompLifeCycle';
import WeatherComponent from './components/LifeCycle/WeatherComponent';
import Button from './components/Hooks/Hook2';
import DataLoader from './components/Hooks/Hook3';

function App() {
  return (
    <div className="App">
      <Header message="React & Redux Training"/>
      {/* <Header /> */}
      <h1>Wellcome to React</h1>
      {/* <StatefulApp />
      <hr />
      <ChildParentInvoke />
      <hr/>
      <TextInput/>
      <hr/>
      <Grid/>
      <hr/>
      <RefDemo /> */}
      {/* <CompLifeCycle/> */}
      {/* <WeatherComponent /> */}
      <Button/>
      <DataLoader/>
      <Footer />
    </div>
  );
}

export default App;
