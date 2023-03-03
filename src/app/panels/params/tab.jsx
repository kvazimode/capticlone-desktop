import React from 'react'
import Params from './params.jsx'
import Library from './library.jsx'

export default function Tab(props) {
    const {imgList, bgList, slideAmount} = props
    console.log(slideAmount)
    switch(props.tab) {
        case `params`:
            if (slideAmount > 0) {return <Params
                handleBgChange={props.handleBgChange}
                handleInputChange={props.handleInputChange}
                currentEl={props.currentEl}
                imgList={imgList}
                bgList={bgList}
            />;
            }
            return <div> Добавьте слайд </div>
        case `library`:
            return <Library addBg={props.addBg} imgList={imgList} bgList={bgList} />
    }
}
