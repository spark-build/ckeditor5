/**
 * 基础编辑功能：剪贴板，Enter，ShiftEnter，键入和撤消
 *
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/essentials.html
 */
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';

/**
 * 列表和块的缩进功能
 *
 * @see https://github.com/ckeditor/ckeditor5-alignment
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/alignment.html
 */
import IndentPlugin from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlockPlugin from '@ckeditor/ckeditor5-indent/src/indentblock';

/**
 * 文本对齐
 *
 * @see https://github.com/ckeditor/ckeditor5-alignment
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/alignment.html
 */
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';

/**
 * 字体大小和字体系列功能。
 *
 * @see https://github.com/ckeditor/ckeditor5-font
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/font.html
 */
import FontSizePlugin from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamilyPlugin from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColorPlugin from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColorPlugin from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';

/**
 * 突出显示功能（记号笔和笔）
 *
 * @see https://github.com/ckeditor/ckeditor5-highlight
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/highlight.html
 */
import HighlightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight';

/**
 * 自动格式化功能。将预定义字符替换为相应的格式（例如**foo**变为粗体<strong>foo</strong>）
 *
 * @see https://github.com/ckeditor/ckeditor5-autoformat
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/autoformat.html
 */
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';

/**
 * 粗体，斜体，下划线和代码功能
 *
 * @see https://github.com/ckeditor/ckeditor5-basic-styles
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/basic-styles.html
 */
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import CodePlugin from '@ckeditor/ckeditor5-basic-styles/src/code';
import SubscriptPlugin from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import SuperscriptPlugin from '@ckeditor/ckeditor5-basic-styles/src/superscript';

/**
 * 块
 *
 * @see https://github.com/ckeditor/ckeditor5-block-quote
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/block-quote.html
 */
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';

/**
 * 标题功能
 *
 * @see https://github.com/ckeditor/ckeditor5-heading
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/heading.html
 */
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';

/**
 * 图片功能。支持图像样式，字幕，上载，调整大小等
 *
 * @see https://github.com/ckeditor/ckeditor5-image
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/image.html
 */
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import imageResizePlugin from '@ckeditor/ckeditor5-image/src/imageresize';
// import ImageuploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';

/**
 * 链接功能
 *
 * @see https://github.com/ckeditor/ckeditor5-link
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/link.html
 */
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';

/**
 * 编号和项目符号列表功能
 *
 * @see https://github.com/ckeditor/ckeditor5-list
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/list.html
 */
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';

// /**
//  * 媒体嵌入功能
//  *
//  * @see https://github.com/ckeditor/ckeditor5-media-embed
//  * @see https://ckeditor.com/docs/ckeditor5/latest/api/media-embed.html
//  */
// import MediaEmbedPlugin from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

/**
 * 段落功能
 *
 * @see https://github.com/ckeditor/ckeditor5-paragraph
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/paragraph.html
 */
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

/**
 * 从 Office粘贴（Word，Excel，Google文 档等）插件
 *
 * @see https://github.com/ckeditor/ckeditor5-paste-from-office
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/paste-from-office.html
 */
import PastefromofficePlugin from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

/**
 * 删除格式功能
 *
 * @see https://github.com/ckeditor/ckeditor5-remove-format
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/remove-format.html
 */
import RemoveformatPlugin from '@ckeditor/ckeditor5-remove-format/src/removeformat';

/**
 * GitHub 风格的 Markdown 数据处理器。
 *
 * @see https://github.com/ckeditor/ckeditor5-markdown-gfm
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/markdown-gfm.html
 */
import GFMdataprocessorPlugin from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

/**
 * 水平尺功能
 *
 * @see https://github.com/ckeditor/ckeditor5-horizontal-line
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/horizontal-line.html
 */
import HorizontallinePlugin from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

/**
 * 表格
 *
 * @see https://github.com/ckeditor/ckeditor5-table
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/table.html
 */
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TableToolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';

/**
 * 字数统计
 *
 * @see https://github.com/ckeditor/ckeditor5-table
 * @see https://ckeditor.com/docs/ckeditor5/latest/api/table.html
 */
import WordcountPlugin from '@ckeditor/ckeditor5-word-count/src/wordcount';

export const defaultPlugins = [
  EssentialsPlugin,

  IndentPlugin,
  IndentBlockPlugin,

  AlignmentPlugin,

  FontSizePlugin,
  FontFamilyPlugin,
  FontColorPlugin,
  FontBackgroundColorPlugin,

  HighlightPlugin,
  // MediaEmbedPlugin,
  AutoformatPlugin,

  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
  CodePlugin,
  SubscriptPlugin,
  SuperscriptPlugin,

  BlockquotePlugin,
  HeadingPlugin,
  ImagePlugin,
  ImageCaptionPlugin,
  ImageStylePlugin,
  ImageToolbarPlugin,
  imageResizePlugin,
  LinkPlugin,
  ListPlugin,
  ParagraphPlugin,
  PastefromofficePlugin,
  RemoveformatPlugin,
  GFMdataprocessorPlugin,
  HorizontallinePlugin,

  TablePlugin,
  TableToolbarPlugin,

  WordcountPlugin,
];
