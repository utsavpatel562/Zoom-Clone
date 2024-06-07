# Zoom Clone

A feature-rich Zoom clone built with modern technologies such as TypeScript, Next.js, Tailwind CSS, Shadcn, GetStream, Clerk, and Node.js.

## Features

- User Authentication with Clerk
- Real-time messaging with GetStream
- Video conferencing
- Responsive UI with Tailwind CSS
- Server-side rendering with Next.js

## Tech Stack

- **Frontend**: TypeScript, Next.js, Tailwind CSS, Shadcn
- **Backend**: Node.js
- **Authentication**: Clerk
- **Real-time Messaging**: GetStream

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/zoom-clone.git
   cd zoom-clone
   

### Install dependencies
```bash
npm install
# or
yarn install
```

### Set up environment variables
Create a .env.local file in the root directory and add the following variables:
```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
STREAM_API_KEY=your-getstream-api-key
STREAM_API_SECRET=your-getstream-api-secret
```
### Usage
User Authentication
<li>Sign up or log in using Clerk for user authentication.</li>
Messaging
<li>Real-time messaging is enabled using GetStream.</li>
Video Conferencing
<li>Start or join a video call session.</li>

### Project Structure
```bash
.
├── components    # Reusable UI components
├── pages         # Next.js pages
├── public        # Static assets
├── styles        # Tailwind CSS styles
├── utils         # Utility functions
├── server        # Node.js server code
├── .env.local    # Environment variables
├── README.md     # Project documentation
├── package.json  # Project dependencies and scripts
└── tsconfig.json # TypeScript configuration
```

### Contributing
Contributions are welcome! Please fork the repository and create a pull request.

### License
This project is licensed under the MIT License.

### Acknowledgements
<ul>
  <li>Next.js</li>
  <li>Tailwind CSS</li>
  <li>Shadcn</li>
  <li>GetStream</li>
  <li>Clerk</li>
  <li>Node.js</li>
</ul>

### Contact
If you have any questions or feedback, please reach out to me at utsavpatel562@gmail.com
Replace the placeholder values with your actual information where necessary. <br> This README provides a comprehensive overview and instructions for your Zoom Clone project.
