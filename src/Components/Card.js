import React from "react"

export default function Card(props){
    const item = props.item;
    
    return (
        <div className="card-container">
            <img 
                src={item.imageUrl} alt={item.title} className="card-image"
            />
            <div className="card">
                    <img src="./src/assets/images/pin.png"></img>
                    <h4 className="location">{item.location}</h4>
                    <a 
                        href={item.googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-link">View on Google Maps
                    </a>
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-dates">
                        <span>From: {item.startDate}</span> -
                        <span> To: {item.endDate}</span>
                    </div>
                    <p className="card-description">{item.description}</p>
            </div>
        </div>
    );
}