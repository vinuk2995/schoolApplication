import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Line extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},


            series: [30],
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '30%',
                    }
                },
            },
            labels: ['Cricket'],

        }
    }

    render() {

        return (
            <div className="donut">
                <h3>Enquiries</h3>
                <Chart options={this.state.options} series={this.state.series} width="300" />
            </div>
        );
    }
}

export default Line;