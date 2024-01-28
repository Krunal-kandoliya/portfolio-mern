import React from 'react'
import '../Techstack/Techstack.css'
import RubberBand from "react-reveal/RubberBand";
import { TechstackList } from '../utils/Techstacklist'

const Techstack = () => {
  return (
    <>
    <RubberBand>
  <div className="container techstack " id='techstack' >
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase ' >Technologies Stack</h2>
    <hr />
    <p className='pb-3 text-center' >👉including programming language frameworks and Database Front-End
        and back-End tools and APIS
    </p>
  <div className="row">
    {TechstackList.map(e=>(
      <div key={e._id} className="col-md-3">
        <div className="card m-2 ">
            <div className="card-content">
                <div className="card-body">
                    <div className="media d-flex justify-content-center">
                        <div className="align-self-center">

                        <e.icon className='tech-icon' />
                        </div>
                        <div className="media-body  ">
                            <h5>{e.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        ))}
  </div>
        </div>
        </RubberBand>
    </>
  )
}

export default Techstack
