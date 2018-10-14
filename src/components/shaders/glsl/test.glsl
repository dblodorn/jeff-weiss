precision mediump float;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

varying vec2 uv;

void main() {
  gl_FragColor = vec4(abs(sin(u_time)),0.0,1.0,abs(sin(u_time)));
}