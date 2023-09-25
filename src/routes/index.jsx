import  { createBrowserRouter} from 'react-router-dom'


const routes =   createBrowserRouter([
{
    path:'/',
    element :'anasayfa component'
},
{
    path:'/explore',
    element :'explore component'
},
{
    path:'/motifications',
    element :'bildirimler component'
},


])

export default routes