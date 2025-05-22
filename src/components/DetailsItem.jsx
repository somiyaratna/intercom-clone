export default function DetailsItem({
  startIcon: StartIcon,
  endIcon: EndIcon,
  text,
}) {
  return (
    <div className="flex border-b-[1px]  border-gray-300 justify-between items-center px-3 py-4 hover:bg-gray-100 rounded cursor-pointer font-semibold">
      <div className="flex items-center gap-2">
        {StartIcon && <StartIcon />}
        <p>{text}</p>
      </div>
      {EndIcon && <EndIcon />}
    </div>
  );
}
