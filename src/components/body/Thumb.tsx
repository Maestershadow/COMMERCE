
function Thumb(props: { callback: (arg0: number) => void; currentIndex: number; })
{
    const imgUrl = [
        "./assets/image-product-1-thumbnail.jpg",
        "./assets/image-product-2-thumbnail.jpg",
        "./assets/image-product-3-thumbnail.jpg",
        "./assets/image-product-4-thumbnail.jpg"
    ];

  
    function selectThumb(selectedIndex: number)
    {
        props.callback(selectedIndex);
    }


    return ( <div className="padding-block-500 gap-400 thumb-section flex">
                { imgUrl.map((element,index)=>{
                    return <div onClick={()=> selectThumb(index)} className={`selected-image ${index === props.currentIndex  ? "": "not-visible"}`}> 
                    <img src={element} alt="thumb-image" className={`${index === props.currentIndex ? "thumb-image-faint": "thumb-image"} cursor-pointer`} /> </div> ; }) }
                    </div> );
}

export default Thumb