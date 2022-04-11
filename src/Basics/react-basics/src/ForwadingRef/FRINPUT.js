import React from 'react'

// function FRINPUT() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

const FRINPUT = React.forwardRef((props,ref)=> {
    return ( 
        <div>
            <input type="text" ref={ref} />
        </div>
    );
}) 

export default FRINPUT;
