import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {
  Row,
  Spinner,
  Col,
  Button,
  ButtonGroup,
  Container,
} from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

type Props = {
  content: String;
};

function RTCEditor({ content }: Props) {
  const editorRef = useRef(null);
  const [tinyMceKey, setTinyMceKey] = useState('');
  const [loading, setLoading] = useState(true);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [editorContent, setEditorContent] = useState(content);

  //   * Get the Editor's api key before loading
  useEffect(() => {
    const getTinyMCEKey = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get('/api/integrations/tinymce', config);
      setTinyMceKey(data);
      setLoading(false);
      console.log(tinyMceKey);
    };
    getTinyMCEKey();
  }, []);

  const handleSaveTextContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  if (!editorRef || loading)
    return <Spinner style={{ height: '500px' }} animation='border' />;
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center g-3 mb-3'>
        <Col xs='auto'>
          <Button size='lg' onClick={handleSaveTextContent}>
            Save
          </Button>
        </Col>
        <Col xs='auto'>
          <ButtonGroup>
            <Button
              variant='success'
              size='lg'
              className='px-4'
              onClick={handleSaveTextContent}
            >
              Save Post
            </Button>
            <Button
              variant='light'
              size='lg'
              className='px-4'
              onClick={handleSaveTextContent}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <hr />
      <Editor
        apiKey={tinyMceKey}
        onInit={(evt, editor) => (editorRef.current = editor)}
        onEditorChange={(newText) => setEditorContent(newText)}
        initialValue={`${editorContent}` || '<p>Enter your text here</p>'}
        init={{
          // inline: true,
          height: 400,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | code',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        }}
      />
    </Container>
  );
}

export default RTCEditor;
