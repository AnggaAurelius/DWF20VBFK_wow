import React from 'react';
import wow from '../landingPage/wow.png';
import file from './image/AttacheBook.png';
import add from './image/addBook.png';
import foto from '../component/image/Profile.png';


export const LisTrans = () => {
    return ( 
        <div className="" >
            <img className="logowow ml-5 mt-5 sticky"  src={wow} alt=""/>
            <img className="logowow mt-5 sticky right mr-4"  src={foto} alt=""/>
                <div className="mlr " >
                    <h1 className="mbot timesNew">Incoming Transaction</h1>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="co">No</th>
                            <th scope="col">Users</th>
                            <th scope="col">Bukti Transfer</th>
                            <th scope="col">Remaining Active</th>
                            <th scope="col">Status User</th>
                            <th scope="col">Status Payment</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Bca.jpg</td>
                            <td>23/Hari</td>
                            <td>Active</td>
                            <td>Aprove</td>
                            <td>Ok</td>
                            </tr>
                            
                        </tbody>
                        </table>
                </div>
            
        </div>
    )
}

export default LisTrans;