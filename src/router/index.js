import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Welcome, NotFoundPage, DetailProduct } from '../views';
import BottomBar from '../component/BottomBar';
import TopBar from '../component/TopBar';


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

                    <Route path="/detail">
                        <DetailProduct />
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