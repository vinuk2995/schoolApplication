import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Table, Tag } from 'antd';


const columns = [
  {
    title: 'Enq No',
    dataIndex: 'EnqNumber',
    key: 'name',
  },
  {
    title: 'Child Name',
    dataIndex: 'ChildName',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Class',
    dataIndex: 'Class',
    key: 'address',
  },
  {
    title: 'DOB',
    dataIndex: 'DOB',
    key: 'address',
  },

  {
    title: 'Fathers Contact No',
    dataIndex: 'FCT',
    key: 'address',
  },
  {
    title: 'Mothers Contact No',
    dataIndex: 'MCT',
    key: 'address',
  },
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'address',
  },

  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'closed') {
            color = 'volcano';
          }
          if (tag === 'new') {
            color = 'blue';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];

const data = [
  {
    key: 1,
    EnqNumber: "01",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['new'],
  },
  {
    key: 4,
    EnqNumber: "02",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['converted'],
  },
  {
    key: 1224,
    EnqNumber: "03",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['new']
  },
  {
    key: 125,
    EnqNumber: "04",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['closed'],
  },
  {
    key: 166,
    EnqNumber: "05",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['converted'],
  },
  {
    key: 12,
    EnqNumber: "06",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['new'],
  },
  {
    key: 155,
    EnqNumber: "07",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['converted'],
  },
  {
    key: 122,
    EnqNumber: "08",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['closed'],
  },
  {
    key: 13,
    EnqNumber: "09",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['converted'],
  },
  {
    key: 10,
    EnqNumber: "10",
    ChildName: "Lokesh Patil",
    Class: "Nursery",
    DOB: "10/09/1999",
    FCT: "+9136366367",
    MCT: "+9167376376",
    Date: "25/10/2019",
    tags: ['closed'],
  },

];



// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

class enquiryTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    return (

      <div>

        <div className="resultsBarDiv" style={{ justifyContent: "start" }}>
          
          <h4 style={{ marginRight : 10 }}>All</h4>
          <Tag color="pink" style={{ marginRight : 30 ,height : "fit-content" }}>10 </Tag>
          <h4 style={{ marginRight : 10 }}>New</h4>
          <Tag color="blue" style={{ marginRight : 30  ,height : "fit-content"}}>3 </Tag>
          <h4 style={{ marginRight : 10 }}>Converted</h4>
          <Tag color="green" style={{ marginRight : 30 ,height : "fit-content" }} >4</Tag>
          <h4 style={{ marginRight : 10 }}>Closed</h4>
          <Tag color="volcano" style={{ marginRight : 30 ,height : "fit-content"}}>3 </Tag>

          </div><br/>
            <Table columns={columns} rowSelection={rowSelection} dataSource={data} size="medium" />
            </div>
          )
      }
  }
  
  export default enquiryTable;
  
