import React from 'react'

function Footer() {
  return (
      <div className="mt-auto py-4 text-center mx-auto bg-gray-100 dark:bg-warm-gray-800">
        <div className="container mx-auto lg:px-16 md:px-14 sm:px-12 px-10">
          <div className='lg:mx-12'>
            <p className='lead flex justify-center items-center mx-auto text-sm text-center text-black dark:text-white font-medium mb-1'>
              <div className="mr-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className='dark:fill-white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/></svg>  
              </div>
              by
              <div className="bg-warm-gray-800 dark:bg-warm-gray-50 p-1 pt-0.5 pb-0.5 ml-1.5 text-white dark:text-black rounded-lg">
                Leandro Correia
              </div>
            </p>
            <p>
              {/* TODO: icon do CODE by Leandro Correia */}
              <small className="text-muted text-warm-gray-600 dark:text-warm-gray-300 shadow-md shadow-blue-50 dark:shadow-warm-gray-800">O projeto é open-source. Esteja à vontade para contribuir ou fazer a sua própria versão.</small>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Footer