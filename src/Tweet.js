import React, {useState} from 'react'
import './App.css'

function Tweet(props) {
    
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }
  
  return (
        <div className='tweet'>
          <h3>{props.name}</h3>
          <p>{props.msg}</p>
          {/* <h3 style={{background:'white'}}>Number of likes</h3>   */}
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <button className='btn' onClick={increment}>Like</button>
            <h3>{count}</h3>
          </div>
        </div>
    )
}

export default Tweet;
