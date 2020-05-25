import React from 'react';
import { InputNumber, Button, Input, Table } from 'antd';
import SEARCH from './search.js';
import EQTABLE from '../components/enquiryTable.js'

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
   
    render() {
        return (
            <div>
                <h1>All Enquiries</h1>
                <br />
                <EQTABLE />
            </div>

        )
    }
};
export default Add; 