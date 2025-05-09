# DevTinder UI

This is the frontend for DevTinder, a developer matchmaking platform. Built with React, Redux Toolkit, Tailwind CSS, and DaisyUI.

## Features

- User authentication (signup, login, logout)
- Profile management and editing
- Swipeable feed of developers
- Send and review connection requests
- View connections and chat in real-time
- Premium membership purchase via Razorpay

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- The [DevTinder Backend](../devTinder-Backend) running and accessible

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/devTinder-UI.git
   cd devTinder-UI
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. The app will be available at [http://localhost:5173](http://localhost:5173).

### Environment

- The backend URL is set in [`src/utils/constants.js`](src/utils/constants.js). Update it if your backend is deployed elsewhere.

## Deployment

- The frontend is deployed at: `https://your-frontend-url.com`
- Make sure the backend CORS settings allow requests from your frontend domain.

## License

MIT