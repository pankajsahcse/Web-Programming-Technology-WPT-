import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CourseServices from '../services/CourseServices';


export default function EditForm() {

 //. /edit/:id.    state={courseData:course}

    const navigate = useNavigate();
    const location = useLocation();

    const [formdetails, setFormDetails] = useState({ cid: "", cname: "", duration: "", capacity: "" });


    // Assigning the courseData into the form for editing

    useEffect(() =>{
        // Previous component se bheja gaya state receive karta hai.
        // and previous componet ke liye location use hota hai 
        setFormDetails({...location.state.courseData})
    },[])

    const handleChange = (event) => {
        // Destructuring
        let { name, value } = event.target;
        setFormDetails({ ...formdetails, [name]: value });
    }

    // After Adding the course navigate to the Course Component
    const updateCourse = (event) => {
        event.preventDefault();

        CourseServices.updateCourse(formdetails);
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
                Edit Course
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
                        readOnly
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
                        readOnly
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
                        onClick={updateCourse}
                    >
                        Update Course
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




// By using the Params
