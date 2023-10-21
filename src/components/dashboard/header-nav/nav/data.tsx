import home_outlined from "@/assets/app-icon/home-outline.svg";
import shield from "@/assets/app-icon/shield-half.svg";
import person_outlined from "@/assets/app-icon/person-outline.svg";
import business_outlined from "@/assets/app-icon/business-outline.svg";
import flash_outlined from "@/assets/app-icon/flash-outline.svg";
import car_outlined from "@/assets/app-icon/car-outline.svg";
import construct_outlined from "@/assets/app-icon/construct-outline.svg";
import easel_outlined from "@/assets/app-icon/easel-outline.svg";

export const dataNav = [
  {
    title: "opportunités",
    items: [
      {
        title: "Maisons",
        icon_off: home_outlined,
        dropdown: true,
        path: "/house",
      },
      {
        title: "Appartements",
        icon_off: home_outlined,
        dropdown: true,
        path: "/apartment",
      },
      {
        title: "Études",
        icon_off: business_outlined,
        dropdown: true,
        path: "/",
      },
    ],
  },
  {
    title: "utilisateurs",
    items: [
      { title: "CEO & Admins", icon_off: shield, dropdown: false, path: "/" },
      {
        title: "Project Managers",
        icon_off: person_outlined,
        dropdown: false,
        path: "/",
      },
      {
        title: "Installateurs",
        icon_off: person_outlined,
        dropdown: false,
        path: "/",
      },
      {
        title: "Clients B2C",
        icon_off: person_outlined,
        dropdown: false,
        path: "/",
      },
    ],
  },
  {
    title: "données",
    items: [
      { title: "Bornes", icon_off: flash_outlined, dropdown: false, path: "/" },
      {
        title: "Véhicules",
        icon_off: car_outlined,
        dropdown: false,
        path: "/",
      },
      {
        title: "Accessoires",
        icon_off: construct_outlined,
        dropdown: false,
        path: "/",
      },
      {
        title: "Objectifs",
        icon_off: easel_outlined,
        dropdown: false,
        path: "/",
      },
    ],
  },
];
