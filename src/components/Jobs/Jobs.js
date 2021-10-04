import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './Jobs.css'

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        // fetching data from local public folder
        fetch('./jobs.JSON')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='jobs-container'>
            <ListGroup defaultActiveKey="#link1">

                {
                    jobs.map(job => <ListGroup.Item action >
                        <h3>Company: {job.company}</h3>
                        <h4>Position: {job.position}</h4>
                        <p>Salary: ${job.salary}</p>
                    </ListGroup.Item>)
                }

            </ListGroup>


        </div>
    );
};

export default Jobs;