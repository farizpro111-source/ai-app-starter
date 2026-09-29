# Testing Standard — Atelier OS

## Truth labels
- REAL + VERIFIED
- REAL + UNVERIFIED
- MOCK
- NOT IMPLEMENTED

Current foundation:
- UI shell: REAL + UNVERIFIED until CI/browser check.
- Supabase integration code: REAL + UNVERIFIED until credentials are connected.
- Dashboard figures visible in foundation UI: MOCK design fixtures, never production data.
- Appointment/client persistence: NOT IMPLEMENTED.

## Phase 1 acceptance criteria
- TypeScript production build succeeds.
- ESLint succeeds.
- `/dashboard`, `/appointments`, `/clients`, `/login` render.
- No blocking framework overlay or console errors.
- Navigation works on desktop and mobile widths.
- Core interactive targets are keyboard reachable.

## Data acceptance criteria
- Tenant A cannot read/write Tenant B records.
- owner/admin permission matrix works.
- specialist can update only allowed own appointments.
- invalid times fail.
- negative monetary values fail.

## Browser checks
- Desktop 1440px
- Tablet 768px
- Mobile 390px
- Calendar horizontal overflow remains usable.
- No clipped labels or hidden primary actions.
- Login failure state is understandable.

## Integration checks before “done”
- Supabase credentials configured.
- Migration applied.
- Real user and membership created.
- Client write/read/update verified.
- Appointment write/read/update verified.
- RLS denial verified with second tenant.
