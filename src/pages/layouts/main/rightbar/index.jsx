import Premium from "../../../../components/premium"
import Topics from "../../../../components/topics"
import Search from "./search"


const Rightbar = () => {
  return (
    <div className="w-[350px] mr-2.5">

     <Search/>
     <Premium/>
     <Topics/>
    </div>
  )
}

export default Rightbar