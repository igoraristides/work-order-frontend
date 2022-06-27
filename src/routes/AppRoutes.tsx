import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import EquipamentRegistration from '../pages/EquipamentRegistrationForm/EquipamentsRegistration'
import ServiceOrderRegistration from '../pages/ServiceOrderRegistration/ServiceOrderRegistration'
import ServiceRegistration from '../pages/ServicesRegistration/ServiceRegistration'
import UserRegistration from '../pages/UserRegistration/UserRegistration'
import Graphs from '../pages/Graphs/Graphs'

interface Props { }

const AppRoutes: React.FC<Props> = () => {

    return (
        <Routes>
            <Route path='/client' element={<UserRegistration />} />
            <Route path='/newDevice' element={<EquipamentRegistration />} />
            <Route path='/newService' element={<ServiceRegistration />} />
            <Route path='/newServiceOrder' element={<ServiceOrderRegistration />} />
            <Route path='/graphs' element={<Graphs />} />
            <Route path='/' element={<Dashboard />} />
        </Routes >
    )

}

export default AppRoutes;