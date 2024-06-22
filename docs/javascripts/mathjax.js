window.MathJax = {
  // [加载宏包]
  // https://docs.mathjax.org/en/latest/input/tex/extensions/boldsymbol.html
  // https://docs.mathjax.org/en/latest/input/tex/extensions/gensymb.html
  loader: {load: ['[tex]/boldsymbol','[tex]/gensymb']},

  tex: {
    // 加载宏包
    packages: {'[+]': ['boldsymbol','gensymb']},

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