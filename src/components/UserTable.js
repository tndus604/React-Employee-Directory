import React from 'react';
import './UserTable.css';

class UserTable extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://randomuser.me/api/?results=200&nat=us';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.results);
        for (var i=0; i<data.results.length; i++) {
          var employee = document.getElementById("employee");
          employee.innerHTML += `
          <tr>
            <td><image src="${data.results[i].picture.medium}" alt="${data.results[i].name.first}"></td>
            <td>${data.results[i].name.first}</td>
            <td>${data.results[i].name.last}</td>
            <td>${data.results[i].dob.age}</td>
            <td>${data.results[i].cell}</td>
            <td>${data.results[i].email}</td>
          </tr>
          `
        }
      });
  }
  render() {
  return (
    <table>
      <tr>
        <th></th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Cell</th>
        <th>Email</th>
      </tr>
      <tbody id="employee">

      </tbody>
    </table>
  )
  }
}
export default UserTable;
