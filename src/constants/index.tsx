import { IconComment, IconExplore, IconOrder, IconPlay, IconStudy, IconUsers } from "@/components/icons";


export const menuItem: {
    url: string;
    title: string;
    icon: React.ReactNode;
}[] = [
        {
            url: "/",
            title: "Khám phá",
            icon: <IconPlay className= "size-5" width="35px" />
        },
        {
            url: "/study",
            title: "Khu vực học tập",
            icon: <IconStudy className= "size-5" width="35px" />
        },
        {
            url: "/manage/course",
            title: "Quản lí khoá học",
            icon: <IconExplore className= "size-5 " width="35px" />
        },
        {
            url: "/manage/member",
            title: "Quản lí thành viên",
            icon: <IconUsers className= "size-5" width="35px" />
        },
        {
            url: "/manage/order",
            title: "Quản lí đơn hàng",
            icon: <IconOrder className= "size-5" width="35px" />
        },
        {
            url: "/manage/comment",
            title: "Quản lí bình luận",
            icon: <IconComment className= "size-5" width="35px" />
        },
]