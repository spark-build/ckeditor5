/* eslint-disable import/no-unresolved */
import { useState, useCallback, useRef } from 'react';
import { CKEditor as CKEditorComponent } from '@ckeditor/ckeditor5-react';
import { useDebounceEffect, useDebounceFn } from 'ahooks';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import { defaultPlugins } from './defaultPlugins';

import './index.less';

export type CKEditorProps = {
  height?: number;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onReady?: (editor: any) => void;
  onChange?: (value: string) => void;
  onError?: Function;
  onInit?: Function;
  onFocus?: Function;
  onBlur?: Function;
  configuration?: typeof editorConfiguration;
};

export const editorConfiguration = {
  plugins: defaultPlugins,
  toolbar: {
    items: [
      'undo',
      'redo',
      'removeFormat',
      '|',
      'fontsize',
      'fontfamily',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'subscript',
      'superscript',
      '|',
      'outdent',
      'indent',
      'alignment:left',
      'alignment:right',
      'alignment:center',
      'alignment:justify',
      '|',
      'insertTable',
      // '|',
      // 'numberedList',
      // 'bulletedList',
      // '|',
      // 'link',
      // 'blockquote',
      // 'horizontalLine',
      // '|',
      // 'highlight',
    ],
    options: {
      shouldGroupWhenFull: true,
    },
  },
  fontSize: {
    options: [12, 14, 16, 18, 20, 22, 32, 34],
  },
  indentBlock: {
    offset: 1,
    unit: 'em',
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  image: {
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
    ],
    styles: ['full', 'alignLeft', 'alignRight'],
  },
};

export const CKEditor = ({
  value,
  onChange,
  height = 600,
  className,
  style,

  configuration = editorConfiguration,
  onReady,
  ...lastProps
}: CKEditorProps) => {
  const [editorInstance, setEditorInstance] = useState(null as any);
  const previousValueRef = useRef(value);

  useDebounceEffect(
    () => {
      // 利用上一次的值跟本次值的对比，还判断是否需要将当前组件进行受控设置
      if (value !== undefined && value !== previousValueRef.current && editorInstance) {
        editorInstance.setData(value);
      }
    },
    [value],
    { wait: 60 },
  );

  const handleEditorInit = useCallback(
    (editor: any) => {
      editor.editing.view.change((writer: any) => {
        writer.setStyle('height', `${height}px`, editor.editing.view.document.getRoot());
      });

      setEditorInstance(editor);

      onReady?.(editor);
    },
    [height, onReady],
  );

  const { run: handleEditorChangeDebounce } = useDebounceFn(
    (html) => {
      previousValueRef.current = html;

      onChange?.(html);
    },
    { wait: 160 },
  );

  return (
    <div className={`ck-editor-wrap ${className || ''}`} style={style}>
      <CKEditorComponent
        editor={ClassicEditor}
        config={configuration}
        data={value}
        onReady={handleEditorInit}
        {...lastProps}
        onChange={(event: any, editor: any) => {
          handleEditorChangeDebounce(editor.getData());
        }}
      />
    </div>
  );
};

export default CKEditor;
