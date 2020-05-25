import React, { } from "react";
import { Card, Avatar, Button, Input } from "antd";
import './dashboard.css';
import MProfile from '.././profile.png';
import FProfile from '.././profile_female.png';
import { Select } from 'antd';
import { UserOutlined, CreditCardOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import TableData from './Table.js';
import Donut from './donut.js';
import Line from './line.js'
import ApexCharts from 'apexcharts'

const { Option } = Select;
const { Meta } = Card;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardArray: [{ gender: "Male", title: 2323, desc: "Vinayak" }],
            hideInput: true,
            hideButton: false,
            title: "",
            desc: "",
            gender: "Male",
            userData: "",
            lineChartarr: [4, 3, 10, 9, 29, 19, 22, 9, 12, 29, 19, 22, 9, 12],
            lineChartXaxis: [ 2,4,6,8,10,12,14,16,18,20,22,24,26,28]
        }
    }

    addButton = () => {
        this.setState({ hideInput: !this.state.hideInput, hideButton: !this.state.hideButton })
    }

    addProject = () => {

        if (this.state.title) {
            this.state.cardArray.push({ gender: this.state.gender, title: this.state.title, desc: this.state.desc });
            this.setState({});

        }
    }

    addProject = () => {

        if (this.state.title) {
            this.state.cardArray.push({ gender: this.state.gender, title: this.state.title, desc: this.state.desc });
            this.setState({});
            
        }
    }

    titleInput = (e) => {
        this.setState({ title: e.target.value })
    }

    descInput = (e) => {
        this.setState({ desc: e.target.value })
    }

    onGenderChange = (e) => {
        
        this.setState({ gender: e })
    }

    titleInput = (e) => {
        this.setState({ title: e.target.value })
    }

    descInput = (e) => {
        this.setState({ desc: e.target.value })
    }

    onGenderChange = (e) => {

        this.setState({ gender: e })
    }

    onCardSelect = (e) => {
        console.log("on card select", e);

    }

    piechart() {
    }

    lineChart(lineChartarr, lineChartXaxis) {

        var i = 0, categories = [];
        var data = [];
        var series = [{ name: "Cash", data }];

        var xaxis = { type: 'number', categories };

        for (i = 0; i < lineChartarr.length; i++) {
            data.push(lineChartarr[i]);
        }

        for (i = 0; i < lineChartXaxis.length; i++) {
            categories.push(lineChartXaxis[i]);
        }

        var options = {
            chart: {
                height: 270,
                width: 600,
                type: 'line',
                shadow: {
                    enabled: false,
                    color: '#bbb',
                    top: 3,
                    left: 2,
                    blur: 3,
                    opacity: 1
                },
            },
            stroke: {
                width: 4,
                curve: 'smooth'
            },
            title: {
                text: '23.5 Lac Total Cash',
                align: 'left',
                style: {
                    fontSize: "16px",
                    color: '#666'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#68c851'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            markers: {
                size: 4,
                opacity: 0.5,
                colors: ["#FFA41B"],
                strokeColor: "#fff",
                strokeWidth: 2,

                hover: {
                    size: 7,
                }
            },
            yaxis: {
                min: 0,
                max: 40,
                title: {
                    text: 'Cash',
                },
            }
        }
        options["series"] = series;
        options["xaxis"] = xaxis;
        var chart = new ApexCharts(
            document.querySelector("#lineChart"),
            options
        );
        chart.render();
    }
    componentDidMount() {
        this.lineChart(this.state.lineChartarr, this.state.lineChartXaxis);
        // this.pieChart();

        var options = {
            series: [30],
            chart: {
                height: 250,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: ['Enquiries'],
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

    }

    render() {

        return (
            <div>
                <h1>Time School Pune </h1><hr /><br />
                <div className="resultsBarDiv" style={{ marginBottom: "-2%" }}>
                    <h4>Student</h4>
                    <h4 style={{ marginRight: "2%" }}>Fees</h4>
                    <h4 style={{ marginRight: "27%" }}>Credit</h4>
                </div>
                <div className="resultsBarDiv">
                    <Card class="cardStyle" style={{ width: "31%", height: "76px" }} >
                        <div className="resultsBarDiv">
                            <UserOutlined style={{ marginRight: 20, fontSize: 25 }} />
                            <h3>580</h3>
                            <h5 style={{ marginRight: 80 }}> Total</h5>
                            <h4>Discontinued</h4>
                            <h5>15</h5>
                        </div>
                    </Card>

                    <Card class="cardStyle" style={{ width: "31%", height: "76px" }} >
                        <div className="resultsBarDiv">
                            <MoneyCollectOutlined style={{ marginRight: 20, fontSize: 25 }} />
                            <h3>92%</h3>
                            <h5 style={{ marginRight: 70 }}> Collected</h5>
                            <h4>Pending</h4>
                            <h5>8%</h5>
                        </div>
                    </Card>

                    <Card class="cardStyle" style={{ width: "31%", height: "76px" }} >
                        <div className="resultsBarDiv">
                            <CreditCardOutlined style={{ marginRight: 20, fontSize: 25 }} />
                            <h3>85</h3>
                            <h5 style={{ marginRight: 70 }}>Remaining</h5>
                            <h4>Requested</h4>
                            <h5>150</h5>
                        </div>
                    </Card>
                </div>
                <Card class="cardStyle" style={{ width: "31%", background: "#fefefe" }} >
                    <h3 style={{ marginLeft : 10}}>Enquiries</h3>
                    <div id="chart"></div>
                </Card>

                <Card className="cardStyleLine" >
                    <div id="lineChart" ></div>
                </Card>
                <Card style={{ width: "100%", background: "#fefefe", display: "block" }} >
                    <h3>Top 10 Enquiries</h3>
                    <TableData />
                </Card>
            </div>
        )
    }
}

export default Dashboard;