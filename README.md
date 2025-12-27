🌾 FarmAgent

AI-Powered Platform for Fake Fertilizer Detection & Smart Farming

FarmAgent is an AI-driven web application built to protect farmers from fake fertilizers and enable smarter farming decisions using computer vision, product verification, and soil analysis. The project is designed with a strong focus on real-world usability, low-cost deployment, and scalability across rural and semi-urban farming ecosystems.

🚜 Problem Statement

Fake and substandard fertilizers are a major challenge in agriculture:

Farmers suffer yield loss due to ineffective or harmful inputs

Counterfeit products damage soil health long-term

Lack of easy verification tools at the farmer level

Limited access to affordable soil testing and advisory systems

FarmAgent addresses these gaps using AI + web technology, directly accessible from a browser or smartphone.

🎯 Project Goals

Detect fake vs genuine fertilizers using image-based AI models

Enable QR / Fertilizer ID verification for authenticity checks

Provide AI-based soil quality analysis for informed crop decisions

Build a foundation for Agentic AI in farming (autonomous, decision-support systems)

Empower farmers with trust, transparency, and data-driven insights

🧠 What FarmAgent Does

FarmAgent currently focuses on three core capabilities:

1️⃣ Fake Fertilizer Detection (Image AI)

Farmers upload or capture fertilizer product images

AI model classifies products as Genuine or Fake

Built using Google Teachable Machine (image classification)

Runs directly in the browser (no server dependency)

2️⃣ Fertilizer Authenticity Verification (QR / ID-Based)

Each genuine fertilizer is assigned a unique Fertilizer ID / QR code

Farmers can scan or enter the ID

The system verifies the product against a trusted database (genuine.json)

Helps prevent counterfeit distribution at the supply-chain edge

3️⃣ AI-Based Soil Quality Analysis

Uses image-based soil classification (color, texture, moisture cues)

Predicts soil quality parameters in percentage confidence

Designed to work with low-cost inputs (phone camera / basic images)

Supports future fertilizer and crop recommendations

🧪 How It Works (High Level)

Image Input – User uploads product or soil images

Client-Side AI Inference – TensorFlow.js runs models locally

Verification Logic – Product IDs matched with genuine database

Decision Output – Clear, farmer-friendly results

No heavy backend is required in the current phase, making it lightweight and scalable.

🛠️ Tech Stack

Frontend

HTML5

CSS3

JavaScript (Vanilla)

AI / ML

Google Teachable Machine

TensorFlow.js

Image Classification Models

Data & Logic

JSON-based verification database

Client-side inference & validation

Deployment

Runs locally in browser

Can be hosted on GitHub Pages / static hosting

🌐 Why Browser-Based AI?

Works on low-end devices

No internet-heavy cloud calls

Privacy-friendly (images stay on device)

Ideal for rural and low-connectivity regions

💡 Business Opportunity

FarmAgent opens multiple high-impact opportunities:

1️⃣ B2G (Government & Agri-Departments)

Subsidy fraud prevention

Fertilizer authenticity monitoring

Farmer welfare programs

2️⃣ B2B (Agri Companies & Manufacturers)

Brand protection against counterfeits

Product traceability via QR systems

Data insights from farmer usage

3️⃣ B2C (Farmers & Cooperatives)

Freemium verification tools

Paid advisory & soil intelligence

Regional language AI assistants (future)

4️⃣ Platform Expansion

Crop recommendation engine

Yield prediction models

Agentic AI for autonomous farm decisions

🤖 Vision: Agentic AI for Farming

FarmAgent is a step toward Agentic Farming AI, where AI agents:

Observe (soil, inputs, crops)

Decide (what fertilizer, when, how much)

Act (recommendations, alerts, optimization)

This moves farming from reactive decisions to intelligent, proactive systems.

🚀 Future Roadmap

Multi-class fertilizer classification

Real-time camera scanning

Regional language support

Soil–fertilizer–crop recommendation engine

Blockchain-backed fertilizer traceability

Offline-first progressive web app (PWA)

🤝 Contributions

Contributions are welcome in:

AI model improvement

Dataset expansion

UI/UX enhancements

Field testing & validation

Feel free to fork, experiment, and improve.

📜 License

This project is open-source and intended for social impact, innovation, and scalable agricultural solutions.

🌱 Closing Note

FarmAgent is not just a tool — it is an early infrastructure layer for trust in agriculture, built with the belief that technology should directly empower the farmer at the ground level.

