import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Footer: React.FC = () => {
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
    <div className={styles.footerContainer}>
      <div className={styles.contactSection}>
      <h2 className={styles.header}>We'd love to hear from you!</h2>
        <p>Whether you have a question about our services, want to discuss a new project, or just want to say hello, our team is here to help. Fill out the form below, and we'll get back to you as soon as possible.</p>
        <br />
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <p>Chat with us: <a href="mailto:TheHomeDesignCenterOrlando@gmail.com">TheHomeDesignCenterOrlando@gmail.com</a></p>
        </div>
        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <p>Call us: +1 (201) 555-0123</p>
        </div>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <p>Locations we service:</p>
        </div>
        <div className={styles.locations}>
          <ul>
            <li>Orlando</li>
            <li>Poinciana</li>
            <li>Apopka</li>
            <li>Winter Park</li>
            <li>Windermere</li>
            <li>Winter Garden</li>
            <li>Cocoa</li>
            <li>Melbourne</li>
          </ul>
          <ul>
            <li>Casselberry</li>
            <li>Belle Isle</li>
            <li>Kissimmee</li>
            <li>Clermont</li>
            <li>Oviedo</li>
            <li>Baldwin Park</li>
            <li>Isleworth</li>
          </ul>
        </div>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebook className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
        </div>
        <p className={styles.footerText}>© 2024 The Home Design Center. All rights reserved.<br />Design by CodedByLeo</p>
      </div>
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
    </div>
  );
};

export default Footer;
