import { formatRelativeTime } from "./../utils/formatTime";
import Avatar from "./Avatar";

export default function InboxMessage({
  pic,
  name,
  message,
  sentVia,
  time,
  read,
  isActive,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 py-3 px-2 me-2 rounded-2xl hover:cursor-pointer 
        ${isActive ? "bg-blue-200" : ""}`}
    >
      <Avatar name={name} src={pic} />
      <div className="w-full">
        <div className="flex items-center">
          <span className={`text-sm ${!read ? "font-bold" : "font-normal"}`}>
            {name.split(" ")[0]}
          </span>
          <span className="mx-1"> - </span>
          <span className="text-sm">{sentVia}</span>
        </div>
        <div className="flex justify-between">
          <p className="truncate text-xs max-w-[120px]">{message}</p>
          <span className="text-xs">{formatRelativeTime(time)}</span>
        </div>
      </div>
    </div>
  );
}
