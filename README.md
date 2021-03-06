# Gulp Setup

- [gulp](https://www.npmjs.com/package/gulp) Gulp
- [gulp-less](https://www.npmjs.com/package/gulp-less) For SCSS
- [sass](https://www.npmjs.com/package/sass) Sass compiler  
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) Compiling Sass & Scss files
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Plugin to minify CSS - remove unnecessary spaces, semicolon
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) For changing files name
- [gulp-babel](https://www.npmjs.com/package/gulp-babel) Transforms Java Script into older standart
- [@babel/core](https://www.npmjs.com/package/@babel/core) Core Babel
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) For Babel compiling  
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) For concating our js files into one file
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Plugin to minify JS
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Maps for lines of code 
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Automatic addition of prefixes in CSS   
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Plugin to minify images
- [gulp-newer](https://www.npmjs.com/package/gulp-newer) Plugin to minify only new images
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Plugin to minify html
- [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) For concating our html files into one file
- [gulp-replace](https://www.npmjs.com/package/gulp-replace) Replace the folder names (for alias folders)
- [del](https://www.npmjs.com/package/del) Deletes files and directories
- [browser-sync](https://browsersync.io/docs/gulp) To automatically update the site when files are changed

## Usage

1. Download all files
2. In the terminal complete the command - npm i
3. Download Path Autocomplete extension and add it to your settings.json
   > "path-autocomplete.pathMappings": {  
   > "@images": "${folder}/src/images",  
   > "@styles": "${folder}/src/styles",  
   > "@scripts": "${folder}/src/scripts",  
   > }  
   *Folder names can be different
4. After that complete the command - gulp
5. Add files you need to the scripts & styles folders in the src
6. Write your code and enjoy Gulp

## Src structure

> ./src/styles/\*\*/\*.scss    
> ./src/scripts/\*\*/\*.js  
