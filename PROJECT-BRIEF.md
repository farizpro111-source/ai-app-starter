# Project Brief — Atelier OS

## 1. Product
Premium multi-tenant SaaS operating system for barbershops and beauty salons.

## 2. Users
- Owner — performance, finances, team, branches, permissions.
- Administrator — calendar, clients, services, payments, daily operations.
- Specialist / barber — own schedule, client context, service status.

## 3. Primary goal
Make day-to-day salon operations and business performance visible and manageable from one premium workspace.

## 4. Main sections/screens
- Dashboard
- Appointments
- Clients
- Staff
- Services
- Finance
- Analytics
- Settings
- Login / onboarding

## 5. Required functionality
- Real authentication.
- Multi-tenant organization isolation.
- Branches and role-based access.
- Appointment CRUD and operational calendar.
- Client CRM CRUD.
- Staff and service CRUD.
- Payments and finance views.
- Analytics derived from transactional data.
- Responsive desktop/mobile UI.

## 6. Integrations
- Supabase Auth
- PostgreSQL / Supabase Database
- Vercel deployment
- Future: WhatsApp, email, payments, loyalty

## 7. Deployment
Vercel frontend/server runtime + Supabase managed Postgres.

## 8. Visual direction
Premium “quiet luxury operations” SaaS. Influences: Linear, Stripe, Fresha and Apple in restraint and interaction quality, without visually copying any product. Light warm canvas, graphite typography, editorial spacing, subtle champagne accent, restrained motion.

## 9. Constraints
- No fake production data presented as real.
- No secrets in Git.
- Multi-tenant isolation must be enforced in RLS.
- Desktop productivity first; mobile remains fully operational.
- Components should be reused from proven libraries when appropriate, but the visual system must not look like stock shadcn.

## 10. Definition of success
A salon owner can sign in, manage organization data, create and update clients and appointments, operate a daily schedule, and see trustworthy KPIs. Critical flows pass real persistence, authorization, browser and production-build checks.
