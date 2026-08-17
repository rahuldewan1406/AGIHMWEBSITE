# AGIHM Website

A premium hospitality institute landing page for AGIHM.

## Features
- Responsive UI/UX4-inspired design language
- Docker deployment using NGINX
- Contact details: info@agihm.in and +91 8219006115
- Security headers for OWASP baseline hardening
- Unit tests and lint checks

## Local development
npm install
npm test
npm run lint

## Docker build
cd agihm-site
docker build -t agihm-site .
docker run --rm -p 8080:80 agihm-site

## Security and quality checks
- npm audit --audit-level=high
- ESLint static code analysis
- Docker image inspection for attack surface reduction
- NGINX security headers to reduce common web vulnerabilities

## Technical debt notes
- The app is intentionally static and low-complexity to minimize long-term maintenance debt.
- Keep content and branding in one source of truth to reduce drift.
- Update dependencies quarterly and review audit output before deployment.
