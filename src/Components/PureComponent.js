import React, {memo} from 'react'

const PureComponent = () => {
    console.log("re-render")
  return <div> PureComponent</div>
   
}

export default PureComponent