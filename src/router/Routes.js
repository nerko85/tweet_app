import Login from '../components/Login'
import Register from '../components/Register'
import Tweets from '../components/Tweets'

const routes = [
    {
        path:'/',
        component: Login,
        exact:true
    },
    {
        path:'/register',
        component: Register,
        exact:true
    },
    {
        path:'/:user',
        component: Tweets,
        exact:true
    }
]

export default routes;