import React,{useState,useEffect} from 'react'
import departmentApi from '../api/departmentApi'

export default function DepartmentView() {
 const [department,setdepartment] = useState([])

    useEffect(() => {
        departmentApi.list().then(data => {
            setdepartment(data)
        })
    },[])

  return (
    
    <div>
        <hr></hr>
        <div>
                <h2>List department</h2>
                
                {
                        <>
                            <table>
                                <th>department ID</th>
                                <th>department Name</th>
                                <th>location id</th>
                                <tbody>
                                    {
                                        department&&department.map( reg => (
                                            <tr key={reg.department_id}>
                                                <td>{reg.department_id}</td>
                                                <td>{reg.department_name}</td>
                                                <td>{reg.location_id}</td>
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
