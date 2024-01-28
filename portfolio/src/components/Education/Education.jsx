import React from 'react'
import '../Education/Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <>
  <div className='education' id='education' >
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
Education
    </h2>
    <hr />
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2021-2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Bsc</h3>
    <h4 className="vertical-timeline-element-subtitle">Atmiya University, Rajkot</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2023-2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Msc IT</h3>
    <h4 className="vertical-timeline-element-subtitle">TN Rao college, Rajkot</h4>
  </VerticalTimelineElement>
    </VerticalTimeline>
  </div>

    </>
  )
}

export default Education
