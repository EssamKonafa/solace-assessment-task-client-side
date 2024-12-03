import { Controller } from "react-hook-form";

function UserInfoField({ label, value, isEditing, control, name }: { label: string; value: string; isEditing: boolean, control: any, name:string }) {    
    return (
        <div>
            <p className="font-[400] text-[12px] text-[#737791]">{label}</p>
            {isEditing ? (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            className="font-[500] text-[16px] text-[#151D48] border border-gray-300 rounded p-2 w-full"
                            defaultValue={value}
                        />
                    )}
                />
            ) : (
                <p className="font-[500] text-[16px] text-[#151D48]">{value}</p>
            )}
        </div>
    );
}

export default UserInfoField;