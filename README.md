

#  Gemini Clone - AI Chat Assistant

A modern React-based chat application that integrates with Google's Gemini AI API to provide an interactive conversational experience similar to ChatGPT or Google Bard.

##  Features

- **Real-time AI Chat**: Interactive conversations with Google's Gemini 2.0 Flash model
- **Modern UI**: Clean, responsive interface with smooth animations
- **Message History**: Persistent conversation display with user/bot message differentiation
- **Keyboard Shortcuts**: Send messages with Enter key
- **Dynamic Interface**: Search bar transforms into chat interface when active
- **Icon Integration**: FontAwesome icons for enhanced visual experience


## 📁 Project Structure

```
gemini-clone/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── searchBar.jsx          # Main chat interface component
|   |   --- leftDrawerMenu.jsx     # menu drawer added
|   |   --- rightDrawerMenu.jsx 
│   ├── styles/
│   │   └── searchBar.css          # Styling for chat interface
│   │   --- leftDrawerMenu.css     $ styling for menu drawer
|   |   --- rightDrawerMenu.css 
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   └── index.jsx                  # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # Project documentation
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Pure CSS with custom animations
- **Icons**: FontAwesome React components
- **HTTP Client**: Axios for API requests
- **AI Integration**: Google Gemini 2.0 Flash API
- **Development**: JavaScript (JSX)

## 📦 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `axios`: ^1.11.0
- `@fortawesome/react-fontawesome`: ^0.2.3
- `@fortawesome/free-solid-svg-icons`: ^7.0.0

### Development Dependencies
- `vite`: ^5.0.0
- `@vitejs/plugin-react`: ^4.2.0
- `typescript`: ^5.2.2

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brahmagithubrit/geminiClone.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google Gemini API**
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Replace the API key in `src/components/searchBar.jsx`:
   ```javascript
   "X-goog-api-key": "YOUR_API_KEY_HERE"
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start chatting with the AI!

## 🎯 Usage

1. **Starting a Conversation**
   - Click on the search input or start typing
   - The interface will transform into chat mode

2. **Sending Messages**
   - Type your message in the input field
   - Press Enter or click the send button
   - Wait for the AI response

3. **Viewing Conversation**
   - User messages appear on the right (gray background)
   - AI responses appear on the left
   - Scroll through the conversation history

## 🎨 UI Components

### SearchBar Component
- **Location**: `src/components/searchBar.jsx`
- **Features**:
  - Dynamic input field
  - Message history display
  - Send/microphone button toggle
  - Tools integration placeholder

### Styling
- **Location**: `src/styles/searchBar.css`
- **Features**:
  - Responsive design
  - Smooth transitions
  - Message bubble styling
  - Clean, modern aesthetics

## 🔧 Configuration

### API Configuration
The Gemini API is configured in the `getResponse` function:
```javascript
const data = await axios.post(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
  {
    contents: [{ parts: [{ text: searchQuery }] }],
  },
  {
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": "YOUR_API_KEY"
    }
  }
);
```

### Build Configuration
- **Development**: `npm run dev` (Vite dev server)
- **Production**: `npm run build` (Static build)
- **Preview**: `npm run preview` (Preview production build)



## Running React on Replit

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)

