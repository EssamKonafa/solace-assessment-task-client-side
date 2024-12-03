import { Link, useLocation } from "react-router-dom";
import arrowRight from "../assets/arrowRight.svg";
import useUserStore from "../store/user";

const Breadcrumb = () => {
    const { userInfo }: any = useUserStore();

    const location = useLocation()

    const paths = [
        { url: "", label: "Dashboard" },
        { url: "", label: "HR manage" },
        { url: "", label: "Employees" },
        { url: "/", label: `${userInfo?.firstName} Profile` },
    ];

    return (
        <div className="flex text-sm h-[18px] space-x-[8px]">
            {paths.map((path, index) => (
                <div key={index} className="text-[12px] text-[#959FB0] font-[400] leading-[18px]">
                    <Link to={path.url}>
                        <p className={`flex gap-[10px] ${path.url === location.pathname && 'text-[#003FAD]'}`}>
                            {path.label}
                            {path.url != location.pathname && <img className="text-[#459aff]" src={arrowRight} />}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumb;