import Navbar from './Navbar';
import { BaseLogoIcon  , MenuCloseIcon} from '../assets/icons';

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <div className='row-span-full bg-[#1c2434] hidden tablet:flex flex-col items-center py-8 px-8 gap-4 h-100'>
        <div className='flex flex-col gap-6 items-center w-full grow'>
          <span className='flex items-center text-white-10 font-bold text-3xl gap-2 pb-8'>
            Dunlin <BaseLogoIcon />
          </span>
          <Navbar />
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className='tablet:hidden fixed h-full w-screen bg-black-30/20 backdrop-blur-sm supports-[backdrop-filter]:bg-black-30/20 z-40 inset-0 overflow-hidden transition-all'>
          <div className='h-full w-[224px] shadow-sm bg-[#1C2434] flex flex-col items-center py-4 px-[10px] gap-4 text-black-100 overflow-y-auto rounded-r-3xl'>
            <div className='flex flex-col gap-6 items-center w-full grow'>
              <div className='flex gap-3 items-center w-[192px]'>
                <span className='flex items-center text-white-10 font-bold text-3xl gap-2 pb-8'>
                  Dunlin <BaseLogoIcon />
                </span>
              </div>
              <Navbar setMobileMenuOpen={setMobileMenuOpen} />
              <div
                onClick={() => setMobileMenuOpen(false)}
                className='absolute top-[10px] left-[160px] bg-black-100 text-black-12 rounded-full p-2 z-50'
              >
                <MenuCloseIcon width={20} height={20} />
              </div>
            </div>    
          </div>
        </div>
      )}
    </>
  );
}
