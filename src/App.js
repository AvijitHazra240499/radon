//import logo from './logo.svg';
//import './App.css';
import Box from './component/component'
import {useState} from 'react'


function App() {
  const [val,setVal]=useState([1,2,3,4,5])

  function add(){
    val.push((val.slice(-1)*1)+1)
    setVal([...val])
  }

  window.onscroll=function (){
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement
    if(scrollTop+clientHeight>=scrollHeight) add()
  }
  return (
    <div style={{display:'flex',flexDirection: "column",alignItems: "center",gap:"20px"}}>
      {val.map((x,index)=>{
        return(
          <Box key={index} val={x} />
        )
      })}
    </div>
  );
}

export default App;
