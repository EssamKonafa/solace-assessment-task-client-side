import notification from "../assets/userIcons/notifications.svg"
import dot from "../assets/userIcons/dot.svg"
import messages from "../assets/userIcons/messages.svg"
import settings from "../assets/userIcons/settings.svg"
import user from "../assets/userIcons/user.svg"

function UserIcons() {

    const icons = [
        { icon: notification, dot: dot },
        { icon: messages },
        { icon: settings },
        { icon: user },
    ]

    return (
        <div className="w-[249px] h-[40px] gap-[16px] flex">
            {icons.map((index, item) => (
                <div key={item} className={`relative w-[48px] h-[40px] cursor-pointer py-[8px] px-[12px] ${index.icon === user && 'w-[40px] h-[40px] py-0 px-0'}`}>
                    <img src={index.icon} />
                    <img className="absolute top-1 right-3" src={index?.dot} />
                </div>
            ))}
        </div>
    )
}

export default UserIcons