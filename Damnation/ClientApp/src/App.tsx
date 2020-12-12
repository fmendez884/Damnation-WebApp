import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Items from './components/Item/Items';
import Create from './components/Item/Create';
import PrivateRoute from './components/common/PrivateRoute';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import CallbackPage from './components/CallbackPage';
import './App.css';

export default () => (
    <div className="App">
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            {//  <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
            }
            <Route path='/items' component={Items} />
            <Route path='/create' component={Create} />
            { <PrivateRoute path="/fetch-data/:startDateIndex?" component={FetchData} />
            }
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
            <Route path="/callback" component={CallbackPage} />
        </Layout>
    </div>
);
