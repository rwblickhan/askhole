import { Plugins } from "@capacitor/core";
import { useEffect } from "preact/hooks";
import { CapacitorShake } from "@capgo/capacitor-shake";

export const useShake = (onShake: () => void) => {
  useEffect(() => {
    CapacitorShake.addListener("shake", onShake).catch((e) => {
      console.error(e);
    });
    return () => {
      const { CapacitorShake } = Plugins;
      // https://capgo.app/plugins/capacitor-shake/
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      CapacitorShake.removeAllListeners("shake");
    };
  }, []);
};
