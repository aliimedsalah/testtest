import React from 'react';

function Nav(props) { 
return (

    <div>

<img className="main-nav" />
    <ul className="Nav">
    {props.property.map(Element => <li className={Element.sty}> {Element.menu}
<ul className="dropdown">
    {!Element.drop ? null : Element.drop.map (Element => <li>{Element}</li>)}
</ul>

    </li>
    
    )}
</ul>
</div>
);


}

export default Nav;