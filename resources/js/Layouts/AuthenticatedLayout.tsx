import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-row w-full justify-between">
                <aside
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden bg-white fixed shadow h-screen w-6/12 z-50 md:w-3/12 lg:w-2/12 md:block"
                    }
                >
                    <div className="w-full mx-auto py-6 px-4 sm:px-6 h-full">
                        <div className="shrink-0 flex items-center mt-3 mb-6">
                            <Link href="/">
                                <ApplicationLogo className="block h-8 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center justify-between h-full">
                            <div className="flex flex-col pt-2 pb-3 space-y-4 w-full">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                    className="w-full py-2 flex items-center"
                                >
                                    <span className="mr-5">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                        >
                                            <g
                                                id="SVGRepo_bgCarrier"
                                                strokeWidth="0"
                                            ></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    d="M22 22L2 22"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>{" "}
                                                <path
                                                    d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>{" "}
                                                <path
                                                    d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>{" "}
                                                <path
                                                    d="M4 22V9.5"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>{" "}
                                                <path
                                                    d="M20 22V9.5"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>{" "}
                                                <path
                                                    d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                ></path>{" "}
                                                <path
                                                    d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                                                    stroke="#616161"
                                                    strokeWidth="1.5"
                                                ></path>{" "}
                                            </g>
                                        </svg>
                                    </span>
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    href={route("profile.edit")}
                                    active={route().current("profile.edit")}
                                    className="w-full py-2 flex items-center"
                                >
                                    <span className="mr-5">
                                        <svg
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                        >
                                            <g clipPath="url(#clip0_5774_27566)">
                                                <path
                                                    d="M11.7188 6.09375L10.972 7.5L9.375 7.69406L10.5469 8.75016L10.3125 10.3125L11.7188 9.43359L13.125 10.3125L12.8906 8.75016L14.0625 7.69406L12.4219 7.5L11.7188 6.09375Z"
                                                    fill="#757575"
                                                />
                                                <path
                                                    d="M10.0378 6.28781L11.7188 4.60969L13.4002 6.28875L14.0625 5.625L11.7188 3.28125L9.375 5.625L10.0378 6.28781Z"
                                                    fill="#757575"
                                                />
                                                <path
                                                    d="M10.0378 3.94406L11.7188 2.26594L13.4002 3.945L14.0625 3.28125L11.7188 0.9375L9.375 3.28125L10.0378 3.94406ZM7.5 14.0625H6.5625V11.7188C6.56213 11.3459 6.41385 10.9884 6.15021 10.7248C5.88657 10.4612 5.5291 10.3129 5.15625 10.3125H3.28125C2.9084 10.3129 2.55093 10.4612 2.28729 10.7248C2.02365 10.9884 1.87537 11.3459 1.875 11.7188V14.0625H0.9375V11.7188C0.938244 11.0974 1.18541 10.5017 1.62479 10.0623C2.06417 9.62291 2.65988 9.37574 3.28125 9.375H5.15625C5.77762 9.37574 6.37333 9.62291 6.81271 10.0623C7.25209 10.5017 7.49926 11.0974 7.5 11.7188V14.0625ZM4.21875 4.6875C4.49688 4.6875 4.76876 4.76998 5.00002 4.9245C5.23128 5.07902 5.41152 5.29864 5.51796 5.5556C5.62439 5.81256 5.65224 6.09531 5.59798 6.3681C5.54372 6.64088 5.40979 6.89145 5.21312 7.08812C5.01645 7.28479 4.76588 7.41872 4.4931 7.47298C4.22031 7.52724 3.93756 7.49939 3.6806 7.39296C3.42364 7.28652 3.20402 7.10628 3.0495 6.87502C2.89498 6.64376 2.8125 6.37188 2.8125 6.09375C2.8125 5.72079 2.96066 5.3631 3.22438 5.09938C3.4881 4.83566 3.84579 4.6875 4.21875 4.6875ZM4.21875 3.75C3.7552 3.75 3.30206 3.88746 2.91663 4.14499C2.5312 4.40253 2.2308 4.76857 2.05341 5.19684C1.87601 5.6251 1.8296 6.09635 1.92003 6.55099C2.01047 7.00564 2.23369 7.42325 2.56147 7.75103C2.88925 8.07881 3.30686 8.30203 3.76151 8.39247C4.21615 8.4829 4.6874 8.43649 5.11566 8.25909C5.54393 8.0817 5.90997 7.7813 6.16751 7.39587C6.42504 7.01044 6.5625 6.5573 6.5625 6.09375C6.5625 5.78596 6.50188 5.48119 6.38409 5.19684C6.26631 4.91248 6.09367 4.65411 5.87603 4.43647C5.65839 4.21883 5.40002 4.04619 5.11566 3.92841C4.83131 3.81062 4.52654 3.75 4.21875 3.75Z"
                                                    fill="#757575"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5774_27566">
                                                    <rect
                                                        width="15"
                                                        height="15"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    Payouts
                                </NavLink>
                            </div>

                            <div className="mb-16 w-full">
                                <ResponsiveNavLink
                                    className="bg-[#7E6868] rounded-md text-white flex justify-center items-center
                                    text-sm"
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    <span className="mr-2">
                                        <svg
                                            viewBox="0 -0.5 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                        >
                                            <g
                                                id="SVGRepo_bgCarrier"
                                                strokeWidth="0"
                                            ></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                                                    fill="#ffffff"
                                                ></path>{" "}
                                            </g>
                                        </svg>
                                    </span>
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </aside>
                <div></div>
                <div className="w-full md:w-9/12 lg:w-10/12">
                    <nav className="bg-white border-b border-gray-100 w-full">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                        <NavLink
                                            href={route("dashboard")}
                                            active={route().current(
                                                "dashboard"
                                            )}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="flex items-center ms-6">
                                    <div className="ms-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white
                                                         hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        {user.name}

                                                        <svg
                                                            className="ms-2 -me-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                    <div className="-me-2 flex items-center sm:hidden">
                                        <button
                                            onClick={() =>
                                                setShowingNavigationDropdown(
                                                    (previousState) =>
                                                        !previousState
                                                )
                                            }
                                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                        >
                                            <svg
                                                className="h-6 w-6"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    className={
                                                        !showingNavigationDropdown
                                                            ? "inline-flex"
                                                            : "hidden"
                                                    }
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                                <path
                                                    className={
                                                        showingNavigationDropdown
                                                            ? "inline-flex"
                                                            : "hidden"
                                                    }
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <main className="p-2">{children}</main>
                </div>
            </div>
        </div>
    );
}
