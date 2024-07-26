import React, { useState } from 'react'
import './FeedbackForm.css' // Import CSS for styling

const FeedbackForm = () => {
  // Initialise state to handle form data

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  })

  // Change handlers for form input changes
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  // Submit handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `
    const isConfirmed = window.confirm(
      `Please confirm your details:\n\n${confirmationMessage}`
    )
    if (isConfirmed) {
      console.log('Submitting feedback:', formData)
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '',
      })
      alert('Thank you for your valuable feedback!')
    }
  }

  return (
    <>
      <nav>Tell Us What You Think</nav>

      {/* Implement onSubmit event handler on form */}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We&apos;d Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        {/* Integrate form state and onchange event */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="feedback"
          id="feedback"
          placeholder="Message"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        {/* Add rating feature */}
        <div className="rating">
          <p>Rate Us:</p>

          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              id="rating-1"
              value="1"
              onChange={handleChange}
            />{' '}
            1
          </label>

          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              id="rating-2"
              value="2"
              onChange={handleChange}
            />{' '}
            2
          </label>

          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              id="rating-3"
              value="3"
              onChange={handleChange}
            />{' '}
            3
          </label>

          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              id="rating-4"
              value="4"
              onChange={handleChange}
            />{' '}
            4
          </label>

          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              id="rating-5"
              value="5"
              onChange={handleChange}
            />{' '}
            5
          </label>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  )
}

export default FeedbackForm
