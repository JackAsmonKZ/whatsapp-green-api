import { ChatBarSearch } from "./ChatBarSearch/ChatBarSearch";
import { ChatBarTabs } from "./ChatBarTabs/ChatBarTabs";
import { ChatBarHeader } from "./ChatBatHeader/ChatBarHeader";
import { ChatList } from "./ChatList/ChatList";
import "./style.scss";

export const ChatBar = () => {
  return (
    <div className="chatbar">
      <ChatBarHeader />
      <ChatBarSearch />
      <ChatBarTabs />
      <ChatList />
    </div>
  );
};
