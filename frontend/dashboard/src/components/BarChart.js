import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const counts = {
      Active: data.filter((client) => client.status === "Active").length,
      Inactive: data.filter((client) => client.status === "Inactive").length,
    };

    const chartData = Object.entries(counts);

    const width = 400;
    const height = 200;

    const x = d3
      .scaleBand()
      .domain(chartData.map((d) => d[0]))
      .range([0, width])
      .padding(0.4);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d[1])])
      .range([height, 0]);

    svg
      .append("g")
      .selectAll("rect")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d[0]))
      .attr("y", (d) => y(d[1]))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d[1]))
      .attr("fill", "blue");

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={ref} width={400} height={200}></svg>;
};

export default BarChart;
