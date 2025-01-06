import React from "react";

const ClientTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Opportunity Value</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((client) => (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.email}</td>
          <td>${client.value}</td>
          <td>{client.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ClientTable;
