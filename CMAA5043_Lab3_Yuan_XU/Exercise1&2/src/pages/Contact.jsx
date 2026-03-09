import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Thank you for your message!');
    };

    return (
        <>
            <Header title="Contact Me" />

            <main>
                <h2>Get in Touch</h2>
                <p>Feel free to reach out to me for collaboration or inquiries.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="question">Contact Questions:</label>
                        <textarea
                            id="question"
                            name="question"
                            rows="5"
                            required
                            placeholder="How can I help you?"
                            value={formData.question}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Submit Request</button>
                </form>
            </main>

            <Footer />
        </>
    );
}

export default Contact;
