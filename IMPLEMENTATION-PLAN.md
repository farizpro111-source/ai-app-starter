# Implementation Plan — Atelier OS

## Phase 0 — Discovery
- [x] Project brief defined
- [x] Architecture chosen
- [x] Design system defined
- [x] Current external docs checked
- [x] Acceptance criteria defined in TESTING.md

## Phase 1 — Foundation
- [x] App scaffold authored
- [x] Environment variables template
- [x] Core layout
- [x] Routing
- [x] Base design tokens
- [x] Login surface + Supabase client utilities
- [x] GitHub CI configuration
- [ ] CI green
- [ ] Browser verification green

Verification:
- [ ] app starts
- [ ] no blocking console errors
- [ ] baseline responsive layout works

## Phase 2 — Data / backend
- [x] initial schema
- [x] initial migration
- [x] RLS authorization design
- [x] auth client foundation
- [ ] real Supabase project credentials configured
- [ ] real read/write test
- [ ] permission matrix test
- [ ] invalid input test

Internal truth label: REAL + UNVERIFIED until credentials and persistence tests pass.

## Phase 3 — Core user flows

### Flow A — Appointments
- [x] operational day-calendar UI
- [ ] create/edit/reschedule/status lifecycle
- [ ] persistence
- [ ] browser and collision tests

### Flow B — Client CRM
- [x] client list UI
- [ ] create/edit/archive
- [ ] visit history and search
- [ ] persistence and tenant-isolation tests

### Flow C — Dashboard
- [x] premium dashboard composition
- [ ] live KPI queries
- [ ] reconcile every KPI to transactions

## Phase 4 — Team / services / finance
- [ ] staff CRUD and schedules
- [ ] services CRUD
- [ ] payments
- [ ] finance views
- [ ] analytics

## Phase 5 — Polish
- [ ] full responsive pass
- [ ] accessibility audit
- [ ] loading/empty/error states
- [ ] copy review
- [ ] performance sanity check

## Phase 6 — End-to-end verification
- [ ] critical browser flows
- [ ] regression checks
- [ ] production build
- [ ] Vercel preview
- [ ] deployment smoke test

## Done criteria
Never mark complete based only on generated code or successful build.
