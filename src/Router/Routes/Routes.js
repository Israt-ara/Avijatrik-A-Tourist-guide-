import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blogs/Blog';
import Details from '../../Pages/details/Details';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Home/Services/Services';
import Login from '../../Pages/Login/Login';
import Review from '../../Pages/Review/Review';
import Signup from '../../Pages/Signup/Signup';
import ServiceAdded from '../../Pages/ServicAdded/ServiceAdded';
import MyReview from '../../Pages/Review/MyReview/MyReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/signup',
                element: <Signup></Signup>

            },


            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://avijatrik-2tlb.vercel.app/services/${params.id}`)

            },
            {
                path: '/review',
                element: <PrivateRoute><Review></Review></PrivateRoute>

            },
            {
                path: '/serviceadded',
                element: <PrivateRoute><ServiceAdded></ServiceAdded></PrivateRoute>,


            },
            {
                path: '/reviewadded',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>


            },
            {
                path: '/services',
                element: <Services></Services>

            },

            {
                path: '/blogs',
                element: <Blog></Blog>


            },

        ]
    }
])


export default router;