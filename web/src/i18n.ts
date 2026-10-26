// 站点语言：ar（阿拉伯语，默认，RTL）/ en / zh
export type Lang = 'ar' | 'en' | 'zh'

export const LANGS: Lang[] = ['ar', 'en', 'zh']

// 文字方向：阿拉伯语从右到左。只加在文字块上，不翻转整页布局（3D 模型 / 右侧时间轴位置不变）
export const dirOf = (lang: Lang): 'rtl' | 'ltr' => (lang === 'ar' ? 'rtl' : 'ltr')
