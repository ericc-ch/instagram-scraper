import invariant from "tiny-invariant";
import type { Fiber } from "./types";
import { sleep } from "./lib";

function findComponentStates(domElement: HTMLElement): any[] {
  const fiberKey = Object.keys(domElement).find((key) =>
    key.startsWith("__reactFiber$"),
  );
  invariant(fiberKey, "Could not find Fiber node.");

  let current = domElement[
    fiberKey as keyof typeof domElement
  ] as unknown as Fiber;
  let componentFiber = null;

  while (current) {
    if (current.memoizedState) {
      componentFiber = current;
      break;
    }

    if (!current.return) break;

    current = current.return;
  }

  invariant(componentFiber, "Could not find a component with state.");

  console.log("Found component Fiber:", componentFiber.type);

  const states = [];
  let hook = componentFiber.memoizedState;

  while (hook) {
    if (hook.queue) {
      states.push(hook.memoizedState);
    }
    hook = hook.next;
  }

  return states;
}

const getData = async () => {
  const DAILY_METRICS_SELECTOR =
    ".lg\\:flex-row > div:nth-child(1) > div:nth-child(4)";
  const dailyMetricsElement = document.querySelector(DAILY_METRICS_SELECTOR);
  invariant(dailyMetricsElement, "Daily metrics element not found");

  const states = findComponentStates(dailyMetricsElement as HTMLElement);
  console.log("Extracted States:", states);
  const dailyMetrics = states.find((state) => Array.isArray(state));
  console.log("Probable daily metrics:", dailyMetrics);

  const DETAILED_SELECT_SELECTOR = "#headlessui-listbox-button-_R_3epkll5jm_";
  const detailedSelectElement = document.querySelector(
    DETAILED_SELECT_SELECTOR,
  ) as HTMLElement | null;
  invariant(detailedSelectElement, "Detailed select element not found");

  detailedSelectElement.click();

  await sleep(500);

  const TOTAL_OPTION_SELECTOR = "#headlessui-listbox-option-_r_4_";
  const totalOptionElement = document.querySelector(
    TOTAL_OPTION_SELECTOR,
  ) as HTMLElement | null;
  invariant(totalOptionElement, "Total option element not found");

  totalOptionElement.click();
};

export function handleSocialBlade() {
  // Example URL
  // https://socialblade.com/instagram/user/dulcetpatisserie
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split("/");
  const username = pathParts[pathParts.length - 1];

  console.log("Script matched for:", username);
  console.log("Script matched for:", username);
  console.log("run `await getData()` to extract data");

  window.getData = getData;
}

declare global {
  interface Window {
    getData: () => void;
  }
}
