# Implementation Plan

Break implementation into small, verifiable phases.

## Phase 0 — Discovery
- [ ] Project brief approved
- [ ] Architecture chosen
- [ ] Design system defined
- [ ] Required external docs checked
- [ ] Acceptance criteria defined

## Phase 1 — Foundation
- [ ] App scaffold
- [ ] Environment variables template
- [ ] Core layout
- [ ] Routing
- [ ] Base design tokens
- [ ] Error handling
- [ ] Lint/typecheck/test scripts

Verification:
- [ ] app starts
- [ ] no blocking console errors
- [ ] baseline responsive layout works

## Phase 2 — Data / backend
- [ ] schema
- [ ] migrations
- [ ] auth/roles
- [ ] APIs/data access

Verification:
- [ ] real read/write test
- [ ] permissions test
- [ ] invalid input test

## Phase 3 — Core user flows
Define flow-by-flow.

### Flow A
Implementation:
Verification:

### Flow B
Implementation:
Verification:

## Phase 4 — Integrations
For each integration:
- real credentials/configuration available?
- test request performed?
- failure state tested?
- mock clearly separated?

## Phase 5 — Polish
- [ ] responsive
- [ ] accessibility
- [ ] loading/empty/error states
- [ ] copy
- [ ] performance sanity check

## Phase 6 — End-to-end verification
- [ ] critical browser flows
- [ ] regression checks
- [ ] production build
- [ ] deployment smoke test, if deployed

## Done criteria
Never mark complete based only on generated code or a successful build.
