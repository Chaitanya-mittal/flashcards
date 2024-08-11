import { useState } from "react";
import Flipcard from "../../ui/Flipcard";

function FlashCardList({ data }) {
  return (
    <ul className="container">
      {data.map((data, index) => (
        <li key={data.id}>
          <Flipcard data={data} index={index + 1} />
        </li>
      ))}
    </ul>
  );
}

export default FlashCardList;
