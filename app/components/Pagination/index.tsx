import Pagination from '@mui/material/Pagination';

import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { getPage, setPage, getResults } from 'redux/searchSlice';

import { PaginationWrapper } from './styled';
export const Pages = () => {
    const page = useAppSelector(getPage);
    const results = useAppSelector(getResults);
    const dispatch = useAppDispatch();
    const pageCount = Math.ceil(results.length / 6);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    }

    return (
        <PaginationWrapper>
            <Pagination
                count={pageCount}
                shape="rounded"
                page={page}
                onChange={handleChange}
            />
        </PaginationWrapper>
    )
}
