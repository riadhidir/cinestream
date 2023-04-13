
import Navbar from './Navbar'
import Searchbar from './Searchbar'

function Hero() {

  return (
    
    <div className='h-36  md:h-60  w-full relative bg-hero-image bg-fixed bg-auto dark:bg-red-600 '>
        <h1 className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl font-thin text-center text-white">Find Movies, TV shows and more</h1>
        <Navbar/>

        <Searchbar/>
    </div>
  )
}

export default Hero