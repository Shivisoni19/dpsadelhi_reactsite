import React from 'react'
import { Link } from 'react-router-dom'

const EventPagination = () => {
  return (
    <>
      <div className="row">
            <div className="col-lg-7">
                <div className="blog-pagination">
                    <div className="blog-pagination margin-top-30">
                        <ul>
                            <li><span>PREV</span></li>
                            <li><Link className="page-numbers" to="/">01</Link></li>
                            <li><Link className="page-numbers current" to="/">02</Link></li>
                            <li><Link className="page-numbers" to="/">03</Link></li>
                            <li><Link className="page-numbers" to="/">04</Link></li>
                            <li><span className="next">NEXT</span></li>
                        </ul>
                    </div>                            
                </div>
            </div>
        </div>
    </>
  )
}

export default EventPagination
