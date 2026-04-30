# Course Order Page - Specification

## Concept & Vision

A premium, trust-inspiring course ordering page designed for a Bangladeshi audience. The experience feels professional and secure, with clear pricing, course details, and a streamlined checkout process supporting bKash and Nagad mobile payment systems. The design conveys credibility and makes the purchase feel risk-free and straightforward.

## Design Language

**Aesthetic Direction:** Modern fintech meets educational platform — clean, trustworthy, with subtle depth through shadows and gradients. References the professional feel of Coursera or Udemy checkout pages but adapted for local preferences.

**Color Palette:**
- Primary: `#6366F1` (Indigo) — Trust, professionalism
- Secondary: `#EC4899` (Pink) — bKash brand proximity
- Tertiary: `#F97316` (Orange) — Nagad brand proximity  
- Accent Success: `#10B981` (Emerald)
- Background: `#F8FAFC` (Slate-50)
- Card Background: `#FFFFFF`
- Text Primary: `#1E293B` (Slate-800)
- Text Secondary: `#64748B` (Slate-500)
- Border: `#E2E8F0` (Slate-200)

**Typography:**
- Font: Inter (Google Fonts) with system fallbacks
- Headings: Bold, tight tracking
- Body: Regular weight, comfortable line-height

**Spatial System:**
- Base unit: 4px
- Section padding: 24-48px
- Card padding: 24px
- Component gaps: 16-24px

**Motion Philosophy:**
- Subtle hover elevations on cards (translateY -2px, shadow increase)
- Smooth radio selection transitions (300ms ease)
- Button press feedback (scale 0.98)
- Form focus rings with smooth appearance

## Layout & Structure

**Page Structure:**
1. **Header** — Logo/brand, trust badges
2. **Course Preview Card** — Course image, title, rating, includes list
3. **Order Form** — Two-column layout on desktop: form left, summary right
4. **Payment Selection** — Visual payment method cards with logos
5. **Mobile Payment Details** — Contextual instructions based on payment choice
6. **Submit Section** — Price summary, terms checkbox, CTA button
7. **Footer** — Security badges, support contact, guarantees

**Responsive Strategy:**
- Mobile: Single column, stacked elements
- Tablet/Desktop: Two-column checkout layout
- Breakpoint at 768px

## Features & Interactions

### Core Features:

**1. Course Information Display**
- Course thumbnail/image placeholder
- Course title with badge (e.g., "Bestseller")
- Star rating with review count
- Price display (original price struck through if discounted)
- Included features list with check icons

**2. Customer Information Form**
- Full name (required)
- Email address (required, validated)
- Phone number (required, BD format validated)
- Additional notes (optional textarea)

**3. Payment Method Selection**
- Visual cards for bKash and Nagad with logos
- Single selection required
- Selected state: colored border + check icon
- Payment instructions appear below selection

**4. bKash Flow**
- Display bKash payment number
- Transaction ID input field
- Instructions: "Send money to the number above, then enter your transaction ID"

**5. Nagad Flow**
- Display Nagad payment number  
- Transaction ID input field
- Instructions: "Send money to the Nagad number, then enter your transaction ID"

**6. Order Summary**
- Course name
- Subtotal
- Discount (if any)
- Total amount in BDT
- Currency明确

**7. Form Submission**
- Validation on all required fields
- Terms checkbox required
- Submit button with loading state
- Success confirmation modal

### Edge Cases:
- Empty required fields: Inline error messages
- Invalid email/phone: Real-time validation feedback
- No payment method selected: Alert on submit attempt
- Terms not accepted: Alert on submit attempt
- Form submission: Loading spinner, disable button

## Component Inventory

**CourseCard**
- Default: Image, details, includes list
- Hover: Subtle elevation

**InputField**
- Default: Border, label, placeholder
- Focus: Ring highlight
- Error: Red border, error message below
- Filled: Maintains border

**PaymentOption**
- Default: Light border, logo, name
- Hover: Border darkens
- Selected: Primary color border, checkmark badge
- Disabled: Grayed out (not used in this flow)

**PrimaryButton**
- Default: Gradient background, white text
- Hover: Slightly brighter
- Active: Scale down
- Loading: Spinner, disabled
- Disabled: Grayed out

**OrderSummary**
- Card with shadow
- Line items with labels
- Divider
- Total row emphasized

## Technical Approach

- React with TypeScript
- Tailwind CSS for styling
- useState for form state management
- Client-side validation
- Single page component structure
- No external API calls (simulated submission)
