import { Route, Routes } from 'react-router-dom';
import * as P from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<P.Main />} />
            <Route path='/login' element={<P.Login />} />
        </Routes>
    );
};

export default Router;