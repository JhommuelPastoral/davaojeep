import MobileDesign from "./mobile-design";
import DesktopDesign from "./desktop-design";

export default function page() {
  return (
    <>  
      <div className="w-screen h-screen justify-center flex items-center">
        <div className="md:hidden w-full">
          <MobileDesign/>
        </div>

        <div className="hidden md:block">
          <DesktopDesign/>
        </div>
      </div>
    
    
    </>
  );
}