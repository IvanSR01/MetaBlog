export type TypeData = {
  title: string;
  path: string;
};

export const dataLinks: TypeData[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Created",
    path: "/created",
  },
  {
    title: "Logout",
    path: "/null",
  },
];
export const dataLinksNotAuth: TypeData[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Sing In",
    path: "/singIn",
  },
  {
    title: "Sing Up",
    path: "/singUp",
  },
];
