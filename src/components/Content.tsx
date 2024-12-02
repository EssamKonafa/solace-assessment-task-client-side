function Content() {
    const isEditing = false;
    return (
        <div className='rounded-[24px] p-[40px] space-y-[24px] bg-white' >
            <div className="flex justify-between w-[880px]">
                <p className="font-[500] text-[20px] text-[#151D48]">Basic Information</p>
                <button className="w-[104px] h-[36px] bg-[#0F6CBD] border-[1px] border-[#0058A9] text-white rounded-[4px] text-[14px] font-[500]">Edit</button>
            </div>
            {!isEditing ?
                <div className="grid grid-cols-4 gap-6">
                    <div>
                        <p className="font-[400] text-[12px] text-[#737791]">First Name</p>
                        <p className="font-[500] text-[16px] text-[#151D48]">29702031400693</p>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default Content