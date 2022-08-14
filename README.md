

## Local

### From github repo

 1. Clone the repository
 2. install nvm
 3. install node and npm (v14.19.0 recommended for node)
 4. cd into root directory of the cloned repo
 5. run npm i or npm i --legacy-peer-deps (if you encounter any dependency error with npm i)
 6. run "npm run dev" for development server.
 7. for local build, delete .next folder and then run "npm run build" and then "npm run start".
 8. Visit localhost:3000
 
### Using docker
 1. Make sure docker is installed in the machine.
 2. pull image from dockerhub
 3. run "docker run -p 3000:3000 <image_id>"
 4. Visit localhost:3000

