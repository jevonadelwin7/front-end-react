import React,{useState,useEffect} from 'react'
import employeeApi from '../api/employeeApi'

export default function EmployeeView() {
 const [employee,setemployee] = useState([])

    useEffect(() => {
        employeeApi.list().then(data => {
            setemployee(data)
        })
    },[])

  return (
    <div>
        <hr></hr>
        <div>
                <h2>List employee</h2>
                
                {
                        <>
                            <table>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <tbody>
                                    {
                                        employee&&employee.map( reg => (
                                            <tr key={reg.employee_id}>
                                                <td>{reg.employee_id}</td>
                                                <td>{reg.first_name}</td>
                                                <td>{reg.last_name}</td>
                                                <td>{reg.email}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
    </div>
  )
}
