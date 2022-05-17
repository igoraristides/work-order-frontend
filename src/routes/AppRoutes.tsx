import React from 'react'

import { Routes, Route } from 'react-router-dom'
import UserRegistration from '../pages/UserRegistration';
import EquipamentRegistration from '../pages/EquipamentsRegistration'

interface Props { }

const AppRoutes: React.FC<Props> = () => {

    return (
        <Routes>
            <Route path='/' element={<UserRegistration />} />
            <Route path='/newDevice' element={<EquipamentRegistration />} />
        </Routes >
    )

}

export default AppRoutes;