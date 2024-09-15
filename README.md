
# **AISA (AI Support Assistant)** – Devtitans  
## Project Overview  

AISA is a next-generation AI-powered customer support platform, built to revolutionize how companies engage with their customers. It integrates cutting-edge technologies, such as the Retrieval-Augmented Generation (RAG) model, generative AI using Llama 3.1, and powerful multi-modal data handling with Gemini 1.5 Flash API for a seamless experience across text, voice, and image inputs. The platform is optimized for the Indian context and offers scalable solutions to serve global needs.

The platform consists of two key components:
- **Customer-Service-App (Next.js)**: A user-friendly interface where customers interact with the AI for support.
- **Streamlit Dashboard**: A comprehensive dashboard for customer support agents to monitor and assist customers, using data retrieval from the RAG pipeline and other key metrics.

---

# Repository 1: **Customer-Service-App (Next.js)**  
This repository contains the code for the Next.js frontend, which serves as the customer interface. This part of the platform allows customers to input queries via text, voice, or images. It then communicates with the backend to retrieve relevant information and provide a detailed, real-time response.

### 1. **Features**
- **Multi-channel Input**: Users can submit queries via text, audio, or images (using Gemini 1.5 Flash API).
- **Multi-language Support**: A dropdown menu allows users to select their preferred language for the AI's response.
- **Sleek and Interactive Design**: The user interface is minimalistic yet dynamic, focusing on ease of use for customers while ensuring a sleek look and feel that fosters loyalty and trust.
- **Real-Time AI Responses**: The Llama 3.1 model powers the real-time responses, reducing latency and ensuring high-quality customer interaction.
  
### 2. **Technologies Used**
- **Next.js**: The primary framework for building the frontend with components of TypeScript and React.
- **TypeScript**: For static typing and enhancing the development process by catching potential bugs early.
- **Tailwind CSS**: For rapid and responsive UI development with customizable styling.
- **Gemini 1.5 Flash API**: Used to process and convert voice and image inputs into text.
- **Twilio**: For voice interaction, allowing users to speak their queries and receive AI-generated responses.
- **TinyMCE**: For creating a rich-text editor where users can input text queries.

### 3. **Installation**
To get started with the **customer-service-app**, follow these steps:
  
```bash
# Clone the repository
git clone https://github.com/Devtitans/customer-service-app.git

# Navigate to the project directory
cd customer-service-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Ensure you have **Node.js** installed on your machine. You will also need an API key for the **Gemini 1.5 Flash API** and **Twilio** for voice support. Store these keys in a `.env` file like so:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_TWILIO_API_KEY=your_twilio_api_key
```

### 4. **File Structure**
Here’s a breakdown of the important files in this repository:

```bash
customer-service-app/
├── pages/
│   ├── index.tsx  # The main page where users interact with the AI
│   ├── api/
│   │   ├── query.ts  # Backend API handling customer queries
│   │   └── voice.ts  # API for voice queries via Twilio
├── components/
│   ├── Header.tsx  # Contains the header UI
│   ├── ChatBox.tsx  # UI component for customer queries
│   ├── LanguageDropdown.tsx  # Dropdown for language selection
│   └── ImageUploader.tsx  # Allows users to upload screenshots
└── styles/
    └── globals.css  # Global CSS using Tailwind CSS
```

### 5. **Usage**
Once the app is running, customers can:
- Select their preferred language.
- Input queries via text, voice, or upload screenshots.
- Receive real-time responses powered by the RAG pipeline and Llama 3.1 model.

### 6. **Challenges Faced**
During development, we faced a challenge when integrating image and voice processing. Initially, we considered using Tesseract for image-to-text conversion. However, due to performance and scalability concerns, we switched to **Gemini 1.5 Flash API**, which offers more robust support for multiple languages and formats (text, audio, video, and images). This change was made late in the project, which required a significant rewrite of the image and voice handling APIs.


# **Conclusion**  

The **AISA** platform, developed by **Devtitans**, aims to solve one of the most pressing issues in customer service today – providing fast, reliable, and accessible support across multiple channels. By leveraging **Next.js**, **Streamlit**, **Pinecone**, **Gemini 1.5 Flash API**, and **Mistral**, we've built a comprehensive system that can understand and process text, voice, and images, while providing accurate, contextually-relevant responses.

We encountered challenges, especially with multi-modal input processing and document retrieval, but by pivoting to more robust solutions like **Gemini 1.5** and **Pinecone**, we were able to overcome these hurdles. The result is a platform that is not only scalable but also adaptable to a global audience, with real-time multi-language support and robust AI-powered customer interactions.

