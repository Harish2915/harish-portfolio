import sys
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas
import pypdf

def build_pdf(filename, single_page=True):
    # Dimensions
    page_width, page_height = letter
    
    if single_page:
        # 0.4 inch margin = 28.8 points
        margin = 28.8
    else:
        # 0.5 inch margin = 36 points
        margin = 36.0
        
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=margin,
        bottomMargin=margin
    )
    
    # Palette
    c_primary = colors.HexColor("#0f172a")    # Deep slate navy (header & main text)
    c_accent = colors.HexColor("#1e3a8a")     # Classic professional navy blue (headings)
    c_subtext = colors.HexColor("#334155")    # Charcoal slate (details & dates)
    c_line = colors.HexColor("#cbd5e1")       # Subtle divider rule
    c_link = colors.HexColor("#1d4ed8")       # Accessible blue for URLs
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    if single_page:
        title_size = 18
        title_lead = 20
        name_bottom_space = 2
        contact_size = 8.2
        contact_lead = 10.2
        sec_heading_size = 10.0
        sec_heading_lead = 12.0
        sec_space_before = 5.0
        sec_space_after = 2.0
        item_title_size = 9.2
        item_title_lead = 11.0
        body_size = 8.5
        body_lead = 10.6
        bullet_indent = 10
        item_gap = 3.0
    else:
        title_size = 20
        title_lead = 22
        name_bottom_space = 3
        contact_size = 9.0
        contact_lead = 11.5
        sec_heading_size = 11.0
        sec_heading_lead = 13.0
        sec_space_before = 8.0
        sec_space_after = 3.0
        item_title_size = 10.0
        item_title_lead = 12.0
        body_size = 9.2
        body_lead = 11.8
        bullet_indent = 12
        item_gap = 5.0

    style_name = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=title_size,
        leading=title_lead,
        textColor=c_primary,
        alignment=0, # Left-aligned single column for perfect ATS scanning
        spaceAfter=name_bottom_space
    )
    
    style_tagline = ParagraphStyle(
        'ResumeTagline',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=item_title_size,
        leading=item_title_lead,
        textColor=c_accent,
        alignment=0,
        spaceAfter=2
    )

    style_contact = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=contact_size,
        leading=contact_lead,
        textColor=c_subtext,
        alignment=0
    )

    style_section = ParagraphStyle(
        'ResumeSection',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=sec_heading_size,
        leading=sec_heading_lead,
        textColor=c_accent,
        spaceBefore=sec_space_before,
        spaceAfter=sec_space_after,
        keepWithNext=True
    )

    style_item_header = ParagraphStyle(
        'ResumeItemHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=item_title_size,
        leading=item_title_lead,
        textColor=c_primary,
        keepWithNext=True
    )

    style_item_sub = ParagraphStyle(
        'ResumeItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=body_size,
        leading=body_lead,
        textColor=c_subtext,
        keepWithNext=True
    )

    style_body = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=body_size,
        leading=body_lead,
        textColor=c_primary
    )

    style_bullet = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=body_size,
        leading=body_lead,
        textColor=c_primary,
        leftIndent=bullet_indent,
        firstLineIndent=-bullet_indent,
        spaceAfter=1.5
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("HARISH M", style_name))
    story.append(Paragraph("FULL STACK DEVELOPER | SOFTWARE ENGINEER", style_tagline))
    
    contact_line1 = (
        "Erode, Tamil Nadu, India &nbsp;|&nbsp; +91 81486 90290 &nbsp;|&nbsp; "
        "<a href='mailto:harish29012004@gmail.com' color='#1d4ed8'>harish29012004@gmail.com</a>"
    )
    contact_line2 = (
        "LinkedIn: <a href='https://linkedin.com/in/harish2913' color='#1d4ed8'>linkedin.com/in/harish2913</a> &nbsp;|&nbsp; "
        "GitHub: <a href='https://github.com/Harish2915' color='#1d4ed8'>github.com/Harish2915</a> &nbsp;|&nbsp; "
        "Portfolio: <a href='https://harish2913.netlify.app' color='#1d4ed8'>harish2913.netlify.app</a>"
    )
    story.append(Paragraph(contact_line1, style_contact))
    story.append(Paragraph(contact_line2, style_contact))
    story.append(HRFlowable(width="100%", thickness=1, color=c_line, spaceBefore=4, spaceAfter=2))

    # Helper function for Section Heading
    def add_section_header(title):
        story.append(Paragraph(title.upper(), style_section))
        story.append(HRFlowable(width="100%", thickness=0.75, color=c_accent, spaceBefore=1, spaceAfter=3))

    # 2. PROFESSIONAL SUMMARY
    add_section_header("Professional Summary")
    summary_text = (
        "Results-driven Full Stack Developer with practical engineering experience in developing scalable web applications, "
        "architecting RESTful APIs, and implementing robust relational database architectures using Python, FastAPI, React.js, "
        "and SQL. Demonstrated expertise across software development internships in delivering modular microservices, responsive user "
        "interfaces, and secure database workflows (PostgreSQL, MySQL, Supabase). Possesses strong analytical problem-solving capabilities "
        "rooted in an Artificial Intelligence and Data Science background, with a steadfast commitment to clean code, testability, and "
        "reliable software performance."
    )
    story.append(Paragraph(summary_text, style_body))

    # 3. TECHNICAL SKILLS
    add_section_header("Technical Skills")
    skills = [
        ("Programming Languages", "Python, JavaScript (ES6+), SQL (MySQL, PostgreSQL), HTML5, CSS3"),
        ("Frontend Development", "React.js, Next.js, Bootstrap, Tailwind CSS, Responsive Web Design, Component Architecture"),
        ("Backend & APIs", "FastAPI, Flask, RESTful API Design, Microservices Architecture, SQLAlchemy, JWT Authentication, GraphQL"),
        ("Databases & Cloud", "MySQL, PostgreSQL, Supabase, Firebase, Relational Schema Design, Query Optimization"),
        ("Developer Tools", "Git, GitHub, Postman, MySQL Workbench, VS Code, Linux/Bash"),
        ("Core Competencies", "Data Structures & Algorithms, Object-Oriented Programming (OOP), Full-Stack System Design, Debugging & Testing")
    ]
    for category, items in skills:
        p = Paragraph(f"<b>{category}:</b> {items}", style_body)
        story.append(p)
        story.append(Spacer(1, 1.2))

    # 4. WORK EXPERIENCE
    add_section_header("Work Experience")
    
    # Role 1: Younder Bots
    content_yb = []
    # Usable width
    usable_width = page_width - 2 * margin
    
    # We can use a 2-column table for Title on Left, Date/Location on Right for crisp alignment!
    # Tables with plain text are 100% ATS friendly in ReportLab when linear reading order is maintained.
    t_yb = Table([
        [Paragraph("<b>Full Stack Developer Intern</b> &nbsp;|&nbsp; <b>Younder Bots (OPC) Pvt Ltd</b>", style_item_header),
         Paragraph("<para align='right'><b>Sep 2025 – Jan 2026</b></para>", style_item_sub)]
    ], colWidths=[usable_width * 0.72, usable_width * 0.28])
    t_yb.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    content_yb.append(t_yb)
    
    yb_bullets = [
        "Architected and integrated scalable RESTful APIs using FastAPI and Python, facilitating efficient server-side data serialization and high-throughput inter-service communication.",
        "Built responsive, modular user interface components using React.js, collaborating across teams to ensure state management consistency and smooth data binding.",
        "Engineered relational database schemas and optimized complex SQL queries in MySQL, maintaining strict data integrity and accelerating transactional retrieval times.",
        "Standardized API endpoint testing and debugging routines using Postman and automated test scripts, diagnosing system bottlenecks and improving application stability."
    ]
    for b in yb_bullets:
        content_yb.append(Paragraph(f"• &nbsp; {b}", style_bullet))
    content_yb.append(Spacer(1, item_gap))
    story.append(KeepTogether(content_yb))

    # Role 2: KSV Technologies
    content_ksv = []
    t_ksv = Table([
        [Paragraph("<b>Web Developer Intern</b> &nbsp;|&nbsp; <b>KSV Technologies</b>", style_item_header),
         Paragraph("<para align='right'><b>July 2026 – Sep 2026</b></para>", style_item_sub)]
    ], colWidths=[usable_width * 0.72, usable_width * 0.28])
    t_ksv.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    content_ksv.append(t_ksv)
    
    ksv_bullets = [
        "Developed and optimized responsive web application interfaces and frontend components using modern JavaScript, HTML5, and CSS3, ensuring cross-browser compatibility.",
        "Constructed reusable UI components and adaptive layouts adhering to responsive design principles, delivering consistent user experience across desktop and mobile viewports.",
        "Conducted client-side debugging, code reviews, and interface testing, identifying and resolving UI rendering discrepancies to elevate application usability and accessibility."
    ]
    for b in ksv_bullets:
        content_ksv.append(Paragraph(f"• &nbsp; {b}", style_bullet))
    story.append(KeepTogether(content_ksv))

    # 5. PROJECTS
    add_section_header("Technical Projects")
    
    # Project 1: Anvesha
    content_anv = []
    t_anv = Table([
        [Paragraph("<b>Anvesha – Travel Booking & Experience Platform</b>", style_item_header),
         Paragraph("<para align='right'><b>Next.js, FastAPI, Python, MySQL, Microservices</b></para>", style_item_sub)]
    ], colWidths=[usable_width * 0.58, usable_width * 0.42])
    t_anv.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    content_anv.append(t_anv)
    
    anv_bullets = [
        "Architected an end-to-end full-stack travel marketplace supporting multi-tier bookings across accommodations, transport (flights, trains, buses), and custom travel experiences.",
        "Engineered a microservices-based backend using FastAPI to decouple catalog discovery, inventory management, and transaction reservation services.",
        "Built a dynamic frontend in Next.js and React.js featuring modular package customization, real-time price calculations, and responsive customer dashboards.",
        "Designed an administrative console with a relational MySQL backend to centralize travel inventory management, reservation tracking, and bulk data operations."
    ]
    for b in anv_bullets:
        content_anv.append(Paragraph(f"• &nbsp; {b}", style_bullet))
    content_anv.append(Spacer(1, item_gap))
    story.append(KeepTogether(content_anv))

    # Project 2: Selavu
    content_sel = []
    t_sel = Table([
        [Paragraph("<b>Selavu – Trip Expense & Settlement Platform</b>", style_item_header),
         Paragraph("<para align='right'><b>Supabase, PostgreSQL, REST APIs, Google Auth</b></para>", style_item_sub)]
    ], colWidths=[usable_width * 0.58, usable_width * 0.42])
    t_sel.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    content_sel.append(t_sel)
    
    sel_bullets = [
        "Developed a collaborative group expense tracking platform enabling multiple travelers to manage shared trip finances, member ledgers, and bill settlements.",
        "Implemented dynamic expense-splitting algorithms and real-time debt calculation engines that compute optimal cross-member settlement transfers.",
        "Integrated Supabase cloud backend with PostgreSQL, implementing secure user authentication via Google Sign-In, real-time data sync, and Row-Level Security (RLS).",
        "Built categorized spending analytics dashboards, complete historical trip archiving, and local biometric app-lock security."
    ]
    for b in sel_bullets:
        content_sel.append(Paragraph(f"• &nbsp; {b}", style_bullet))
    content_sel.append(Spacer(1, item_gap))
    story.append(KeepTogether(content_sel))

    # Project 3: Crime Rate Prediction
    content_cr = []
    t_cr = Table([
        [Paragraph("<b>Crime Rate Prediction – Machine Learning & Crime Analytics</b>", style_item_header),
         Paragraph("<para align='right'><b>Python, Scikit-learn, Pandas, NumPy, Flask</b></para>", style_item_sub)]
    ], colWidths=[usable_width * 0.60, usable_width * 0.40])
    t_cr.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    content_cr.append(t_cr)
    
    cr_bullets = [
        "Engineered an end-to-end data analytics and predictive modeling pipeline on historical crime incident datasets, performing data cleaning and feature engineering.",
        "Trained and benchmarked supervised machine learning classification models using Scikit-learn to accurately categorize incident types and evaluate risk indicators.",
        "Analyzed longitudinal temporal trends and geographic distributions to isolate recurring incident patterns, visualizing findings with Matplotlib.",
        "Constructed an interactive Flask web service to expose prediction endpoints and deliver visual analytical summaries for historical crime risk assessment."
    ]
    for b in cr_bullets:
        content_cr.append(Paragraph(f"• &nbsp; {b}", style_bullet))
    
    if not single_page:
        content_cr.append(Spacer(1, item_gap))
        story.append(KeepTogether(content_cr))
        
        # Project 4: Kadhambari (included in 2-page version)
        content_kad = []
        t_kad = Table([
            [Paragraph("<b>Kadhambari – Botanical & Landscape Services Platform</b>", style_item_header),
             Paragraph("<para align='right'><b>Firebase, Razorpay API, REST APIs, JavaScript</b></para>", style_item_sub)]
        ], colWidths=[usable_width * 0.60, usable_width * 0.40])
        t_kad.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ]))
        content_kad.append(t_kad)
        kad_bullets = [
            "Engineered an e-commerce and on-site landscape services platform integrating botanical retail sales with customized gardening service bookings.",
            "Integrated Razorpay payment gateway API to handle secure online transactions, cart validation, and automated payment verification.",
            "Implemented dynamic catalog search, multi-category plant filtering, and service request workflows for irrigation and landscape design consultations.",
            "Configured Firebase cloud database and storage for synchronized product catalogs, user accounts, and real-time order tracking."
        ]
        for b in kad_bullets:
            content_kad.append(Paragraph(f"• &nbsp; {b}", style_bullet))
        story.append(KeepTogether(content_kad))
    else:
        story.append(KeepTogether(content_cr))

    # 6. EDUCATION
    add_section_header("Education")
    
    # Degree
    t_edu1 = Table([
        [Paragraph("<b>Bachelor of Technology (B.Tech) – Artificial Intelligence and Data Science</b>", style_item_header),
         Paragraph("<para align='right'><b>2022 – 2026</b></para>", style_item_sub)],
        [Paragraph("Erode Sengunthar Engineering College, Erode, Tamil Nadu &nbsp;|&nbsp; <b>CGPA: 7.57 / 10.0</b> (Up to 7th Semester)", style_body),
         Paragraph("<para align='right'>Erode, India</para>", style_item_sub)]
    ], colWidths=[usable_width * 0.78, usable_width * 0.22])
    t_edu1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu1)
    story.append(Spacer(1, 2))

    # HSC
    t_edu2 = Table([
        [Paragraph("<b>Higher Secondary Certificate (HSC) – Class XII (Computer Science)</b>", style_item_header),
         Paragraph("<para align='right'><b>2021 – 2022</b></para>", style_item_sub)],
        [Paragraph("Sengunthar Higher Secondary School, Erode, Tamil Nadu &nbsp;|&nbsp; <b>Score: 72.0%</b>", style_body),
         Paragraph("<para align='right'>Erode, India</para>", style_item_sub)]
    ], colWidths=[usable_width * 0.78, usable_width * 0.22])
    t_edu2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu2)

    doc.build(story)
    print(f"Generated {filename}")

if __name__ == "__main__":
    build_pdf("public/resume/test_resume_1p.pdf", single_page=True)
    reader = pypdf.PdfReader("public/resume/test_resume_1p.pdf")
    print(f"Page count for test_resume_1p.pdf: {len(reader.pages)}")
