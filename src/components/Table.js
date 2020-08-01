import React from 'react';
import Moment from 'react-moment';

function Table(props) {
    return (
        <table className="employeeTable">
            <thead>
                <th>Image</th>
                <th onClick={props.sortByName}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </thead>
            <tbody>
                {props.results.map(result => (
                    <tr className="table">

                        <td><img src={result.picture.medium} alt={result.name.last}></img></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.cell}</td>
                        <td>{result.email}</td>
                        <td>{result.email}</td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                    </tr>

                ))}
            </tbody>
        </table>
    )
}

export default Table;