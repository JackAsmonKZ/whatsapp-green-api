import { useState } from "react";
import "./App.css";
import { ChatBar } from "./components/ChatBar/ChatBar";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { Header } from "./components/Header/Header";
import { useAuthorization } from "./hooks/useAuthorization";
import {
  ApiDataContext,
  ChatMessagesContext,
  TabIndexContext,
} from "./contexts";
import { ChatMessage } from "./types";

const App = () => {
  const [tabIndex, setTabIndex] = useState<string>("empty");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const { idInstance, apiTokenInstance } = useAuthorization();

  return (
    <TabIndexContext.Provider value={{ tabIndex, setTabIndex }}>
      <ApiDataContext.Provider value={{ idInstance, apiTokenInstance }}>
        <ChatMessagesContext.Provider value={{ chatMessages, setChatMessages }}>
          <div className="app">
            <Header />
            <ChatBar />
            <ChatWindow />
          </div>
        </ChatMessagesContext.Provider>
      </ApiDataContext.Provider>
    </TabIndexContext.Provider>
  );
};

export default App;
