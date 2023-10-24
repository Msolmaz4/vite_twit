import { Link } from "react-router-dom"


const Topic = ({item}) => {
  return (
   

<Link to='/'
className="py-3 px-4  transition-colors hover:bg-white/[0.03]">
<div className="text-[13px]">{item.title}</div>
</Link>
     
  )
}

export default Topic