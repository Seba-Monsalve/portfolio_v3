

interface Props {
    year: string,
    title: string,
    icon: string,
    workplace: string,
    cn?: string
}

export const FormationItem = ({ year, title, workplace, cn }: Props) => {
    return (
        <div className=" border-transparent border-4  rounded-lg text-white" >

            <div className={`flex flex-row    px-3 py-2 border-2 rounded-lg  hover:opacity-95 opacity-80 ${cn}`}>
                <div className="">
                    <p className="text-sm   text-nowrap "> {year}</p>
                    <h2 className="text-xl">{title}</h2>
                    <p className="px-2 text-lg text-gray-600">{workplace}</p>
                </div>
            </div>
        </div>
    )
}
