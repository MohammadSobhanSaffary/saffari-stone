import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex items-center justify-between bg-red  pt-4">
        <i />
        <span className="text-black text-4xl font-extrabold text-center ml-5 font-[Nastaligh] mt-2">
          {t("SaffariStone")}
        </span>
        <AiOutlineMenu color="black" size={45} />
      </div>
    </>
  );
}

export default Header;
