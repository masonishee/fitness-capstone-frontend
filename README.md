# MuscleMentor React.js Frontend

Welcome to the MuscleMentor React.js Frontend! This frontend application is designed to interact with the MuscleMentor Ruby on Rails backend API, providing a user interface for managing exercises, routines, and workouts.

## Getting Started

Before running the React.js frontend, make sure you have the following prerequisites installed:

- Node.js
- npm

## Installing Dependencies

1. Clone the repository: `git clone https://github.com/masonishee/fitness-capstone-frontend.git`
2. Navigate to the project directory: `cd fitness-capstone-frontend`
3. Install dependencies: `npm install`

## Configuring Backend API

Make sure your Ruby on Rails backend API is up and running. If you haven't set it up, follow the instructions in the [MuscleMentor Backend API README](https://github.com/masonishee/fitness-capstone-api.git).

Once your backend is running, configure the API endpoint in the React frontend. Locate the file `src/config.js` and update the `API_BASE_URL` variable with the URL of your backend API.

```javascript
// src/config.js

const config = {
  API_BASE_URL: "http://localhost:3000",
};

export default config;
```
