import { MdChat } from "react-icons/md";

export default function ChatWidget() {
  return (
    <textarea className="shadow-lg w-full rounded-2xl p-2 my-4" name="" id="">
      <div>
        <MdChat />
      </div>
    </textarea>
  );
}
