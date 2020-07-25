import React, {useState} from 'react';
import ThumbnailUpload from '../../components/upload/ThumbnailUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { thumbnailUpload } from '../../modules/upload';

const ThumbnailUploadContainer = () => {


  const [Thumbnails, setThumbnails] = useState([]);
  const dispatch = useDispatch();
  const { thumbnails } = useSelector(({ upload }) => ({
    thumbnails: upload.thumbnails,
  })
  );

  const onDrop = (files) => {
    dispatch(
      thumbnailUpload({
        files
      }))
      setThumbnails([...Thumbnails, files])
  };

  const onDelete = (thumbnail) => {
    const currentIndex = Thumbnails.indexOf(thumbnail);

    let newThumbnails = [...Thumbnails]
    newThumbnails.splice(currentIndex, 1)

    setThumbnails(newThumbnails)
}
// console.log(Thumbnails)
  return <ThumbnailUpload onDrop={onDrop} onDelete={onDelete} images={Thumbnails}/>;
};

export default withRouter(ThumbnailUploadContainer);
