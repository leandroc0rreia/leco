import React from 'react'

function Footer() {
  return (
      <div className="mt-auto py-7 text-center bg-blue-50 mx-auto">
        <div className="container mx-auto lg:px-16 md:px-14 sm:px-12 px-10">
          <div className="display-4 pb-4 text-center justify-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium">
            Entra em contacto!
          </div>
          <div className='lg:mx-12'>
            <p className='lead pb-3 justify-center mx-auto lg:text-xl md:text-lg sm:text-lg text-md font-light text-justify'>
              De momento estou à procura de um part-time em Desenvolvimento Web (Front/Back-end) ou Desenvolvimento Mobile, caso esteja com interesse, alguma questão ou se só quer dizer um olá, esteja à vontade para me contactar em,&nbsp;
              <a href='mailto:geral@leandroc0rreia.com' className='text-blue-600'>
                geral@leandroc0rreia.com
              </a>
              .
            </p>
            <p>
              <small className="text-muted text-gray-600">O projeto é open-source. Esteja à vontade para contribuir ou fazer a sua própria versão.</small>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Footer