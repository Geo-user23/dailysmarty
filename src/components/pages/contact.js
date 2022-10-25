import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">--</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">jovanirodriguez220@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Phx, AZ</div>
          </div>
        </div>
      </div>
    </div>
  );
}