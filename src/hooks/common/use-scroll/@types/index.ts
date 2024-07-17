import { UseVisibleProps } from '../../use-visible/@types';

export interface UseScrollProps extends UseVisibleProps {
    onEndReached: () => void;
}
