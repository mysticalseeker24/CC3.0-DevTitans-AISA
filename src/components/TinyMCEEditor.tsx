import { Editor } from '@tinymce/tinymce-react';
import { TINYMCE_API_KEY } from '../config/tinymce';

interface TinyMCEEditorProps {
  initialValue?: string;
  onChange: (content: string) => void;
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ initialValue = '', onChange }) => {
  return (
    <Editor
      apiKey={TINYMCE_API_KEY}
      initialValue={initialValue}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'bold italic underline | image',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onEditorChange={(content) => onChange(content)}
    />
  );
};

export default TinyMCEEditor;
