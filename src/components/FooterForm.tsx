import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FooterForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handlePhoneChange = (value: string, country: any) => {
    setPhoneNumber(value);
    setCountryCode(country.dialCode);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneNumber.length <= countryCode.length) {
      alert('Please enter a valid phone number.');
      return;
    }

    // Form submission logic here
  };

  return (
    <div className={styles.formSection}>
      <h2 className={styles.header}>Contact Us</h2>
      <p>Contact us regarding any concerns or inquiries.</p>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroupHorizontal}>
          <div className={`${styles.formGroup} ${styles.names}`}>
            <label>First Name <span className={styles.required}>*</span></label>
            <input type="text" placeholder="First Name" name="firstName" required />
          </div>
          <div className={`${styles.formGroup} ${styles.names}`}>
            <label>Last Name <span className={styles.required}>*</span></label>
            <input type="text" placeholder="Last Name" name="lastName" required />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Email <span className={styles.required}>*</span></label>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number <span className={styles.required}>*</span></label>
          <PhoneInput
            country={'us'}
            enableAreaCodes={true}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false,
            }}
            inputStyle={{ width: '100%' }}
            containerClass={styles.phoneInputContainer}
            buttonClass={styles.phoneInputButton}
            containerStyle={{ borderRadius: '5px', border: '1px solid #ccc' }}
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Company</label>
          <input type="text" placeholder="Company" name="company" />
        </div>
        <div className={styles.formGroup}>
          <label>Message <span className={styles.required}>*</span></label>
          <textarea placeholder="Message" name="message" rows={4} required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit Inquiry</button>
      </form>
    </div>
  );
};

export default FooterForm;
