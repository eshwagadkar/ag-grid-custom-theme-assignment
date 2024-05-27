import React from 'react'
import ImageWrapper from '../Wrappers/ImageWrapper.jsx';
import profile from '../../../assets/images/profile.png';

export default function Profile() {
    return <ImageWrapper src={profile} width={40} className='profile'/>
}