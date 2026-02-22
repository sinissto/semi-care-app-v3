export const menusData = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/services",
    name: "Services",
    subMenu: [
      {
        name: "Peritoneal Dialysis (CAPD)",
        desc: "Providing comprehensive peritoneal dialysis care",
        icon: "Cross",
        url: "/services/peritoneal-dialysis",
      },
      {
        name: "Basic care",
        desc: "Offering essential healthcare services",
        icon: "Orbit",
        url: "/services/basic-care",
      },
      {
        name: "Treatment care",
        desc: "Medical treatment by nursing professionals at home",
        icon: "Syringe",
        url: "/services/treatment-care",
      },
      {
        name: "Domestic services",
        desc: "Assisting with daily household tasks and chores",
        icon: "BrushCleaning",
        url: "/services/domestic-services",
      },
      {
        name: "Respite care",
        desc: "Care for your loved ones, giving you a much-needed break",
        icon: "HandHeart",
        url: "/services/respite-care",
      },
      {
        name: "All services",
        desc: "All services we provide to make your life easier and better",
        icon: "MoveUpRightIcon",
        url: "/services",
      },
    ],
    gridCols: 1,
  },
  // {
  //   url: "/fqa",
  //   name: "FQA",
  // },
  {
    url: "/about",
    name: "About us",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];
