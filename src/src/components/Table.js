import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const columns = [
    {
        title: 'Child Name',
        dataIndex: 'ChildName',
        key: 'name',
        
    },
    {
        title: 'Class',
        dataIndex: 'Class',
        key: 'age',
    },
    {
        title: 'DOB',
        dataIndex: 'DOB',
        key: 'address',
    },
    {
        title: 'Gender',
        dataIndex: 'Gender',
        key: 'name',
        
    },
    {
        title: 'Parent Name',
        dataIndex: 'ParentName',
        key: 'age',
    },
    {
        title: 'Contact No',
        dataIndex: 'ContactNo',
        key: 'address',
    },
    {
        title: 'Location',
        dataIndex: 'Location',
        key: 'name',
        
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'age',
    },
    
    
   
];

const data = [
    {
        key: '1',
        ChildName : "Lokesh Kale",
        Class : "5th" ,
        DOB: "23/05/2010",
        Gender : "Male",
        ParentName: "Prashant Kale",
        ContactNo : "+91647464784",
        Location: 'Baner',
        Date: '25/10/2020',
       
    },
    {
        key: '1',
        ChildName : "Lokesh Kale",
        Class : "5th" ,
        DOB: "23/05/2010",
        Gender : "Male",
        ParentName: "Prashant Kale",
        ContactNo : "+91647464784",
        Location: 'Baner',
        Date: '25/10/2020',
       
    },
    {
        key: '1',
        ChildName : "Lokesh Kale",
        Class : "5th" ,
        DOB: "23/05/2010",
        Gender : "Male",
        ParentName: "Prashant Kale",
        ContactNo : "+91647464784",
        Location: 'Baner',
        Date: '25/10/2020',
       
    },
    {
        key: '1',
        ChildName : "Lokesh Kale",
        Class : "5th" ,
        DOB: "23/05/2010",
        Gender : "Male",
        ParentName: "Prashant Kale",
        ContactNo : "+91647464784",
        Location: 'Baner',
        Date: '25/10/2020',
       
    },
    {
        key: '1',
        ChildName : "Lokesh Kale",
        Class : "5th" ,
        DOB: "23/05/2010",
        Gender : "Male",
        ParentName: "Prashant Kale",
        ContactNo : "+91647464784",
        Location: 'Baner',
        Date: '25/10/2020',
       
    },
    {
        key: '1',
        ChildName : "Lokesh Kale",
        Class : "5th" ,
        DOB: "23/05/2010",
        Gender : "Male",
        ParentName: "Prashant Kale",
        ContactNo : "+91647464784",
        Location: 'Baner',
        Date: '25/10/2020',
       
    },
    
];

class TableData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {

        return (

            <Table columns={columns} dataSource={data} size="middle"/>
        )
    }
}

export default TableData;
// ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));