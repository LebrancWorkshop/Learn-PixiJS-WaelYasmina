import { Application } from 'pixi.js';

const app = new Application<HTMLCanvasElement>({
  width: 800,
  height: 600
});

app.renderer.background.color = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);
