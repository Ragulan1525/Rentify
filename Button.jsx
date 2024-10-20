function Button(){
    return(
        <>
        {/* <button type="button" className=" py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border w-[90%] md:w-[70%] lg:w-[45%] mx-auto border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
  Button
</button>

<button type="button" className=" py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border w-[90%] md:w-[70%] lg:w-[45%] mx-auto border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
  Button
</button> */}

<button type="button" className="p-4 sm:p-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border w-[90%] md:w-[70%] lg:w-[45%] mx-auto border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none flex-auto">
  Requested
</button>

<button type="button" className="p-4 sm:p-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border w-[90%] md:w-[70%] lg:w-[45%] mx-auto border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Bookmark
</button>

        </>
    );
}

export default Button; 