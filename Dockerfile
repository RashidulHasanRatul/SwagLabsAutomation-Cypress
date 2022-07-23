FROM cypress/base:16.13.0

COPY ./cypress ./cypress
COPY ./server-config ./server-config
COPY ./.gitattributes ./.gitattributes
COPY ./.gitignore ./.gitignore
COPY ./cypress.config.js ./cypress.config.js
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
COPY ./README.md ./README.md

RUN npm install
RUN npm run cy:run