import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './ViewCustomer.css'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {removeCustomer} from '../../slicers/customerSlicer';
export const ViewCustomer = () => {
    const customerDetails = useSelector(store => store.customer);
    const dispatch = useDispatch()
    const deleteCustomerFn = (event,key)=>{
        dispatch(removeCustomer(key))
    }
    return (
        <div className="view-customer-container">
            {
                customerDetails.length ? customerDetails.length && customerDetails.map((val, key) => {
                    return (
                        <div className="view-customer-row" key={key}>
                            <div className="view-customer-col">{val.username}</div>
                            <div className="view-customer-col">{val.password}</div>
                            <div className="view-customer-col"><button onClick={(event)=>deleteCustomerFn(event,key)}>Delete</button></div>
                        </div>
                    )
                }) : (<div>No Records Founds</div>)
            }
        </div>
    )
}