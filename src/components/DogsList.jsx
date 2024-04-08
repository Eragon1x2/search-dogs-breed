import React from 'react'
import { useSelector } from 'react-redux'
function DogsList() {
    const dogs = useSelector(store => store.list.list);
    const error = useSelector(store => store.list.error);
    return (
        <div className='dogs_list'>
        {
            error !== null ? <div className='error-block'>{error}</div> : dogs && dogs.map(item => (<img key={item} src={item}></img>))
          }
        </div>
    )
}

export default DogsList
