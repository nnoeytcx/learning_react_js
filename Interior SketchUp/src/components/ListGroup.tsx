//import { Fragment } from "react";
import { useState } from "react";
//import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];

  //const Message = items.length === 0 ? <p>No item found</p> : null;

  // const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  // }

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            //onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
