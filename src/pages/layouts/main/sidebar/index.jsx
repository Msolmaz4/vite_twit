import Logo from "./logo/Logo"
import Menu from "./menu"


const Sidebar = () => {
  return (
    <aside className="w-[275px] min-h-screen px-2 flex flex-col">
        
        sidebar
        <Logo/>
        <Menu/>
        <div className="mt-auto">
          test
        </div>
        
        </aside>
  )
}

export default Sidebar