import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Genz nghe gì?',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/b/9/4/2b9401eb630628d783001ad4ea1932db.jpg'
        },
        {
            id: 2,
            name: 'Những sự kết hợp mới',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/2/2/7/f227136f424d34ad2082199b97df1f13.jpg'
        },
        {
            id: 3,
            name: 'Today R&B Hits',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/e/6/1/2e61212c46fbc2c1515e6da88e292571.jpg'
        },
        {
            id: 4,
            name: 'K-Pop newbie',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/9/e/7/09e78ea8425d337720ea244f4683596e.jpg'
        },
        {
            id: 5,
            name: 'Flow này chill phết',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/3/b/f/23bf33ad0e8803431d4d3114eb37ea0a.jpg'
        }
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;