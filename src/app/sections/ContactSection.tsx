import { Title } from '../components/Title'
import { ContactInfo } from '../components/ContactInfo/ContactInfo'

export const ContactSection = () => {
    return (

        <div className="flex  items-center justify-around p-6 bg-[#90aeb4] rounded-t-xl hover:bg-[#bb944a] transition-all">
            <div>
                <div className="flex flex-col  ">
                    <span className="text-2xl w-3/5 text-white">Seba</span>
                    <span className="text-2xl rotate-3 bg-cyan-300">Monsalve</span>
                </div>
            </div>
            <ContactInfo />
            <div className='animate-pulse font-semibold text-gray-300  '>Waiting for connection...</div>

        </div>
    )
}
