import { CourseGrid } from "@/components/common"
import CourseItem from "@/components/course/CourseItem"
import Heading from "@/components/typography/Heading"
import createUser from "@/lib/actions/user.actions"

const page = async () => {
    const user = await createUser({
        clerkId: "clerk_123",
        email_address: "haonguyen@gmail.com",
        username:"axelNguyen"
    }) 
    return (
        <div>
            <Heading>Khám phá</Heading>
            <CourseGrid>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
            </CourseGrid>
        </div>
    )
}

export default page