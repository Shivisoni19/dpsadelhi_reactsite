import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ModelForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className='donation-form'>
      {/* Link to open the modal */}
      <Link to="#" onClick={() => setIsModalOpen(true)}>
        Open Modal Form
      </Link>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Close button */}
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Submit button */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelForm;
