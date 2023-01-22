import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DripLogo } from "../../assets/water_drop.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import './navigation.styles.scss';

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { toast } from "react-toastify";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser()
        toast.info('Sign out!')
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <DripLogo className='logo inside-path' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>)
                            : (<Link className='nav-link' to='/auth'>Sign In</Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && (<CartDropDown />)}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;