import Account from "./account"
import Logo from "./logo/Logo"
import Menu from "./menu"


const Sidebar = () => {
  return (
    <aside className="w-[275px] min-h-screen px-2 flex flex-col">
        
        sidebar
        <Logo/>
        <Menu/>
       <Account/>
        
        </aside>
  )
}

export default Sidebar