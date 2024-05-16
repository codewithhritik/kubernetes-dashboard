"use client";

import React, { useState, useEffect } from "react";
import Dashboard from "../dashboard/page";

const DeleteResource = () => {
    const [resourceType, setResourceType] = useState("deployments"); // Default to deployments
    const [resources, setResources] = useState([]);
    const [selectedResource, setSelectedResource] = useState("");

    useEffect(() => {
        fetchResources();
    }, [resourceType]);

    const fetchResources = async () => {
        const res = await fetch(
            `http://127.0.0.1:4001/get${
                resourceType.charAt(0).toUpperCase() + resourceType.slice(1)
            }`
        ); // Construct URL based on resource type
        const data = await res.json();
        setResources(data.items);
        setSelectedResource(
            data.items.length > 0 ? data.items[0].metadata.name : ""
        );
    };

    const handleDelete = async () => {
        if (!selectedResource) return;

        const response = await fetch(
            `http://127.0.0.1:4001/delete/${resourceType}/${selectedResource}`,
            {
                method: "DELETE",
            }
        );
        const result = await response.json();
        console.log(result);
        fetchResources(); // Refresh the list after deletion
    };

    return (
        <Dashboard>
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
                <h1 className="text-xl font-bold mb-4 text-gray-800">
                    Delete Kubernetes Resource
                </h1>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Resource Type
                    </label>
                    <select
                        value={resourceType}
                        onChange={(e) => setResourceType(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="deployments">Deployments</option>
                        <option value="services">Services</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Resource Name
                    </label>
                    <select
                        value={selectedResource}
                        onChange={(e) => setSelectedResource(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        {resources.map((resource) => (
                            <option
                                key={resource.metadata.name}
                                value={resource.metadata.name}
                            >
                                {resource.metadata.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                    disabled={!selectedResource}
                >
                    Delete {resourceType.slice(0, -1)}
                </button>
            </div>
        </Dashboard>
    );
};

export default DeleteResource;
