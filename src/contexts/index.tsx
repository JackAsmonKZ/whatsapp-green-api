import { createContext } from "react";
import {
  ApiDataContextI,
  ChatMessagesContexI,
  TabIndexContextI,
} from "../types";

export const TabIndexContext = createContext<TabIndexContextI>({
  tabIndex: "empty",
  setTabIndex: null,
});
export const ApiDataContext = createContext<ApiDataContextI | null>(null);

export const ChatMessagesContext = createContext<ChatMessagesContexI | null>(
  null
);
