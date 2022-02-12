import { useDispatch } from 'react-redux';
import { AppDispatch } from '../client';

// Export a hook that can be reused to resolve types
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
