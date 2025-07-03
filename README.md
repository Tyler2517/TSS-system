# TSS-system
A modern web application with Django backend, React frontend (Vite), and Docker containerization.

📋 Prerequisites
Docker
Docker Compose (included with Docker Desktop)
🚀 Quick Start
bash
# Clone the repository
git clone <your-repo-url>
cd <project-directory>

# Start the application
docker-compose up --build
🌐 Access the Application
Frontend: http://localhost:5173
Backend API: http://localhost:8000
Django Admin: http://localhost:8000/admin
💻 Development
Running Commands
bash
# Django commands
docker-compose exec backend python manage.py <command>

# Create superuser
docker-compose exec backend python manage.py createsuperuser

# Frontend commands
docker-compose exec frontend npm <command>
Adding Dependencies
Backend:

Add package to backend/requirements.txt
Run docker-compose build backend
Frontend:

bash
docker-compose exec frontend npm install <package-name>
🛑 Stopping the Application
bash
# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
🔧 Project Structure
project_root/
├── backend/         # Django project
├── frontend/        # React (Vite) app
└── docker-compose.yml
🛠️ Technologies
Backend: Django, Django REST Framework
Frontend: React, Vite
Containerization: Docker