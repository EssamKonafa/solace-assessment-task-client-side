import user from "../assets/userIcons/user.jpg"
import cam from "../assets/userIcons/cam.svg"

function BasicInfo() {
    
    const active = true;
    const userInfo = [
        { index: "Personal Information" },
        { index: "Financial Information" }
    ]
    return (
        <div className='w-[393px] h-[464px] rounded-[24px] p-[24px] space-y-[16px] bg-white '>
            
            {/*user info */}
            <div className="w-[345px] h-[226px] p-[16px] space-y-[16px]">
                <img src={user} className="w-[120px] h-[120px] rounded-[39px] object-cover object-top" />
                <button className="w-[40px] h-[40px] bg-[#F0F0F0] rounded-[50px] absolute top-[112px] left-[151px]">
                    <img className="mx-auto" src={cam} />
                </button>
                <div className="w-[193px] h-[53px]">
                    <p className="font-[600] text-[20px] text-[#051D49]">John Smith</p>
                    <p className="text-[16px] text-[#737791] leading-[37px]">Senior Product Manager</p>
                </div>
            </div>

            <hr className="text[#ECEEF1]" />

            {/*information type */}
            <div className="h-[158px] py-[16px] space-y-[8px]">
                {userInfo.map((index, item) => (
                    <div key={item} className="text-[18px] h-[59px]">
                        <button className={`p-[16px] ${!active && 'font-semibold text-[#0F6CBD] bg-[#F4F8FE] rounded-[8px]'}`}>{index.index}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BasicInfo