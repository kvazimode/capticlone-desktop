import React from "react";

export default function SelectProject(props) {
    const {loadFile} = props;
    return <>
        <input type="button" value="Blank" onClick={() => props.editorDataSelect()}/>
        <input type="button" value="Demo" onClick={() => props.editorDataSelect()}/>
        <input type="button" value="Open" onClick={ async () => {
            const file = await loadFile()
            props.editorDataSelect(file)
        }}/>
    </>
}
