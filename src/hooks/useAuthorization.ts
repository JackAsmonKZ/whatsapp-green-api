import { useEffect, useState } from "react";

export const useAuthorization = () => {
  const [idInstance, setIdInstance] = useState<string>("");
  const [apiTokenInstance, setApiTokenInstance] = useState<string>("");

  useEffect(() => {
    const getIdInstance = () => {
      let idInstance = "";

      while (!idInstance || idInstance.length < 1) {
        idInstance = prompt("Введите id instance:") || "";

        if (!idInstance) {
          alert("Вы не ввели id. Попробуйте еще раз.");
        }
      }

      return idInstance;
    };

    const getApiToken = () => {
      let apiToken = "";

      while (!apiToken || apiToken.length < 1) {
        apiToken = prompt("Введите api token:") || "";

        if (!apiToken) {
          alert("Вы не ввели api token. Попробуйте еще раз.");
        }
      }

      return apiToken;
    };

    const idInstancePromt = getIdInstance();
    const apiTokenPromt = getApiToken();

    setIdInstance(idInstancePromt);
    setApiTokenInstance(apiTokenPromt);
  }, []);

  return { idInstance, apiTokenInstance };
};
