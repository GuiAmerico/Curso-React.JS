import React from 'react'

const Head = () => {
    React.useEffect(() => {
        document.title = props.title;
    }, [props])
  return (
    <>
    </>
  )
}

export default Head