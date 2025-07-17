// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const closeBtn = document.querySelector(".close-btn");
// const chatbox = document.querySelector(".chatbox");
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");

// let userMessage = null; // Variable to store user's message
// const API_KEY = "AIzaSyC_wmsaOoNI1sLwdcLgtVnUOC-19kSdFFY"; // Paste your API key here
// const inputInitHeight = chatInput.scrollHeight;

// const createChatLi = (message, className) => {
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat", `${className}`);
//     let chatContent = className === "outgoing"
//         ? `<p></p>`
//         : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
//     chatLi.innerHTML = chatContent;
//     chatLi.querySelector("p").textContent = message;
//     return chatLi;
// };

// const generateResponse = (chatElement) => {
//     const API_URL = "https://api.openai.com/v1/chat/completions";
//     const messageElement = chatElement.querySelector("p");

//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: userMessage }]
//         })
//     };

//     fetch(API_URL, requestOptions)
//         .then(res => res.json())
//         .then(data => {
//             messageElement.textContent = data.choices[0].message.content.trim();
//         })
//         .catch(() => {
//             messageElement.classList.add("error");
//             messageElement.textContent = "Oops! Something went wrong. Please try again.";
//         })
//         .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// };

// const handleChat = () => {
//     userMessage = chatInput.value.trim();
//     if (!userMessage) return;

//     chatInput.value = "";
//     chatInput.style.height = `${inputInitHeight}px`;

//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     chatbox.scrollTo(0, chatbox.scrollHeight);

//     setTimeout(() => {
//         const incomingChatLi = createChatLi("Thinking...", "incoming");
//         chatbox.appendChild(incomingChatLi);
//         chatbox.scrollTo(0, chatbox.scrollHeight);
//         generateResponse(incomingChatLi);
//     }, 600);
// };

// chatInput.addEventListener("input", () => {
//     chatInput.style.height = `${inputInitHeight}px`;
//     chatInput.style.height = `${chatInput.scrollHeight}px`;
// });

// chatInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//         e.preventDefault();
//         handleChat();
//     }
// });

// sendChatBtn.addEventListener("click", handleChat);
// closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
// chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// // ✅ Mobile nav toggle
// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.querySelector(".toggle-btn");
//     const nav = document.querySelector(".nav");

//     toggleBtn.addEventListener("click", () => {
//         nav.classList.toggle("nav-active");
//     });
// });



// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const closeBtn = document.querySelector(".close-btn");
// const chatbot = document.querySelector(".chatbot");
// const chatbox = document.querySelector(".chatbox");
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");

// let userMessage = null;
// const API_KEY = "AIzaSyC_wmsaOoNI1sLwdcLgtVnUOC-19kSdFFY";
// const inputInitHeight = chatInput.scrollHeight;

// // 👇 Toggle chatbot open/close
// chatbotToggler.addEventListener("click", () => {
//   chatbot.classList.toggle("open");
// });

// closeBtn.addEventListener("click", () => {
//   chatbot.classList.remove("open");
// });

// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent = className === "outgoing"
//     ? `<p></p>`
//     : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
//   chatLi.innerHTML = chatContent;
//   chatLi.querySelector("p").textContent = message;
//   return chatLi;
// };

// const generateResponse = (chatElement) => {
//   const API_URL = "https://api.openai.com/v1/chat/completions";
//   const messageElement = chatElement.querySelector("p");

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${API_KEY}`
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: userMessage }]
//     })
//   };

//   fetch(API_URL, requestOptions)
//     .then(res => res.json())
//     .then(data => {
//       messageElement.textContent = data.choices[0].message.content.trim();
//     })
//     .catch(() => {
//       messageElement.classList.add("error");
//       messageElement.textContent = "Oops! Something went wrong. Please try again.";
//     })
//     .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// };

// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;

//   chatInput.value = "";
//   chatInput.style.height = `${inputInitHeight}px`;

//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//   chatbox.scrollTo(0, chatbox.scrollHeight);

//   setTimeout(() => {
//     const incomingChatLi = createChatLi("Thinking...", "incoming");
//     chatbox.appendChild(incomingChatLi);
//     chatbox.scrollTo(0, chatbox.scrollHeight);
//     generateResponse(incomingChatLi);
//   }, 600);
// };

// chatInput.addEventListener("input", () => {
//   chatInput.style.height = `${inputInitHeight}px`;
//   chatInput.style.height = `${chatInput.scrollHeight}px`;
// });

// chatInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//     e.preventDefault();
//     handleChat();
//   }
// });

// sendChatBtn.addEventListener("click", handleChat);

// // ✅ Mobile nav toggle
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleBtn = document.querySelector(".toggle-btn");
//   const nav = document.querySelector(".nav");

//   toggleBtn.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//   });
// });




const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbot = document.querySelector(".chatbot");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const openIcon = document.getElementById("open-icon"); // 💬 icon
const closeIcon = document.getElementById("close-icon"); // ❌ icon

let userMessage = null;
const API_KEY ="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";
const inputInitHeight = chatInput.scrollHeight;

// ✅ Toggle chatbot visibility
chatbotToggler.addEventListener("click", () => {
  chatbot.classList.toggle("open");
  const isOpen = chatbot.classList.contains("open");
  openIcon.style.display = isOpen ? "none" : "inline";
  closeIcon.style.display = isOpen ? "inline" : "none";
});

// ✅ Close chatbot with inner 'X' button
closeBtn.addEventListener("click", () => {
  chatbot.classList.remove("open");
  openIcon.style.display = "inline";
  closeIcon.style.display = "none";
});

// ✅ Create a chat bubble
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing"
    ? `<p></p>`
    : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

// ✅ Generate AI response
const generateResponse = (chatElement) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = chatElement.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    })
  };

  fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then(data => {
      messageElement.textContent = data.choices[0].message.content.trim();
    })
    .catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

// ✅ Handle user input
const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

// ✅ Auto-resize textarea
chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// ✅ Submit on Enter key (desktop only)
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

// ✅ Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const nav = document.querySelector(".nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
});
