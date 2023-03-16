document.getElementById('minify-button').addEventListener('click', () => {
    const inputCSS = document.getElementById('input-css').value;
    const outputCSS = minifyCSS(inputCSS);
    document.getElementById('output-css').value = outputCSS;
});

document.getElementById('copy-button').addEventListener('click', () => {
    const outputCSS = document.getElementById('output-css');
    outputCSS.select();
    document.execCommand('copy');
    alert('結果已複製到剪貼簿！');
});

function minifyCSS(css) {
    return css.replace(/\/\*[\s\S]*?\*\/|^\s*\/\/.*$|^\s*$/gm, '')
              .replace(/\s*{\s*|\s*}\s*|\s*:\s*|\s*;\s*/g, m => m.trim())
              .replace(/;}/g, '}');
}