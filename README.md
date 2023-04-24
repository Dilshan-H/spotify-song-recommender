# Spotify Song Recommender

Recommend songs based on your preferred tracks, artists using Spotify API

API 103: A boon for developers building applications
Video Link - https://youtu.be/YRVmXdWZbJM

## About

This project is a song recommender system that recommends songs based on your preferred tracks and artists using **Spotify API**. It is a web application built using Node.js, Express.js, HTML, CSS, and JavaScript. The application is hosted on [Railway Platform](https://railway.app/).

## Screenshots

| ![Spotify Song Recommender](https://user-images.githubusercontent.com/77499497/234086953-6caff044-16a3-47e9-ac1d-2b1ba9ac7d98.png) | ![Spotify Song Recommender](https://user-images.githubusercontent.com/77499497/234087283-f878805d-39d8-4680-a43f-93f6a0a43d0e.png) |
| ---------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------: |

## How to use

1. Go to [Spotify for Developers](https://developer.spotify.com/dashboard/) and create a new app.
2. Copy the **Client ID** and **Client Secret**.
3. Create a new file named **.env** in the root directory of the project.
4. Add the following lines to the **.env** file:
   ```
   PORT=5500
   SPOTIFY_CLIENT_ID=<your_client_id>
   SPOTIFY_CLIENT_SECRET=<your_client_secret>
   ```
5. Run the following commands in the terminal:
   ```
   npm install
   npm start
   ```
6. Open the browser and go to the URL: http://localhost:5500

## Deploying on Railway

1. Create an account on [Railway Platform](https://railway.app/).
2. Create a new project and connect it to your GitHub repository.
3. Add the following environment variables in the **.env** file on Railway:

```
PORT=3000
SPOTIFY_CLIENT_ID=<your_client_id>
SPOTIFY_CLIENT_SECRET=<your_client_secret>
```

4. Deploy the project on Railway.
5. Open the browser and go to the URL: https://your-project-name.railway.app

## References

- [Spotify for Developers](https://developer.spotify.com/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [API Week @Postman](https://aminoxix.gitbook.io/api-week/)

## License & Copyrights

**The MIT License**

This program is free software: you can redistribute it and/or modify it under the terms of the **MIT License**

## Authors

- CuriosBasant - [GitHub](https://github.com/CuriosBasant)
- Dilshan-H - [GitHub](https://github.com/Dilshan-H/)
