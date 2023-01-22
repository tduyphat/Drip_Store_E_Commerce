import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { toast } from "react-toastify";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        const res = await signOutUser()
        setCurrentUser(null)
        toast.info('Sign out!')
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo inside-path' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>)
                            : (<Link className='nav-link' to='/auth'>Sign In</Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;