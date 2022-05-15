import React from 'react'

import { Routes, Route } from 'react-router-dom'
import UserRegistration from '../pages/UserRegistration';

interface Props { }

const AppRoutes: React.FC<Props> = () => {

    return (
        <Routes>
            <Route path='/' element={<UserRegistration />} />
        </Routes>
    )

}

export default AppRoutes;