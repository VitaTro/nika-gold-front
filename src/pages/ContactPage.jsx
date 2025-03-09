import React from "react";
import { useTranslation } from "react-i18next";
import {
  Header,
  ItemForm,
} from "../components/AuthForm/AuthFormRegister.styled";
export const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header>{t("contact_us")}</Header>
      <ItemForm>{t("contact_info")}</ItemForm>
    </div>
  );
};
