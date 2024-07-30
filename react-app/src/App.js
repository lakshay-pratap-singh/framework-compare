import './App.css';
import {useState} from "react"

function App() {
  const [message,setMessage] = useState();

  const onClickHello = () => {
    setMessage("Click Me called")
  }

  return (
    <div>
        <p>
        {message || "My Dog has no nose.” “How does he smell?” “Awful”"}
        </p>
        <button onClick={onClickHello}>Click Me</button>
    </div>
  );
}

export default App;
