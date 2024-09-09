
interface Props {
    year: string,
    title: string,
    icon: string,
    position: string,
    workplace: string
}


export const FormationItem = ({ year, title,  workplace }: Props) => {
    return (
        <div className=" border-transparent border-4 hover:border-gray-300  rounded-lg text-white" >
            <div className="flex flex-row   bg-orange-400 px-3 py-2 border-2 rounded-lg  ">
                <div className="">
                    <p>{year}</p>
                    <h2 className="text-3xl">{title}</h2>
                </div>
            </div>
            <p className="px-2 text-xl text-gray-600">{workplace}</p>
        </div>
    )
}
