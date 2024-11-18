import { useState } from "react";
import "./WhyChooseUsBlock.css"
import statistics from "../../data/statistic";

export default function WhyChooseUsBlock(){
    const [currentStatIndex, setCurrentStatIndex] = useState(0);
    let currentStat = statistics[currentStatIndex];

    const goToNextStat = () => {
        setCurrentStatIndex((prevIndex) => (prevIndex + 1) % statistics.length);
    }

    const goToPrevStat = () => {
        setCurrentStatIndex((prevIndex) =>
          prevIndex === 0 ? statistics.length - 1 : prevIndex - 1
        );
      };

    return (
        <div id="why-choose-us-wrapper"> 

             <div id="why-choose-us-block">
                <img id = "img-1" className="choose-us-image" src="images/security-camera.jpg" alt="" />
                <img id = "img-2" className="choose-us-image" src="images/door-lock.jpg" alt="" />
                <img id = "img-3" className="choose-us-image" src="images/interactive-td63.jpg" alt="" />

                <div id="why-choose-us-text-info">
                    <h3 className="yellow-spaced-header">WHY CHOOSE US</h3>
                    <h2 className="spaced-bigger-header">WHY CHOOSE US?</h2>
                    <hr className="lefted-hr"/>
                    <p>
                    Choose us for unparalleled expertise, exceptional customer service, and a commitment to
                    delivering results that truly matter. Our team works tirelessly to understand your unique
                    needs and tailor solutions that drive success. We focus on innovation, quality, and
                    efficiency, ensuring that every project, large or small, is completed with the highest
                        standards. With a proven track record and a passion for excellence, we are dedicated
                        to helping you achieve your goals. Partner with us today and experience the difference
                        that dedication, experience, and a customer-first approach can make.
                    </p>
                    <ul>
                    <li><img className = "check-icon" src="icons/check.png" />Safes & Safe Deposit Boxes</li>
                    <li><img className = "check-icon" src="icons/check.png" />Car Locksmith & Car Alarm Systems</li>
                    <li><img className = "check-icon" src="icons/check.png" />Residential Locksmith & Commercial Locksmith</li>
                    <li><img className = "check-icon" src="icons/check.png" />We Are Awesome People to Meet</li>
                    <li><img className = "check-icon" src="icons/check.png" />Digital & Electronic Lock</li>
                    </ul>

                    <div id="why-choose-us-button-container" >
                        <button className="get-quote-button"><b>GET A QUOTE</b></button>
                    </div>

                </div>
             </div>
            
             <div id="statistics-container">
                {statistics.map((stat, index) => (
                    <div className="statistics" key={index}>
                        <img src={stat.icon} alt={stat.name} />
                        <p className="stat-value"><big>{stat.value}</big></p>
                        <p className="stat-name"  style={{textAlign: 'center'}}>{stat.name}</p>
                    </div>
                    ))}
             </div>

             <div id="statistics-slider">
                <button className="half-circle-right" onClick={goToPrevStat}><b> &lt; </b></button>

                <div className="statistics">
                    <img src={currentStat.icon} alt={currentStat.name} />
                    <p className="stat-value"><big>{currentStat.value}</big></p>
                    <p className="stat-name">{currentStat.name}</p>
                </div>

                <button className="half-circle-left" onClick={goToNextStat}> &gt; </button>
             </div>
            
        </div>
    );
}