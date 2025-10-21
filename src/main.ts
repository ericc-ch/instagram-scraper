import { handleSocialBlade } from "./social-blade";

const routes = [
  {
    pattern: new URLPattern({
      baseURL: "https://socialblade.com",
      pathname: "/instagram/user/:username",
    }),
    handler: handleSocialBlade,
  },
];

function main(url: string) {
  routes.find((route) => {
    const match = route.pattern.test(url);
    if (match) {
      route.handler();
    }
  });
}

main(window.location.href);
