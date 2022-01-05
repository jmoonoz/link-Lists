import React from "react";
import { Button } from "reactstrap";

const Btn = (props) => {
  return (
    <div>
      <a href={props.link}>
        <Button className="btn-design" color="light" outline>
          {props.btnName}
        </Button>
      </a>
    </div>
  );
};

export default Btn;
