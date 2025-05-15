import { menuItem } from "@/constants";
import { TMenuItem } from "@/types";
import { UserButton } from "@clerk/nextjs";
import { ActiveLink } from "../common";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
	return (
		<div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white  dark:bg-grayDarker flex flex-col">
			<a href="/" className="font-bold text-3xl inline-block mb-5">
				Ucademy
			</a>
			<ul>
				{menuItem.map((item, index) => (
					<MenuItem
						key={index}
						url={item.url}
						title={item.title}
						icon={item.icon}
					></MenuItem>
				))}
			</ul>
			<div className="mt-auto flex items-center justify-end gap-5">
				<ModeToggle></ModeToggle>
				<UserButton/>
			</div>
		</div>
	);
};

function MenuItem({
	url = "/",
	title = "",
	icon,
}: TMenuItem) {
	return (
		<li>
			<ActiveLink url={url}>{icon} {title}</ActiveLink>
		</li>
	);
}

export default Sidebar;
