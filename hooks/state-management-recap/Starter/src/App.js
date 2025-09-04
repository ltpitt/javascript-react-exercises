import logo from "./logo.svg";
import "./App.css";

/**
 * State Management Recap Exercise - Starter
 * Demonstrates modern React patterns with functional components
 * 
 * 🎯 EXERCISE GOAL: Implement state management for a chat application
 * 
 * 💡 MODERN REACT CONCEPTS TO APPLY:
 * - useState Hook for managing form input and messages
 * - Event handling with modern function syntax
 * - Controlled components for form inputs
 * - Conditional rendering and dynamic styling
 * - Immutable state updates using spread operator
 * 
 * 🔧 TODO: Add state management with useState Hook
 */

// Sample data - in a real app, this might come from an API
const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  // 🔧 TODO: Add useState for input text and message management
  // const [inputText, setInputText] = useState("");
  // const [messageList, setMessageList] = useState(messages);

  // 🔧 TODO: Implement proper disabled state logic
  // Should return true when input is empty or just whitespace
  const isDisabled = () => {
    return false; // Currently always returns false - needs implementation
  };

  // 🔧 TODO: Add handleSubmit and handleInputChange functions
  // These should follow modern React patterns with useState

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {/* Rendering two chat windows using modern map() pattern */}
        {users.map((user, userIndex) => (
          <div key={user.username} className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ul className="message-list">
              {/* Modern list rendering with proper key props */}
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username
                      ? "message sender"
                      : "message recipient"
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                {/* 🔧 TODO: Make this a controlled component with value and onChange */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your message..."
                  // value={inputText}
                  // onChange={handleInputChange}
                />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
