import React, {useState} from 'react'

const Dropdown = ({getStats}) => {
    const [status, setStats] = useState('')
    
    const onSubmit = item => {
        if(!item.status && item.gender){
            setStats({value: item.target.value})
        }
    }

    return (
        <section className='search'>
            <div className='search-form'>
          <form className='form'>
            <label className='form-label'>Status</label>
            <select
              className='form-field'
              type='dropdown'
              name='status'
              
              >
              <option value=''>None</option>
              <option value='alive'>Alive</option>
              <option value='dead'>Dead</option>
              <option value='unknown'>Unknown</option>
            </select>
            <label className='form-label'>Gender</label>
            <select
              className='form-field'
              type='dropdown'
              name='gender'
              >
              <option value=''>None</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='genderless'>Genderless</option>
              <option value='unknown'>Unknown</option>
            </select>    
            <input
              className='submit-button'
              type='submit'
              value='Submit'
              onSubmit={(s) => onSubmit(s.target.value)}
              >
              </input>
          </form>
        </div>
        </section>
    )
}

export default Dropdown