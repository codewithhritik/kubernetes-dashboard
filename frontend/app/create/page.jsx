"use client";

import React, { useState } from "react";
import Dashboard from "../dashboard/page";
import classNames from "classnames";

const CreatePod = () => {
    const [formData, setFormData] = useState({
        dockerhubImage: "",
        appName: "",
        numberOfReplicas: "",
        triggerCommand: "",
    });

    const inputStyleClasses = classNames(
        "mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6 p-2"
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);

        try {
            const response = await fetch('http://localhost:4001/dockerImageName', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dockerHubImage: formData.dockerhubImage,
                    appName: formData.appName,
                    replicas: formData.numberOfReplicas,
                    command: formData.triggerCommand,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                console.log("Pod created successfully:", result);
            } else {
                throw new Error(result.message || 'Failed to create the pod');
            }
        } catch (error) {
            console.error("Error creating pod:", error);
        }
    };

    return (
        <Dashboard>
            <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
                <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                    <p className="text-xl text-gray-700 mb-4">Create a Pod</p>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white p-8 shadow-lg rounded-lg"
                    >
                        <div>
                            <label
                                htmlFor="dockerhubImage"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Dockerhub Image
                            </label>
                            <input
                                type="text"
                                name="dockerhubImage"
                                id="dockerhubImage"
                                required
                                className={inputStyleClasses}
                                value={formData.dockerhubImage}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="appName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                App Name
                            </label>
                            <input
                                type="text"
                                name="appName"
                                id="appName"
                                required
                                className={inputStyleClasses}
                                value={formData.appName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="numberOfReplicas"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Number of Replicas
                            </label>
                            <input
                                type="text"
                                name="numberOfReplicas"
                                id="numberOfReplicas"
                                required
                                className={inputStyleClasses}
                                value={formData.numberOfReplicas}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="triggerCommand"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Trigger Command
                            </label>
                            <input
                                type="text"
                                name="triggerCommand"
                                id="triggerCommand"
                                required
                                className={inputStyleClasses}
                                value={formData.triggerCommand}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                Create Pod
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dashboard>
    );
};

export default CreatePod;