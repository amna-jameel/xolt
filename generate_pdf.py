import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether

def build_pdf():
    pdf_filename = r"d:\xolt\apps\web\XOLT_Marketing_Website_Documentation.pdf"
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    navy_dark = colors.HexColor("#07111F")
    navy_surface = colors.HexColor("#101E30")
    blue_accent = colors.HexColor("#4F8CC9")
    text_white = colors.HexColor("#F4F7FA")
    text_muted = colors.HexColor("#748397")
    border_color = colors.HexColor("#203147")
    green_success = colors.HexColor("#4FA77A")

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=navy_dark,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=blue_accent,
        spaceAfter=15
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=navy_dark,
        spaceBefore=14,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor("#334155"),
        spaceAfter=8
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=colors.white
    )

    table_body_style = ParagraphStyle(
        'TableBody',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor("#1e293b")
    )

    status_pass_style = ParagraphStyle(
        'StatusPass',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=green_success
    )

    story = []

    # Title & Subtitle Header
    story.append(Paragraph("XOLT — Amazon Seller Analytics Platform", title_style))
    story.append(Paragraph("Marketing Website Technical & Developer Documentation · Candidate: Amna Jameel", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=blue_accent, spaceAfter=12))

    # Executive Summary
    story.append(Paragraph("Executive Summary", h1_style))
    summary_text = (
        "This document provides formal developer documentation, architectural breakdown, and brief compliance verification "
        "for the <b>XOLT Marketing Website</b>, built for the <b>Authect 2027 Recruitment Challenge</b>. "
        "The project is fully integrated inside the product monorepo at <code>apps/web</code> using Next.js App Router, "
        "TailwindCSS, TypeScript, and next-intl for multi-language (RTL) support."
    )
    story.append(Paragraph(summary_text, body_style))

    # Tech Stack Table
    story.append(Paragraph("1. Technology Stack & Architecture", h1_style))
    tech_data = [
        [Paragraph("Layer", table_header_style), Paragraph("Technology", table_header_style), Paragraph("Details", table_header_style)],
        [Paragraph("Framework", table_body_style), Paragraph("Next.js 15+ (App Router)", table_body_style), Paragraph("Monorepo structure inside apps/web", table_body_style)],
        [Paragraph("Language", table_body_style), Paragraph("TypeScript (Strict)", table_body_style), Paragraph("0 compilation errors (npx tsc --noEmit)", table_body_style)],
        [Paragraph("Styling", table_body_style), Paragraph("Tailwind CSS", table_body_style), Paragraph("Custom dark-mode tokens & CSS Logical Properties for RTL", table_body_style)],
        [Paragraph("i18n & Localization", table_body_style), Paragraph("next-intl", table_body_style), Paragraph("English (en), Spanish (es), Arabic (ar) with RTL support", table_body_style)],
        [Paragraph("Deployment Target", table_body_style), Paragraph("Vercel (fra1 region)", table_body_style), Paragraph("Unified deployment target alongside product dashboard", table_body_style)],
        [Paragraph("SEO & OpenGraph", table_body_style), Paragraph("Next Metadata API", table_body_style), Paragraph("Indexable routes, sitemap.ts, robots.ts, JSON-LD Schema", table_body_style)],
    ]

    t_tech = Table(tech_data, colWidths=[110, 140, 290])
    t_tech.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), blue_accent),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_tech)
    story.append(Spacer(1, 10))

    # Brief Compliance Matrix Table
    story.append(Paragraph("2. Brief Compliance Matrix", h1_style))
    matrix_data = [
        [Paragraph("Brief Specification", table_header_style), Paragraph("Status", table_header_style), Paragraph("Implementation Details", table_header_style)],
        [Paragraph("One-Line Pitch", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("See real profit per SKU. Know what to change next.", table_body_style)],
        [Paragraph("Prescriptive Action Plan", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Shows dollar impact per recommendation (+$640/mo potential)", table_body_style)],
        [Paragraph("i18n & RTL Support", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("en, es, ar complete with logical CSS properties (ms-, ps-, start-)", table_body_style)],
        [Paragraph("Multi-Currency Support", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Interactive switcher for USD, AED, SAR, and EUR", table_body_style)],
        [Paragraph("Official SP-API Focus", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Explicitly states read-only SP-API, zero buyer PII, no scraping", table_body_style)],
        [Paragraph("Required Page Routes", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("All 14 pages (Landing, How-it-works, Pricing, Security, Sub-processors, etc.)", table_body_style)],
        [Paragraph("Pricing Tiers", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Starter ($29), Pro ($59), Agency ($199) with 14-day free trial notes", table_body_style)],
        [Paragraph("Security & Vendor List", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Public /security page and living vendor list on /sub-processors", table_body_style)],
        [Paragraph("Company Presence", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Authect, Dubai, UAE with support@, privacy@, security@, billing@", table_body_style)],
        [Paragraph("Footer Compliance", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Links to Privacy, Terms, Security, Sub-processors, and Contact", table_body_style)],
        [Paragraph("320px Responsiveness", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Verified down to 320px x 498px viewports with zero horizontal overflow", table_body_style)],
        [Paragraph("UX Pointer Cursors", table_body_style), Paragraph("PASSED", status_pass_style), Paragraph("Global cursor: pointer applied to all buttons, tabs, and range sliders", table_body_style)],
    ]

    t_matrix = Table(matrix_data, colWidths=[130, 60, 350])
    t_matrix.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), navy_dark),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('TOPPADDING', (0,0), (-1,-1), 4.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4.5),
    ]))
    story.append(t_matrix)
    story.append(Spacer(1, 10))

    # Verification & Candidate Details
    story.append(Paragraph("3. Final Submission Summary", h1_style))
    candidate_info = (
        "<b>Candidate Name:</b> Amna Jameel<br/>"
        "<b>Recruitment Round:</b> Authect 2027 Recruitment Challenge (Third Round)<br/>"
        "<b>Project Path:</b> <code>apps/web</code> (Monorepo)<br/>"
        "<b>Build Verification:</b> <code>npx tsc --noEmit</code> passed with 0 errors.<br/>"
        "<b>Status:</b> Ready for Final Submission & Review."
    )
    story.append(Paragraph(candidate_info, body_style))

    doc.build(story)
    print("PDF build complete:", pdf_filename)

if __name__ == "__main__":
    build_pdf()
