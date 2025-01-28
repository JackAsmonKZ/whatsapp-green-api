import "./style.scss";

interface ChatItemI {
  message: string;
  type: "incoming" | "outgoing";
}

export const ChatItem = ({ message, type }: ChatItemI) => {
  const className =
    type === "incoming"
      ? "chat-items chat-items--incoming"
      : "chat-items chat-items--outcoming";
  return <div className={className}>{message}</div>;
};
