import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useTheme } from "./../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 hover:cursor-pointer transition-all duration-300 ease-in-out bg-gray-200 rounded"
    >
      {theme === "light" ? (
        <IoIosMoon />
      ) : (
        <IoIosSunny className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
