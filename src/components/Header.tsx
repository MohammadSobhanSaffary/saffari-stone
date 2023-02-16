import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex items-center justify-between bg-red ">
        <i />
        <span className="text-black text-3xl text-bold text-center ml-5">
          {t("SaffariStone")}
        </span>
        <AiOutlineMenu color="black" size={45} style={{ marginTop: 10 }} />
      </div>
    </>
  );
}

export default Header;
