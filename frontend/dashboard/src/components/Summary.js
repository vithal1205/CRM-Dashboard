import React from "react";

const Summary = ({ data }) => {
  const totalClients = data.length;
  const totalValue = data
    .filter((client) => client.status === "Active")
    .reduce((sum, client) => sum + client.value, 0);

  return (
    <div className="summary">
      <p>Total Clients: {totalClients}</p>
      <p>Total Opportunity Value (Active): ${totalValue}</p>
    </div>
  );
};

export default Summary;
