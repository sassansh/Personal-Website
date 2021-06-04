import React from 'react';

import { 
    Col
 } from "react-bootstrap";
const EducationCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.educationlogo} alt=""/>
                <p className="lead">
                    {data.degree}
                    <br/>
                    <small className="text-muted">{data.major}</small>
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default EducationCard;