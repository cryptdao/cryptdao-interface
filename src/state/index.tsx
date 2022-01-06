import { atom, DefaultValue } from "recoil";

export const FromIndex = atom({
  key: "FromIndex",
  default: 0,
});

const localStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (data: any) => void;
    onSet: (newValue: any) => void;
  }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
export const OwnerState = atom({
  key: "owner",
  default: {},
  effects_UNSTABLE: [localStorageEffect("owner")],
});
