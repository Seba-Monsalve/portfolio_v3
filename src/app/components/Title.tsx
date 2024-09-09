
interface Props {
  children: string
}
export const Title = ({ children }: Props) => {
  return (
    <h2 className="text-3xl mb-1 font-bold hover:translate-x-2  transition-all ">{children}</h2>
  )
}
