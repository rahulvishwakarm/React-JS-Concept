import React from 'react'

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarURl}
            alt={props.user.name}
        />
    )
}
export default Avatar;