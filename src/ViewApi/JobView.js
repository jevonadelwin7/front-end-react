import React,{useState,useEffect} from 'react'
import jobApi from '../api/jobApi'

export default function JobView() {
 const [job,setjob] = useState([])

    useEffect(() => {
        jobApi.list().then(data => {
            setjob(data)
        })
    },[])

  return (
    
    <div>
        <hr></hr>
        <div>
                <h2>List job</h2>
                
                {
                        <>
                            <table>
                                <th>job ID</th>
                                <th>Job Title</th>
                                <th>Min Salary</th>
                                <th>Max Salary</th>
                                <tbody>
                                    {
                                        job&&job.map( reg => (
                                            <tr key={reg.job_id}>
                                                <td>{reg.job_id}</td>
                                                <td>{reg.job_title}</td>
                                                <td>{reg.min_salary}</td>
                                                <td>{reg.max_salary}</td>
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
