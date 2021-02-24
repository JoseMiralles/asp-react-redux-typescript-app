import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import FetchData from './components/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
