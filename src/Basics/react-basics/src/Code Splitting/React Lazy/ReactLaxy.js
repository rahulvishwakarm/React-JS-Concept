import React,{Suspense} from 'react';
import ErrorBoundary from '../../ErrorBoundaries/ErrorBoundary';

const Toggle = React.lazy(()=>import('../../HandlingEvents/Toogle'))

export default function ReactLaxy() {
    return (
        <div>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Toggle/>
                </Suspense>
            </ErrorBoundary> 
        </div>
    )
}
