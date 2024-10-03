import { useDispatch } from "react-redux"
import { addCustomer } from "../../slicers/customerSlicer"
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import './AddCustomer.css';
import { ViewCustomer } from "../ViewCustomer/ViewCustomer";
export const AddCustomer = () => {
    const addData = (event, type) => {
        const data = {
            ...userData,
            [type]: event.target.value
        }
        setUserData(data)
    }
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch();
    const addCustomerFn = () => {
        dispatch(addCustomer(userData));
        setUserData({
            username: "",
            password: ""
        })
    }
    return (
        <div className="add-main">
            <div className="add-customer-container">
                <div className="add-customer-row">
                    <div>Username</div>
                    <div><input type="text" value={userData.username} onChange={($event) => addData($event, 'username')} /></div>
                </div>
                <div className="add-customer-row">
                    <div>Password</div>
                    <div><input type="password" value={userData.password} onChange={($event) => addData($event, 'password')} /></div>
                </div>
                <div>
                    <button onClick={addCustomerFn}>Add</button>
                </div>
            </div>
            <ViewCustomer />
            <hr></hr>           
        </div>
    )
}