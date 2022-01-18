import './App.css';
import Destructuring from './functions/Destructuring';

const userResponse = {
  userName : 'test',
}

function App() {
  return (
    <div className="App">
      <Destructuring userResponse={userResponse}></Destructuring>
    </div>
  );
}

export default App;
