import userImage from "../assets/userIcons/user.jpg"
import cam from "../assets/userIcons/cam.svg"
import { useQuery } from '@apollo/client';
import { GET_USER } from "../queries/getUser"
import useUserStore from "../store/user"
import { useEffect } from "react";
function BasicInfo() {

    //setting user info globally
    const { setUserStore }: any = useUserStore()

    //query for fetching user
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: 1 },
    });

    const user = data?.user;

    const userInfo2 = [
        { index: "Personal Information", active: true },
        { index: "Financial Information", active: false }
    ]

    // Setting the fetched user info into the Zustand store after the component has mounted or when 'data' changes
    useEffect(() => {
        if (data?.user != null) {
            setUserStore(data?.user)
        }
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='w-[393px] h-[464px] rounded-[24px] p-[24px] space-y-[16px] bg-white '>

            {/*user info */}
            <div className="w-[345px] h-[226px] p-[16px] space-y-[16px]">
                <img src={userImage} className="w-[120px] h-[120px] rounded-[39px] object-cover object-top" />
                <button className="w-[40px] h-[40px] bg-[#F0F0F0] rounded-[50px] absolute top-[112px] left-[151px]">
                    <img className="mx-auto" src={cam} />
                </button>
                <div className="w-[193px] h-[53px]">
                    <p className="font-[600] text-[20px] text-[#051D49]">{user.firstName} {user.familyName}</p>
                    <p className="text-[16px] text-[#737791] leading-[37px] line-clamp-1">{user.nationalId.idNumber}</p>
                </div>
            </div>

            <hr className="text[#ECEEF1]" />

            {/*information type */}
            <div className="h-[158px] items-start py-[16px] space-y-[8px]">
                {userInfo2.map((index, item) => (
                    <div key={item} className="text-[18px] h-[59px]">
                        <button className={`p-[16px] ${index.active === true && 'font-semibold w-full text-start text-[#0F6CBD] bg-[#F4F8FE]  rounded-[8px]'}`}>{index.index}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BasicInfo