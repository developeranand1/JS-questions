

'use client';

import { useState } from 'react';
import DropMessageInput from '../_components/forms/DropMessageInput';
import { submitContactRequest } from '../services/contactService';
import { toast } from 'react-toastify';

export const DropMessage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error while typing
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!form.email.trim()) newErrors.email = "Email Address is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await submitContactRequest(form);
        
        toast.success("🎉 Message submitted successfully!");
  
        setForm({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: '',
        });
  
      } catch (error) {
        console.error("Submission failed:", error);
        toast.error("❌ Failed to send your message. Please try again.");
      }
    }
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="border-start border-3 border-success ps-2">Drop Message For News</div>
        <form onSubmit={handleSubmit} className="my-4">
          <DropMessageInput
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name *"
            error={errors.name}
          />
          <DropMessageInput
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number *"
            error={errors.phone}
          />
          <DropMessageInput
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your e-mail address *"
            error={errors.email}
          />
          <DropMessageInput
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your address *"
            error={errors.address}
          />
          <div className="mb-3">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your message"
            />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-outline-success">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};
