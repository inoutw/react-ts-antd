import React, { useState, useEffect } from 'react'
import { Button } from 'antd-mobile'
import './demo.css'

const Demo1Page: React.FC = props => {
  const [result, setSesult] = useState({ skill: 'hook' })
  useEffect(() => {}, [])
  return (
    <div className="demo-wrap">
      <div className="title">demo1 {result.skill}</div>
      <div>{JSON.stringify(result)}</div>
      <Button type="primary" size="small" inline className="btn">
        demo1
      </Button>
      <Button type="primary" size="large" className="btn">
        demo2
      </Button>
    </div>
  )
}
export default Demo1Page
