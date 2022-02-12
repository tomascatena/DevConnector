import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../Store/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
