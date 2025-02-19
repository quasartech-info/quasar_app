import Footer from "./footer"
import NavBar from "./navbar"
import { ReactNode } from 'react';
interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
   <>
   <NavBar/>
   <div>{children}</div>
   <Footer/>
   </>
  )
}

export default DefaultLayout