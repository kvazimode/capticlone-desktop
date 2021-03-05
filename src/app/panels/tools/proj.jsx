import React from 'react'

export default () => {
    return (
        <div className="block tools-block">
            <select defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>File</option>
                <option>Open</option>
                <option>Save</option>
                <option>Export</option>
                <option>Close</option>
                <option>Properties</option>
            </select>
        </div>
    )
}
