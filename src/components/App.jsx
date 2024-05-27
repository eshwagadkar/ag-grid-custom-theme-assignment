import React from 'react'
import MainWrapper from './Presentation/Wrappers/MainWrapper.jsx'
import GridTable from './Containers/GridTable.jsx'
import AsideWrapper from './Presentation/Wrappers/AsideWrapper.jsx'
import Logo from './Presentation/Common/Logo.jsx'
import Profile from './Presentation/Common/Profile.jsx'
import BackgroundImage from '../assets/images/wave.svg'

const App = () => {

    const backgroundStyle = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#0e0f1a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      };

    return <>
    <AsideWrapper>
        <Logo />
        <Profile />
    </AsideWrapper>
    <MainWrapper style={backgroundStyle}>
         <GridTable />
    </MainWrapper>
    </>
}

export default App