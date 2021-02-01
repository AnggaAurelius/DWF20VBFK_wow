import React from 'react';
import cover from './image/detailbook.png';
import SideBar from '../component/SideBar';

export const Detailbook = () => {
    return (
        <div className="bg  row pt-4">
            <SideBar/>
            <div className="col-md-8" >
                <img className="cover mt-5 float-left mr-5" src={cover} alt=""/>
                <p className="mt-5 timesNew fs-50" >Tess on the road</p>
                <h1 className="gray fs-25">Rachel Hatman</h1>
                <div className="mt-5" >
                    <h3 className="bold">Publication date</h3>
                    <p className="gray">April 2020</p>
                    <h3 className="mt-4 bold">Pages</h3>
                    <p className="gray">436</p>
                    <h3 className="mt-4 red bold">ISBN</h3>
                    <p className="gray">97684534326</p>
                </div>
                <br/>
                <h2 className="detxt timesNew mb-4">About this book</h2>
                <p className="gray">In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
                    In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
                </p>
                <button className="mt-3 sign-in bwhknn mb-5"  onClick="">Read Book {'>'}</button>
            </div>
        </div>
    )
}

export default Detailbook;