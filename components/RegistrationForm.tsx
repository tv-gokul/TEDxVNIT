export default function RegistrationForm() {
    return (
        <div className="registration-container">
            <form className="registration-form">
                <h2 className="form-title">Register for TEDxVNIT</h2>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
                </div>
                <button type="submit" className="primary-btn submit-btn">Submit Registration</button>
            </form>
        </div>
    );
}
