import React from 'react';
import {Test,Test1} from './ExportNamedComponentAsDefault';
const ImportDefaultComponent = () => {
    return (
        <div>
            <Test/>
            <Test1/>
        </div>
    )
}
 
export default ImportDefaultComponent;