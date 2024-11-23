# Project Structure

```bash
project/
├── docker-compose.yml
├── web/
│   ├── Dockerfile
│   └── index.html
├── app/
│   ├── Dockerfile
│   └── app.py
└── README.md
```
## Docker compose for web/app:
```yaml
version: "3.8"

services:
  web:
    build:
      context: ./web
    ports:
      - "8080:80"
    networks:
      - webapp_network

  app:
    build:
      context: ./app
    ports:
      - "5000:5000"
    networks:
      - webapp_network

networks:
  webapp_network:
    driver: bridge
```
## Web/Dockerfile
```
# Use an Nginx image
FROM nginx:latest

# Copy HTML file to the container
COPY index.html /usr/share/nginx/html/index.html
```
## Create web/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Container</title>
    <style>
        body {
            background-color: black;
            color: #00ffee;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Web Container!</h1>
</body>
</html>
```
## App/Dockerfile
```
# Use a Python image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy application files
COPY app.py .

# Expose port 5000
EXPOSE 5000

# Install dependencies (Flask in this case)
RUN pip install flask

# Run the application
CMD ["python", "app.py"]
```
## App/main.py
```
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1 style='color: #00ffee;'>Hello from the App Container!</h1>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```
