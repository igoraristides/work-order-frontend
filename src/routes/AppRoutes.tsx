import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import EquipamentRegistration from '../pages/EquipamentRegistrationForm/EquipamentsRegistration'
import UserRegistration from '../pages/UserRegistration/UserRegistration'

interface Props { }

const AppRoutes: React.FC<Props> = () => {

    return (
        <Routes>
            <Route path='/client' element={<UserRegistration />} />
            <Route path='/newDevice' element={<EquipamentRegistration />} />
            <Route path='/' element={<Dashboard />} />
        </Routes >
    )

}

export default AppRoutes;