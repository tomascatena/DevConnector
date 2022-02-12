import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../client';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
