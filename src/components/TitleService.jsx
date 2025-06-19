import React from 'react'

function TitleService(props) {
  return (
    <div className='bg-white mt-10 w-auto mx-10 md:px-5 md:w-80 rounded-full'>
        <div className="flex flex-col justify-center items-center text-center md:text-left text-[40px] text-black sm:block sm:text-[50px] font-century">
            {props.titre}
        </div>
    </div>
  )
}

export default TitleService