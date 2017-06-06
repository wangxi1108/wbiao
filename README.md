#### 技术支持：
- git √
- github √
- npm √
- cnpm √
- require.js
- gulp √
- less √
- jQuery 
#### 步骤：
##### 项目创建

1. 新建项目文件夹 $ mkdir project
1. 进入项目文件夹 $ cd project
1. 项目仓库创建 $ git init
1. 生成.gitignore文件 $ touch .gitignore
1. 生成README.md文件 $ touch README.md
1. 生成package.json文件 $ cnpm init
1. 安装cnpm $ cnpm install
1. 安装gulp $ cnpm install gulp --save-dev
1. 生成gulpfile.js文件 $ touch gulpfile.js
1. **①**安装less插件 $ cnpm install gulp-less --save-dev 
1. **②**安装css压缩插件 $ cnpm install gulp-clean-css --save-dev
1. **③**安装js压缩插件 $ cnpm install gulp-uglify --save-dev
1. **④**安装html压缩插件 $ cnpm install gulp-htmlmin --save-dev
1. **⑤**安装监听插件 $ cnpm install gulp-watch --save-dev 
1. **⑥**安装浏览器自动刷新 $ cnpm install gulp-livereload --save-dev
1. 配置gulpfile文件，实现自动化构建
1. 安装http-server服务器，$ cnpm install http-server -g
1. 在项目文件夹下运行 $ http-server
1. 在chrome浏览器中安装插件 liverelode 
1. 浏览器地址输入https：//127.0.0.1:8080
1. 安装sublime插件auto save 
1. 安装jQuery $ cnpm install jquery 
 

##### dir-list(*星标文件在.gitignore内):
- .git
- dist

> css
> html
> img
> js[jquery.min.js]
> libs


- ***node_modules**
- src

> css
> html
> img
> js[jquery.js]
> less
> libs

- .gitignore
- gulpfile.js
- package.json
- README.md


