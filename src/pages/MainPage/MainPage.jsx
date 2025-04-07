import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  InfoContainer,
  WelcomeContainer,
  WelcomeMessage,
} from "./MainPage.styled";

const MainPage = () => {
  const { t } = useTranslation();
  const userName = useSelector((state) => state.auth.userName); // Ім'я користувача з Redux
  const userRole = useSelector((state) => state.auth.role); // Роль користувача

  return (
    <WelcomeContainer>
      <WelcomeMessage>
        {t("welcome_back")}, {userName || t("user")}!
      </WelcomeMessage>
      <InfoContainer>
        <p>
          {t("role")}: {userRole || t("standard_user")}
        </p>
        <p>{t("explore_dashboard")}</p>
      </InfoContainer>
    </WelcomeContainer>
  );
};

export default MainPage;
