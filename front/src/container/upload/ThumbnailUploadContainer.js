import React, {useState} from 'react';
import ThumbnailUpload from '../../components/upload/ThumbnailUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { thumbnailUpload } from '../../modules/upload';
import { changeField } from '../../modules/upload';

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

  const onChange = (e) => {
    console.log('call');
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onDelete = (thumbnail) => {
    const currentIndex = Thumbnails.indexOf(thumbnail);

    let newThumbnails = [...Thumbnails]
    newThumbnails.splice(currentIndex, 1)

    setThumbnails(newThumbnails)
}

  return <ThumbnailUpload onDrop={onDrop} onDelete={onDelete} images={Thumbnails} onChange={onChange}/>;
};

export default withRouter(ThumbnailUploadContainer);
