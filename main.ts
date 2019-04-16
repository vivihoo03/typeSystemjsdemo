import { Canvas2DUtil } from './canvas2d/canvas2D';

let canvas: HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement;

if(canvas === null) {
    console.log('无法获取HTMLCanvasElement!!');
    alert('无法获取HTMLCanvasElement!!')
};

let canvas2d: Canvas2DUtil = new Canvas2DUtil(canvas);
canvas2d.drawText('Hellow world!');