import {
  HomeOutlined,
  BusinessOutlined,
  PersonOutlined,
  BoltOutlined,
  Security,
  DirectionsCarOutlined,
  ConstructionOutlined,
  TrackChanges,
  Person,
  Bolt,
  DirectionsCar,
  Construction,
  Business,
  Home,
} from "@mui/icons-material";

export const dataNav = [
  {
    title: "opportunités",
    items: [
      {
        title: "Maisons",
        icon_off: HomeOutlined,
        icon_on: Home,
        dropdown: true,
        path: "/house",
      },
      {
        title: "Appartements",
        icon_off: HomeOutlined,
        icon_on: Home,
        dropdown: true,
        path: "/apartment",
      },
      {
        title: "Études",
        icon_off: BusinessOutlined,
        icon_on: Business,
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
        icon_on: Security,
        dropdown: false,
        path: "/admin",
      },
      {
        title: "Project Managers",
        icon_off: PersonOutlined,
        icon_on: Person,
        path: "/manager",
      },
      {
        title: "Installateurs",
        icon_off: PersonOutlined,
        icon_on: Person,
        path: "/installer",
      },
      {
        title: "Clients B2C",
        icon_off: PersonOutlined,
        icon_on: Person,
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
        icon_on: Bolt,
        path: "/terminal",
      },
      {
        title: "Véhicules",
        icon_on: DirectionsCar,
        icon_off: DirectionsCarOutlined,
        path: "/car",
      },
      {
        title: "Accessoires",
        icon_off: ConstructionOutlined,
        icon_on: Construction,
        path: "/accessory",
      },
      {
        title: "Objectifs",
        icon_off: TrackChanges,
        icon_on: TrackChanges,
        path: "/objective",
      },
    ],
  },
];
