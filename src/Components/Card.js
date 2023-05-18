import React,{useContext} from 'react';
import Context from '../Context/Context';

import Color from "../style/Colors";

function Card() {
  const theme=useContext(Context)[0];
  const currentcolor=Color[theme];
  
  return (
    <div>
        <div className="card" style={{width: "18rem",backgroundColor:`${currentcolor.backgroundColor}`,color:`${currentcolor.textColor}`,border:`${currentcolor.border}`}}>
        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href=" " className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Card
