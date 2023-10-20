import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Notifications from '../pages/notifications'
import Not from '../pages/Not'
import MainLayout from '../pages/layouts/main'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,

        children: [
            {
                index: true, //burda ilk olarak hoe yuklemek icin index true
                element: <Home />
            },

            {
                path: 'explore', //bunlari gostermek icin outlet ile yapariz
                element: <Explore />
            },
            {
                path: 'notifications',
                element: < Notifications />
            },
            {
                path: '*',
                element: < Not />
            },
        ]
    },



])

export default routes