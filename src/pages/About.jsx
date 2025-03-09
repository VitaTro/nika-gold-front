import React from "react";
import { useTranslation } from "react-i18next";
import {
  Header,
  ItemForm,
} from "../components/AuthForm/AuthFormRegister.styled";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header>{t("about_us")}</Header>

      <ItemForm>{t("about_info")}</ItemForm>
    </div>
  );
};
