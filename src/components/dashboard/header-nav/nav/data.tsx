import {
  CarOutlinedIcon,
  ConstructOutlinedIcon,
  EaselOutlinedIcon,
} from "@/utils/icon";

import {
  HomeOutlined,
  BusinessOutlined,
  PersonOutlined,
  BoltOutlined,
  Security,
  DirectionsCarOutlined,
} from "@mui/icons-material";

export const dataNav = [
  {
    title: "opportunités",
    items: [
      {
        title: "Maisons",
        icon_off: HomeOutlined,
        dropdown: true,
        path: "/house",
      },
      {
        title: "Appartements",
        icon_off: HomeOutlined,
        dropdown: true,
        path: "/apartment",
      },
      {
        title: "Études",
        icon_off: BusinessOutlined,
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
        icon_off: Security,
        dropdown: false,
        path: "/admin",
      },
      {
        title: "Project Managers",
        icon_off: PersonOutlined,
        dropdown: false,
        path: "/manager",
      },
      {
        title: "Installateurs",
        icon_off: PersonOutlined,
        dropdown: false,
        path: "/installer",
      },
      {
        title: "Clients B2C",
        icon_off: PersonOutlined,
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
        icon_off: BoltOutlined,
        dropdown: false,
        path: "/terminal",
      },
      {
        title: "Véhicules",
        icon_off: DirectionsCarOutlined,
        dropdown: false,
        path: "/car",
      },
      /*   {
        title: "Accessoires",
        icon_off: ConstructOutlinedIcon,
        dropdown: false,
        path: "/accessory",
      }, */
      /*   {
        title: "Objectifs",
        icon_off: EaselOutlinedIcon,
        dropdown: false,
        path: "/objective",
      }, */
    ],
  },
];
