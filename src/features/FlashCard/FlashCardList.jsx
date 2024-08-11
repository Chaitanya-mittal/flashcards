import { useState } from "react";
import Flipcard from "../../ui/Flipcard";
import Empty from "../../ui/Empty";

function FlashCardList({ data }) {
  if (data.length === 0) {
    return <Empty resource="flashcards" />;
  }
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
