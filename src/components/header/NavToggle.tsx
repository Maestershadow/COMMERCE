function NavToggle()
{
    return (<div className="mobile-nav-toggle padding-block-100 cursor-pointer" aria-controls="primary-navigation">
                <img className="icon-hamburger" src="assets/icon-menu.svg" aria-hidden="true" alt="" />
                <img className="icon-close" src="assets/icon-close.svg" aria-hidden="true" alt="" />
                <span className="visually-hidden">Menu</span>
            </div>);
}

export default NavToggle