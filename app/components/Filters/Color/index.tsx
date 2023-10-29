import React from 'react'

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PaletteIcon from '@mui/icons-material/Palette';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getColor, setColor, setPage } from 'redux/searchSlice';

const colorValues = [
    { value: "none", label: "All colors" },
    { value: "black_and_white", label: "Black & White" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "yellow", label: "Yellow" },
    { value: "red", label: "Red" },
    { value: "purple", label: "Purple" },
    { value: "magenta", label: "Magenta" },
    { value: "green", label: "Green" },
    { value: "teal", label: "Teal" },
    { value: "blue", label: "Blue" }
]

export const Color = () => {
    const dispatch = useAppDispatch();
    const color = useAppSelector(getColor);

    const handleColorChange = (event: SelectChangeEvent) => {
        dispatch(setColor(event.target.value));
        dispatch(setPage(1))
    };

    const ColorLabel = ({ value }: { value: string }) => {
        const color = colorValues.find(obj => {
            return obj.value === value
        });

        return (
            <div style={{ display: "flex", gap: "8px" }}>
                <PaletteIcon />
                {color?.label}
            </div>
        )
    }

    return (
        <FormControl>
            <Select
                data-testid="color-filter"
                id="color-filter"
                value={color}
                onChange={handleColorChange}
                inputProps={{ 'aria-label': 'Without label' }}
                renderValue={(value) => <ColorLabel value={value} />}
            >
                {colorValues.map((color) => {
                    return (
                        <MenuItem key={color.label} value={color.value}>{color.label}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}
