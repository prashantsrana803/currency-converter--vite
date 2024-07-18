import React from "react";


const darkMode = () => {
  const handleClick = () => {
    if (localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme")) {
      // Add class 'dark' to html element
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Remove class 'dark' from html element
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex" onClick={handleClick}>
      <div className="flex items-center justify-center flex-initial w-64">
         <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold 
         rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          DarkMode 
        </button>
      </div>
    </div>
  );
};

export default darkMode;
