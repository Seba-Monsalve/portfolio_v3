import { ContactInfo } from '../components/ContactInfo/ContactInfo'

export const ContactSection = () => {
    return (

        <footer className="flex  items-center justify-around p-6  rounded-t-xl 
        transition-all
       bg-[#bb944a] 
       hover:bg-[#486869]

      hover:dark:bg-[#825d87]
      dark:bg-[#5d729a]
        ">
            <div className='hidden md:block'>
                <div className="flex flex-col text-white ">
                    <span className="text-2xl w-3/5 ">Seba</span>
                    <span className="text-2xl rotate-3 px-1 bg-cyan-300">Monsalve</span>
                </div>
            </div>
            <ContactInfo />
            <div className='animate-pulse hidden md:block font-semibold text-gray-300  '>Waiting for connection...</div>

        </footer>
    )
}
