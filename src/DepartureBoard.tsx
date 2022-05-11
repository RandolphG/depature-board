import React from "react";
import "./style.scss";

interface DepartureBoardProps {
  words?: string[];
}

const DepartureBoard = ({ words }: DepartureBoardProps) => {
  return (
    <div className="departure-board">
      {words?.map((word, index) => {
        return (
          <span
            key={index}
            className={`letter letter-${word === " " ? "blank" : word}`}
          />
        );
      })}
    </div>
  );
};

export default DepartureBoard;
