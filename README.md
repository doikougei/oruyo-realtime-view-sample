# Nuxt & Firebase, ORUYO realtime application Example

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Build Setup

```bash
# install dependencies
$ cd app
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# install dependencies for functions
$ cd ../functions
$ yarn
```

## Deploy to Firebase

This application can also be launched with the normal Node.js application.
However, by using Firebase Hosting and Firebase Functions, it can be used efficiently in a serverless environment.

### setup project

```bash
$ firebase init
```

### deploy

```bash
$ firebase deploy
```

### Service

ORUYO につては[こちら](https://oruyo.doikougei.com/)

![Image](https://res.cloudinary.com/doikougei/image/upload/v1582944464/ORUYO_service_imag.png)

### Article

本レポジトリの説明記事は[こちら](https://doikougei.com/blogs/oruyo/oruyo-nuxt-firebase-realtime/)
