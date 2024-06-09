import { Fragment, useContext, useEffect, useState } from "react";
import Membercard from "@/components/membercard";
import AdminNavbar from "@/components/adminnavbar";
import NotificationContext from "@/context/notification-context";
import { useRouter } from "next/router";
import NonMembercard from "@/components/nonmembercard";
import PageLoader from "@/components/PageLoader";
import { getServerSession } from "next-auth";
import { authNext } from "../api/auth/[...nextauth]";

const AdminMembersPage = () => {
  const [member, setMember] = useState([]);
  const [activity, setActivity] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [activityLoading, setActivityLoading] = useState(true);

  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();

  const getUser = async () => {
    try {
      const response = await fetch("https://gymbrosbeapp-production-b2f2.up.railway.app/api/users");
      const result = await response.json();
      setMember(result)
      setUserLoading(false)
      console.log(member)
    } catch (error) {
      console.log(error)
    }
  }

  const getActivity = async () => {
    try {
      const response = await fetch("https://gymbrosbeapp-production-b2f2.up.railway.app/api/listusers/reports");
      const result = await response.json();
      setActivity(result.data)
      setActivityLoading(false)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getActivity();
    getUser();
  }, []);

  return (
    <Fragment>
      {userLoading || activityLoading && !member && <PageLoader />}
      {!userLoading && !activityLoading && member && (
        <Fragment>
          <AdminNavbar />
          <h1 className="text-6xl font-bold text-center my-[10px]">Members</h1>
          <div className="grid grid-cols-1 min-[970px]:grid-cols-2 min-[1470px]:grid-cols-3 my-4">
            {member.map((user, index) => (
              <Membercard
                user={user}
                key={index}
                activity = {activity}
              />
            ))}
          </div>
          {/* <h1 className="text-6xl font-bold text-center my-[10px]">
            Non Members
          </h1>
          <div className="grid grid-cols-1 min-[970px]:grid-cols-2 min-[1470px]:grid-cols-3 my-4">
            {nonMember.map((user, index) => (
              <NonMembercard
                item={user}
                key={index}
                addNotification={addNotificationHandler}
                editMemberHandler={editMember}
              />
            ))}
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminMembersPage;
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authNext);

  if (!session || session.user.email !== "admingymbro@gmail.com") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  session.user.name = null;
  session.user.image = null;
  return {
    props: { session },
  };
}
