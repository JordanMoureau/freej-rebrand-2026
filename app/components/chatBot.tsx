import styles from "./chatbot.module.css";

const topics = [
  "Price Ranges for Different Types of Projects",
  "If Working With Me Is the Right Choice",
  "Types of Projects We Take On",
  "The Results We Typically Get",
];

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={styles.star}
    >
      <path d="m10 1 4 1 1 7 7-3 2 4-7 4 5 6-4 3-6-6-4 6-4-2 3-8-7-2 1-4 8 2Z" />
    </svg>
  );
}

export default function ChatBot() {
  return (
    <section className={styles.section} aria-labelledby="chatbot-heading">
      <div className={styles.chatPanel}>
        <div
          className={styles.messages}
          role="log"
          aria-label="Conversation with FreeJ Bot"
          aria-live="polite"
          aria-relevant="additions text"
        >
          <div className={styles.assistantMessage}>
            <div className={styles.avatar} aria-hidden="true">
              fj
            </div>

            <div className={styles.assistantBubble}>
              <p>What can I help you with?</p>
            </div>
          </div>

          {/* Render user messages with this structure:
          <div className={styles.userMessage}>
            <p>{message.content}</p>
          </div>
          */}

          <p className={styles.typingIndicator} role="status" hidden>
            Thinking…
          </p>
        </div>

        <p className={styles.error} role="alert" hidden />

        <form className={styles.messageForm}>
          <label htmlFor="chatbot-message" className={styles.srOnly}>
            Your message
          </label>

          <textarea
            id="chatbot-message"
            name="message"
            className={styles.messageInput}
            placeholder="Type here..."
            rows={1}
            maxLength={4000}
            required
          />

          {/* Switch to submit when we connect the form handler. */}
          <button type="button" className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>

      <div className={styles.intro}>
        <header className={styles.heading}>
          <h2 id="chatbot-heading">Chat with my Bot</h2>
          <p>The FreeJ Bot Can Tell You</p>
        </header>

        <ul className={styles.topics}>
          {topics.map((topic) => (
            <li className={styles.topic} key={topic}>
              <Star />
              <span>{topic}</span>
              <Star />
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>
          You’re chatting with Jordan’s AI assistant, not Jordan directly.
        </p>
      </div>
    </section>
  );
}
