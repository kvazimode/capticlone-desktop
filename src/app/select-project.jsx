import React from "react";

export default function SelectProject(props) {

    return <>
        <input type="button" value="Blank" onClick={() => props.editorDataSelect(undefined)}/>
        <input type="button" value="Demo" onClick={() => props.editorDataSelect(undefined)}/>
        <input type="button" value="Open" onClick={() => props.editorDataSelect('open')}/>
    </>
}
