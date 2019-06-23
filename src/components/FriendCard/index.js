import React from "react";
import "./FriendsCard.css"


function FriendCard(props) {
    return (
        
            <div className="col-sm-4">
                <div className="card" onClick={() => props.handleClick(props.name)}>
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Name:</strong> {props.name}
                            </li>
                            <li>
                                <strong>Occupation:</strong> {props.occupation}
                            </li>
                            <li>
                                <strong>Location:</strong> {props.location}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
       
    );
}

export default FriendCard;
