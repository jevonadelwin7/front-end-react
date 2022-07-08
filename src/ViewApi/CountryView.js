import React,{useState,useEffect} from 'react'
import countryApi from '../api/countryApi'

export default function CountryView() {
 const [country,setCountry] = useState([])

    useEffect(() => {
        countryApi.list().then(data => {
            setCountry(data)
        })
    },[])

  return (
    
    <div>
        <hr></hr>
        <div>
                <h2>List country</h2>
                
                {
                        <>
                            <table>
                                <th>country ID</th>
                                <th>country Name</th>
                                <th>region id</th>
                                <tbody>
                                    {
                                        country&&country.map( reg => (
                                            <tr key={reg.country_id}>
                                                <td>{reg.country_id}</td>
                                                <td>{reg.country_name}</td>
                                                <td>{reg.region_id}</td>
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
