import React from 'react'
import Basic from './basic.jsx'
import Element from './element.jsx'

export default function Params(props) {
  const {imgList, bgList} = props
  return <>
      <Basic currentEl={props.currentEl} handleInputChange={props.handleInputChange}/>
      <Element currentEl={props.currentEl} imgList={imgList} bgList={bgList} handleInputChange={props.handleInputChange}/>
      </>
}
