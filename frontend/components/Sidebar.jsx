"use client";

import { useMemo, useState } from "react";
import classNames from "classnames";
import {
    ChevronDoubleLeftIcon,
    HomeIcon,
    PlusCircleIcon,
    CubeTransparentIcon,
    XCircleIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

const menuItems = [
    { id: 1, label: "Home", icon: HomeIcon, link: "/dashboard" },
    { id: 2, label: "Create Pod", icon: PlusCircleIcon, link: "/create" },
    {
        id: 3,
        label: "Trigger Pod",
        icon: CubeTransparentIcon,
        link: "/dashboard",
    },
    { id: 4, label: "Delete Pod", icon: XCircleIcon, link: "/dashboard" },
];

export default function Sidebar({}) {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const router = useRouter();

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );

    const wrapperClasses = classNames(
        "bg-blue-950 h-screen px-4 pt-8 pb-4 bg-light justify-between flex-col text-white",
        {
            ["w-80"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded absolute right-0 text-black",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const getNavItemClasses = (menu) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-blue-900 rounded w-full overflow-hidden whitespace-nowrap",
            {
                ["bg-slate-100"]: activeMenu?.id === menu.id,
            }
        );
    };

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <div
            className={wrapperClasses}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                        <GlobeAltIcon className="h-6 w-6" />
                        <span
                            className={classNames("mt-1 text-lg font-medium", {
                                hidden: toggleCollapse,
                            })}
                        >
                            k3s Dashboard
                        </span>
                    </div>
                    {isCollapsible && (
                        <button
                            className={collapseIconClasses}
                            onClick={handleSidebarToggle}
                        >
                            <ChevronDoubleLeftIcon className="h-6 w-6" />
                        </button>
                    )}
                </div>

                <div className="flex flex-col items-start mt-24">
                    {menuItems.map(({ icon: Icon, ...menu }) => {
                        const classes = getNavItemClasses(menu);
                        return (
                            <Link
                                href={menu.link}
                                className={
                                    classes +
                                    " flex py-4 px-3 items-center w-full h-full"
                                }
                            >
                                <div style={{ width: "2.5rem" }}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                {!toggleCollapse && (
                                    <span className="font-medium">
                                        {menu.label}
                                    </span> // Ensure to display the label
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div></div>
        </div>
    );
}
