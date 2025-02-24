import { ContactInfo } from '../components/ContactInfo/ContactInfo'
import { Logo } from '../components/logo'

export const ContactSection = () => {
    return (

        <footer className="flex  items-center justify-around p-6  rounded-t-xl 
        transition-all
       bg-[#bb944a] 
       hover:bg-[#486869]

      hover:dark:bg-[#825d87]
      dark:bg-[#5d729a]
        ">
            <Logo textSize={'text-2xl'}  />
            
            <ContactInfo />
            <div className='animate-pulse hidden md:block font-semibold text-gray-300  '>Waiting for connection...</div>

        </footer>
    )
}
