import React,{useState} from 'react';
import PetsSharpIcon from '@material-ui/icons/PetsSharp';
import Button from '@material-ui/core/Button';
import '../components_css/Landing.css'
const Landing=(props)=>{
  const {flag, setflag}=useState(0)
    return(
        <React.Fragment>
          <div class="content">
          <div >
        <h1 class="header"> <PetsSharpIcon /> Survey Tiger</h1>   
        </div>
        <div class="body">
         <Button class="button" onClick={()=>props.update(1)}>
          Create Survey
        </Button>
        <br/>
        <Button class="button" onClick={()=>props.update(2)}>
          Take Survey
        </Button>
        </div>
        </div>
        </React.Fragment>
        )
}
export default Landing;