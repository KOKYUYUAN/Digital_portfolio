<style>
/* GENERAL SECTION STYLING */
section {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #0077ff; /* accent color */
  border-bottom: 2px solid #0077ff;
  display: inline-block;
  padding-bottom: 5px;
}

section p {
  font-size: 1rem;
  opacity: 0.85;
}

/* SKILLS LIST */
#skills ul {
  list-style-type: square;
  padding-left: 20px;
}

#skills li {
  font-size: 1rem;
  margin-bottom: 8px;
}

/* PROJECT CARDS */
#projects .project-card {
  flex: 1;
  min-width: 250px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fafafa;
}

#projects .project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

#projects h3 {
  font-size: 1.3rem;
  color: #0077ff;
  margin-bottom: 10px;
}

#projects p {
  font-size: 0.95rem;
  opacity: 0.85;
}

/* CONTACT LIST */
#contact ul {
  list-style: none;
  padding-left: 0;
}

#contact li {
  font-size: 1rem;
  margin-bottom: 8px;
}

#contact a {
  color: #0077ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

#contact a:hover {
  color: #005bbb;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  #projects .project-card {
    min-width: 100%;
  }
}
</style>

<!-- ABOUT ME SECTION -->
<section id="about">
  <h2>About Me</h2>
  <p>
    I am Kok Yu Yuan, an aspiring engineer passionate about <strong>Machine Learning, IoT, Embedded Systems, and Cybersecurity</strong>. I enjoy solving real-world problems by integrating intelligent systems and innovative technology. I have experience in both hardware and software projects, and I thrive in collaborative environments where I can continuously learn and grow.
  </p>
</section>

<!-- SKILLS SECTION -->
<section id="skills">
  <h2>Technical Skills</h2>
  <ul>
    <li>Programming: Python, C/C++, JavaScript, MATLAB</li>
    <li>Embedded Systems: STM32, Arduino, IoT sensor integration</li>
    <li>Machine Learning & AI: CNN, Transfer Learning, TensorFlow, PyTorch</li>
    <li>Web & Backend: Node.js, Express, MongoDB, REST API</li>
    <li>Cybersecurity: Vulnerability analysis, Anomaly detection, Ethical hacking basics</li>
  </ul>
</section>

<!-- FINAL YEAR PROJECT SECTION -->
<section id="psm">
  <h2>Final Year Project (PSM)</h2>
  <div class="project-card" style="border-left: 5px solid #0077ff;">
    <h3>Songket Motif Classification</h3>
    <p>Developing a deep learning-based image classification system using CNN and Transfer Learning to automatically identify traditional Songket motifs for cultural heritage preservation.</p>
    <br>
    <a href="/Digital_portfolio/about.html#final-year-project" style="color: #0077ff; text-decoration: none; font-weight: bold;">Read more in About Me →</a>
  </div>
</section>

<!-- PROJECT HIGHLIGHTS SECTION -->
<section id="projects">
  <h2>Selected Projects</h2>
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    
    <a href="/Digital_portfolio/projects/night_landscape_enhancement.html" class="project-card" style="text-decoration: none; color: inherit; display: block;">
      <h3>Smart Night Image Enhancement</h3>
      <p>Digital image processing pipeline to improve visibility in low-light night scenes using denoising, CLAHE, and unsharp masking.</p>
    </a>

    <a href="/Digital_portfolio/projects/tourism.html" class="project-card" style="text-decoration: none; color: inherit; display: block;">
      <h3>Tourism Anomaly Detection</h3>
      <p>Comparative study of unsupervised machine learning models (Isolation Forest, DBSCAN) to detect anomalies in tourism arrival data.</p>
    </a>

    <a href="/Digital_portfolio/projects/water-quality.html" class="project-card" style="text-decoration: none; color: inherit; display: block;">
      <h3>Water Quality Monitoring</h3>
      <p>IoT-based system for real-time monitoring of water parameters (pH, turbidity) with a cloud-based dashboard.</p>
    </a>

  </div>
</section>

<!-- CONTACT SECTION -->
<section id="contact">
  <h2>Contact Me</h2>
  <p>If you would like to collaborate or have any inquiries, feel free to reach out:</p>
  <ul>
    <li>Email: <a href="mailto:kokyuyuan@example.com">kokyuyuan@example.com</a></li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/kokyuyuan" target="_blank">linkedin.com/in/kokyuyuan</a></li>
    <li>GitHub: <a href="https://github.com/kokyuyuan" target="_blank">github.com/kokyuyuan</a></li>
  </ul>
</section>
