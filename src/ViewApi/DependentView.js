import React,{useState,useEffect} from 'react'
import dependentApi from '../api/dependentApi'

export default function DependentView() {
 const [dependent,setdependent] = useState([])

    useEffect(() => {
        dependentApi.list().then(data => {
            setdependent(data)
        })
    },[])

  return (
    
    <div>
        <hr></hr>
        <div>
                <h2>List dependent</h2>
                
                {
                        <>
                            <table>
                                <th>dependent ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Relationship</th>
                                <th>employee_id</th>
                                <tbody>
                                    {
                                        dependent&&dependent.map( reg => (
                                            <tr key={reg.dependent_id}>
                                                <td>{reg.dependent_id}</td>
                                                <td>{reg.first_name}</td>
                                                <td>{reg.last_name}</td>
                                                <td>{reg.relationship}</td>
                                                <td>{reg.employee_id}</td>
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
