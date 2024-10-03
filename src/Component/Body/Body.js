import './Body.css';
import { AddCustomer } from '../AddCustomer/AddCustomer';
import { ViewCustomer } from '../ViewCustomer/ViewCustomer';
import { Routes, Route } from 'react-router-dom';
export const Body = () => {
    return (
        <div className='body-container'>
            <Routes>
                <Route exact path="" element={<AddCustomer />} />
                <Route exact path="/add-customer" element={<AddCustomer />} />
                <Route exact path="/view-customer" element={<ViewCustomer />} />
            </Routes>
        </div>
    )
}