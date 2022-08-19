import React, { useContext } from 'react'
import './Image.css'
import DataContext from './context/DataContext';

const Image = () => {


    const data = useContext(DataContext);
    //console.log(data);

    return (
        <div className="wrapper" id="image_wrapper_id">
            <img className="bg" src={data.bg} alt="" />
            <img className="mayo" src={data.mayo} alt="" />
            <img className="cl" src={data.cl} alt="" />
            <img className="nose" src={data.nose} alt="" />
        </div>
    )
}

export default Image