import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [formData, setFormData] = useState(false);
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState("");
  const [delivery, setDelivery] = useState("");
  const [instructions, setInstructions] = useState("");

  const toppingsHandler = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && size && toppings.length > 0 && crust && delivery) {
      setFormData(true);
    }
  };

  return (
    <main>
      <h1>Pizza Order Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="nameInput">Customer Name: </label>
        <input
          id="nameInput"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br /> <br />
        <label htmlFor="sizeSelect">Choose Pizza Size: </label>
        <select
          id="sizeSelect"
          onChange={(event) => setSize(event.target.value)}
          required
        >
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <br />
        <br />
        <label>Choose Toppings: </label>
        <br />
        <input
          type="checkbox"
          value="Pepperoni"
          onChange={toppingsHandler}
        />{" "}
        Pepperoni <br />
        <input
          type="checkbox"
          value="Mushrooms"
          onChange={toppingsHandler}
        />{" "}
        Mushrooms <br />
        <input type="checkbox" value="Olives" onChange={toppingsHandler} />{" "}
        Olives
        <br /> <br />
        <label>Choose Crust Type: </label>
        <br />
        <input
          type="radio"
          value="Thin"
          name="crust"
          onChange={(event) => setCrust(event.target.value)}
          required
        />{" "}
        Thin <br />
        <input
          type="radio"
          value="Thick"
          name="crust"
          onChange={(event) => setCrust(event.target.value)}
        />{" "}
        Thick
        <br /> <br />
        <label>Choose Delivery Options:</label>
        <br />
        <input
          type="radio"
          name="delivery"
          value="Pickup"
          onChange={(event) => setDelivery(event.target.value)}
          required
        />{" "}
        Pickup <br />
        <input
          type="radio"
          name="delivery"
          value="Delivery"
          onChange={(event) => setDelivery(event.target.value)}
        />{" "}
        Delivery
        <br /> <br />
        <label htmlFor="instructions">
          Special Instructions (if any):
        </label>{" "}
        <br />
        <textarea
          id="instructions"
          rows={4}
          cols={40}
          onChange={(event) => setInstructions(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Place Order</button>
      </form>

      {formData && (
        <div>
          <h2>Submitted Details: </h2>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {size}</p>
          <p>Toppings: {toppings.join(", ")}</p>
          <p>Crust Type: {crust}</p>
          <p>Delivery Option: {delivery}</p>
          <p>Special Instructions: {instructions || "none"}</p>
        </div>
      )}
    </main>
  );
}
