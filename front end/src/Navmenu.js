import React from 'react'
const Navmenu=({navItem})=>{

return (
<ul className='liste'>
{navItem.map(el=>
    (<li className="item">
{el.title}
    {!el.sousItem?null:<ul className='sub'>{el.sousItem.map(el=><li className='sub-item'>{el}</li>)}</ul>}
    </li>
))}
</ul>
);


};

export default Navmenu;