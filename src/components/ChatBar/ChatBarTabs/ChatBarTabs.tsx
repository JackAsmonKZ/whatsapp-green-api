import "./style.scss";

export const ChatBarTabs = () => {
  return (
    <div className="chat-bar-tabs">
      <button className="chat-bar-tabs__tab chat-bar-tabs__tab--active">
        Все
      </button>
      <button className="chat-bar-tabs__tab">Непрочитанные</button>
      <button className="chat-bar-tabs__tab">Избранные</button>
    </div>
  );
};
