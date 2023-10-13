
function MainImage(props: { callback: (arg0: number) => void; currentIndex: number; })
{
    const mainImages = [
        "./assets/image-product-1.jpg",
        "./assets/image-product-2.jpg",
        "./assets/image-product-3.jpg",
        "./assets/image-product-4.jpg"
    ];

    function selectImage(selectedIndex: number,isPrev: boolean)
    {
        if (isPrev)
        {
            if(selectedIndex == 0)
                props.callback(mainImages.length-1);
            else
                props.callback(selectedIndex-1)
        }
        else
        {
                if(selectedIndex == 3)
                    props.callback(0);
                else
                    props.callback(selectedIndex+1)
            
        }
        
    }

    return ( 
        <div className="main-image">
        <img id="mainImage" src={mainImages[props.currentIndex]} alt="shoe"/>
        <a id="prevBtn" className="prev" onClick={()=> selectImage(props.currentIndex,true)}><img src="./assets/icon-previous.svg" alt="previous"/></a>
        <a id="nextBtn" className="next" onClick={()=> selectImage(props.currentIndex,false)}><img src="./assets/icon-next.svg" alt="next"/></a>
        </div>
        );
}

export default MainImage