import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import logo from "../asserts/POC-S3-Logo-Colors.png";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import bgImageUrl from "../asserts/app-layout-bg-curve-light.png";
function Navbar() {
  const [showDelPopUp, setShowDelPopUp] = useState(false);

  // useState for sidebar collapsed status
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // useState for sidebar hover collapsed status
  const [isSidebarHoverCollapsed, setIsSidebarHoverCollapsed] = useState(false);

  const navData = [
    {
      to: "/",
      label: "Students",
      nested: false,
    },
  ];

  // Toggle Sidebar Function
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    setIsSidebarHoverCollapsed(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // Assuming 'lg' corresponds to 1024px
        toggleSidebar();
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleSidebar]);

  return (
    <div className="flex max-h-screen relative overflow-hidden">
      {/* {Side bar start} */}
      {/*  */}
      <div
        className={`bg-[#7dbeea] h-screen sm:mt-[4rem] lg:mt-[4rem]  fixed text-white ${
          isSidebarCollapsed
            ? " -ml-16  md:w-16"
            : " mt-[3.9rem] md:mt-[5rem] w-64"
        } flex-none transition-width duration-300`}
        style={{
          backgroundImage: !isSidebarCollapsed
            ? `url(${bgImageUrl})`
            : undefined,
          backgroundRepeat: "no-repeat",
          backgroundSize: "150% 130%",
          backgroundPosition: "left -64px center",
          zIndex: "48",
          left: isSidebarCollapsed ? "-64px" : "0px", // Adjust the left property
          transition: "left 500ms ease", // Add transition for the left property
        }}
        onMouseEnter={() => setIsSidebarHoverCollapsed(false)}
        onMouseLeave={() => setIsSidebarHoverCollapsed(true)}
      >
        <div className={`py-8  hidden md:flex  items-center justify-center`}>
          <Link to={"/"} className={``}>
            {isSidebarCollapsed ? (
              <img
                src={logo}
                alt="tradermetrix"
                className="h-8 hidden md:block  transition-opacity duration-300 delay-300"
              />
            ) : (
              <img
                src={logo}
                alt="tradermetrix"
                className="h-8  transition-opacity duration-300 delay-300"
              />
            )}
          </Link>
        </div>

        <nav
          className={`w-full flex py-4 items-center justify-center ${
            isSidebarCollapsed ? "justify-center" : ""
          }  mt-3`}
        >
          <NavigationComponent
            hidden={isSidebarCollapsed && true}
            navData={navData}
            onClose={() => setIsSidebarCollapsed(true)}
          />
        </nav>
      </div>
      {/* {Side bar end} */}
      <div
        className={`flex-1  flex flex-col ${
          // isSidebarCollapsed && isSidebarHoverCollapsed ? "ml-0" : " ml-0"
          ""
        } relative z-40 overflow-hidden  transition-all duration-300 ease-in-out`}
      >
        <div className="bg-[#2c2c2c]  fixed w-full   z-50 shadow p-4 flex justify-between items-center">
          <div className="flex w-full  justify-between items-center gap-8">
            <div className="" onClick={toggleSidebar}>
              {isSidebarCollapsed ? (
                <HiBars3BottomRight
                  size={25}
                  className=" z-[99999] text-[#ffffff] cursor-pointer hover:opacity-75 transition-opacity"
                />
              ) : (
                <IoClose
                  size={25}
                  className=" z-[99999] text-[#ffffff] cursor-pointer hover:opacity-75 transition-opacity"
                />
              )}
            </div>
            <div className="flex items-center gap-12">
              <img
                src={logo}
                alt="tradermetrix"
                className="h-8 sm:hidden block  transition-opacity duration-300 delay-300"
              />
            </div>
          </div>
          <Link
            to={"/"}
            className={` ${isSidebarHoverCollapsed ? "" : "-ml-3"}`}
          >
            <img
              src={logo}
              alt="tradermetrix"
              className="h-8  sm:block hidden transition-opacity duration-300 delay-300"
            />
          </Link>
        </div>
      </div>
      <Popup
        open={showDelPopUp}
        onClose={() => setShowDelPopUp(false)}
        modal
        closeOnEscape={false}
        closeOnDocumentClick={false}
      >
        <div className="relative bg-grayMain dark:bg-dark-background w-full lg:p-8 p-5 rounded-lg">
          <div className="w-full absolute bg-light-foreground text-white dark:bg-dark-border top-0 right-0 left-0 p-2">
            <h1>Delete a dummy trade</h1>
          </div>
          <div className="flex justify-start items-start flex-col gap-3">
            <div className="mt-8">
              <p className="text-base text-black dark:text-white">
                Are you sure you want to delete dummy trades?
              </p>
            </div>
            <div className="flex w-full justify-between items-center">
              <button
                onClick={() => setShowDelPopUp(false)}
                type="button"
                className="bg-light-lightGray dark:bg-[#66b2b244] text-light-foreground dark:text-dark-border py-2 px-5 rounded hover:opacity-80 transition-opacity"
              >
                Cancel
              </button>
              <buttom
                type="submit"
                buttonClass="bg-light-foreground text-white dark:bg-dark-border hover:opacity-80 transition-opacity py-2 px-5 rounded-md cursor-pointer"
                onClick={() => {
                  setShowDelPopUp(false);
                }}
              >
                Submit
              </buttom>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
export default Navbar;
