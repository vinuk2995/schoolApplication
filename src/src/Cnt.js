import React, { useState, Component } from 'react';
import {
    Table, Tag, Modal, Form, Card, Avatar,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker
} from 'antd';
import './index.css'
import REFORM from './registrationForm.js';
import { QuestionCircleOutlined } from '@ant-design/icons';
import MProfile from './profile.png';
import FProfile from './profile_female.png';

const { Meta } = Card;
// const { Option } = Select;
const columns = [

    {
        title: 'Name',
        dataIndex: 'ChildName',
        key: 'age',
        width: '12%',
    },
    {
        title: 'Phone',
        dataIndex: 'FCT',
        key: 'address',
    },

    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'Email',
        key: 'address',
    },


];

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 12,
    },
};

const tailFormItemLayout = {
    wrapperCol: {

        sm: {
            span: 4,
            offset: 20,
        },
    },
};

const newLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 12,
    },
};

const newLayoutPhone = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};

const newLayoutTogether = {
    labelCol: {
        span: 9,
    },
    wrapperCol: {
        span: 13,
    },
};

class Cnt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
            data: [
                {

                    ChildName: "Lokesh Patil",
                    FCT: "+91563675367",
                    Email: "v@gmail.com",
                    Gender: "male"
                },
                {

                    ChildName: "Vinayak Patil",
                    FCT: "+91563675367",
                    Email: "v@gmail.com",
                    Gender: "male"
                },
            ],
            namenew: '',
            phone: '',
            email: '',
            dob: '',
            gender: "",
            valid : false,

        }
    }

    onChange = (value) => {
        console.log(`selected ${value}`);
    }

    showModal = () => {
        this.setState({
            visible: true,
        });

    };

    handleOk = e => {
        console.log(e);
        this.forceUpdate();
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    nameInput = (e) => {
        this.setState({ name: e.target.value })
    }

    phoneInput = (e) => {
        this.setState({ phone: "+91" + e.target.value })
    }

    emailInput = (e) => {
        this.setState({ email: e.target.value })
    }

    dobInput = (e) => {
        this.setState({ dob: e.target.value })
    }

    onGenderChange = (e) => {
        this.setState({ gender: e })
    }

    submitForm = () => {

        console.log("valid" , this.state.valid);
       
        this.state.data.push({ ChildName: this.state.name, FCT: this.state.phone, Email: this.state.email, Gender: this.state.gender })
        this.setState({visible : false});
    }

    onFinish = values => {
        this.setState({valid : true})
      };
    
      onFinishFailed = errorInfo => {
        this.setState({valid : false})
      };

    render() {
        return (
            <div>
                <div className="resultsBarDiv">
                    <h3>Super Accountant</h3>
                    <Button type="primary" onClick={this.showModal}>Add new Super Accountant</Button>
                </div><br />

                <Modal
                    title="Add new Super Admin"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}

                    footer={[

                    ]}
                >

                    <Form
                        {...formItemLayout}
                        // form={form}
                        name="register"

                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                           
                        }}
                        scrollToFirstError
                        onFinish={this.submitForm}
                        onFinishFailed={this.onFinishFailed}
                    >


                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            {...newLayout}
                        >
                            <Input value={this.state.name} onChange={(e) => this.nameInput(e)} />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                            {...newLayoutPhone}
                        >
                            <Input
                                // addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                                onChange={(e) => this.phoneInput(e)}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input onChange={(e) => this.emailInput(e)} />
                        </Form.Item>


                        <Form.Item
                            name="Address"
                            label="Address"
                        >
                            <Input />
                        </Form.Item>
                        <div className="resultsBarDiv">
                            <Form.Item
                                name="Zip code"
                                label="Zip code"
                                {...newLayoutTogether}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="State"
                                label="State"
                                {...newLayoutTogether}
                            >
                                <Input />
                            </Form.Item>

                        </div>
                        <div className="resultsBarDiv">
                            <Form.Item
                                name="Country"
                                label="Country"
                                {...newLayoutTogether}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="City"
                                label="City"
                                {...newLayoutTogether}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <Form.Item name="date-picker" label="DatePicker" >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select a option "
                                onChange={(e) => this.onGenderChange(e)}
                                allowClear
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>

                            </Select>
                        </Form.Item>


                        <Form.Item {...tailFormItemLayout}>

                            <Button type="primary"  htmlType="submit" >
                                Register
                             </Button>
                        </Form.Item>
                    </Form>

                </Modal>
                {this.state.data && this.state.data.map(i =>

                    <Card class="cardStyle" style={{ width: "23%", marginTop: 16, marginLeft: 18 }} >
                        <Meta

                            avatar={
                                i.Gender == "male" ?
                                    <Avatar src={MProfile} />
                                    :
                                    <Avatar src={FProfile} />
                            }
                            title={i.ChildName}
                            description={i.Email}

                        />
                        <p style={{ marginBottom: -10, marginLeft: 30 }}>{i.FCT}</p>
                    </Card>
                )}


            </div>

        );
    }
}

export default Cnt;
