const AboutUs = () => {
  return (
    <div
      style={{
        marginLeft: '15%', /* Espacio desde la esquina izquierda */
        marginRight: '15%', /* Espacio desde la esquina derecha */
        textAlign: 'justify', /* Texto justificado */
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold',}}>Privacy Policy</h1>
      <p><strong style={{fontSize: '24px',color: '#59BDD3' }}>About this policy</strong></p>
      <p>This Privacy Policy describes how we PriceNotify collects, uses and protects the personal information that you provide through our website. By using our services, you agree to the terms of this Privacy Policy.</p>

      <h3 style={{fontSize: '24px', marginTop:10,color: '#59BDD3' }}><strong>Information gathering</strong></h3>
      <p>We collect personal information in a variety of ways, including, but not limited to:</p>
      <ul>
        <li style={{ marginTop:7 }}><strong>Registration Information:</strong> When you register for our services, we collect your name, email address, password, and other information necessary to create your account.</li>
        <li style={{ marginTop:7 }}><strong>Contact Information:</strong> If you contact us through contact forms or emails, we collect your email address and any other information provided in your message.</li>
        <li style={{ marginTop:7 }}><strong>Usage Information:</strong> We collect information about your interaction with our services, the products and services you consult.</li>
      </ul>

      <h3 style={{fontSize: '24px', marginTop:10,color: '#59BDD3' }}><strong>Use of Information</strong></h3>
      <p>We use the information collected for the following purposes:</p>
      <ul>
        <li style={{ marginTop:7 }}><strong>Improving Our Services:</strong> We use information to improve our services, understand your preferences and personalize your experience.</li>
        <li style={{ marginTop:7 }}><strong>Communication:</strong> We may use your email address to send you communications related to your account, product updates, and company news.</li>
        <li style={{ marginTop:7 }}><strong>Security:</strong> We protect your data and the integrity of our services through appropriate technical and organizational security measures.</li>
      </ul>

      <p style={{ marginTop:7 }}>We will not share your personal information with third parties, except where necessary to provide our services or when we are required by law.</p>
      
      <p style={{ marginTop:7 }}>You can access, correct or delete your personal information at any time through your account. You may also contact us to exercise your privacy rights under applicable laws.</p>
      
      <p style={{ marginTop:7 }}>We reserve the right to update this Privacy Policy at any time. We will notify you of changes through our services or by other appropriate means.</p>

      <p style={{ marginTop:7 }}>If you have any questions about this Privacy Policy or your personal information, please contact us <a href="mailto:Pricenotify@gmail.com"><strong>Pricenotify@gmail.com</strong></a>.</p>
      </div> 
  );
};

export default AboutUs;