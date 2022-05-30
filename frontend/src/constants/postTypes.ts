import {
  AiOutlineFontSize,
  AiOutlineFileImage,
  AiOutlineGif,
} from 'react-icons/ai';

const postTypes = [
  {
    name: 'text',
    title: 'Text',
    subTitle: 'Just a normal blog',
    icon: AiOutlineFontSize,
    heading: 'A Blog post',
    description:
      'A blog like post that allows you to have videos, images, gifs and text all in one fun glob.',
    thumbnail: '/images/posts/blog-thumb.png',
  },
  {
    name: 'image',
    title: 'Image',
    subTitle: 'More than a thousand words...',
    icon: AiOutlineFileImage,
    heading: 'An image',
    description:
      "Maybe it's an artwork or  meme creation you've created, whatever it is we wanna see it!",
    thumbnail: '/images/posts/image-thumb.png',
  },
  {
    name: 'gifs',
    title: 'Gif',
    subTitle: 'More than a million words...',
    icon: AiOutlineGif,
    heading: 'A Gif',
    description:
      'A super image (as we would call it), we allow you to upload any gif or find one from Giphy from within our platform',
    thumbnail: '/images/posts/gif-thumb.png',
  },
];

export { postTypes };
