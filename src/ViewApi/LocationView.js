import React,{useState,useEffect} from 'react'
import locationApi from '../api/locationApi'

export default function LocationView() {
 const [location,setlocation] = useState([])

    useEffect(() => {
        locationApi.list().then(data => {
            setlocation(data)
        })
    },[])

  return (
    
    <div>
        <hr></hr>
        <div>
                <h2>List location</h2>
                
                {
                        <>
                            <table>
                                <th>location ID</th>
                                <th>street address</th>
                                <th>city</th>
                                <tbody>
                                    {
                                        location&&location.map( reg => (
                                            <tr key={reg.location_id}>
                                                <td>{reg.location_id}</td>
                                                <td>{reg.street_address}</td>
                                                <td>{reg.city}</td>
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
