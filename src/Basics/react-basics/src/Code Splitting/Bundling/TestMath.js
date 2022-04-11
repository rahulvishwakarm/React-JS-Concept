import React from 'react';
import {add,sub,mul,divi} from './Math';

export default function TestMath() {
    return (
        <div>
            {
                console.log(add(4,5)),
                console.log(sub(10,5)),
                console.log(mul(5,6)),
                console.log(divi(14,7))
            }
        </div>
    )
}
