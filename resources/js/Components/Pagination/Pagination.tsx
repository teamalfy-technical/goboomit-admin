import React from "react";

const Pagination = () => {
    return (
        <div className="flex items-center justify-between bg-white px-4 py-2 sm:px-6">
            {/* <div className="flex flex-1 justify-between sm:hidden">
        <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
            Previous
        </a>
        <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
            Next
        </a>
    </div> */}
            <div className="flex items-center justify-center  flex-1 sm:justify-between">
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex space-x-2 rounded-md"
                        aria-label="Pagination"
                    >
                        <a
                            href="#"
                            className="relative bg-gray-200 inline-flex items-center rounded-full p-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M15 7L10 12L15 17"
                                        stroke="#FFB8C2"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        <div className="rounded-3xl bg-gray-200 flex flex-row items-center">
                            <a
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-[#FFB8C2] px-4 py-2 text-sm font-semibold text-white focus:z-20
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                2
                            </a>
                        </div>
                        <a
                            href="#"
                            className="relative inline-flex bg-gray-200 items-center rounded-full p-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M10 7L15 12L10 17"
                                        stroke="#FFB8C2"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{" "}
                                </g>
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
