import Breadcrumbs from "../Breadcrumbs";

export const HeaderNav = () => {
  return (
    <div className="h-[60px] px-6 rounded-[20px] bg-[#486cfe] w-full flex items-center justify-between">
      <div className="flex items-center gap-[8px]">
        <i className="fa-solid fa-calendar-days text-white text-[14px]"></i>
        <Breadcrumbs />
      </div>

      <div className="w-[40px] h-[40px] rounded-full bg-blue-600 flex items-center justify-center">
        <i className="fa-solid fa-user text-[#ccc] text-[24px]"></i>
      </div>
    </div>
  );
};
