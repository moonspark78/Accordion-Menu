import React, { useState } from "react";
import data from "./data";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
};
