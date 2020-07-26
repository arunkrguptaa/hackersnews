import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

export const LineChart = ({ state }) => {
  const labelAsVote = state && state.map(e => +e.points);
  const labelAsId = state && state.map(e => +e.objectID);
  console.log(labelAsVote);
  console.log(labelAsId);
  const data = {
    labels: labelAsId,
    datasets: [
      {
        label: "Vote",
        data: labelAsVote,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgb(0 0 255 / 62%)",
        pointBorderWidth: 3,
        pointHoverRadius: 5
      }
    ]
  };

  const options = {
    legend: {
      position: "left"
    },
    scales: {
      xAxes: [
        {
          ticks: { display: true }
        }
      ]
    }
  };
  return (
    <>
      {state && state.length > 0 && (
        <>
          <Line height={100} width={600} data={data} options={options} />
          <div style={{ textAlign: "center" }}>
            <b>ID</b>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    state: state.article
  };
};

export default connect(mapStateToProps)(LineChart);
