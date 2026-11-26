// ==========================================================================
// EDIT TYPING EFFECT PHRASES HERE
// ==========================================================================
const typingPhrases = [
  "SQL & Database Querying",
  "Python Data Wrangling & EDA",
  "Power BI & Tableau Dashboards",
  "Excel Modeling & Automation"
];

// ==========================================================================
// EDIT TECHNICAL SKILLS HERE
// ==========================================================================
const technicalSkills = [
  {
    name: "Excel",
    level: "Advanced",
    percent: 92,
    description: "Pivot Tables, XLOOKUP, Power Query, dynamic modeling, and executive summary sheets."
  },
  {
    name: "SQL",
    level: "Advanced",
    percent: 90,
    description: "CTEs, window functions, complex joins, aggregations, and data validation queries."
  },
  {
    name: "Python",
    level: "Proficient",
    percent: 86,
    description: "pandas, NumPy, Matplotlib/Seaborn, automated cleaning scripts, and statistical EDA."
  },
  {
    name: "Power BI",
    level: "Advanced",
    percent: 89,
    description: "Star-schema modeling, DAX measures, drill-through views, and interactive KPI reporting."
  },
  {
    name: "Tableau",
    level: "Proficient",
    percent: 82,
    description: "Calculated fields, LOD expressions, trend exploration, and clean visual storytelling."
  },
  {
    name: "Data Cleaning",
    level: "Advanced",
    percent: 91,
    description: "Handling nulls, deduplication, schema standardization, outlier checks, and ETL prep."
  },
  {
    name: "Data Visualization",
    level: "Advanced",
    percent: 88,
    description: "Chart selection, visual hierarchy, clutter reduction, and stakeholder-ready clarity."
  },
  {
    name: "EDA",
    level: "Advanced",
    percent: 87,
    description: "Distribution checks, cohort & funnel analysis, correlation screening, and hypothesis testing."
  }
];

// ==========================================================================
// EDIT YOUR PROJECT DETAILS HERE (7 Projects)
// Easy to edit, reorder, duplicate, or remove items in this array.
// ==========================================================================
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Sales & Cohort Retention Analysis",
    image: "images/project1.png",
    tools: ["SQL", "Power BI", "Excel"],
    description:
      "Analyzed multi-year order transactions to track monthly revenue trends, repeat purchase rates, and customer retention cohorts across product categories.",
    keyInsight:
      "Identified a 24% drop-off after the second order in low-margin accessories; targeted email bundles lifted 90-day repeat orders by 11%.",
    detailsList: [
      "Built SQL cohort tables using CTEs and date-diff window functions on 250K+ order rows.",
      "Designed an interactive Power BI dashboard tracking AOV, repeat buyer share, and margin by category.",
      "Highlighted high-retention customer segments for targeted loyalty campaigns."
    ],
    githubUrl: "https://github.com/your-username/ecommerce-cohort-analysis",
    demoUrl: "https://app.powerbi.com/view?r=your-demo-link-1"
  },
  {
    id: 2,
    title: "Customer Churn Prediction & EDA",
    image: "images/project2.png",
    tools: ["Python", "SQL", "Data Cleaning"],
    description:
      "Cleaned subscription billing data, engineered tenure and usage features, and ran exploratory data analysis to uncover drivers of customer churn.",
    keyInsight:
      "Users with fewer than 3 feature activations in their first 14 days churned at 3.1x the baseline rate.",
    detailsList: [
      "Standardized missing billing records and duplicate account logs using pandas and SQL checks.",
      "Performed distribution, correlation, and survival/tenure comparisons across plan tiers.",
      "Recommended an early onboarding checklist targeting week-one activation milestones."
    ],
    githubUrl: "https://github.com/your-username/customer-churn-eda",
    demoUrl: "https://nbviewer.org/github/your-username/customer-churn-eda/blob/main/analysis.ipynb"
  },
  {
    id: 3,
    title: "Executive Financial & Expense Tracker",
    image: "images/project3.png",
    tools: ["Excel", "Power BI"],
    description:
      "Created an automated budget-vs-actuals workbook and executive dashboard comparing departmental spend, variances, and cash runway.",
    keyInsight:
      "Uncovered $48K in annualized software & vendor overlap across departments that could be consolidated without impacting output.",
    detailsList: [
      "Used Power Query to combine monthly CSV exports and automate variance calculations.",
      "Built dynamic variance alerts highlighting departments exceeding budget thresholds by >10%.",
      "Delivered a one-page leadership view for monthly finance reviews."
    ],
    githubUrl: "https://github.com/your-username/financial-variance-tracker",
    demoUrl: "https://github.com/your-username/financial-variance-tracker#readme"
  },
  {
    id: 4,
    title: "Marketing Funnel & Campaign ROI Dashboard",
    image: "images/project4.png",
    tools: ["Tableau", "SQL", "EDA"],
    description:
      "Evaluated multi-channel campaign performance from impression and click to qualified lead and closed conversion.",
    keyInsight:
      "Paid search drove lower volume than paid social but delivered 2.4x higher lead-to-customer conversion and 38% lower CAC.",
    detailsList: [
      "Joined ad spend tables with CRM conversion events in SQL to calculate true channel CAC and ROAS.",
      "Built a Tableau funnel dashboard with channel, region, and campaign filters.",
      "Reallocated budget toward high-converting intent keywords and top-performing creatives."
    ],
    githubUrl: "https://github.com/your-username/marketing-funnel-tableau",
    demoUrl: "https://public.tableau.com/app/profile/your-profile"
  },
  {
    id: 5,
    title: "Supply Chain Delivery & Inventory Optimization",
    image: "images/project5.png",
    tools: ["SQL", "Python", "Excel"],
    description:
      "Investigated supplier lead times, stockout frequency, and regional warehouse delays to improve order fulfillment reliability.",
    keyInsight:
      "Two regional hubs accounted for 62% of late shipments due to peak-day dispatch bottlenecks; staggering batch picks cut delays.",
    detailsList: [
      "Audited shipment timestamps and outlier transit times using Python and SQL.",
      "Segmented SKUs by demand velocity and lead-time variability to flag reorder risk.",
      "Provided a simple reorder-point model in Excel for operations planners."
    ],
    githubUrl: "https://github.com/your-username/supply-chain-analytics",
    demoUrl: "https://github.com/your-username/supply-chain-analytics#readme"
  },
  {
    id: 6,
    title: "Healthcare Operations & Readmission EDA",
    image: "images/project6.png",
    tools: ["Python", "Data Cleaning", "Tableau"],
    description:
      "Cleaned clinical visit records and explored length-of-stay patterns, follow-up rates, and 30-day readmission trends.",
    keyInsight:
      "Patients scheduled for a follow-up visit within 7 days of discharge had a noticeably lower readmission rate across key cohorts.",
    detailsList: [
      "Handled inconsistent date formats, category labels, and null fields during preprocessing.",
      "Visualized length-of-stay distributions and subgroup readmission rates in Tableau.",
      "Summarized findings in a clear clinical operations brief with follow-up scheduling insights."
    ],
    githubUrl: "https://github.com/your-username/healthcare-readmission-eda",
    demoUrl: "https://public.tableau.com/app/profile/your-profile"
  },
  {
    id: 7,
    title: "SaaS Product Usage & Feature Adoption Study",
    image: "images/project7.png",
    tools: ["SQL", "Power BI", "EDA"],
    description:
      "Tracked daily/weekly active users, core workflow adoption, and account expansion signals across SMB and mid-market accounts.",
    keyInsight:
      "Accounts adopting 3+ core collaboration features within 30 days showed 2.7x higher net dollar expansion at renewal.",
    detailsList: [
      "Aggregated raw product telemetry events in SQL to compute DAU/WAU/MAU stickiness ratios.",
      "Built a Power BI feature adoption matrix to spot high-value power users for upsell outreach.",
      "Identified friction points in secondary workflows for product team prioritization."
    ],
    githubUrl: "https://github.com/your-username/saas-product-adoption",
    demoUrl: "https://app.powerbi.com/view?r=your-demo-link-7"
  }
];

// ==========================================================================
// IMAGE FALLBACK HANDLER (Keeps layout clean if an image file isn't added yet)
// ==========================================================================
function handleImageFallback(imgElement, badgeText, labelText) {
  if (imgElement.dataset.fallbackApplied) return;
  imgElement.dataset.fallbackApplied = "true";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b1733"/>
          <stop offset="100%" stop-color="#06283d"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#g)"/>
      <circle cx="400" cy="195" r="56" fill="#06b6d4" fill-opacity="0.2" stroke="#22d3ee" stroke-width="2"/>
      <text x="400" y="206" text-anchor="middle" fill="#67e8f9" font-family="monospace" font-size="28" font-weight="bold">${badgeText}</text>
      <text x="400" y="285" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="20" font-weight="600">${labelText}</text>
      <text x="400" y="318" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="14">Add your file to the images/ folder to display here</text>
    </svg>
  `.trim();

  imgElement.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// ==========================================================================
// RENDER TECHNICAL SKILLS
// ==========================================================================
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = technicalSkills
    .map(
      (skill) => `
      <article class="glass card skill-card" data-reveal>
        <div class="skill-header">
          <h3 class="skill-name">${skill.name}</h3>
          <span class="skill-level-text">${skill.level}</span>
        </div>
        <p class="skill-desc">${skill.description}</p>
        <div class="skill-bar-track" aria-label="${skill.name} proficiency ${skill.percent}%">
          <div class="skill-bar-fill" style="width: ${skill.percent}%;"></div>
        </div>
      </article>
    `
    )
    .join("");
}

// ==========================================================================
// RENDER PROJECTS & FILTERING
// ==========================================================================
function renderProjects(filter = "All") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.tools.some((t) => t.toLowerCase() === filter.toLowerCase())
        );

  grid.innerHTML = filtered
    .map((project, idx) => {
      const toolBadges = project.tools
        .map((tool) => `<span class="tool-tag">${tool}</span>`)
        .join("");

      return `
        <article class="glass card project-card" data-reveal>
          <div class="project-thumb-wrap">
            <img
              src="${project.image}"
              alt="${project.title} screenshot"
              class="project-thumb"
              onerror="handleImageFallback(this, 'P${project.id || idx + 1}', '${project.image}')"
            />
          </div>
          <div class="project-content">
            <div class="project-tools">${toolBadges}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-insight">
              <strong>Key Insight</strong>
              <span>${project.keyInsight}</span>
            </div>
            <div class="project-links">
              <button type="button" class="project-link-btn primary-link" onclick="openProjectModal(${project.id})">
                Details
              </button>
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                GitHub
              </a>
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveals();
}

function setupProjectFilters() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selectedFilter = btn.dataset.filter || "All";
    renderProjects(selectedFilter);
  });
}

// ==========================================================================
// PROJECT MODAL
// ==========================================================================
function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  const modal = document.getElementById("project-modal");
  if (!project || !modal) return;

  const modalImg = document.getElementById("modal-img");
  modalImg.removeAttribute("data-fallback-applied");
  modalImg.src = project.image;
  modalImg.alt = `${project.title} screenshot`;
  modalImg.onerror = () =>
    handleImageFallback(modalImg, `P${project.id}`, project.image);

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.description;

  document.getElementById("modal-tags").innerHTML = project.tools
    .map((t) => `<span class="tool-tag">${t}</span>`)
    .join("");

  const bullets = project.detailsList || [project.keyInsight];
  document.getElementById("modal-insights").innerHTML = bullets
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("modal-actions").innerHTML = `
    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on GitHub</a>
    <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Open Live Demo</a>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModalEvents() {
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.getElementById("project-modal");

  closeBtn?.addEventListener("click", closeProjectModal);
  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) closeProjectModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

// ==========================================================================
// TYPING EFFECT
// ==========================================================================
function startTypingEffect() {
  const el = document.getElementById("typing-text");
  if (!el || typingPhrases.length === 0) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = typingPhrases[phraseIndex];

    if (!isDeleting) {
      el.textContent = currentPhrase.slice(0, ++charIndex);
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(tick, 1700);
        return;
      }
      setTimeout(tick, 75);
    } else {
      el.textContent = currentPhrase.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 40);
    }
  }

  tick();
}

// ==========================================================================
// NAVIGATION, ACTIVE LINK & SCROLL REVEAL
// ==========================================================================
function setupNavigation() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        links.forEach((l) => {
          l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
        });
      }
    });
  });
}

function observeReveals() {
  const els = document.querySelectorAll("[data-reveal]:not(.revealed)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  els.forEach((el) => observer.observe(el));
}

// ==========================================================================
// CONTACT COPY & FORM HANDLER
// ==========================================================================
function setupContactActions() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailLink = document.getElementById("email-link");
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  copyBtn?.addEventListener("click", async () => {
    const email = emailLink?.textContent?.trim() || "";
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1800);
    } catch {
      copyBtn.textContent = email;
    }
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("sender-name")?.value.trim() || "";
    const email = document.getElementById("sender-email")?.value.trim() || "";
    const message = document.getElementById("sender-message")?.value.trim() || "";
    const recipient = emailLink?.textContent?.trim() || "alex.morgan@example.com";

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    if (statusEl) {
      statusEl.textContent = "Opening your email client with your message pre-filled.";
    }
  });
}

// ==========================================================================
// INITIALIZE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  renderSkills();
  renderProjects("All");
  setupProjectFilters();
  setupModalEvents();
  startTypingEffect();
  setupNavigation();
  setupContactActions();
  observeReveals();
});