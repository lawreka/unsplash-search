import Select, { SelectChangeEvent } from '@mui/material/Select';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setOrderBy, getOrderBy, setPage } from 'redux/searchSlice';

export const Order = () => {
    const dispatch = useAppDispatch();
    const orderBy = useAppSelector(getOrderBy);

    const handleOrderChange = (event: SelectChangeEvent) => {
        dispatch(setOrderBy(event.target.value))
        dispatch(setPage(1))
    }

    const OrderLabel = ({ value }: { value: string }) => {
        const valueText = value[0].toUpperCase() + value.substring(1);
        return (
            <div style={{ display: "flex", gap: "8px" }}>
                <UnfoldMoreIcon />
                Sort by: {valueText}
            </div>
        )
    }

    return (
        <FormControl>
            <Select
                data-testid="order-filter"
                id="sort-filter"
                value={orderBy}
                onChange={handleOrderChange}
                inputProps={{ 'aria-label': 'Without label' }}
                renderValue={(value) => <OrderLabel value={value} />}
            >
                <MenuItem value="relevant">Relevant</MenuItem>
                <MenuItem value="latest">Latest</MenuItem>
            </Select>
        </FormControl>
    )
}
