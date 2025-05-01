### NMIMS Notes - BTI 25'

<div class="page-container">
  <div class="page mobile-computing" data-title="Mobile Computing" data-subtitle="Exploring mobile platforms, protocols & services." data-link="https://rishikeshvadodaria.github.io/mkdocs/mobile-computing-unit%201/"></div>
  
  <div class="page computer-vision" data-title="Computer Vision" data-subtitle="Understanding how machines interpret visual data." data-link="https://rishikeshvadodaria.github.io/mkdocs/computer-vision-unit 1/"></div>
  
  <div class="page reinforcement-learrning" data-title="Reinforcement Learning" data-subtitle="Training agents via rewards in dynamic environments." data-link="https://rishikeshvadodaria.github.io/mkdocs/RL_Unit1/"></div>
  
  <div class="page rpa" data-title="Robot Processing Activites" data-subtitle="Automating repetitive tasks using software bots." data-link="https://rishikeshvadodaria.github.io/mkdocs/rpa-pad/"></div>
</div>


  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => {
        page.addEventListener('click', (e) => {
          const link = page.getAttribute('data-link');
          console.log('Clicked page with link:', link); // Debug log
          if (link) {
            window.location.href = link;
          } else {
            console.log('No link attribute found for this page');
          }
        });
      });
    });
  </script>


<details>
  <summary><strong>Scheduled Time Table</strong></summary>
  <br>
  <table border="1" cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th>Day & Date</th>
        <th>Course</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Monday, 28 April, 2025</strong></td>
        <td>Reverse Engineering and Malware Analysis</td>
        <td>2:00 pm - 5:00 pm</td>
      </tr>
      <tr>
        <td><strong>Wednesday, 30 April, 2025</strong></td>
        <td>Robotic Process Automation (Practical)</td>
        <td>10:00 am - 01:00 pm</td>
      </tr>
      <tr>
        <td><strong>Friday, 2 May, 2025</strong></td>
        <td>Information Systems Audit</td>
        <td>10:00 am - 01:00 pm</td>
      </tr>
      <tr>
        <td><strong>Saturday, 3 May, 2025</strong></td>
        <td>Computer Vision</td>
        <td>2:00 pm - 5:00 pm</td>
      </tr>
      <tr>
        <td><strong>Thursday, 8 May, 2025</strong></td>
        <td>Reinforcement Learning (Practical)</td>
        <td>10:00 am - 01:00 pm</td>
      </tr>
      <tr>
        <td><strong>Saturday, 10 May, 2025</strong></td>
        <td>Mobile Computing</td>
        <td>10:00 am - 01:00 pm</td>
      </tr>
      <tr>
        <td><strong>Monday, 12 May, 2025</strong></td>
        <td>Mobile Device Security and Forensics</td>
        <td>10:00 am - 01:00 pm</td>
      </tr>
    </tbody>
  </table>
</details>
