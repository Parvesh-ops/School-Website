
import banner from '../../assets/banner1.jpeg'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
 const navigate = useNavigate()
 const handelContact = ()=>{
  navigate("/contact")
 }
  return (
    <section className='relative  '>
      <div
        className='relative max-w-9xl mx-auto md:rounded-xl h-50 md:h-85 flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
              START YOUR JOURNEY WITH US <br /> LEARN ABOUT OUR ADMISSION PROCESS
            </h1>
            <p className='text-lg md:text-xl mb-6 max-w-2xl mx-auto'>
              WE'RE HAPPY TO CONNECT WITH YOU
            </p>
            <button onClick={handelContact} className='border border-gray-100 hover:text-gray-200 text-white cursor-pointer font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl'>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidBanner