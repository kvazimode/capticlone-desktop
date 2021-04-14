import React, { useEffect, useState } from 'react'
import TransitionFields from './transition-fields.jsx'

export default function Transition(props) {
    return (
        <fieldset>
            <legend>Переход</legend>
                {props.fade ? <TransitionFields fade={props.fade} handleInputChange={props.handleInputChange}/> : `не поддерживается`}
        </fieldset>
    )
}
