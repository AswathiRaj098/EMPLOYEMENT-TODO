import {useState} from 'react';
import './styles.css';
 
export default function App () {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [employee, setEmployee] = useState([{id:1,name:"Sam",role:"Developer"}]);

  const AddEmployee = () => {
    console.log(id,name,role);
    setEmployee([...employee,{id:id, name:name, role:role}])

    setId("");
    setName("");
    setRole("");
  }

  const DeleteAll = () => {
    setEmployee([]);
  }

  const deleteIndividual = (id) => {
    const newEmp = employee.filter (e => e.id !==id);
    setEmployee(newEmp);
  }

  return (
    <div className='App'>
      <h1>Employee Management</h1>
    <div className="form" align="center">
      <label>ID:</label>
      <input required type='number' placeholder='Enter ID ..' value={id} onChange={e => setId(e.target.value)} /><br></br>
      <label>NAME:</label>
      <input required type='text' placeholder='Enter Name ..'  value={name} onChange={e => setName(e.target.value)}/><br></br>
      <label>ROLE:</label>
      <input required type='text' placeholder='Role ..'  value={role} onChange={e => setRole(e.target.value)} /><br></br>
      <br></br>
      <button className='btn' onClick={AddEmployee}>AddEmployee</button>
      <button className='btn' onClick={DeleteAll}>Delete All</button>
    </div>
    
    
    {employee.map((emp,i) => {
      return (
        <div key={i}>
          {emp.id}    {emp.name}    {emp.role} 
          <button className='del' onClick={() => {
          deleteIndividual(emp.id)
          }}>X</button>
          </div>
      )
    })};

    </div> 
  );
}

