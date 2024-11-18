import { useState } from "react";

import "./ServicesOverview.css"
import services from "../../data/services";
import ServiceCard from "./ServiceCard";


export default function ServicesOverview(){
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    const goToNextService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }

    const goToPrevService = () => {
        setCurrentServiceIndex((prevIndex) =>
          prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
      };


    return (
        <div id="services-overview">
            <h3 className="centered yellow-spaced-header">OUR SERVICES</h3>
            <h2 className="centered spaced-bigger-header">SERVICES WE OFFER</h2>
            <hr />

            <div id="service-card-container">
            { services.map( (servive) => 
                  <ServiceCard key = {servive.name} serviceObj = {servive}></ServiceCard>   
                  ) }
            </div>

             {/* for small screens */}
            <div id="service-card-slider"> 

                <div id="service-card-slider-content">
            
                    <button className="half-circle-right" onClick={goToPrevService}><b> &lt; </b></button>
                    <ServiceCard serviceObj = {services[currentServiceIndex]}></ServiceCard>   
                    <button className="half-circle-left" onClick={goToNextService}> &gt; </button>
                </div>
            
            </div>
          
          
        </div>
    );
}