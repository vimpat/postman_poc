

# Set up for Node.js application running local mock server Setup in Visual Studio Code.

This guide will walk you through setting up a Node.js application in Visual Studio Code (VS Code).

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS)
- [Visual Studio Code](https://code.visualstudio.com/)

## Steps

### 1. Create a New Folder for Your Project

Open Visual Studio Code and create a new folder where you want to store your Node.js project.

### 2. Initialize Your Project

Open a new terminal in VS Code (Ctrl+`) and navigate to your project folder. Then, run the following command to initialize your project:

```bash
npm init -y
```

This will create a package.json file with default values.

### 3. Install Dependencies

```bash
npm install express
npm install -g @jordanwalsh23/postman-local-mock-server
postman-local -c PATH_TO_COLLECTION_JSON.json -p 8080
```


### 4. Create Your Node.js Application
create or use Server.js file from this solution and 

```bash
node server.js
```

Once local host is up and running, append request path after local host url.

Moving on to Azure World.

Step 1 :- Build and Deploy to Azure using VS code and Github repo. (step by step instruction)
https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode

Step 2:- Configure web app to include web.config file and AZ cloudshell command to specify start up file.
https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux
