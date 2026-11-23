import React, { useEffect, useState } from 'react'
import CourseServices from '../services/CourseServices'

export default function Course() {


    const [carr, setcarr] = useState([]);

    useEffect(() => {
        var newArr = CourseServices.getAllCourses();
        setcarr([...newArr]);
    }, [])

    return (
        <div className="p-8">

            <h2 className="text-3xl font-bold text-center mb-6">
                Course Component
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-center">

                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="border border-gray-300 p-3">Course ID</th>
                            <th className="border border-gray-300 p-3">Course Name</th>
                            <th className="border border-gray-300 p-3">Course Duration</th>
                            <th className="border border-gray-300 p-3">Course Capacity</th>
                            <th className="border border-gray-300 p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {carr.map((course) => (
                            <tr key={course.cid} className="hover:bg-gray-100">

                                <td className="border border-gray-300 p-3">
                                    {course.cid}
                                </td>

                                <td className="border border-gray-300 p-3">
                                    {course.cname}
                                </td>

                                <td className="border border-gray-300 p-3">
                                    {course.duration}
                                </td>

                                <td className="border border-gray-300 p-3">
                                    {course.capacity}
                                </td>

                                <td className="border border-gray-300 p-3">
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600">
                                        Edit
                                    </button>

                                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
