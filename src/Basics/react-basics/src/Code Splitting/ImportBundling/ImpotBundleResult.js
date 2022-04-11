import React from 'react';

import("./Operation").then(math => {
    console.log(math.modulo(20,6))
})

export default function ImpotBundleResult() {
    return (
        <div>
            
        </div>
    )
}