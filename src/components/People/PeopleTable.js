import React from 'react'

export const PeopleTable = ({ people }) => {
  return (
    <table className="PeopleTable-table table" data-testid="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {people.map(item => (
          <tr key={item.id}>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
