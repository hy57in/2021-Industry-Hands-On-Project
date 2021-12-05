/**
 * Dummy
 * 메뉴에서 클릭 시 넘어옴
 * 메뉴에서 메뉴정보를 props로 가져와야 함
 */

import React from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <div>
      <h2>detail</h2>
      <Link to="/">home</Link>
    </div>
  )
}

export default Detail
