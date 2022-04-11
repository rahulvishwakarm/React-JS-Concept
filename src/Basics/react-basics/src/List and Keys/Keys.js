import React from 'react';

function Keys() {
    const num = [167,232,643,456,567,685,877,878,769]
    return (
        <div>
            {
                num.map(n=>(
                    <li key={n.toString()}> {/**Way 1 */}
                        {n}
                    </li>
                ))
            }

            {
                num.map(n=>(
                    <ul key={n.id}>   {/**Way 2 */}
                        {n}
                    </ul>
                ))
            }

            {
                num.map(n=>(
                    <li key={n.index}>  {/**Way 3 - Do this Only if Item do not have stable Id */}
                        {n}
                    </li>
                ))
            }
        </div>
    )
}
export default Keys;