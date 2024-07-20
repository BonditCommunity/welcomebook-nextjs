import { atom } from 'recoil';

export const fileState = atom<File | undefined>({
    key: 'fileState',
});
