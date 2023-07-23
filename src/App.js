import './index.css';
import Employee from './components/employee';
import { useState } from 'react';

function App() {

  const [role, setrole] = useState();
  const showEmployees = true;

  return (
    <div className="App bg-red-300">cle
      {showEmployees ? (

        <>
          <input type='text' 
          onChange={(e) => {
            console.log(e.target.value);
            setrole(e.target.value);
            }}/>   
          
          
          <Employee name="Angelo" role="Intern"/>
          <Employee name="Abby" role={role}/>

        </>

      ) : (
        <p>You cannot view employees</p>
      )}
        
    </div>
  );
}

export default App;
