import React from "react";
import ResultsFacts from "./ResultsFacts";

function ResultCard(props) {
  console.log(props);

  return (
    <div className="col-sm-2 title-container p-3 m-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.country}</h5>
          <span className="badge badge-pill badge-success">Correct</span>
          <ResultsFacts country={props.country}/>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
