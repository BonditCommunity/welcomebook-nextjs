import { atom } from 'recoil';

export const persistentAtom = <T>({
    key,
    defaultValue,
    onChange,
}: {
    key: string;
    defaultValue?: T;
    onChange?: (value: T) => void;
}) => {
    return atom<T>({
        key,
        ...(defaultValue && {
            default: defaultValue,
        }),
        effects_UNSTABLE: [
            ({ setSelf, onSet }) => {
                setSelf(() => {
                    if (typeof window === 'undefined') return defaultValue;
                    let data = window.localStorage.getItem(key);
                    if (data != null) {
                        return JSON.parse(data);
                    } else {
                        return defaultValue;
                    }
                });
                onSet((newValue, _, isReset) => {
                    if (typeof window === 'undefined') return;
                    if (isReset) {
                        window.localStorage.removeItem(key);
                    } else {
                        window.localStorage.setItem(
                            key,
                            JSON.stringify(newValue),
                        );
                        onChange?.(newValue);
                    }
                });
            },
        ],
    });
};
