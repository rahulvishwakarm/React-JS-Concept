import React, { Fragment } from 'react'

function ListItemView({item}) {
    return (
        <Fragment key={item.id}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
        </Fragment>
    )
}


function SemanticHTML(props) { 
    return (
        <dl>
                {
                    props.items.map(item=>(
                        <ListItemView item={item} key={item.id}/>
                    ))
                }
        </dl>
        )
}
export default  SemanticHTML;