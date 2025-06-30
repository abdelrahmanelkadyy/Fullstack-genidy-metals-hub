import React from 'react';
import banner from '../assets/about.jpg'; // replace with your image path

function AboutUs() {
  return (
    <div className="container py-5 text-light">
      {/* Banner / Header Image */}
      <div className="mb-5">
        <img src={banner} alt="About Genidy Aluminium" className="img-fluid rounded w-100" />
      </div>

      {/* Company Introduction */}
      <section className="mb-5">
        <h2 className="mb-3">Who We Are</h2>
        <p>
          Genidy Aluminium is a proudly Egyptian company specializing in high-quality aluminum products for residential,
          commercial, and industrial applications. We’ve served our clients for over 15 years with precision-engineered
          windows, doors, curtain walls, and custom aluminum designs.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-5">
        <h2 className="mb-3">Our Mission</h2>
        <p>
          To deliver durable, modern, and aesthetically refined aluminum solutions that meet the highest global standards
          and exceed our clients’ expectations.
        </p>

        <h2 className="mt-4 mb-3">Our Vision</h2>
        <p>
          To be the leading aluminum brand in the Middle East and Africa, known for innovation, quality, and long-lasting value.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h2 className="mb-3">Why Choose Genidy Aluminium?</h2>
        <ul>
          <li>✔ Over 15 years of experience in the aluminum industry</li>
          <li>✔ Custom designs tailored to your architectural vision</li>
          <li>✔ Professional manufacturing and installation teams</li>
          <li>✔ Commitment to sustainability and long-term durability</li>
        </ul>
      </section>

      {/* Optional: Add Team or Contact CTA */}
      <section className="text-center">
        <h3>Have Questions?</h3>
        <p>Visit our <a href="/contact" className="text-primary">Contact</a> page to get in touch with us.</p>
      </section>
    </div>
  );
}

export default AboutUs;
