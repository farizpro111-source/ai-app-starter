# Testing Standard

## Minimum checks after meaningful changes

### Code
- Type checking
- Linting
- Relevant unit tests
- Relevant integration tests
- Production build where applicable

### Browser
- Page loads
- Main controls can be operated
- Forms submit correctly
- Loading, empty and error states render
- No relevant console errors
- Relevant network requests succeed
- Responsive check: phone / tablet / desktop when UI changed
- Keyboard navigation on critical controls

### Data
- Real persistence verified where required
- Authorization verified
- Invalid and boundary values tested
- Concurrent/conflicting actions considered when applicable

## Bug fix protocol
1. Reproduce.
2. Record root cause.
3. Make smallest safe fix.
4. Re-run failing scenario.
5. Run adjacent regression scenario.
6. Do not redesign unrelated code.

## Integration truthfulness
Use one of these labels internally:
- REAL + VERIFIED
- REAL + UNVERIFIED
- MOCK
- NOT IMPLEMENTED

Never present the last three as REAL + VERIFIED.
