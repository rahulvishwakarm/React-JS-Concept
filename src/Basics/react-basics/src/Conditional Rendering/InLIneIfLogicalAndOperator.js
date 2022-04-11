import React from 'react';

function InLIneIfLogicalAndOperator(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            <h1>Hello!!</h1>
            {
                unreadMessage.length>0 && 
                <h2>
                    You have {unreadMessage.length} unread message
                    {
                        unreadMessage.map(mess=>(
                            <li>
                                {mess}
                            </li>
                        ))
                    }
                </h2> 
            }
        </div>
    );
}


export default  InLIneIfLogicalAndOperator;