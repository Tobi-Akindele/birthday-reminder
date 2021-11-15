import React from 'react'

const ListOfBirthdays = ({ data, setData }) => {
  const removeSingle = (id) => {
    // let newData = data.filter((d) => d.id !== id)
    // setData(newData)
    setData((prevState) => {
      return prevState.filter((d) => d.id !== id)
    })
  }

  return (
    <div className='h-100 row align-items-center main-div'>
      <div className='container col-lg-6 col-md-6 bg-light rounded-3 shadow p-3 mb-5 bg-body rounded'>
        <h2>{data.length} birthdays today</h2>

        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='d-flex gap-3 py-3'
              aria-current='true'
            >
              <img
                src={item.image}
                alt='twbs'
                width='84'
                height='84'
                className='rounded-circle flex-shrink-0'
              />
              <div className='d-flex gap-2 w-100 justify-content-between align-items-center'>
                <div>
                  <h6 className='mb-0 fw-bold fs-5'>{item.name}</h6>
                  <p className='mb-0 opacity-75'>{item.age} years</p>
                </div>
                <button
                  type='button'
                  className='btn btn-light btn-lg'
                  onClick={() => removeSingle(item.id)}
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              </div>
            </div>
          )
        })}
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button
            className='btn btn-clear-color btn-lg'
            type='button'
            onClick={() => setData([])}
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListOfBirthdays
