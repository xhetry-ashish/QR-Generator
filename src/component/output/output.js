import React from 'react';
import './output.css'

function output(props) {
    return (
        <div className='output-box'>
              <span>Output Qr code is:</span>
          <img src={props.data} alt="values not obtained"></img>
          
        </div>
    );
}

export default output;