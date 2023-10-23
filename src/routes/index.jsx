import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Explore from '../pages/explore'
import Notifications from '../pages/notifications'
import Not from '../pages/Not'
import MainLayout from '../pages/layouts/main'
import Profile from '../pages/profile'
import Messages from '../pages/messages'
import Lists from '../pages/Lists'
import Bookmarks from '../pages/bookmarks'



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
                element: < Notifications/>
            },
            {
                path: 'messages',
                element: <Messages/>
            },
            {
                path: 'lists',
                element: < Lists/>
            },
            {
                path: 'bookmarks',
                element: <Bookmarks/>
            },
        {
            path:':slug',
            element:<Profile/>

        },
           
            {
                path: '*',
                element: < Not />
            },
        ]
    },



])

export default routes