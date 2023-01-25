import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DripLogo } from "../../assets/water_drop.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import {
    NavigationContainer,
    NavLink,
    NavLinks,
    LogoContainer
} from './navigation.styles';

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
            <NavigationContainer>
                <LogoContainer to='/'>
                    <DripLogo className='logo inside-path' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>Shop</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>)
                            : (<NavLink to='/auth'>Sign In</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && (<CartDropDown />)}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;