import React, { useState } from 'react'

export const Table = ({dep,count,allformdata , deleteform  , depfilter}) => {
    

    return (
        <div>
            <h1>Table</h1>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>

                    <th>Age</th>

                    <th>Address</th>

                    <th>Department</th>

                    <th>Salary</th>

                    <th>Marital state</th>

                    <th>Delete</th>
                </tr>
                {allformdata.filter((e) => e.Department.includes(dep)).map((e, i) => <tr>
                    <td>{i + 1}</td>
                    <td>{e.Name}</td>
                    <td>{e.Age}</td>
                    <td>{e.Address}</td>
                    <td>{e.Department}</td>
                    <td>{e.Salary}</td>
                    <td>{e.marital}</td>
                    <td><button onClick={() => { deleteform(i) }} >Delete</button></td>
                </tr>)}


            </table>

        </div>
    )
}
