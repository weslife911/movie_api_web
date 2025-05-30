import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
  return (
    <div className="pagination">
        <Link href="#" className="page-number prev"><i className="fa fa-angle-left"></i></Link>
        <span className="page-number current">1</span>
        <Link href="#" className="page-number">2</Link>
        <Link href="#" className="page-number next"><i className="fa fa-angle-right"></i></Link>
    </div>
  )
}

export default Pagination
