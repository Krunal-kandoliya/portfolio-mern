import React from 'react'
import '../Work/Work.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaNodeJs } from "react-icons/fa6";

const Work = () => {
  return (
    <>
     <div className='work' id='work' >
        <div className=" container work-exp">
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase hello' >
                Work Experience
            </h2>
            <hr />
            <VerticalTimeline lineColor='#138781'>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2024 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaNodeJs />}
  >
    <h3 className="vertical-timeline-element-title">Mern Stack Devloper</h3>
    <h4 className="vertical-timeline-element-subtitle">En-coder</h4>
    <p>
    👉I Have Completed 6 Month Mern Stack Training In En-coder 
    </p>
  </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </div> 
    </>
  )
}

export default Work
