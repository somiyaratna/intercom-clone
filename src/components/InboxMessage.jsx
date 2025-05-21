import Avatar from "./Avatar";

export default function InboxMessage({ pic, name, message, sentVia, time }) {
  return (
    <div className="flex items-center gap-2 p-3 me-2 rounded-2xl hover:cursor-pointer hover:bg-blue-200">
      <Avatar name={name} src={pic} />
      <div className="w-full">
        <div className="flex items-center">
          <span className="text-sm">{name.split(" ")[0]}</span>
          <span className="mx-1"> - </span>
          <span className="text-sm">{sentVia}</span>
        </div>
        <div className="flex justify-between">
          <p className="truncate text-xs max-w-[120px]">{message}</p>
          <span className="text-xs">{time}</span>
        </div>
      </div>
    </div>
  );
}
