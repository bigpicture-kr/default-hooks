FROM node:16 as build-stage

WORKDIR /app
ADD . .

RUN yarn install
RUN yarn storybook:build

ARG NPM_TOKEN

RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc 
RUN npm publish


# production stage
FROM nginx:stable-alpine as production-stage

COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



