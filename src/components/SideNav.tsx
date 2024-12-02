import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import dashboard from "../assets/navIcons/dashboard.svg";
import research from "../assets/navIcons/research.svg";
import creditReport from "../assets/navIcons/creditReport.svg";
import teams from "../assets/navIcons/teams.svg";
import box from "../assets/navIcons/box.svg";

export default function SideNav() {

    const location = useLocation()

    const navItems = [
        { icon: dashboard, url: "/" },
        { icon: research, url: "" },
        { icon: creditReport, url: "" },
        { icon: teams, url: "" },
        { icon: box, url: "" },
    ]

    return (
        <div className="h-screen min-w-[7.05%] py-[40px] px-[30px] gap-[40px] bg-white border-r flex flex-col items-center">

            {/* Logo Section */}
            <div>
                <img src={logo} className='min-w-[45px] h-[45px]' alt='logo' />
            </div>

            {/* Navigation Items */}
            <nav className="h-[304px] w-[48px]">
                <ul className="space-y-[24px]">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.url}
                                className={`flex p-[12px] py-[8px] px-[12px] rounded-[16px] ${item.url === location.pathname && "bg-[#003FAD] w-[48px] h-[48px] items-center"}`}
                            >
                                <img src={item.icon} className="w-[24px] h-[24px]" />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
}

