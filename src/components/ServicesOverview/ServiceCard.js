export default function ServiceCard({serviceObj}){
    return (
        <div className="service-card">
            <div className="service-icon-container">
                <img className="service-icon" src={serviceObj.icon} alt="" />
            </div>
            <div className="service-info-container">
                <h3>{serviceObj.name}</h3>
                <p>
                    <big>{serviceObj.description}</big>
                </p>
            </div>
        </div>
    );
}