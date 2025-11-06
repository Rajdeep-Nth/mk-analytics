// Modern Application State
const appState = {
  darkMode: false,
  mobileMenuOpen: false,
  currentRecommendationTab: 'institutions'
};

// Data for the application
const projectData = {


  phases: [
    {
      number: 1,
      name: "Preliminary Research",
      icon: "search",
      color: "#3B82F6",
      description: "This phase involves gathering qualitative data and identifying research gaps to form a solid foundation for the quantitative survey.",
      steps: [
        {
          id: "1.1",
          title: "Qualitative Data Collection",
          description: "Conduct in-depth interviews with students using structured questionnaire",
          pointers: [
            "Use the 10 interview questions to guide conversations",
            "Interview 15-20 students across different disciplines",
            "Record sessions with consent for accurate transcription",
            "Aim for 30-45 minutes per interview",
            "Ensure diverse sample: different AI adoption levels"
          ],
          tools: ["Recording device", "Interview guide", "Consent forms"],
          deliverable: "Raw interview recordings and notes"
        },
        {
          id: "1.2",
          title: "Interview Transcription",
          description: "Convert audio interviews into text format for analysis",
          pointers: [
            "Use intelligent verbatim transcription",
            "Capture key quotes and emphases",
            "Remove fillers but maintain meaning",
            "Use AI tools for efficiency then human review",
            "Document metadata for each interview"
          ],
          tools: ["Transcription software", "Quality review process"],
          deliverable: "Transcribed interview documents"
        },
        {
          id: "1.3",
          title: "Research Gap Analysis",
          description: "Analyze transcripts to identify patterns and knowledge gaps",
          pointers: [
            "Use thematic analysis to code responses",
            "Identify common themes and barriers",
            "Look for contradictions and unexplored areas",
            "Create student personas (Heavy, Moderate, Light users)",
            "Map known vs unknown about AI usage"
          ],
          tools: ["Qualitative analysis software", "Coding framework"],
          deliverable: "Research gap analysis report"
        },
        {
          id: "1.4",
          title: "Problem Statement Formation",
          description: "Define specific research questions for quantitative survey",
          pointers: [
            "Formulate clear, measurable objectives",
            "Define testable hypotheses",
            "Identify key variables to measure",
            "Ensure alignment with planned analyses",
            "Get stakeholder feedback"
          ],
          tools: ["Research planning framework"],
          deliverable: "Formalized problem statement"
        }
      ]
    },
    {
      number: 2,
      name: "Survey & Data Collection",
      icon: "clipboard-list",
      color: "#8B5CF6",
      description: "This phase focuses on developing and distributing the survey to collect the necessary data for analysis.",
      steps: [
        {
          id: "2.1",
          title: "Questionnaire Development",
          description: "Create structured survey based on qualitative insights",
          pointers: [
            "Structure: Demographics → Usage → Perceptions → Preferences",
            "Mix question types: Likert, multiple choice, rankings",
            "Include perceptual ratings for different AI tools",
            "Keep survey 10-15 minutes (30-40 questions max)",
            "Pre-test with 10-15 students"
          ],
          tools: ["Survey platform", "Pilot testing group"],
          deliverable: "Finalized survey instrument"
        },
        {
          id: "2.2",
          title: "Survey Distribution",
          description: "Deploy survey to target student population",
          pointers: [
            "Target 200-300 responses minimum",
            "Use multiple channels: email, WhatsApp, portals",
            "Stratify by year and discipline",
            "Offer incentives if possible",
            "Monitor response rate daily"
          ],
          tools: ["Distribution channels", "Tracking system"],
          deliverable: "Survey deployment"
        },
        {
          id: "2.3",
          title: "Data Validation",
          description: "Collect responses and ensure data quality",
          pointers: [
            "Set up validation rules",
            "Remove incomplete responses",
            "Check for low-effort patterns",
            "Verify demographic distribution",
            "Export clean dataset"
          ],
          tools: ["Statistical software", "Validation criteria"],
          deliverable: "Clean validated dataset"
        }
      ]
    },
    {
      number: 3,
      name: "Advanced Analytics",
      icon: "chart-line",
      color: "#EC4899",
      description: "In this phase, we will use advanced statistical techniques to analyze the collected data and uncover meaningful insights.",
      steps: [
        {
          id: "3.1",
          title: "Clustering Analysis",
          description: "Segment students into distinct groups by AI usage patterns",
          pointers: [
            "Use variables: frequency, tools, time, purposes",
            "Try K-means, hierarchical, DBSCAN methods",
            "Determine optimal clusters (typically 3-5)",
            "Profile each cluster thoroughly",
            "Name clusters meaningfully"
          ],
          tools: ["Python scikit-learn", "R cluster", "Tableau"],
          deliverable: "Student segmentation with profiles"
        },
        {
          id: "3.2",
          title: "Discriminant Analysis",
          description: "Identify variables that best distinguish between segments",
          pointers: [
            "Use clusters as dependent variable",
            "Test demographics, usage, perceptions as predictors",
            "Calculate discriminant functions",
            "Identify most important predictors",
            "Test classification accuracy"
          ],
          tools: ["SPSS", "R MASS package", "Python LDA"],
          deliverable: "Classification results and predictors"
        },
        {
          id: "3.3",
          title: "Perceptual Mapping",
          description: "Visualize how students perceive and prefer AI tools",
          pointers: [
            "Map tools on key dimensions",
            "Apply MDS or PCA for 2D maps",
            "Overlay student preferences",
            "Identify ideal points",
            "Spot market gaps"
          ],
          tools: ["R PREFMAP", "Python MDS", "XLSTAT"],
          deliverable: "Perceptual and preference maps"
        }
      ]
    },
    {
      number: 4,
      name: "Insights & Reporting",
      icon: "lightbulb",
      color: "#10B981",
      description: "The final phase involves visualizing the findings, generating actionable insights, and developing strategic recommendations.",
      steps: [
        {
          id: "4.1",
          title: "Data Visualization",
          description: "Create comprehensive visual dashboard of findings",
          pointers: [
            "Design with visual hierarchy",
            "Use appropriate chart types",
            "Create interactive dashboards",
            "Maintain color consistency",
            "Ensure accessibility"
          ],
          tools: ["Tableau", "Power BI", "Python Plotly"],
          deliverable: "Interactive analytics dashboard"
        },
        {
          id: "4.2",
          title: "Insight Generation",
          description: "Translate statistical findings into business insights",
          pointers: [
            "Analyze needs for each segment",
            "Identify drivers and barriers",
            "Quantify key findings",
            "Connect to broader trends",
            "Identify surprising patterns"
          ],
          tools: ["Analysis framework"],
          deliverable: "Comprehensive insights report"
        },
        {
          id: "4.3",
          title: "Recommendations",
          description: "Develop actionable recommendations",
          pointers: [
            "Create segment-specific strategies",
            "Advise institutions on policies",
            "Guide tool developers",
            "Prioritize by impact and feasibility",
            "Define success metrics"
          ],
          tools: ["Strategic planning framework"],
          deliverable: "Strategic recommendations"
        }
      ]
    }
  ],
  interviewQuestions: [
    "Do you use AI tools (like ChatGPT, CoPilot, Gemini) in academic work and how often?",
    "Do you use only one tool or multiple?",
    "What specific features or functionalities is most useful to you?",
    "Can you tell us about different tools and reasons for using each?",
    "Do you face challenges with a particular AI tool?",
    "How would you say your usage has changed over time?",
    "Will you change preferences based on functionalities or use whatever is handy?",
    "Is there some factor that stops you from using an AI tool?",
    "Would you prefer customized agents over generic tools like ChatGPT?",
    "What learning outcomes have these AI tools helped you achieve?"
  ]
};

const segments = [
  {
    name: 'Power Users',
    percentage: '25%',
    color: '#3B82F6',
    icon: 'fa-rocket',
    characteristics: [
      'Daily usage, multiple tools (3-5)',
      'High technical comfort (8-9/10)',
      'Diverse use cases',
      'Early adopters'
    ]
  },
  {
    name: 'Pragmatic Adopters',
    percentage: '45%',
    color: '#8B5CF6',
    icon: 'fa-balance-scale',
    characteristics: [
      'Regular usage (2-3x/week)',
      'Moderate comfort (5-7/10)',
      'Task-specific usage',
      'Value-driven adoption'
    ]
  },
  {
    name: 'Cautious Users',
    percentage: '20%',
    color: '#EC4899',
    icon: 'fa-shield-alt',
    characteristics: [
      'Occasional usage',
      'Low-moderate comfort (3-5/10)',
      'Trust concerns',
      'Verification-focused'
    ]
  },
  {
    name: 'Non-Adopters',
    percentage: '10%',
    color: '#EF4444',
    icon: 'fa-times-circle',
    characteristics: [
      'Rarely/never use',
      'Ethical concerns',
      'Prefer traditional methods',
      'Awareness gap'
    ]
  }
];

const surveyData = [
  { number: 1, title: 'Demographics', count: '4-5', examples: ['Year of study', 'Academic discipline', 'Technical proficiency'], icon: 'fa-user' },
  { number: 2, title: 'AI Tool Usage', count: '8-10', examples: ['Usage frequency', 'Tools used', 'Time spent'], icon: 'fa-tools' },
  { number: 3, title: 'Tool Perceptions', count: '12-15', examples: ['Ease of use', 'Usefulness', 'Trust'], icon: 'fa-star' },
  { number: 4, title: 'Preferences & Barriers', count: '8-10', examples: ['Preferred features', 'Challenges', 'Barriers'], icon: 'fa-chart-bar' },
  { number: 5, title: 'Outcomes & Impact', count: '6-8', examples: ['Learning improvements', 'Time savings', 'Skill development'], icon: 'fa-trophy' }
];

const toolsData = [
  { name: 'ChatGPT', ease: 9, features: 8, trust: 7, bestFor: 'General purpose, writing, brainstorming' },
  { name: 'GitHub Copilot', ease: 7, features: 9, trust: 8, bestFor: 'Code generation, programming' },
  { name: 'Gemini', ease: 8, features: 7, trust: 6, bestFor: 'General purpose, research' },
  { name: 'Claude', ease: 8, features: 8, trust: 8, bestFor: 'Analysis, detailed writing' },
  { name: 'Grammarly', ease: 9, features: 6, trust: 8, bestFor: 'Writing improvement, editing' }
];

const recommendations = {
  institutions: [
    { title: 'AI Literacy Program', desc: 'Develop comprehensive training addressing confidence gaps', difficulty: 'medium', impact: 5 },
    { title: 'Clear Usage Policies', desc: 'Establish guidelines addressing academic integrity concerns', difficulty: 'high', impact: 5 },
    { title: 'Support Infrastructure', desc: 'Create help desk and resources for effective tool use', difficulty: 'medium', impact: 4 }
  ],
  developers: [
    { title: 'Education-Specific Features', desc: 'Develop tools tailored to academic use cases', difficulty: 'high', impact: 5 },
    { title: 'Privacy Assurance', desc: 'Address privacy concerns with transparency', difficulty: 'medium', impact: 5 },
    { title: 'Institutional Partnerships', desc: 'Work with educational institutions on licensing', difficulty: 'medium', impact: 4 }
  ],
  students: [
    { title: 'Ethical Use Framework', desc: 'Learn guidelines for responsible AI assistance', difficulty: 'low', impact: 4 },
    { title: 'Best Practices Workshop', desc: 'Master prompt engineering and tool selection', difficulty: 'low', impact: 5 },
    { title: 'Critical Thinking Skills', desc: 'Verify outputs and maintain deep learning', difficulty: 'medium', impact: 4 }
  ]
};

const oldSampleResponses = {
  "Power Users": [
    "I use AI tools daily, sometimes 10+ times a day. ChatGPT is my go-to, but I also use Copilot for coding and Grammarly for writing.",
    "Multiple tools - each has its strengths. ChatGPT for brainstorming, Claude for complex analysis, Copilot for debugging.",
    "The ability to iterate quickly and get instant feedback. It's like having a tutor available 24/7."
  ],
  "Pragmatic Adopters": [
    "I use ChatGPT 2-3 times per week, mainly for understanding complex topics and checking my work.",
    "Mostly ChatGPT. I tried Gemini once but didn't see much difference.",
    "It helps me save time on research and gives me different perspectives on problems."
  ],
  "Cautious Users": [
    "I've used ChatGPT a few times, but I'm not sure if I should rely on it too much.",
    "Just ChatGPT, and only when I'm really stuck.",
    "I worry about accuracy and whether using it is considered cheating."
  ],
  "Non-Adopters": [
    "I haven't really used AI tools. I prefer traditional learning methods.",
    "I'm concerned about privacy and don't want my data being used to train these models.",
    "I feel like using AI would prevent me from truly understanding the material."
  ]
};

// Initialize modern app
function init() {
  setupDarkMode();
  setupSmoothScroll();
  renderPhasesTimeline();
  renderSegments();
  renderSurvey();
  renderToolsTable();
  renderRecommendations();
  initializeCarousel();
  initializeCharts();
  setupNavigationHighlight();
  setupRecommendationTabs();
  setupPhaseSearch();
  setupScrollToTop();
  setupContactForm();
}

// Dark mode functionality
function setupDarkMode() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
    appState.darkMode = true;
  }
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  appState.darkMode = !appState.darkMode;
  const icon = document.getElementById('darkModeIcon');
  if (icon) {
    icon.className = appState.darkMode ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
    appState.mobileMenuOpen = !appState.mobileMenuOpen;
  }
}

// Smooth scroll setup
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const menu = document.getElementById('mobileMenu');
        if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
      }
    });
  });
}

// Navigation highlight on scroll
function setupNavigationHighlight() {
  const sections = ['overview', 'phases', 'analysis', 'insights', 'survey'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = sectionId;
        }
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Render phases timeline
function renderPhasesTimeline() {
  console.log(projectData.phases);
  const container = document.getElementById('phasesTimeline');
  if (!container) return;
  
  const phasesHTML = projectData.phases.map((phase, idx) => `
    <div class="relative pl-16 pb-8 phase-timeline-item">
      <div class="absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full" style="background-color: ${phase.color};">
        <i class="fas fa-${phase.icon} text-2xl text-white"></i>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer" onclick="togglePhaseSteps(${idx})">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Phase ${phase.number}: ${phase.name}</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">${phase.steps.length} steps</span>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-3">${phase.description}</p>
        <div id="phase-steps-${idx}" class="hidden mt-4 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          ${phase.steps.map(step => `
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 dark:text-white">${step.id}: ${step.title}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">${step.description}</p>
              <ul class="list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1">
                ${step.pointers.map(p => `<li>${p}</li>`).join('')}
              </ul>
              <div class="mt-2 text-xs">
                <span class="font-semibold">Tools:</span> ${step.tools.join(', ')}
              </div>
              <div class="mt-1 text-xs">
                <span class="font-semibold">Deliverable:</span> ${step.deliverable}
              </div>
              <button class="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 p-1 rounded" onclick="copyToClipboard(this)">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          `).join('')}
        </div>
        <button class="mt-3 text-sm font-medium" style="color: ${phase.color};" onclick="event.stopPropagation(); togglePhaseSteps(${idx})">
          <span id="phase-toggle-${idx}">Show steps <i class="fas fa-chevron-down ml-1"></i></span>
        </button>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = phasesHTML;
}

function togglePhaseSteps(idx) {
  const stepsDiv = document.getElementById(`phase-steps-${idx}`);
  const toggleBtn = document.getElementById(`phase-toggle-${idx}`);
  if (stepsDiv && toggleBtn) {
    stepsDiv.classList.toggle('hidden');
    const isHidden = stepsDiv.classList.contains('hidden');
    toggleBtn.innerHTML = isHidden ? 'Show steps <i class="fas fa-chevron-down ml-1"></i>' : 'Hide steps <i class="fas fa-chevron-up ml-1"></i>';
  }
}

// Render segments
function renderSegments() {
  const container = document.getElementById('segmentsGrid');
  if (!container) return;
  
  container.innerHTML = segments.map(segment => `
    <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1" style="border-left: 4px solid ${segment.color};">
      <div class="flex items-center justify-between mb-4">
        <i class="fas ${segment.icon} text-3xl" style="color: ${segment.color};"></i>
        <span class="text-3xl font-bold" style="color: ${segment.color};">${segment.percentage}</span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">${segment.name}</h3>
      <ul class="space-y-2">
        ${segment.characteristics.map(char => `
          <li class="text-sm text-gray-600 dark:text-gray-400 flex items-start">
            <i class="fas fa-circle text-xs mt-1 mr-2" style="color: ${segment.color};"></i>
            <span>${char}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// Render survey structure
function renderSurvey() {
  const container = document.getElementById('surveyStructure');
  if (!container) return;
  
  container.innerHTML = surveyData.map(section => `
    <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
      <div class="flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg mb-4">
        <i class="fas ${section.icon} text-2xl text-teal-600 dark:text-teal-400"></i>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Section ${section.number}</div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">${section.title}</h3>
      <div class="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3">${section.count}</div>
      <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
        ${section.examples.map(ex => `<div>• ${ex}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render tools table
function renderToolsTable() {
  const tbody = document.getElementById('toolsTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = toolsData.map((tool, idx) => `
    <tr class="${idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}">
      <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">${tool.name}</td>
      <td class="px-6 py-4 text-center">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(tool.ease)}">
          ${tool.ease}/10
        </span>
      </td>
      <td class="px-6 py-4 text-center">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(tool.features)}">
          ${tool.features}/10
        </span>
      </td>
      <td class="px-6 py-4 text-center">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(tool.trust)}">
          ${tool.trust}/10
        </span>
      </td>
      <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">${tool.bestFor}</td>
    </tr>
  `).join('');
}

function getRatingColor(rating) {
  if (rating >= 8) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  if (rating >= 6) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
  return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
}

// Setup recommendation tabs
function setupRecommendationTabs() {
  document.querySelectorAll('.rec-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.rec-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const target = this.getAttribute('data-target');
      renderRecommendations(target);
    });
  });
  renderRecommendations('institutions');
}

// Render recommendations
function renderRecommendations(type = 'institutions') {
  const container = document.getElementById('recommendationsContent');
  if (!container) return;
  
  const recs = recommendations[type];
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${recs.map(rec => `
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">${rec.title}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${rec.desc}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium px-2 py-1 rounded ${rec.difficulty === 'low' ? 'bg-green-100 text-green-800' : rec.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}">
              ${rec.difficulty.toUpperCase()}
            </span>
            <div class="flex items-center">
              ${Array(rec.impact).fill('<i class="fas fa-star text-yellow-500 text-xs"></i>').join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Old navigation function
function oldNavigateTo(section) {
  // Old function - not used
}

// Initialize Swiper Carousel
function initializeCarousel() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// Charts
function initializeCharts() {
  createPerceptualMapChart();
  createSegmentationChart();
  createPredictorsChart();
}

function createPerceptualMapChart() {
  const ctx = document.getElementById('perceptualMapChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        { label: 'ChatGPT', data: [{x: 9, y: 8}], backgroundColor: '#3B82F6', pointRadius: 10 },
        { label: 'GitHub Copilot', data: [{x: 7, y: 9}], backgroundColor: '#8B5CF6', pointRadius: 10 },
        { label: 'Gemini', data: [{x: 8, y: 7}], backgroundColor: '#EC4899', pointRadius: 10 },
        { label: 'Claude', data: [{x: 8, y: 8}], backgroundColor: '#10B981', pointRadius: 10 },
        { label: 'Grammarly', data: [{x: 9, y: 6}], backgroundColor: '#F59E0B', pointRadius: 10 },
        { label: 'Ideal Point', data: [{x: 8.5, y: 8.5}], backgroundColor: '#EF4444', pointRadius: 15, pointStyle: 'star' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: false }
      },
      scales: {
        x: { title: { display: true, text: 'Ease of Use →' }, min: 5, max: 10 },
        y: { title: { display: true, text: 'Feature Power →' }, min: 5, max: 10 }
      }
    }
  });
}

function createSegmentationChart() {
  const ctx = document.getElementById('segmentationChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Technical Comfort', 'Usage Frequency', 'Tool Diversity', 'Trust Level', 'Engagement'],
      datasets: [
        { label: 'Power Users', data: [9, 10, 9, 7, 10], backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3B82F6', borderWidth: 2 },
        { label: 'Pragmatic', data: [6, 6, 5, 6, 6], backgroundColor: 'rgba(139, 92, 246, 0.2)', borderColor: '#8B5CF6', borderWidth: 2 },
        { label: 'Cautious', data: [4, 3, 2, 4, 3], backgroundColor: 'rgba(236, 72, 153, 0.2)', borderColor: '#EC4899', borderWidth: 2 },
        { label: 'Non-Adopters', data: [2, 1, 1, 3, 1], backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: '#EF4444', borderWidth: 2 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: { r: { beginAtZero: true, max: 10 } }
    }
  });
}

function createPredictorsChart() {
  const ctx = document.getElementById('predictorsChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Technical Comfort', 'Academic Discipline', 'Usage Frequency', 'Tool Diversity', 'Year of Study'],
      datasets: [{
        label: 'Variable Importance (β coefficient)',
        data: [0.85, 0.72, 0.65, 0.58, 0.42],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { beginAtZero: true, max: 1, title: { display: true, text: 'Importance Score' } }
      }
    }
  });
}



function downloadReport() {
  const link = document.createElement('a');
  link.href = 'Marketing-Analytics-Project-Guide.pdf';
  link.download = 'Marketing-Analytics-Project-Guide.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function setupPhaseSearch() {
  const searchInput = document.getElementById('phaseSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allPhases = document.querySelectorAll('.phase-timeline-item');

    allPhases.forEach(phase => {
      const phaseName = phase.querySelector('h3').textContent.toLowerCase();
      const phaseSteps = phase.querySelectorAll('.bg-gray-50');
      let phaseVisible = false;

      if (phaseName.includes(searchTerm)) {
        phaseVisible = true;
      }

      phaseSteps.forEach(step => {
        const stepText = step.textContent.toLowerCase();
        if (stepText.includes(searchTerm)) {
          step.style.display = 'block';
          phaseVisible = true;
        } else {
          step.style.display = 'none';
        }
      });

      if (phaseVisible) {
        phase.style.display = 'block';
      } else {
        phase.style.display = 'none';
      }
    });
  });
}

function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (!scrollToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function copyToClipboard(button) {
  const codeBlock = button.parentElement;
  const textToCopy = codeBlock.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    button.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2000);
  });
}

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).catch(console.error);
  } else {
    alert('Sharing is not supported on this browser.');
  }
}

function setupContactForm() {
  const contactForm = document.querySelector('#contact form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}