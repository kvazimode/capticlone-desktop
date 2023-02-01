import React from 'react'

export default function CreateDialog(props) {
    const [projectName, setProjectName] = React.useState()

    if (!props.showDialog) {
        return null
    }
    return (
        <div className="dialog">
            <input type="text"
            onChange={(e)=>{
                setProjectName(e.target.value)
            }}></input>
            <button onClick={() => props.createNew(projectName)}>Save</button>
            <button onClick={() => {props.resetDialog()}}>Cancel</button>
        </div>
    )
}
