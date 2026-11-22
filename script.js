:root {
    --navy: #101d35;
    --gold: #c59b27;
    --cream: #f8f6f0;
    --border: #e2d9cc;
    --muted: #5a6578;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--navy);
    background-color: white;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1150px;
    margin: 0 auto;
}

/* HEADER & NAVBAR */
.header {
    background: white;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.brand-logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--gold);
}

.brand-text {
    display: flex;
    flex-direction: column;
}

.brand-title {
    font-weight: 800;
    font-size: 13px;
    letter-spacing: 1px;
    color: var(--navy);
}

.brand-subtitle {
    font-size: 11px;
    font-weight: 700;
    color: var(--gold);
    letter-spacing: 0.5px;
}

.nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: var(--navy);
    font-weight: 600;
    font-size: 13px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--gold);
}

.button {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: 0.3s;
}

.button-gold {
    background: var(--gold);
    color: var(--navy);
}

.button-gold:hover {
    background: #b28820;
    transform: translateY(-2px);
}

.button-outline {
    border: 1px solid rgba(16, 29, 53, 0.3);
    color: var(--navy);
}

.button-outline:hover {
    border-color: var(--gold);
    color: var(--gold);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 26px;
    cursor: pointer;
    color: var(--navy);
}

/* HERO SECTION (متن چپ، لوگوی متوسط و دایره‌ای شیک راست) */
.hero {
    background: linear-gradient(135deg, var(--navy) 0%, #192e50 100%);
    color: white;
    padding: 100px 0;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 40px;
}

.hero-text-title {
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: var(--gold);
    margin-bottom: 12px;
}

.eyebrow {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--gold);
    display: block;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.15;
    margin-bottom: 20px;
}

.hero-description {
    font-size: 18px;
    color: #e2e8f0;
    margin-bottom: 12px;
}

.hero-subtext {
    font-size: 15px;
    color: #cbd5e1;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.hero-decoration {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* سایز متناسب، دایره‌ای و شیک لوگوی سمت راست هیرو */
.hero-small-logo-right {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--gold);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    display: block;
    margin: 0 auto;
}

/* SECTIONS COMMON */
.section {
    padding: 90px 0;
}

.section-heading {
    margin-bottom: 50px;
}

.section-heading.text-center {
    text-align: center;
}

.section-heading h2 {
    font-size: clamp(28px, 3.5vw, 40px);
    color: var(--navy);
    margin-top: 10px;
}

.subtitle-desc {
    max-width: 650px;
    margin: 15px auto 0;
    color: var(--muted);
}

/* ABOUT SECTION */
.about-section {
    background: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 50px;
    align-items: center;
}

.about-grid p {
    color: var(--muted);
    margin-bottom: 20px;
    font-size: 15px;
}

.mission-vision-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
}

.mv-item {
    background: var(--cream);
    padding: 20px;
    border-radius: 8px;
    border-left: 3px solid var(--gold);
}

.mv-item h3 {
    font-size: 16px;
    color: var(--navy);
    margin-bottom: 8px;
}

.mv-item p {
    font-size: 13px;
    margin: 0;
}

.about-text-card {
    background: var(--cream);
    padding: 35px;
    border-radius: 10px;
    border: 1px solid var(--border);
    border-left: 4px solid var(--gold);
}

.about-text-card h3 {
    font-size: 22px;
    color: var(--navy);
    margin: 10px 0 15px;
}

.about-text-card p {
    color: var(--muted);
    font-size: 15px;
}

/* WHY US */
.why-section {
    background: var(--cream);
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.why-card {
    background: white;
    padding: 35px;
    border-radius: 8px;
    border: 1px solid var(--border);
    transition: 0.3s;
}

.why-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.why-card h3 {
    color: var(--navy);
    margin-bottom: 12px;
    font-size: 20px;
}

.why-card p {
    color: var(--muted);
    font-size: 14px;
}

/* PROGRAMMES */
.programme-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.programme-card {
    background: white;
    padding: 30px;
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: 0.3s;
}

.programme-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(16,29,53,0.08);
}

.programme-number {
    color: #b28b48;
    font-weight: 800;
    font-size: 13px;
}

.programme-card h3 {
    color: var(--navy);
    font-size: 20px;
    margin: 18px 0 12px;
}

.programme-card p {
    font-size: 14px;
    color: var(--muted);
}

/* APPROACH */
.approach-section {
    background: var(--navy);
    color: white;
}

.approach-section .section-heading h2 {
    color: white;
}

.approach-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;
}

.approach-step {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(197, 155, 39, 0.3);
    padding: 30px 20px;
    border-radius: 8px;
    text-align: center;
}

.step-num {
    width: 40px;
    height: 40px;
    background: var(--gold);
    color: var(--navy);
    font-weight: 800;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto 15px;
}

.approach-step h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.approach-step p {
    font-size: 13px;
    color: #cbd5e1;
}

/* IMPACT */
.impact-section {
    background: white;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 50px;
}

.stat-card {
    background: var(--cream);
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid var(--border);
}

.stat-card h3 {
    font-size: 36px;
    color: var(--gold);
    margin-bottom: 8px;
}

.stat-card p {
    font-size: 14px;
    color: var(--navy);
    font-weight: 600;
}

.sdg-container {
    background: var(--cream);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid var(--border);
    text-align: center;
}

.sdg-container h3 {
    margin-bottom: 25px;
    font-size: 20px;
    color: var(--navy);
}

.sdg-grid {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.sdg-badge {
    background: white;
    padding: 12px 20px;
    border-radius: 6px;
    border: 1px solid var(--border);
    font-size: 13px;
    color: var(--navy);
}

.sdg-badge strong {
    color: var(--gold);
}

/* JOURNEY */
.journey-section {
    background: var(--cream);
}

.timeline {
    max-width: 850px;
    border-left: 2px solid var(--gold);
    margin-left: 10px;
    padding-left: 35px;
}

.timeline-item {
    position: relative;
    display: grid;
    grid-template-columns: 115px 1fr;
    gap: 20px;
    padding-bottom: 45px;
}

.timeline-item::before {
    content: "";
    position: absolute;
    left: -43px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--gold);
    border: 3px solid white;
    box-shadow: 0 0 0 1px var(--gold);
}

.timeline-year {
    font-weight: 800;
    color: #a27c3d;
}

.timeline-item h3 {
    color: var(--navy);
    margin-bottom: 8px;
}

.timeline-item p {
    font-size: 14px;
    color: var(--muted);
}

/* TEAM */
.team-section {
    background: white;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 300px));
    justify-content: center;
    gap: 35px;
}

.team-card {
    background: var(--cream);
    text-align: center;
    padding: 35px 