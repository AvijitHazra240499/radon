import React, { useState } from 'react'
import Axios  from 'axios'
import  "./App.css"

const App = () => {
    const [value,updateValue]=useState("")
    const [visible,setVisible]=useState("")

    async function urlshort(){
      setVisible(null)
        const host="https://url-shortner-y5ky.onrender.com"
      const Longurl=await Axios.post(`${host}/url/shorten`, {
       longUrl:value
      })
      let Shorturl=`${host}/${Longurl.data.data.urlCode}`

      setVisible(Shorturl)
    }
  return (
    <div className='container'>
      <input onChange={(e)=>{
       updateValue(e.target.value)
      }}/>
      { visible===null?"...wait Please":
      <button onClick={()=>{urlshort()}}>
        Submit
      </button>
      }
       <a href={visible}>
        <span>{visible}</span>
      </a>
      
    </div>
  )
}


export default App
