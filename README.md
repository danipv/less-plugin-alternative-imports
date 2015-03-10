[![NPM version](https://badge.fury.io/js/less-plugin-alternative-imports.svg)](http://badge.fury.io/js/less-plugin-alternative-imports)
less-plugin-alternative-imports
=======================
Load an alternative less file in imports statemets when compiling 
## lessc usage
```
npm install -g less-plugin-alternative-imports
```
and then on the command line,
```
lessc --plugin=less-plugin-alternative-imports="variables:foobar"
```
Where 'variables' is the file name in the import statement '@import "variables.less"' and 'foobar' the sufix name for an alternative less file 'variables_foobar.less'.
## Programmatic usage
Programmatic usage is not supported at this time.
## Browser usage
Browser usage is not supported at this time.
## django-compressor bonus tip
This gist https://gist.github.com/danipv/ac667061a4897d567e5b helps you for use with django-compressor.
