import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="py-5 bg-slate-200">
      <div className="container mx-auto ">{t("title")}</div>
    </div>
  );
};

export default Footer;
