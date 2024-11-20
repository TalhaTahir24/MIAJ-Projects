# Docker-Based Network Setup Project

This project demonstrates setting up a Docker environment with interconnected containers and networks based on a given architecture. The goal is to configure multiple Docker networks with containers representing users or servers, and establish cross-branch communication where necessary.

## Project Description

### Setup Overview:
- Docker was installed on the system.
- Three branches were created: `B1`, `B2`, and `B3`.
- Six Nginx containers were set up to represent users or servers:
  - `B1-U1`, `B1-U2`, `B2-U1`, `B2-U2`, `B3-U1`, and `B3-U2`.
  - `B2-U2` serves as a web server with Nginx installed.

### Connectivity:
- **Green lines** in the diagram indicate direct connections between branches.
- **Red lines** signify connections limited to their respective branches.

## Implementation Steps

### Step 1: Install Docker
To install Docker, run the following commands:
```bash
sudo apt update
curl https://get.docker.com | sh
```
## Step 2: Create Docker Networks
### Create three Docker networks representing the branches:
```bash
docker network create B1
docker network create B2
docker network create B3
```
## Step 3: Run Nginx Containers
### Run Nginx containers and attach them to the appropriate networks:

#### For Branch B1
```bash
docker run --name B1-U1 --network B1 -d nginx
docker run --name B1-U2 --network B1 -d nginx
```
## For Branch B2
```bash
docker run --name B2-U1 --network B2 -d nginx
docker run --name B2-U2 --network B2 -d nginx # Web server
```
## For Branch B3
```bash
docker run --name B3-U1 --network B3 -d nginx
docker run --name B3-U2 --network B3 -d nginx
```
##Step 4: Configure Connectivity
###Allow cross-branch communication for selected containers by running the following commands:

```bash
docker network connect B1 B2-U1
docker network connect B2 B3-U1
docker network connect B3 B1-U1
```
## Step 5: Verify Connections
### To ensure the network configurations are correct and check the connections, use the following commands:

```bash
docker network inspect B1
docker network inspect B2
docker network inspect B3
```
## These commands will show the details of each network, including connected containers and their IP addresses.

#Bring Down the Containers
## To stop and remove the containers when done:

## Stop all running containers
```bash
docker stop B1-U1 B1-U2 B2-U1 B2-U2 B3-U1 B3-U2
```
## Remove the containers
```bash
docker rm B1-U1 B1-U2 B2-U1 B2-U2 B3-U1 B3-U2
```
## Conclusion
### The network has been successfully created, and the project is complete.

# Thank You...







