import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@store/store';

// Export a hook that can be reused to resolve types
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
