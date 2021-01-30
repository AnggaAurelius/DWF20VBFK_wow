import React from 'react';
import frame from './image/Frame.png';
import cover from './image/detailbook.png';
import c1 from './image/1.png';
import c2 from './image/2.png';
import c3 from './image/3.png';
import SideBar from '../component/SideBar';

export const HomePage = () => {
    return (
        <div className=" bg row pt-4">
            {/* <SideBar/> */}
            <div className="col-md-8" >
                <div className="col" >
                    <img className="frame" src={frame} alt=""/>
                    <h1 className="mt-5 mb-5" >List book</h1>
                </div>
                <div className=" row col" >
                    <div className="ml-3 mr-3" >
                         <img className="lbook" src={c1} alt=""/>
                         <h3 className="mt-3" >Serangkai</h3>
                         <p>Valerie Patkar</p>
                    </div>
                    <div className="ml-3 mr-3" >
                         <img className="lbook" src={c2} alt=""/>
                         <h3 className="mt-3" >Buku Siswa </h3>
                         <p>Afi Yustiyana</p>
                    </div>
                    <div className="ml-3 mr-3" >
                         <img className="lbook" src={c3} alt=""/>
                         <h3 className="mt-3" >Kabar Rahasia</h3>
                         <p>Kamil Yusuf</p>
                    </div>
                    <div className="ml-3 mr-3" >
                         <img className="lbook" src={cover} alt=""/>
                         <h3 className="mt-3" >Tess on the Rosad</h3>
                         <p>Rachel Hartman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;