# Architecture — Atelier OS

## Frontend
Framework: Next.js 16 App Router + React 19 + TypeScript.
Rendering model: Server Components by default; Client Components only for interaction-heavy areas.
State/data fetching: Server-side data access and Server Actions; local UI state for calendar/filter interactions.
Forms/validation: native form semantics initially; schema validation added with CRUD phase.

## Backend
Runtime/framework: Next.js Node.js runtime + Supabase.
API style: Server Actions for first-party mutations; Route Handlers only where external/webhook semantics are required.
Background jobs: none in foundation; later for messaging/reminders.

## Database
Database: PostgreSQL via Supabase.
Schema strategy: organization-scoped business entities.
Migrations: versioned SQL in `supabase/migrations`.
Authorization model: Row Level Security + organization membership + role checks.

Tenant graph:
`Organization → Branch → Staff → Clients → Services → Appointments → Payments`

## Authentication
Provider/method: Supabase Auth, email/password initially.
Roles: owner, admin, specialist.
Session strategy: cookie-based SSR via `@supabase/ssr`.

## File storage
Supabase Storage later for avatars, portfolio/media and organization assets.

## External integrations
Phase later: WhatsApp, transactional email, payments.

## Deployment
Vercel + Supabase.

## Observability
Logging: structured server logs.
Error monitoring: add Sentry or equivalent before production.
Analytics: product analytics added after core transactional flows are stable.

## Security assumptions
- Every tenant-owned table uses `organization_id`.
- RLS is mandatory.
- Browser never receives service-role key.
- Role restrictions must be enforced in database policies, not only in UI.
- Secrets stay in environment configuration.

## Architecture decisions
1. Multi-tenant from day one to avoid later data-model migration.
2. Supabase chosen because Auth and Postgres/RLS share one security model and fit the MVP.
3. Server Components keep data access close to the server and reduce client bundle.
4. UI library primitives may be reused, but the design language is custom and token-driven.
