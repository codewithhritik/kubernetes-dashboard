"use client";

import React, { useState, useEffect } from "react";
import Dashboard from "../dashboard/page";

const PodStatus = () => {
    const [pods, setPods] = useState([]);

    useEffect(() => {
        // Function to fetch pod data
        const fetchPodData = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:4001/podsStatus"
                ); // Adjust the API endpoint as needed
                const data = await response.json();
                setPods(data.items);
            } catch (error) {
                console.error("Failed to fetch pods", error);
            }
        };

        fetchPodData();
    }, []);

    return (
        <Dashboard>
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Pod Status</h1>
                {pods.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pods.map((pod) => (
                            <div
                                key={pod.metadata.name}
                                className="bg-white shadow rounded-lg p-4"
                            >
                                <h2 className="text-lg font-semibold">
                                    {pod.metadata.name}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Namespace: {pod.metadata.namespace}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Start Time:{" "}
                                    {new Date(
                                        pod.status.startTime
                                    ).toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Phase: {pod.status.phase}
                                </p>
                                <div>
                                    <h3 className="font-semibold">
                                        Containers:
                                    </h3>
                                    {pod.status.containerStatuses.map(
                                        (container, index) => (
                                            <div key={index} className="ml-2">
                                                <p className="text-sm">
                                                    {container.name} -{" "}
                                                    {container.ready
                                                        ? "Ready"
                                                        : "Not Ready"}
                                                </p>
                                                <p className="text-sm">
                                                    Restarts:{" "}
                                                    {container.restartCount}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No pods found.</p>
                )}
            </div>
        </Dashboard>
    );
};

export default PodStatus;
