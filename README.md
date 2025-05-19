# SIT737 Practical Task 10.1P: Monitoring and Visibility 🚀

This repository contains all the source files, configurations, and deployment steps for a cloud-native calculator application deployed on Google Kubernetes Engine (GKE), with monitoring and logging.

---

## 📦 Project Overview

- **Application**: Node.js calculator app with basic operations
- **Containerized with**: Docker
- **Database**: MongoDB (local or managed)
- **Deployment Platform**: Google Kubernetes Engine (GKE)
- **Monitoring Tools**: Stackdriver Logging (optional)
- **Docker Registry**: Docker Hub / Artifact Registry

---

## 🗂️ Folder Structure

#├── Dockerfile
├── deployment.yaml
├── service.yaml
├── server.js
├── package.json
├── package-lock.json

# Build the Docker image
docker build -t calculator-app .

# Run the container
docker run -p 8080:8080 calculator-app
