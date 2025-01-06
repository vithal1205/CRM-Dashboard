import React, { useEffect, useState } from "react";
import ClientTable from "./components/ClientTable";
import Summary from "./components/Summary";
import Filters from "./components/Filters";
import BarChart from "./components/BarChart";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [valueRange, setValueRange] = useState([0, 10000]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/crm-data");
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = data.filter(
      (client) =>
        (statusFilter === "All" || client.status === statusFilter) &&
        client.value >= valueRange[0] &&
        client.value <= valueRange[1]
    );
    setFilteredData(filtered);
  }, [data, statusFilter, valueRange]);

  return (
    <div className="container">
      <h1>CRM Dashboard</h1>
      <Filters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        valueRange={valueRange}
        setValueRange={setValueRange}
      />
      <Summary data={filteredData} />
      <BarChart data={filteredData} />
      <ClientTable data={filteredData} />
    </div>
  );
};

export default App;
