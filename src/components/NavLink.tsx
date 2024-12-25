import { Dispatch, SetStateAction } from "react";

type NavLinkProps = {
  text: string;
  reference: string;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

function NavLink({ text, reference, setActiveMenu } : NavLinkProps) {
  return (
    <a href={`#${reference}`} className="font-roboto text-center text-sm text-primary px-5 py-1 md:border-b-2 md:border-slate-700 md:hover:border-b-2 md:hover:border-primary" onClick={() => setActiveMenu(false)} >{text}</a>
  )
}

export default NavLink;