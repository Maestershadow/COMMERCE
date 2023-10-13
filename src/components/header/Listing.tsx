function Listing(props: { navVisibilty:boolean; callback: () => void; })
{
    const headerListing = ["Collections","Men","Women","About","Contact"];
    return (<nav className="primary-navigation" data-visible={`${props.navVisibilty}`} >
            <ul role="list" data-visible="false" className="nav-list gap-400 underline-indicators" id="primary-navigation">
                <li className="closeBtn"><button onClick={()=>props.callback()} className="button" id="closeBtn"><img src="./assets/icon-close.svg" alt="close" /></button></li>
                { headerListing.map((elements)=>{ return <li><a href="#">{elements}</a></li> }) }
                </ul>
            </nav>);
}

export default Listing