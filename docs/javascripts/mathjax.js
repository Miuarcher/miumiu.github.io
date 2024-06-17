window.MathJax = {
  // [加载boldsymbol宏包]
  // https://docs.mathjax.org/en/latest/input/tex/extensions/boldsymbol.html
  loader: {load: ['[tex]/boldsymbol']},

  tex: {
    // 加载boldsymbol宏包
    packages: {'[+]': ['boldsymbol']},
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true

  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};
  
document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})