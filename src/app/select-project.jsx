import React from "react";

export default function SelectProject(props) {
    const {ipcRenderer} = props;
    return <>
        <input type="button" value="Blank" onClick={() => props.editorDataSelect()}/>
        <input type="button" value="Demo" onClick={() => props.editorDataSelect()}/>
        <input type="button" value="Open" onClick={ async () => {
            const filePath = await ipcRenderer.invoke('file-select').then(filePath => filePath)
            props.editorDataSelect(filePath)
        }}/>
    </>
}
