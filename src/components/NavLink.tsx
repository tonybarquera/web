import { Dispatch, SetStateAction } from "react";

type NavLinkProps = {
  text: string,
  setActiveMenu: Dispatch<SetStateAction<boolean>>
}

function NavLink({ text, setActiveMenu } : NavLinkProps) {
  return (
    <a href="#" className="font-roboto text-center text-lg text-white px-5 py-2 border-b-2 border-slate-700 hover:border-b-2 hover:border-white" onClick={() => setActiveMenu(false)} >{text}</a>
  )
}

export default NavLink;