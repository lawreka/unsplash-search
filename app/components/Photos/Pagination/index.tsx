import Pagination from '@mui/material/Pagination';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getPage, setPage } from '../../../redux/searchSlice';

import { PaginationWrapper } from './styled';
export const Pages = () => {
    const page = useAppSelector(getPage);
    const dispatch = useAppDispatch();

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    }

    return (
        <PaginationWrapper>
            <Pagination
                count={10}
                shape="rounded"
                page={page}
                onChange={handleChange}
            />
        </PaginationWrapper>
    )
}
