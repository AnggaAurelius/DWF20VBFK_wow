import React from 'react';
import wow from '../landingPage/img/wow.png';
// import aksi from './image/aksi.png';
import foto from '../../component/image/Profile.png';
import {Transaction} from '../adminPage/dataTransaction';
import {Dropdown} from 'react-bootstrap';


export const LisTrans = () => {
    return ( 
        <div className="bg full" >
            <img className="logowow ml-5 mt-5 sticky"  src={wow} alt=""/>
            <img className="logowow mt-5 sticky right mr-5"  src={foto} alt=""/>
                <div className="mlr " >
                    <h1 className="mbot timesNew">Incoming Transaction</h1>
                    <table className="table table-striped">
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
                        {Transaction.map((Transaction) => (
                         <tbody key={Transaction.id}>
                            <tr>
                            <th scope="row">{Transaction.id}</th>
                            <td>{Transaction.name}</td>
                            <td>{Transaction.bukti}</td>
                            <td>{Transaction.aktif}</td>
                            <td>{Transaction.status}</td>
                            <td>{Transaction.pay}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        {/* <img className="ml-3" src={aksi} alt="" /> */}
                                        </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" ><p className="green bold">Approval</p></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" ><p className="red bold">Cancel</p></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></td>
                            </tr>
                        </tbody>   
                        ))}
                        
                        </table>
                </div>
            
        </div>
    )
}

export default LisTrans;

 