import { atom } from 'recoil';

export const persistentAtom = <T>({
    key,
    defaultValue,
}: {
    key: string;
    defaultValue: T;
}) => {
    return atom<T>({
        key,
        default: defaultValue,
        effects_UNSTABLE: [
            ({ setSelf, onSet }) => {
                setSelf(() => {
                    let data = localStorage.getItem(key);
                    if (data != null) {
                        return JSON.parse(data);
                    } else {
                        return defaultValue;
                    }
                });
                onSet((newValue, _, isReset) => {
                    if (isReset) {
                        localStorage.removeItem(key);
                    } else {
                        localStorage.setItem(key, JSON.stringify(newValue));
                    }
                });
            },
        ],
    });
};
