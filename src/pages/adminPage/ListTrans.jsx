import React from 'react';
import './table.css';
import aksi from './image/aksi.png';
import {Transaction} from '../adminPage/dataTransaction';
import {Dropdown} from 'react-bootstrap';
import AdminNavbar  from './Navbar';


export const LisTrans = () => {
    return ( 
        <div className="bgt full" >
            <AdminNavbar />
                <div className="mlr " >
                    <h1 className="mbot timesNew">Incoming Transaction</h1>
                    <table className="w00 content-table ">
                        <thead>
                            <tr className="red">
                            <th scope="co">No</th>
                            <th scope="col">Users</th>
                            <th scope="col">Bukti Transfer</th>
                            <th scope="col">Remaining Active</th>
                            <th scope="col">Status User</th>
                            <th scope="col">Status Payment</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                         <tbody >
                        {Transaction.map((Transaction) => (
                         
                            <tr key={Transaction.id}>
                            <th scope="row">{Transaction.id}</th>
                            <td>{Transaction.name}</td>
                            <td>{Transaction.bukti}</td>
                            <td>{Transaction.aktif}</td>
                            <td className={`${Transaction.status == "Active" ? "green" : "red" }`}>{Transaction.status}</td>
                            <td className={`${Transaction.pay == "Approve" ? "text-info" : Transaction.pay == "Cancel" ? "red" : "text-warning" }`}>{Transaction.pay}</td>
                            <td>
                                <div className="dropdown">  
                                <button className="btn">  <img className="" src={aksi} alt="" /></button>  
                                <div className="dropdown-content">  
                                <a href=""><p className="green bold">Approval</p></a>
                                <a href=""><p className="red bold">Cancel</p></a>
                                </div>  
                                </div>  
                                </td>
                            </tr>
                           
                        ))}
                        </tbody>
                        
                        </table>
                </div>
                
            
        </div>
    )
}

export default LisTrans;

 