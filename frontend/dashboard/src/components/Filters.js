import React from "react";

const Filters = ({
  statusFilter,
  setStatusFilter,
  valueRange,
  setValueRange,
}) => {
  return (
    <div className="filters">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <input
        type="range"
        min="0"
        max="10000"
        value={valueRange[1]}
        onChange={(e) => setValueRange([0, parseInt(e.target.value)])}
      />
      <span>Max Value: ${valueRange[1]}</span>
    </div>
  );
};

export default Filters;
