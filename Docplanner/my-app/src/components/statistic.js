import React from 'react';


function Stats(props){
return (

 <div className="stats">  
<div className="stats-section">
<h1 className="stats-title"> The world s  biggest healthcare platform </h1>
</div>   
</div>

<div class="stats-title">
{props.s.map ( el => 
<div className={el.class}> 
<img src={el.pic}/>
<h2>{el.h}</h2>  
<p>{el.p}</p>
 </div>

) 

</div>
  

);
}


export default Stats; 