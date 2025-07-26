import Markdown from 'react-markdown'

const markdownZh = `
# 🎨 Emoji Kitchen - 创意表情符号组合工具

## 📖 项目简介

Emoji Kitchen 是一个创新的在线工具，让您可以轻松组合两个不同的表情符号，创造出独特而有趣的混合表情符号图像。灵感来源于 Google 的 Emoji Kitchen 功能，我们提供了一个开源、免费且易于使用的替代方案。

## ✨ 主要功能

### 🎯 核心特性
- **智能组合**: 支持超过 92,437 种表情符号组合
- **实时预览**: 选择表情符号时立即看到组合结果
- **一键复制**: 轻松复制生成的混合表情符号到剪贴板
- **随机生成**: 使用随机功能发现意想不到的有趣组合
- **响应式设计**: 完美适配桌面端和移动端设备

### 🛠️ 技术特点
- **高性能**: 基于 Next.js 15 构建，提供极速加载体验
- **PWA 支持**: 可安装为渐进式 Web 应用
- **离线功能**: 支持 Service Worker，提供离线访问能力
- **现代 UI**: 采用 Tailwind CSS 构建的美观界面
- **TypeScript**: 完整的类型安全保证

## 🚀 如何使用

### 基本操作
1. **选择第一个表情符号**: 点击左侧的表情符号选择器
2. **选择第二个表情符号**: 点击右侧的表情符号选择器
3. **查看结果**: 中间区域会显示组合后的混合表情符号
4. **复制图像**: 点击结果图像即可复制到剪贴板

### 高级功能
- **随机组合**: 点击"随机"按钮获得意想不到的组合
- **清除重置**: 使用"全部清除"按钮重新开始
- **智能筛选**: 系统会自动显示可组合的表情符号

## 🎨 创意灵感

### 常见组合示例
- 🍕 + 🍍 = 菠萝披萨
- 🐱 + 🦄 = 独角兽猫咪
- 🌮 + 🍦 = 冰淇淋墨西哥卷
- 🎸 + 🦈 = 摇滚鲨鱼
- 🚀 + 🐼 = 太空熊猫

### 使用场景
- **社交媒体**: 为您的帖子添加独特的视觉元素
- **聊天应用**: 发送有趣的混合表情符号
- **创意设计**: 为设计项目提供灵感素材
- **娱乐消遣**: 探索表情符号的无限可能

## 🔧 技术架构

### 前端技术栈
- **Next.js 15**: React 全栈框架
- **React 19**: 最新的 React 版本
- **TypeScript**: 类型安全的 JavaScript
- **Tailwind CSS**: 实用优先的 CSS 框架
- **Clipboard API**: 现代化的剪贴板操作

### 性能优化
- **图片优化**: 使用 Next.js Image 组件
- **代码分割**: 按需加载组件
- **缓存策略**: 智能的静态资源缓存
- **PWA 支持**: 离线访问和安装功能

## 🌟 项目特色

### 开源免费
- 完全开源，基于 MIT 许可证
- 无需注册，即开即用
- 无广告干扰，纯净体验

### 持续更新
- 定期添加新的表情符号组合
- 响应社区反馈，持续改进
- 保持与最新 Web 标准的兼容性

### 隐私保护
- 无需上传个人信息
- 所有处理都在本地完成
- 不收集用户数据

## 📱 移动端体验

### 适配优化
- 触摸友好的界面设计
- 优化的移动端交互
- 响应式布局适配各种屏幕尺寸

### 移动端特性
- 支持触摸手势操作
- 优化的图片加载性能
- 移动端友好的复制提示

## 🔗 相关资源

### 项目链接
- **GitHub 仓库**: [emoji-kitchen](https://github.com/Debbl/emoji-kitchen/)
- **在线演示**: 当前页面
- **问题反馈**: 欢迎在 GitHub 上提交 Issue

## 🎯 SEO 优化

### 关键词覆盖
- emoji kitchen, 表情符号厨房, 混合表情符号
- 表情符号组合, emoji 组合工具
- 创意表情符号, 自定义 emoji
- 在线 emoji 工具, 表情符号生成器

### 内容策略
- 提供丰富的使用教程和创意灵感
- 定期更新表情符号组合库
- 优化页面加载速度和用户体验
- 支持多语言内容（计划中）

## 📈 使用统计

### 当前支持
- **表情符号数量**: 超过 92,437 种组合
- **支持平台**: 所有现代浏览器
- **响应时间**: 平均加载时间 < 1 秒
- **用户满意度**: 持续收集反馈并改进

### 未来计划
- 添加更多表情符号组合
- 支持自定义上传表情符号
- 增加社交分享功能
- 开发移动端原生应用

---

*最后更新: 2025年7月26日*

> 💡 **小贴士**: 尝试不同的表情符号组合，您可能会发现一些意想不到的有趣结果！
`

const markdownEn = `
# 🎨 Emoji Kitchen - Creative Emoji Combination Tool

## 📖 Project Introduction

Emoji Kitchen is an innovative online tool that allows you to easily combine two different emojis to create unique and interesting hybrid emoji images. Inspired by Google's Emoji Kitchen feature, we provide an open-source, free, and easy-to-use alternative.

## ✨ Main Features

### 🎯 Core Features
- **Smart Combination**: Supports over 92,437 emoji combinations
- **Real-time Preview**: See combination results immediately when selecting emojis
- **One-click Copy**: Easily copy generated hybrid emojis to clipboard
- **Random Generation**: Use random function to discover unexpected combinations
- **Responsive Design**: Perfectly adapts to desktop and mobile devices

### 🛠️ Technical Features
- **High Performance**: Built on Next.js 15, providing lightning-fast loading experience
- **PWA Support**: Can be installed as a Progressive Web App
- **Offline Functionality**: Supports Service Worker for offline access
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **TypeScript**: Complete type safety guarantee

## 🚀 How to Use

### Basic Operations
1. **Select First Emoji**: Click the left emoji selector
2. **Select Second Emoji**: Click the right emoji selector
3. **View Result**: The middle area shows the combined hybrid emoji
4. **Copy Image**: Click the result image to copy to clipboard

### Advanced Features
- **Random Combination**: Click "Random" button for unexpected combinations
- **Clear Reset**: Use "Clear All" button to start over
- **Smart Filtering**: System automatically shows combinable emojis

## 🎨 Creative Inspiration

### Common Combination Examples
- 🍕 + 🍍 = Pineapple Pizza
- 🐱 + 🦄 = Unicorn Cat
- 🌮 + 🍦 = Ice Cream Taco
- 🎸 + 🦈 = Rock Shark
- 🚀 + 🐼 = Space Panda

### Use Cases
- **Social Media**: Add unique visual elements to your posts
- **Chat Applications**: Send interesting hybrid emojis
- **Creative Design**: Provide inspiration materials for design projects
- **Entertainment**: Explore unlimited possibilities of emojis

## 🔧 Technical Architecture

### Frontend Tech Stack
- **Next.js 15**: React full-stack framework
- **React 19**: Latest React version
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Clipboard API**: Modern clipboard operations

### Performance Optimization
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: On-demand component loading
- **Caching Strategy**: Smart static resource caching
- **PWA Support**: Offline access and installation features

## 🌟 Project Highlights

### Open Source & Free
- Completely open source under MIT license
- No registration required, ready to use
- No ad interference, pure experience

### Continuous Updates
- Regularly add new emoji combinations
- Respond to community feedback for continuous improvement
- Maintain compatibility with latest Web standards

### Privacy Protection
- No personal information upload required
- All processing done locally
- No user data collection

## 📱 Mobile Experience

### Adaptation Optimization
- Touch-friendly interface design
- Optimized mobile interactions
- Responsive layout adapts to various screen sizes

### Mobile Features
- Support for touch gesture operations
- Optimized image loading performance
- Mobile-friendly copy prompts

## 🔗 Related Resources

### Project Links
- **GitHub Repository**: [emoji-kitchen](https://github.com/Debbl/emoji-kitchen/)
- **Online Demo**: Current page
- **Issue Feedback**: Welcome to submit issues on GitHub

## 🎯 SEO Optimization

### Keyword Coverage
- emoji kitchen, emoji combination tool, hybrid emoji
- emoji mixer, emoji fusion tool
- creative emoji, custom emoji generator
- online emoji tool, emoji maker

### Content Strategy
- Provide rich tutorials and creative inspiration
- Regularly update emoji combination library
- Optimize page loading speed and user experience
- Support multi-language content (planned)

## 📈 Usage Statistics

### Current Support
- **Emoji Combinations**: Over 92,437 combinations
- **Supported Platforms**: All modern browsers
- **Response Time**: Average loading time < 1 second
- **User Satisfaction**: Continuously collecting feedback and improving

### Future Plans
- Add more emoji combinations
- Support custom emoji uploads
- Add social sharing features
- Develop mobile native applications

---

*Last Updated: July 26, 2025*

> 💡 **Tip**: Try different emoji combinations, you might discover some unexpected and interesting results!
`

export function SEO({
  lang = 'en',
  className,
}: {
  lang?: 'en' | 'zh'
  className?: string
}) {
  return (
    <div className={cn('prose', className)}>
      <Markdown>{lang === 'en' ? markdownEn : markdownZh}</Markdown>
    </div>
  )
}
