import AdminPostList from "@/components/admin/AdminPostList";
import NewPostForm from "@/components/admin/NewPostForm";
import Container from "@/components/Container";
import { validateRequest } from "@/libs/auth";

const Admin = async () => {
  const { user, session } = await validateRequest();
  if (!session || user.role !== "ADMIN")
    return (
      <div className="flex flex-col h-96 justify-center items-center">
        دسترسی غیرمجاز
      </div>
    );
  return (
    <div>
      <Container className="flex flex-col md:flex-row mt-8 gap-x-2 px-2    ">
        <div className="w-full p-2 ">
          <NewPostForm />
        </div>
        <div className="block md:hidden shadow-md my-5 border-b "></div>
        <div className="w-full p-2 md:h-96 md:overflow-y-auto">
          <AdminPostList />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
