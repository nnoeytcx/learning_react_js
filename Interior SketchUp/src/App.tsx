import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert"
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let button_name = "alert";
  const handleSelectItem = (item: string) => {
    console.log(item);

  }

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button color ="primary" onClick={() => setAlertVisibility(true)}>{button_name}</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
