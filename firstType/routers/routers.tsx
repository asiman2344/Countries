
import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../src/App';
import CountriesCard from '../components/countriesCard'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/country/:code',
        element: <CountriesCard />
    }
]);

export default Router;