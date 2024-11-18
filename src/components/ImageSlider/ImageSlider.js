import { useState } from "react";
import "./ImageSlider.css";



export default function ImageSlider(){

    console.log("sex" + process.env.PUBLIC_URL);


    const images = [
        "images/banner1.jpeg",
        "images/banner2.jpg",
        "images/banner3.jpg"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };


    return (
        <div id="carousel">
        
            <div id="over-banner-message">
                <h3>BEST LOCKSMITH</h3>

                <p id="over-banner-message-text"><big><b>We Provide Best Locksmith
                    <br /> Services All Over World</b></big>
                 </p>

                 <button><b>CONTACT US</b></button>
            </div>

        <div id="img-slider" style={{position: 'relative'}}>
             <button className="half-circle-right" onClick={goToPrevImage} 
            style={{
                position: 'absolute',
                top: '40%',
            }}
            ><b> &lt; </b></button>
            <button className="half-circle-left" onClick={goToNextImage}
                style={{
                position: 'absolute',
                top: '40%',
                left: "calc(100% - 60px)"
            }}
            > &gt; </button>
        

            <div id="banner-place-holder">
                <img  src={images[currentImageIndex]} alt="" />
            </div>
        </div>
   

        </div>
    );
}