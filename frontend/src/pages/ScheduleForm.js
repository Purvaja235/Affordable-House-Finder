import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ScheduleForm.css';

const ScheduleForm = () => {
  const { id } = useParams(); 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(''); 
    setErrorMessage('');
    console.log("Form submission started");

    try {
      const response = await fetch('http://localhost:3000/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, date, time, propertyId: id }),
      });

      console.log("API Response received");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Parsed API Response:', result);

      if (result.success) {
        setSuccessMessage('Your request has been successfully submitted.');
        setName('');
        setPhone('');
        setDate('');
        setTime('');
      } else {
        setErrorMessage(result.message || 'An unknown error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrorMessage('An error occurred while submitting the form. Please try again.');
    } finally {
      console.log("Resetting submission state");
      setIsSubmitting(false);
    }

    // Optionally, you can navigate after a timeout or on button click
    // setTimeout(() => navigate('/'), 3000); // Navigate after 3 seconds
  };

  return (
    <div className="schedule-form">
      <h2>Schedule Viewing Form</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Preferred Date:
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Preferred Time:
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Add this button only after successful submission */}
      {successMessage && (
        <button onClick={() => navigate('/')}>
          Back to Home
        </button>
      )}
    </div>
  );
};

export default ScheduleForm;
