import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Welcome, NotFoundPage, DetailProduct,UserDetailProduct, Register, Success, Login, User, MyProduct, BukaToko, SuccessToko, TambahProduct } from '../views';
import BottomBar from '../component/BottomBar';
import TopBar from '../component/TopBar';
import ProtectedRoute from './ProtectedRoute';

function index(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {/* Route With Bottom Bar */}
                    <Route exact path="/">
                        <BottomBar>
                            <Home />
                        </BottomBar>
                    </Route>
                    <Route path="/welcome">
                        <BottomBar>
                            <Welcome />
                        </BottomBar>
                    </Route>

                    <Route exact path="/user">
                        <BottomBar>
                            <User />
                        </BottomBar>
                    </Route>

                    <ProtectedRoute exact path="/user/product">
                            <MyProduct />
                    </ProtectedRoute>

                    <ProtectedRoute exact path="/user/product/detail">
                            <UserDetailProduct />
                    </ProtectedRoute>

                    <ProtectedRoute path="/user/product/tambah">
                        <TopBar>
                            <TambahProduct />
                        </TopBar>
                    </ProtectedRoute>

                    <ProtectedRoute exact path="/user/bukatoko">
                        <TopBar>
                            <BukaToko />
                        </TopBar>
                    </ProtectedRoute>

                    <ProtectedRoute path="/user/bukatoko/success">
                            <SuccessToko />
                    </ProtectedRoute>


                    {/* Route Without Bottom Bar */}

                    <Route path="/product/detail/:identifier">
                        <TopBar>
                            <DetailProduct />
                        </TopBar>
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/success">
                        <Success />
                    </Route>

                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default index;