

# This guide will walk you through setting up a Node.js application in Visual Studio Code (VS Code).

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS)
- [Visual Studio Code](https://code.visualstudio.com/)
- https://www.npmjs.com/package/@jordanwalsh23/postman-local-mock-server

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
create or use Server.js file from this solution and run following command to get localhost running.

```bash
node server.js
```

Once local host is up and running, append request path after local host url.

## Sample test 
 - Localhost url with baseUri : http://localhost:3555
 - Get cards endpoint : baseUri + "/gcb/api/v1/cards?cardFunction=Debit"
 - http://localhost:3555/gcb/api/v1/cards?cardFunction=Debit




## Moving on to Azure World.

### Step 1 :- Build and Deploy to Azure using VS code and Github repo. (step by step instruction)
https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode


![image](https://github.com/vimpat/postman_poc/assets/164297543/2539bada-0eac-4707-918f-cbc91c3d8f83)


![image](https://github.com/vimpat/postman_poc/assets/164297543/7faa64bb-2d70-4c39-a770-bd36c70d974a)


![image](https://github.com/vimpat/postman_poc/assets/164297543/51010d66-f648-4662-a45a-d7b2f71453e0)


![image](https://github.com/vimpat/postman_poc/assets/164297543/9310cea2-1ca2-4acf-8b3b-da31b58af12f)



### Step 2:- Configure web app to include web.config file and AZ cloudshell command to specify start up file.
https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux
