import React from 'react';

function Intro({intro}) { 
return (
    <div>
<img className="lead__logo" src="https://www.docplanner.com/img/sygnet.png"/>
       <h1 className="active">{intro.title}</h1>
       <div className="parag">
              {intro.map(el=>(
                     <p className={el.parsty}>{el.p}</p>
              ))}
       </div>

</div>
);


}

export default Intro;