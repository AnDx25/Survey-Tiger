import React,{useState} from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import CreateSurvey from './components/CreateSurvey';
import TakeSurvey from './components/TakeServey';
import Landing from './components/Landing'

function App() {
  const [flag, setFlag] = useState(0);
  const update=(value)=>{
    setFlag(value)
  }
  return (
    <div className="App">
      <div>
      {(flag===0) && <Landing update={update}/>}
      {flag===1 && <CreateSurvey/>}
      {flag===2 && <TakeSurvey/>}
      </div>
    </div>

  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export default App;
