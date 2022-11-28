import userLogo from "../../assets/images/Userimage.jpeg";

export function DashboardFooter() {
  return (
    <div className=" flex align-center justify-center pb-3 pt-3 left-0 botton-0 right-0 border-t-solid border-t-2 border-rose-400 bg-gray-800">
      <img
        src={userLogo}
        alt="user temporary logo"
        className="h-[36px] w-[36px] mr-3"
      />
      <div className="p-1 text-rose-300">User.name</div>
    </div>
  );
}
