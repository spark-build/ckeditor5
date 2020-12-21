import type IWebpackChainConfig from 'webpack-chain';

const { styles } = require('@ckeditor/ckeditor5-dev-utils');

// @see https://github.com/ckeditor/ckeditor5-dev/tree/master/packages/ckeditor5-dev-webpack-plugin#options
export type EditorOptions = {
  language: string;
  additionalLanguages: string | 'all';
  outputDirectory: string;
  strict: boolean;
  verbose: boolean;
  addMainLanguageTranslationsToAllAssets: boolean;
  buildAllTranslationsToSeparateFiles: boolean;
  packageNamesPattern: string | RegExp;
  sourceFilesPattern: string | RegExp;
  corePackagePattern: string | RegExp;
  corePackageSampleResourcePath: string;
  translationsOutputFile: string;
};

export function applyCKEditorRulesByUmi(
  config: IWebpackChainConfig,
  editorOptions = {} as Partial<EditorOptions>,
) {
  // const themeRule = /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/;
  const themeRule = /ckeditor5-[^/\\]+[/\\].+\.css$/;
  const svgRule = /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/;

  /** 从 umi 内置的 loader 规则中排除 ckeditor 的样式相关编译 */
  [
    'css',
    'css-loader',
    'mini-css-extract-loader',
    'extract-css-loader',
    'style-loader',
    'postcss-loader',
  ].forEach((rule: string) => {
    config.module.rule(rule).exclude.add(themeRule).end();
  });
  ['file-loader', 'fonts', 'plaintext', 'images'].forEach((rule: string) => {
    config.module.rule(rule).exclude.add(themeRule).add(svgRule).end();
  });
  ['svg'].forEach((rule: string) => {
    config.module.rule(rule).exclude.add(svgRule).end();
  });
  /** end */

  /**
   * ckeditor 自身的处理
   *
   * @see https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#scenario-2-building-from-source
   * */
  config.module.rule('cke-svg').test(svgRule).use('raw-loader').loader('raw-loader').end();

  config.module
    .rule('cke-style-loader')
    .test(themeRule)
    .use('style-loader')
    .loader('style-loader')
    .end();

  config.module
    .rule('cke-css')
    .test(themeRule)
    .use('postcss-loader')
    .loader('postcss-loader')
    .tap(() => {
      return styles.getPostCssConfig({
        themeImporter: {
          themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
        },
        minify: true,
      });
    })
    .end();

  config
    .plugin('ckEditorWebpackPlugin')
    .use(require.resolve('@ckeditor/ckeditor5-dev-webpack-plugin'), [
      {
        // See https://docs.ckeditor.com/ckeditor5/latest/features/ui-language.html
        // @see https://github.com/ckeditor/ckeditor5-dev/tree/master/packages/ckeditor5-dev-webpack-plugin
        language: 'zh-cn',
        addMainLanguageTranslationsToAllAssets: true,
        buildAllTranslationsToSeparateFiles: true,
        // additionalLanguages: 'all',
        ...editorOptions,
      },
    ])
    .end();
}
