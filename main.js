let gl;
let shaderProgram;

initGL()
createShaders()
draw()

function initGL() {
  const canvas = document.querySelector('#canvas')
  gl = canvas.getContext("webgl")
  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.clearColor(0, 1, 1, 1)
}

function createShaders() {
  const vs = `
  attribute vec4 coords;
  void main(void) {
    gl_Position = coords;
    gl_PointSize = 30.0;
  }`;

  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertexShader, vs);
  gl.compileShader(vertexShader);

  const fs = `
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
  }`;

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fs);
  gl.compileShader(fragmentShader);

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
}

function draw() {
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.POINTS, 0, 1);
}
