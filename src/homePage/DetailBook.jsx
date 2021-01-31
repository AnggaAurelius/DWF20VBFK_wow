import React from 'react';
import cover from './image/detailbook.png';
import SideBar from '../component/SideBar';

export const Detailbook = () => {
    return (
        <div className="  row pt-4">
            <SideBar/>
            <div className="col-md-7" >
                <img className="cover mt-5 float-left mr-5" src={cover} alt=""/>
                <h1 className="mt-5 timesNew" >Tes on the road</h1>
                <p>Penulis</p>
                <div className="mt-5" >
                    <h3 className="bold">Publication date</h3>
                    <p>April 2020</p>
                    <h3 className="mt-4 bold">Pages</h3>
                    <p>436</p>
                    <h3 className="mt-4 red bold">ISBN</h3>
                    <p>97684534326</p>
                </div>
                <br/>
                <h3 className="detxt timesNew ">About this book</h3>
                <p >In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
                    In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
</p>
                <button className="mt-3 sign-in bwhknn "  onClick="">Read Book {'>'}</button>
            </div>
        </div>
    )
}

export default Detailbook;