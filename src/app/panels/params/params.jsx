import React from 'react'
import Basic from './basic.jsx'
import Element from './element.jsx'

export default function Params(props) {
  const {imgList, bgList} = props
  return <>
      <Basic />
      <Element currentEl={props.currentEl} imgList={imgList} bgList={bgList} />
      </>
}
