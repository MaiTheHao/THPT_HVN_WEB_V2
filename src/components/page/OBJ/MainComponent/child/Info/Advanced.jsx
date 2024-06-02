import React from 'react'

function Advanced({children, ...rest}) {
  return (
    <div className='AdvancedTable1 scrollY' {...rest}>
        {children}
    </div>
  )
}

export default Advanced