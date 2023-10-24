import { topics } from "../../utils/consts"
import Topic from "./topic"


const Topics = () => {
  return (
    <div className="bg-[#161881c] mb-4 rounded-2xl border border-[#161881c]">
        <h6  className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center">Germany trends</h6>
        <div className="grid">
            {
            topics.map((topic,index)=> <Topic item={topic} key={index}/>)
            } 
        </div>
       

    </div>
  )
}

export default Topics