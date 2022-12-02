import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from '../../images/signup.webp';
import '../Signup/Signup.css'
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';



const Signup = () => {
    const { createUser, userInfoUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle("signup")
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const fullName = form.fullName.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(fullName, photoUrl, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                userNameOrPhotoUpdate(fullName, photoUrl);
                toast.success('Registion Successfull');
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const userNameOrPhotoUpdate = (fullName, photo) => {
        const profile = {
            displayName: fullName,
            photoURL: photo
        }

        userInfoUpdate(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 m-auto my-6 text-gray-100">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Full Name</label>
                    <input type="text" name="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photourl" className="block dark:text-gray-400">Photo URL</label>
                    <input type="text" name="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#F6830D]">Register</button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link rel="noopener noreferrer" to="/login" className="text-[#F6830D]"> Login</Link>
            </p>
        </div>
    );
};

export default Signup;