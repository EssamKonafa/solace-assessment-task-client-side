import Breadcrumb from "./BreadCrumb"

function Header() {
    return (
        <div className="w-screen h-[113px] py-[24px] px-[40px] flex justify-between ">

            <div className="w-[470px] h-[65px] space-y-[8px]">
                {/*User Name */}
                <div className="leading-[39px] tracking-[0.5px] text-[26px] font-[600] text-[#151D48]">
                    John Smith Profile
                </div>

                {/*Breadcrumb */}
                <div>
                    <Breadcrumb/>
                </div>
            </div>


            {/*User Icons */}
            <div>

            </div>
        </div>
    )
}

export default Header