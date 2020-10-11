import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'
export default {
    input: 'index.ts',
    output: [{
        file: './dist/nooa.js',
        format: 'cjs',
    },
    {
        file: './dist/nooa.min.js',
        format: 'iife',
        name: 'version',
        plugins: [terser()]
    }],
    plugins: [typescript({
        lib: ["es5", "es6", "esnext", "dom"], 
        target: "es5",
        exclude: ['./node_modules'],
    })],
};