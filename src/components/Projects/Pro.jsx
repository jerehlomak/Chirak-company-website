import React from 'react'

const Pro = () => {

  return (
    <>
    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
      <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

        <div className="h-64 w-auto md:w-1/2">
          <img className="inset-0 h-full w-full object-cover object-center" src="card.img" />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 className="font-semibold text-lg leading-tight truncate">Quick Brown Fox</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos qui perspiciatis aspernatur sed beatae recusandae. Velit amet neque tenetur at ipsa porro maxime fugiat aut quas repellendus optio, modi eius, laboriosam sapiente ea quidem!
          </p>
          <button className='py-2 px-6 place-self-center rounded-full text-[#3F1E85] bg-white font-semibold hover:shadow-xl transition duration-300'>View Project</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pro