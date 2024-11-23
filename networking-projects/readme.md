## 🌐 Network Diagram

![Network Diagram](diagram.png)

## 🐳 Services Overview

### 1️⃣ **Web Service**
- Built using **Nginx**.
- Serves a static HTML page.
- Accessible at **http://web.localhost** (via Traefik).

### 2️⃣ **App Service**
- Built using **Python Flask**.
- Serves dynamic content.
- Accessible at **http://app.localhost** (via Traefik).

### 3️⃣ **Proxy (Traefik)**
- Routes requests to services based on domain names.
- Dashboard available at **http://localhost:8081**.
- Includes HTTPS support via Let's Encrypt.

## 🔧 How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project
   ```
2. Start the container:
    ```bash
    docker-compose up --build
    ```
3. Add the following to your /etc/hosts file:
    ```
    127.0.0.1 web.localhost
    127.0.0.1 app.localhost
    ```
4. Access the services:
```
Web Service: http://web.localhost
App Service: http://app.localhost
Traefik Dashboard: http://localhost:8081
```