import React, { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Show from "./components/Show";
import PrivateRoute from "./Auth/privateRoutes";
import Auth from "./Auth/index";
import { ProvideAuth } from "./Auth/auth.provider";
import Register from './Auth/Register';
import Logout from './Auth/Logout';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => setCollapsed(collapsed);



    return (
        <Router basename={"/"}>
            <ProvideAuth>
                <Layout style={{ height: "100vh" }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                            <Menu.ItemGroup key="2">
                                <Menu.Item key="setting:1">
                                    {" "}
                                    <HomeOutlined /> <Link to={"/"}>Home</Link>
                                </Menu.Item>
                                <Menu.Item key="setting:2">
                                    <Link to={"/create"}>Create</Link>
                                </Menu.Item>
                                <Menu.Item key="setting:3">
                                    <Link to={"/Show"}>Show</Link>
                                </Menu.Item>
                                <Menu.Item key="setting:4">
                                  <Logout/>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header />

                        <Content>
                            <div>
                                <Route exact path="/">
                                    {" "}
                  Hola mundo
                </Route>
                                <PrivateRoute
                                    redirectRoute={"/auth"}
                                    path="/edit/:id"
                                    component={Edit} />
                                <PrivateRoute
                                    redirectRoute={"/auth"}
                                    path="/create"
                                    component={Create}
                                />
                                <PrivateRoute
                                    redirectRoute={"/auth"}
                                    path="/show"
                                    component={Show} />
                                <Route path="/auth">
                                    <Auth basename={"/auth"} />
                                </Route>
                                <Route path="/register"
                                    component={Register} />
                                <Route path="/login">
                                    <Redirect to="/auth/login"></Redirect>
                                </Route>
                            </div>
                        </Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </ProvideAuth>
        </Router>
    );
};

export default App;