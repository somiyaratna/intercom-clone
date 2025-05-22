import { FaUserGroup } from "react-icons/fa6";
import { detailsItems } from "../static-data";
import DetailsItem from "./DetailsItem";

export default function CopilotDetails() {
  return (
    <div className="px-4 w-full">
      {/* Assignee and Team */}
      <div className="flex gap-10 pt-4 justify-between mb-3 pe-8 border-t-[1px] border-gray-300">
        <p>Assignee</p>
        <div className="flex items-center gap-2">
          <img src="/profile.jpeg" alt="" className="h-5 w-5 rounded-full" />
          <p>Brian Byrne</p>
        </div>
      </div>
      <div className="flex gap-10 pb-4 justify-between mb-3 pe-8 border-b-[1px] border-gray-300">
        <p>Team</p>
        <div className="flex gap-2 items-center">
          <FaUserGroup />
          <p>Unassigned</p>
        </div>
      </div>

      {/* Links */}
      <div>
        {detailsItems.map((item, i) => (
          <DetailsItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
