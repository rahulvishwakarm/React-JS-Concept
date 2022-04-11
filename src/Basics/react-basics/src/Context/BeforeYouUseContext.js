{/**
    
import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../Component and Props/Avatar';


function BeforeYouUseContext(props) {
    const user = prop.user;
    const userLink = (
        <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize}/>
        </Link>
    );
    return <PageLayout userLink={userLink}/>
}


//Now we have
<BeforeYouUseContext user={user} avatarSize={avatarSize}/>

// Which Renders
<PageLayout userLink={....}/>

// Which Renders
<NavigationBar userLink={...}/>

// Which Renders
{props.userLink}


export default  BeforeYouUseContext;

 */}