import React from 'react';


function Countries (props) {
    return (



        <div className="offices">
        <div className="office">
    
           {props.countries.map(el=>
           <div className='offices-btn'>
            <div> 
            <img src= {el.img} alt="img"/> <p> {el.par} </p>  </div>
            <button> See openings </button>
            </div>)}
</div>
<hr></hr>
</div>
    )
}




export default Countries ;