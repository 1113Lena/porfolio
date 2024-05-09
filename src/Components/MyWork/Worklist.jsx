import React from 'react'
import './Worklist.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Worklist({ work }) {

    const { img, id, w_name } = work;
    const navigate = useNavigate()



    return (
        <div className='list-container' onClick={() => navigate("/mywork/" + id)}>
            {/* <span><img src={work.img} alt={work.w_name} key={index} />{work.w_name}</span> */}

            <img src={img} alt={img} />
            <p>{w_name}</p>

        </div >
    )
}
