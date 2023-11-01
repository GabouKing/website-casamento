import Image from 'next/image'
import florzinha from '../assets/florzinha.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 bg-green-900">
      <p className="font-alt text-4xl sm:text-7xl md:text-6xl lg:text-5xl xl:text-9xl text-white-500">Gabriel e Beatriz</p>
      <div className='flex flex-1 flex-col justify-center align-center m-auto'>
        <p className='font-sans text-2xl md:text-base lg:text-lg px-6 py-8 text-white-100 m-auto w-96'>Essa é a lista de presente do nosso casamento, 
          porém a sua presença é mais importante para nós!
          Caso deseje nos presentear, segue as opções na lista.</p>
        <a href="/presentes" className='flex flex-col justify-center items-center hover:cursor-default'>
          <p className='font-sans text-2xl md:text-base text-center lg:text-lg px-6 py-8 text-white-100 m-auto w-96'>Acesse a lista :)</p>
          <Image src={florzinha} className='w-1/5  md:w-1/4 lg:w-1/2transition-transform transform hover:rotate-90 hover:cursor-pointer' alt='proxima pagina' /></a>       
      </div>
    </main>
  )
}
