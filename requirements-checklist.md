# Requirements Checklist

## System Requirements
| Item | Required Version | Status |
|------|------------------|--------|
| Node.js | v18+ | ✔ |
| npm | v8+ | ✔ |
| Docker | v20+ | ✔ |
| Docker Compose | v2+ | ✔ |

## Backend Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Backend App Port | Optional (default 5000) |

## Frontend Environment Variables
Not required for development.  
For production, frontend communicates with backend using the `/api` prefix.

## Repository Structure
/backend  
/frontend  

Everything is verified and working locally before Dockerization.
