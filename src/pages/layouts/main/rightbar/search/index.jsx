import { useState } from "react"


const Search = () => {

    const [query ,setQuery] = useState('')
    const [focus ,setFocus] = useState(false)


  return (
    <div className="min-h-[32px] h-[53px] mb-3 flex items-center relative">
        <label className="h-[43px] rounded-full bg-[#202327] w-full relative group border border-transparent focus-within:bg-black focus-within:border-[#1d9bf0]">
            <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0">
            <svg viewBox="0 0 24 24" className="min-w-[32px] text-[#71767b]" width={18.75} ><g><path fill="currentColor" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
            </div>
            <input
             type="text"
             value={query}
             onFocus={()=>setFocus(true)}
             onBlur={()=>setFocus(false)}
             onChange={e=>setQuery(e.target.value)}
              className="w-full h-full bg-transparent rounded-full outline-none pl-[56px] text-[15px]"></input>
            
        {
           ( query && focus )&& (
                <button
                type="button"
                onClick={()=>setQuery('')}
                className="w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center text-black min-w-[22px] right-3 absolute top-1/2 -translate-y-1/2 invisible group-focus-within:visible">
                    <svg viewBox="0 0 15 15" width={10} height={10} ><g><path fill="currentColor" d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path></g></svg>
                </button>
            )}
            
        </label>
           {focus && (
            <div className="absolute top-full w-full bg-black shadow-box px-4 max-h-[calc(80vh-53px)] rounded-lg min-h-[100px]">
                <p className="p-3 pt-5 text-[#71767b] leading-5" >Try searching for people, lists, or keywords</p>
            </div>
           )}
    </div>
  )
}

export default Search