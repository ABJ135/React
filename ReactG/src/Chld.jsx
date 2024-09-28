import React from 'react'

function Chld(props) {
    console.log(props, "I m child comp")
    return (
        <div>
            Hello Child{props.data}
            {
                props.array.map((item)=><p>{item}</p>)
            }
        </div>
    )
}

export default Chld
