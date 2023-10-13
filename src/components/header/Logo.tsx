
function Logo(props: { callback: () => void; })
{
    return (
        <><div onClick={()=>props.callback()} className="mobile-nav-toggle padding-block-100 cursor-pointer" aria-controls="primary-navigation" >
                        <img className="icon-hamburger" src="assets/icon-menu.svg" aria-hidden="true" alt=""/>
                        <img className="icon-close" src="assets/icon-close.svg" aria-hidden="true" alt=""/>
                        <span className="visually-hidden">Menu</span>
                    </div>
        <a href="#" className="sneaker-logo"><img src="assets/logo.svg" alt="sneakers" /></a></> 
    );
}

export default Logo