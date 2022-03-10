import React from "react";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";


function GasChart() {

    const data = {
        labels: ["Week 1","","", "", "", "", "", "", "", "Week 2","","", "", "", "", "", "", "", "Week 3","","", "", "", "", "", "", "", "Week 4","","", "", "", "", "", "", "",],
        datasets: [
          {
            label: "Fuel Price this Week: Diesel",
            data: [1.669, 1.689, 1.689, 1.689, 1.629, 1.699, 1.769, 1.679, 1.669, 1.689, 1.689, 1.689, 1.629, 1.699, 1.769, 1.759, 1.669, 1.689, 1.689, 1.689, 1.629, 1.699, 1.769, 1.759, 1.649, 1.689, 1.639, 1.719, 1.629, 1.699, 1.769, 1.759, 1.669, 1.689, 1.689, 1.689, 1.629, 1.699, 1.769, 1.759,],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            tension: 0.4,
            pointRadius: 0
          }
       ],
      };

    return (
        <div>
            <Line data={data}/>
        </div>
    );
}

export default GasChart;
