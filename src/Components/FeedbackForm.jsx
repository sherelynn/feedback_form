import React, { useState } from 'react'
import './FeedbackForm.css' // Import CSS for styling

const FeedbackForm = () => {
  // Initialise state to handle form data

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
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

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  )
}

export default FeedbackForm
