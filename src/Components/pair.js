import { useState } from "react";

const Pair = ({ data }) => {
  const [iseSelected, setselected] = useState(false);
  return (
    <div className="pair-cont">
      <div
        className="question"
        onClick={() => {
          setselected(!iseSelected);
        }}
      >
        {data.q}
        <i className={iseSelected ? "fa fa-remove" : "fa fa-plus"}></i>
      </div>
      {iseSelected && <div className="answer">{data.a}</div>}
    </div>
  );
};

export default Pair;
