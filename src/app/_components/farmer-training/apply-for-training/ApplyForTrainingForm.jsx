"use client"
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";

function ApplyForTrainingForm() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Start: ${startDate}\nEnd: ${endDate}`);
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <select className="form-select form-control" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <select className="form-select form-control" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-8">
                    <label className="form-label">Start & End Date</label>
                    <br />
                    <DatePicker
                    className="form-control w-100"
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(dates) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                        }}
                        isClearable={true}
                        placeholderText="Select date range"
                        
                    />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>

          

        </form>
    </>
}

export default ApplyForTrainingForm