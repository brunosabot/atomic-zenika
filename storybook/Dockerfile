FROM node:alpine
WORKDIR /atomiczenika
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY .storybook ./.storybook
COPY components ./components
COPY lib ./lib
COPY scripts ./scripts
COPY babel.config.js ./babel.config.js
RUN CI=true yarn test:generate-output
RUN CI=true yarn build-storybook --quiet --loglevel warn

FROM nginx:alpine
COPY --from=0 atomiczenika/storybook-static /usr/share/nginx/html
COPY storybook/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY storybook/nginx/other.conf /etc/nginx/conf.d/other.conf
