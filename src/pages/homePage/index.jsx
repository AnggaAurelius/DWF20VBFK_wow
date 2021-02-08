import React, { useContext, useState } from "react";
import { AppContext } from "../../component/GlobalContext";
import frame from './image/Frame.png';
import SideBar from '../../component/SideBar';
import {Books} from './dataBook';
import {useHistory } from 'react-router-dom';

export const HomePage = () => {
    const history=useHistory();
    const [state] = useContext(AppContext);
    const [modal, setModal]=useState(false);
    const subscribe = state.subscribe;
    const tes=()=> {
        subscribe ? history.push("/detail"): setModal(true)
    }
    
    return (
        <div className="bg row pt-4">
            <SideBar/>
            <div className={`p-4 text-center red fs-18 Modalsub ${modal ? "Show" : ""}`}>
                <p>please make a payment to read the latest books</p>
            </div>
            <div className="col-md-9" >
                <div className="col" >
                    <img className="frame" src={frame} alt=""/>
                    <h1 className="mt-5 mb-5 timesNew" >List book</h1>
                </div>
                <div className=" row col" >
                     {Books.map((Books) => (
                        <div className="col-md-3 " key={Books.id} >
                            <img className="lbook flink" src={Books.imgUrl} alt="" onClick={tes}/>
                            <h3 className="mt-3 timesNew" >{Books.name} </h3>
                            <p className="gray">{Books.penulis}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`Overlay ${modal ? "Show" : ""}`}
                onClick={() => setModal(false)} />
            <div className="bgland" />
        </div>
    )
}

export default HomePage;