import React, { useState } from 'react'
import CourseServices from '../services/CourseServices'
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const navigate = useNavigate();

    const [formdetails, setFormDetails] = useState({ cid: "", cname: "", duration: "", capacity: "" });

    const handleChange = (event) => {
        // Destructuring
        let { name, value } = event.target;
        setFormDetails({ ...formdetails, [name]: value });
    }

    // After Adding the course navigate to the Course Component
    const addCourse = (event) => {
        event.preventDefault();

        CourseServices.addCourse(formdetails);
        navigate("/courses")
    }

    // Reset the Form 
    const resetForm = () => {
        setFormDetails({
            cid: "",
            cname: "",
            duration: "",
            capacity: ""
        });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">

            <h2 className="text-2xl font-bold text-center mb-6">
                Add New Course
            </h2>

            <form className="space-y-4">

                {/* Course ID */}
                <div>
                    <label className="block font-medium mb-1">
                        Course ID
                    </label>

                    <input
                        type="number"
                        name="cid"
                        placeholder="Enter Course ID"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                        value={formdetails.cid}
                        onChange={handleChange}
                    />
                </div>

                {/* Course Name */}
                <div>
                    <label className="block font-medium mb-1">
                        Course Name
                    </label>

                    <input
                        type="text"
                        name="cname"
                        placeholder="Enter Course Name"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                        value={formdetails.cname}
                        onChange={handleChange}
                    />
                </div>

                {/* Duration */}
                <div>
                    <label className="block font-medium mb-1">
                        Duration
                    </label>

                    <input
                        type="number"
                        name="duration"
                        placeholder="Enter Course Duration"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                        value={formdetails.duration}
                        onChange={handleChange}
                    />
                </div>

                {/* Capacity */}
                <div>
                    <label className="block font-medium mb-1">
                        Capacity
                    </label>

                    <input
                        type="number"
                        name="capacity"
                        placeholder="Enter Course Capacity"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                        value={formdetails.capacity}
                        onChange={handleChange}
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                    <button
                        type="button"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                        onClick={addCourse}
                    >
                        Add Course
                    </button>

                    <button
                        type="button"
                        className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg"
                        onClick={resetForm}
                    >
                        Reset
                    </button>

                </div>

            </form>
        </div>
    )
}
