import React, { useState } from 'react';

export default function Table() {
  const [employees, setEmployees] = useState([
    // ... (your existing employee data)
    
      { id: 101, name: 'Akshitha', designation: 'developer', salary: 60000,MobileNo: +917671875825 },
      { id: 102, name: 'Mamatha', designation: 'developer', salary: 50000,MobileNo: +91969451211 },
      { id: 103, name: 'Abhi', designation: 'developer', salary: 70000,MobileNo: +91969451211 },
      { id: 104, name: 'Vikas', designation: 'developer', salary: 50000,MobileNo: +91969451211},
      { id: 106, name: 'Tejeswari', designation: 'developer', salary: 45000,MobileNo: +91969451211},
      { id: 107, name: 'Arusha', designation: 'developer', salary: 45000,MobileNo: +91969451211},
      { id: 108, name: 'akash', designation: 'developer', salary: 45000,MobileNo: +91969451211},
      { id: 109, name: 'ranjith', designation: 'developer', salary: 45000,MobileNo: +91969451211},
      { id: 110, name: 'lokesh', designation: 'developer', salary: 45000,MobileNo: +91969451211},
      { id: 111, name: 'ganesh', designation: 'developer', salary: 45000,MobileNo: +91969451211},
      { id: 112, name: 'ashrith', designation: 'developer', salary: 350000,MobileNo:+919635739349}
    
  
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleEdit = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);
    setEditingEmployee(employeeToEdit);
  };

  const handleSave = (id, updatedData) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, ...updatedData } : employee
    );
    setEmployees(updatedEmployees);
    setEditingEmployee(null); // Reset editing state after saving
  };

  return (
    <>
      <div className='container'>
        <div className='col-sm-8'>
          <h1>EMPLOYEE TABLE</h1>
          <hr></hr>

          <table className='table table-striped transparent-table'>
            <thead>
              {/* ... (your existing table header) */}
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className='table-primary'>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.MobileNo}</td>
                  <td>
                    <button className='btn btn-success' onClick={() => handleEdit(employee.id)}>
                      Edit
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {editingEmployee && (
                <tr>
                  <td>{editingEmployee.id}</td>
                  <td>
                    <input
                      type='text'
                      value={editingEmployee.name}
                      onChange={(e) =>
                        setEditingEmployee({ ...editingEmployee, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type='text'
                      value={editingEmployee.designation}
                      onChange={(e) =>
                        setEditingEmployee({ ...editingEmployee, designation: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type='text'
                      value={editingEmployee.salary}
                      onChange={(e) =>
                        setEditingEmployee({ ...editingEmployee, salary: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type='text'
                      value={editingEmployee.MobileNo}
                      onChange={(e) =>
                        setEditingEmployee({ ...editingEmployee, MobileNo: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => handleSave(editingEmployee.id, editingEmployee)}
                    >
                      Save
                    </button>
                    <button
                      className='btn btn-secondary'
                      onClick={() => setEditingEmployee(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
