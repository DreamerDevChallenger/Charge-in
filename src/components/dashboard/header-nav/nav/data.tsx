import {
  BusinessOutlinedIcon,
  CarOutlinedIcon,
  ConstructOutlinedIcon,
  EaselOutlinedIcon,
  FlashOutlinedIcon,
  HomeOutlinedIon,
  PersonOutlinedIcon,
  ShieldIcon,
} from "@/utils/icon";

export const dataNav = [
  {
    title: "opportunités",
    items: [
      {
        title: "Maisons",
        icon_off: HomeOutlinedIon,
        dropdown: true,
        path: "/house",
      },
      {
        title: "Appartements",
        icon_off: HomeOutlinedIon,
        dropdown: true,
        path: "/apartment",
      },
      {
        title: "Études",
        icon_off: BusinessOutlinedIcon,
        dropdown: true,
        path: "/",
      },
    ],
  },
  {
    title: "utilisateurs",
    items: [
      {
        title: "CEO & Admins",
        icon_off: ShieldIcon,
        dropdown: false,
        path: "/admin",
      },
      {
        title: "Project Managers",
        icon_off: PersonOutlinedIcon,
        dropdown: false,
        path: "/manager",
      },
      {
        title: "Installateurs",
        icon_off: PersonOutlinedIcon,
        dropdown: false,
        path: "/installer",
      },
      {
        title: "Clients B2C",
        icon_off: PersonOutlinedIcon,
        dropdown: false,
        path: "/client",
      },
    ],
  },
  {
    title: "données",
    items: [
      {
        title: "Bornes",
        icon_off: FlashOutlinedIcon,
        dropdown: false,
        path: "/terminal",
      },
      {
        title: "Véhicules",
        icon_off: CarOutlinedIcon,
        dropdown: false,
        path: "/car",
      },
      {
        title: "Accessoires",
        icon_off: ConstructOutlinedIcon,
        dropdown: false,
        path: "/accessory",
      },
      {
        title: "Objectifs",
        icon_off: EaselOutlinedIcon,
        dropdown: false,
        path: "/objective",
      },
    ],
  },
];
