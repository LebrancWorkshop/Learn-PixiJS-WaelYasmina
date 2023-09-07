import { Application } from 'pixi.js';

const app = new Application({
  width: 800,
  height: 600
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);
