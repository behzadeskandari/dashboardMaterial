import React from "react";
import { createStore } from "redux";

const allLanguages = [
  { code: "en", name: "English" },
  { code: "per", name: "persian" },
  { code: "ar", name: "arabic" },
];

export const translations = [
  {
    enMenu: [
      {
        Currency: "Currency",
        EXCHANGERATE: "Exchange Rate",
        Products: "products",
        PERSON: "person",
        COSTOMSANDPORT: "costom And Port",
        LANGUAGE: "Language",
        REGION: "REGION",
        SERVICES: "SERVICES",
        UM: "UM",
      },
    ],
    perMenu: [
      {
        Currency: "واحد پول",
        EXCHANGERATE: "نرخ تعادل",
        Products: "کالا",
        PERSON: "شخص",
        COSTOMSANDPORT: "گمرک و بندر",
        LANGUAGE: "زبان",
        REGION: "منطقه",
        SERVICES: "سرویس ها",
        UM: "مدیریت کاربران",
      },
    ],
    arMenu: [
      {
        Currency: "عملة",
        EXCHANGERATE: "سعر الصرف",
        Products: "منتجات",
        PERSON: "شخص",
        COSTOMSANDPORT: "الجمارك والميناء",
        LANGUAGE: "لغة",
        REGION: "منطقة",
        SERVICES: "خدمات",
        UM: "إدارةالمستخدم",
      },
    ],

    enForm: [
      {
        CurrencyTypeCode: "Currency Type Code",

        CurrencyTypeName: "Currency Type Name",
        Date: "Date",
        Modifier: "Modifier",
        ModifierDateTime: "Modifier Date Time",
        Note: "Note",
      },
    ],
    PerForm: [
      {
        CurrencyTypeCode: "کد واحد پول",
        CurrencyTypeName: "نام نوعواحد پول",
        Date: "تاریخ",
        Modifier: "ویرایش کننده",
        ModifierDateTime: "تاریخ و زمان ویرایش",
        Note: "توضیحات",
      },
    ],
    ArFrom: [
      {
        CurrencyTypeCode: "رمز نوع العملة",
        CurrencyTypeName: "اسم نوع العملة",
        Date: "تاریخ",
        Modifier: "المعدل",
        ModifierDateTime: "وقت تعديل التاريخ",
        Note: "ملحوظة",
      },
    ],

    EnBtn: [{ AddNew: "Add New", Submit: "Submit" }],
    PerBtn: [{ AddNew: "ایجاد جدید", Submit: "ثبت" }],
    ArBtn: [{ AddNew: "اضف جديد", Submit: "إرسال" }],

    EnTable: [{}],
    PerTable: [{}],
    ArTable: [{}],
  },
];

const getTranslation = (lang, text) => {
  console.log(lang, text);
  debugger;

  return translations[lang][text];
};

const languages = (state = "en", action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.language;
    default:
      return state;
  }
};

const store = createStore(languages);

const LanguageSelector = () => {
  const options = allLanguages.map((language) => {
    return (
      <option
        style={{ padding: "10px", margin: "10px", width: "10px" }}
        value={language.code}
      >
        {language.name}
      </option>
    );
  });
  return (
    <select
      onChange={(e) => {
        store.dispatch({
          type: "CHANGE_LANGUAGE",
          language: e.target.value,
        });
      }}
    >
      {options}
    </select>
  );
};

export default class LanguageSwitcher extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div>
        {/* <p>{getTranslation(store.getState(), "text1")}</p> */}
        <LanguageSelector />
      </div>
    );
  }
}
