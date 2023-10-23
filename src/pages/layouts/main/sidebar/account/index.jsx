import { Popover } from "@headlessui/react"
import { useAccount } from "../../../../../store/auth/hooks"
import More from "./more"

const Account = () => {


const account = useAccount()
  return (
    <div className="mt-auto">
        <Popover className='relative'>
            <Popover.Button className="my-3 p-3 rounded-full hover:bg-[eff3f41a] w-full flex text-left items-center outline-none">
               <img src= {account.avatar} alt="" className="w-10 h-10 rounded-full" />
               <div className="mx-3 text-[15px] "> 
                 <h6 className="font-bold">{account.fullname}</h6> 
                 <div className=" text-[#71767b]"> 
                @{account.username}
                 </div>
               </div>
               <svg viewBox="0 0 24 24"  className="text-white ml-auto" width={18.75}><g><path fill = 'currentColor' d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
            </Popover.Button>
            <Popover.Panel className='absolute bottom-full py-3 overflow-hidden w-[300px] left-1/2 -translate-x-1/2 bg-black rounded-2xl shadow-box' >
             {({ close })=>(
                <More close={close}/> 
             )}
                    
             
         
            </Popover.Panel>
        </Popover>


    </div>
  )
}

export default Account