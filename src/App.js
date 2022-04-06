import Passengers from "./features/Passengers";
import PassengerFinder from "./features/PassengerFinder";
import AddPassenger from "./features/AddPassenger";

function App() {
  return (
    <div className="container">
      <h1>Hello React-query</h1>
      <Passengers />
      <PassengerFinder />
      <AddPassenger />
    </div>
  );
}

export default App;
