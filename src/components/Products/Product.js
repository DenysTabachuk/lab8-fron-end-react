export default function Product({ productObj }) {
    const assetsPath = require(`../../assets/${productObj.img}`);

    return (
        <div className="product">
            <img className = "product-image" src={assetsPath} alt="" />
            <div className="price-and-stars-container">
                <p className="price"><b>${productObj.price}</b></p>

                <div className="starts-container">
                    {Array(productObj.stars).fill(null).map((_, index) => (
                        <img
                            key={index} 
                            className="star-icon" 
                            src="/icons/star.png" 
                            alt="star" 
                        />
                    ))}
                </div>
            </div>
            <p className="description">{productObj.description}</p>
        </div>
    );
}
