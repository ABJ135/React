import React from 'react'
import Chld from './Chld';
function Parent() {
    const a = 10;
    const hello = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            Hello Parent
            <Chld data={a} array={hello}/>
        </div>
    )
}

export default Parent
