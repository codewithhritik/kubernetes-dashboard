import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = ({ children }) => {
    return (
        <div className="h-screen flex flex-row justify-start">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Dashboard;
