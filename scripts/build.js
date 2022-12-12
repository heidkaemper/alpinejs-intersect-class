const fs = require('fs');
const esbuild = require("esbuild");

if (! fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', 0744);
}

build({
    entryPoints: ['builds/cdn.js'],
    outfile: 'dist/cdn.min.js',
    platform: 'browser',
    define: { CDN: true },
});

build({
    entryPoints: ['builds/module.js'],
    outfile: 'dist/module.esm.js',
    platform: 'neutral',
    mainFields: ['main', 'module'],
});

build({
    entryPoints: ['builds/module.js'],
    outfile: 'dist/module.cjs.js',
    target: ['node10.4'],
    platform: 'node',
});

function build(options) {
    options.define || (options.define = {});
  
    return esbuild.build({
        ...options,
        minify: true,
        bundle: true,
    })
      .catch(() => process.exit(1));
}
