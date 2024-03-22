import React from 'react'
import Dashboard from '../../sections/Dashboard'

const SendCard = () => {
  return (
    
        <div className='black__overlay flex items-center justify-center text-black'>
            <div className='bg-white p-5'>
                <div className='flex flex-row gap-2 text-2xl mb-10'>
                  <span><img src="close.svg" alt="X" srcset="" className='w-5 pt-1.5' /></span>
                  <h3>Send a card</h3>
                </div>
                <div>
                  <label className='text-base mb-3' htmlFor="nickname">Nickname</label><br />
                  <input className='p-1 w-full mb-10 rounded-sm border-black border' type="text" />
                </div>
                <div>
                  <label className='text-base mb-3' htmlFor="email">Email</label><br />
                  <input className='p-1 w-full mb-10 rounded-sm border-black border' type="email" />
                </div>
                <div>
                  <label className='text-base mb-3' htmlFor="message">Message</label><br />
                  <input className='p-5 w-full mb-5 rounded-sm border-black border' type="text" />
                </div>
                <div className='flex flex-row gap-2'>
                <span><img src="recycle.svg" alt="" srcset="" className='w-5' /></span>
                <span className='text-sm'>auto generate a message</span><br />
                </div>
                
                <button className='mt-11 w-96 p-2 mb-6 text-center bg-primary text-white rounded-sm border-black border'>Continue</button>
            </div>
        </div>
  )
}

export default SendCard