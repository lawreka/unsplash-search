import Pagination from '@mui/material/Pagination';

import { PhotosWrapper, PhotosGrid } from "./styled"

export const Photos = () => {
    return (
        <PhotosWrapper>
            <PhotosGrid>
                <div>photo</div>
                <div>photo</div>
                <div>photo</div>
                <div>photo</div>
                <div>photo</div>
                <div>photo</div>
            </PhotosGrid>
            <Pagination count={10} shape="rounded" />
        </PhotosWrapper>
        
    )
}
