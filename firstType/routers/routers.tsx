import {createBrowserRouter} from 'react-router-dom';
import App from '../src/App';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
]);

export default Router;