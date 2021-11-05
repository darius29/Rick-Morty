import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    

    function onChange(q) {
        setText(q)
        getQuery(q)
    }
    

    return (
        <section className='search'>
            <form>
                <input 
                type='text'
                className='form-control'
                placeholder='Search characters'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                // onChange={(e) => debounce(() => onChange(e.target.value), 3000)} 
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search
