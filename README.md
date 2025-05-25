💬 ConnectNexus – Real-Time Chat Application


ConnectNexus is a real-time chat application that supports instant messaging for both private (one-to-one) and group conversations. Built with modern web technologies, it enables seamless communication with real-time updates, user authentication, and group chat management.

🧰 Tech Stack
Frontend: React.js

Backend: Node.js with Express.js

Database: MongoDB (Mongoose)

Real-Time Communication: Socket.IO

Authentication: JWT (JSON Web Tokens)

🔑 Key Features
⚡ Real-time Messaging
Built using Socket.IO for real-time, bi-directional messaging.

Instant delivery of messages across connected clients.

👥 Group Chat Support
Create, rename, and manage group chats.

Group admins can add or remove participants dynamically.

🔐 JWT Authentication
Secure login/signup flow.

JWT protects API routes from unauthorized access.

User sessions are maintained via token-based validation.

💾 Persistent Chat Data
All user profiles, messages, and group chats are stored in MongoDB.

Ensures scalability and structured querying with Mongoose.

🖼️ Screenshots
![image](https://github.com/user-attachments/assets/63ef089e-086d-4667-8bea-0f238f262a74)
![image](https://github.com/user-attachments/assets/d1689e49-daf9-4157-8602-93988db25342)


📱 Chat Interface

![image](https://github.com/user-attachments/assets/c93f5115-d1c9-4495-af44-9121c87fb7e1)






🚀 Project Setup
✅ Prerequisites
Node.js (v14 or higher)

NPM or Yarn

MongoDB Atlas or local MongoDB

A JWT secret key (process.env.JWT_SECRET)

📦 Cloning and Running ConnectNexus
bash
Copy
Edit
# Clone the repository
```git clone https://github.com/khilav111/ConnectNexus
cd ConnectNexus

# Install backend dependencies
cd backend
npm install

# Setup environment variables
touch .env
# Add the following to .env
# MONGODB_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
# PORT=5000

# Start the backend server
npm start
bash
Copy
Edit
# In a new terminal, run the frontend
cd ../frontend
npm install
npm run dev
