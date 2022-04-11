import React from 'react'
import Avatar from './Avatar'
import AvatarIMG from '../../src/logo.svg';

function ExtractingComponent() {
    return (
        <div className="comment">
            <div>
                <Avatar user={{avatarURl:{AvatarIMG},name:"avatarName"}}/>
            </div>
        </div>
    )
}
export default ExtractingComponent;