import React from "react";
import "antd/dist/antd.css";
import './sidebar.css';
import SEARCH from './files/search.js';
import ADD from './files/Add.js'
import { Layout, Menu, Input, Avatar, Dropdown } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import SIDEBAR from './Sidebar.js';
import CNT from './Cnt.js';
import opusIcon from './school.png';
import {
  UserOutlined, HomeOutlined,
  SettingFilled, BellOutlined,
  FundProjectionScreenOutlined,
  ProjectOutlined, DownOutlined, PhoneOutlined,
  CreditCardOutlined, MoneyCollectOutlined, BankOutlined, FileTextOutlined, IdcardOutlined
} from "@ant-design/icons";
import Dashboard from './components/dashboard.js';
import MProfile from './profile.png'


const { Search } = Input;
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const menu = (
  <a href="http://localhost:3000">
    <Menu>
      <Menu.Item key="3"  >Logout</Menu.Item>
    </Menu></a>
);

class Sidebar extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
          
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
           
          }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            onMouseEnter={this.handleMouseHover}
          >
            <div >
              <Link to="/dashboard" style={{ "color": "white" }}>
                <img alt="opusIcon" src={opusIcon} className="logo" />
              </Link>

            </div>

            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/dashboard" style={{ "color": "white" }}><HomeOutlined /><span>Dashboard</span></Link>
              </Menu.Item>

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>Users</span>
                  </span>
                }
              >
                <Menu.Item key="34"><Link to="/about" style={{ "color": "white" }}><span>Super Accountant</span></Link></Menu.Item>
                <Menu.Item key="355"><Link style={{ "color": "white" }}><span>Grant Admin</span></Link></Menu.Item>
                <Menu.Item key="4"><Link style={{ "color": "white" }}><span>Grant Accountant</span></Link></Menu.Item>
                <Menu.Item key="35"><Link style={{ "color": "white" }}><span>Branch Admin</span></Link></Menu.Item>

              </SubMenu>


              <SubMenu
                key="sub2"
                title={
                  <span>
                    <BankOutlined />
                    <span>School</span>
                  </span>
                }
              >
                <Menu.Item key="13"><Link style={{ "color": "white" }}><span>Academic Year</span></Link></Menu.Item>
                <Menu.Item key="14"><Link style={{ "color": "white" }}><span>Receipt Format</span></Link></Menu.Item>
                <Menu.Item key="31"><Link style={{ "color": "white" }}><span>Admission Forms</span></Link></Menu.Item>
                <Menu.Item key="42"><Link style={{ "color": "white" }}><span>Fee Structure</span></Link></Menu.Item>
                <Menu.Item key="33"><Link style={{ "color": "white" }}><span>Classes</span></Link></Menu.Item>
                <Menu.Item key="44"><Link style={{ "color": "white" }}><span>Batches</span></Link></Menu.Item>
                <Menu.Item key="37"><Link style={{ "color": "white" }}><span>Fee Amount</span></Link></Menu.Item>
                <Menu.Item key="46"><Link style={{ "color": "white" }}><span>Data Upload</span></Link></Menu.Item>

              </SubMenu>

              <Menu.Item key="23">
                <Link style={{ "color": "white" }}> <CreditCardOutlined /><span>Credit</span></Link>
              </Menu.Item>

              <Menu.Item key="212">
                <Link style={{ "color": "white" }}> <MoneyCollectOutlined /><span>Fees</span></Link>
              </Menu.Item>

              <Menu.Item key="211">
                <Link to="/add" style={{ "color": "white" }}> <PhoneOutlined /><span>Enquiry</span></Link>
              </Menu.Item>

              <Menu.Item key="267">
                <Link style={{ "color": "white" }}> <IdcardOutlined /><span>Students</span></Link>
              </Menu.Item>

              <Menu.Item key="278">
                <Link style={{ "color": "white" }}> <FileTextOutlined /><span>Accounts</span></Link>
              </Menu.Item>

            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
            <Header className="site-layout-background" style={{ padding: 0, background: "white" }} >
              <div className="resultsBarDivtop">
                <Input type="text" placeholder="Enter Text To Search" className="searchInput" />

                <BellOutlined class="bellIcon" style={{ marginLeft: "62%", marginRight: "3%", fontSize: "20px", marginTop: 3 }} />

                <Dropdown overlay={menu} trigger={['click']} >
                  <a className="ant-dropdown-link" style={{ marginTop: "-20px" }}>
                    <Avatar src={MProfile} /> <DownOutlined />
                  </a>
                </Dropdown>
              </div>


            </Header>

            <Content style={{ margin: "15px 15px 15px 15px", background: "white" }}>

              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                <Route path="/dashboard" component={Dashboard} />
                <Route path="/about" component={CNT} />
                <Route path="/serach" component={SEARCH} />
                <Route path="/add" component={ADD} />
              </div>
            </Content>

          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Sidebar;
