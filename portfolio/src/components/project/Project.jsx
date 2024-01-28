import React from 'react'
import '../project/Project.css'

const Project = () => {
  return (
    <>
    <div className='project-container'>

    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase ' >Top recent project</h2>
    <hr />
    <p className='pb-3 text-center' >
    👉 i Have Complete Back-end Ecommarce Application Using Nodejs ExpressJs and MongoDB
    </p>
<div className='row' id='ads' >
<div className="col-md-4">
    <div className='card rounded' >
        <div className='card-image' >
<div className="card-notify-badge">
    Back-end Project
</div>
<img src="" alt="" />
<div className="card-image-overly">
    <span className="card-deatail-badge">NodeJS</span>
    <span className="card-deatail-badge">ExpressJs</span>
    <span className="card-deatail-badge">MongoDB</span>
</div>
<div className="card-body">
    <div className="ad-title">
        <h5 className="text-uppercase">Ecommarce Application</h5>
    </div>
</div>
        </div>
    </div>

</div>
</div>
    </div>
    </>
  )
}

export default Project
