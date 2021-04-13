import React, {useEffect, useState} from 'react'

// class Timing extends React.PureComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             start: this.props.start,
//             duration: this.props.duration
//         }
//         this.startRef = React.createRef()
//         this.durationRef = React.createRef()
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange() {
//         this.setState({start: this.startRef.current.value})
//     }

//     componentDidUpdate() {

//     }

//     render() {
        // return (
        //     <fieldset>
        //         <legend>Время</legend>
        //         <label htmlFor="timing-start">Начало: </label>
        //         <input
        //             onChange={() => {
        //                 this.props.handleInputChange(`start`, this.startRef.current.value)
        //                 this.handleChange()
        //             }}
        //             ref={this.startRef}
        //             id="timing-start" 
        //             className="param-field param-field--num" 
        //             type="number" 
        //             value={this.state.start}
        //         ></input>
        //         <label htmlFor="timing-duration">Продолжительность: </label>
        //         <input
        //             onChange={() => this.handleDurationChange(this.durationRef.current.value)}
        //             ref={this.durationRef}
        //             id="timing-duration"
        //             className="param-field param-field--num"
        //             type="number"
        //             value={this.state.duration}
        //         ></input>
        //     </fieldset>
        // )
//     }
// }

function Timing(props) {
    const [start, setStart] = useState(props.start)
    const [duration, setDuration] = useState(props.duration)

    useEffect(() => {
        setStart(props.start)
    }, [props.start])

    useEffect(() => {
        setDuration(props.duration)
    }, [props.duration])

    return (
        <fieldset>
            <legend>Время</legend>
            <label htmlFor="timing-start">Начало: </label>
            <input
                onChange={(e) => {
                    setStart(parseInt(e.target.value))
                    props.handleInputChange(`start`, parseInt(e.target.value))

                }}
                id="timing-start" 
                className="param-field param-field--num" 
                type="number" 
                value={start}
            ></input>
            <label htmlFor="timing-duration">Продолжительность: </label>
            <input
                onChange={(e) => {
                    setDuration(parseInt(e.target.value))
                    props.handleInputChange(parseInt(e.target.value))
                }}
                id="timing-duration"
                className="param-field param-field--num"
                type="number"
                value={duration}
            ></input>
        </fieldset>
    )

}

export default Timing
