import React from "react";
import API from "../utils/API";

function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <img src={result.image.thumbnail} alt={result.name.first}></img>
                </li>
            ))}
        </ul>
    )
}

export default ResultList;