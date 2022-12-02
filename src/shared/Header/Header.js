// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../..</Linkssets/logo.svg';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Blog from '../../Pages/Blogs/Blog';
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const userSignOut = () => {
        logOut()
            .then(() => {
                toast.success('LogOut Successfull');
            })
            .catch(error => toast.error(error.message))
    }
    useTitle('Header')


    return (
        <div className="header-navbar navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Avijatrik</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    {/* <li><Link to='/signup'>Sign Up</Link></li> */}
                    {/* {

                        user?.email ?
                            <>
                                <li><Link to='/review'>Review</Link></li>
                            </>

                            :
                            <li><Link to='/login'>Login</Link></li>
                    } */}
                    <li><Link to='/blogs'>Blog</Link></li>
                    {/* <li><Link to='/serviceadded'>Add Service</Link></li> */}
                    {
                        user?.email ?
                            <>
                                <li><button onClick={userSignOut}>LogOut</button></li>
                                <li><Link to='/serviceadded'>Add Service</Link></li>
                                <li><Link to='/reviewadded'>My Review</Link></li>
                                <li tabIndex={0}>
                                    <Link><img className=" w-10 object-fill rounded-full" src={user?.photoURL} alt="" /></Link>
                                    <ul className="p-2 bg-red-500 text-white">
                                        <li><Link to="/profile">{user?.displayName}</Link></li>
                                    </ul>
                                </li>
                            </>
                            :

                            <li><Link to="/login">Login</Link></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;