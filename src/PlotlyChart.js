// src/PlotlyChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart = () => {
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3, 4],
                    y: [10, 15, 13, 17],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                {
                    x: [1, 2, 3, 4],
                    y: [16, 5, 11, 9],
                    type: 'bar',
                },
            ]}
            layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
        />
    );
};

export default PlotlyChart;
