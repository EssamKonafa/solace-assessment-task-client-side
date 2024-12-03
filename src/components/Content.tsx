import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../queries/updateUser";
import UserInfoField from "./userInfoFiled";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { GET_USER } from "../queries/getUser";

function Content({ sectionTitle, data }: { sectionTitle: string; data: Array<{ label: string; value: string, name: string }> }) {

    //mutation for updating user
    const [updateUser, { loading, error }] = useMutation(UPDATE_USER);

    // Manage editing state
    const [isEditing, setIsEditing] = useState(false);

    // Initialize form handling with default values
    const { control, handleSubmit, reset } = useForm({
        defaultValues: data,
    });

    // Handle form submission to update user data
    const onSubmit = async (data: any) => {
        try {
            await updateUser({
                variables: {
                    id: 1,
                    edit: data,
                },
                refetchQueries: [ //refetching user data after sucessfull edit to make sure every rendered part is up to date
                    {
                        query: GET_USER,
                        variables: { id: 1 },
                    },
                ],
            });
            setIsEditing(false);
        } catch (err) {
            console.error("Error updating user:", err);
        }
    };

    // Cancel editing and reset form to original data
    const cancelEdit = () => {
        reset(data);
        setIsEditing(false);
    };

    // Display loading or error states
    if (loading) return <p>loading..</p>
    if (error) return <p>error while editing.</p>

    return (
        <div className="rounded-[24px] p-[40px] space-y-[24px] bg-white">
            <div className="flex justify-between w-[880px]">
                <p className="font-[500] text-[20px] text-[#151D48]">{sectionTitle}</p>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="w-[104px] h-[36px] bg-[#0F6CBD] border-[1px] border-[#0058A9] text-white rounded-[4px] text-[14px] font-[500]"
                    >
                        Edit
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-4 gap-6">
                    {data?.map((item, index) => (
                        <UserInfoField key={index} label={item.label} value={item.value} isEditing={isEditing} control={control} name={item.name} />
                    ))}
                </div>

                {isEditing && (
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            onClick={cancelEdit}
                            className="w-[104px] h-[36px] bg-gray-200 border border-gray-400 text-black rounded-[4px] text-[14px] font-[500]"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-[104px] h-[36px] bg-[#0F6CBD] border-[1px] border-[#0058A9] text-white rounded-[4px] text-[14px] font-[500]"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                )}

            </form>

        </div>
    );
}

export default Content;