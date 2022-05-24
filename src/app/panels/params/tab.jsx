import React from 'react'
import Params from './params.jsx'
import Library from './library.jsx'

export default function Tab(props) {
    const {imgList, bgList} = props
    switch(props.tab) {
        case `params`:
            return <Params
                handleBgChange={props.handleBgChange}
                handleInputChange={props.handleInputChange}
                currentEl={props.currentEl}
                imgList={imgList}
                bgList={bgList}
            />;
        case `library`:
            return <Library imgList={imgList} bgList={bgList} />
    }
}
