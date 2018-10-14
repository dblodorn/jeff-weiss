precision mediump float;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

varying vec2  uv;
uniform float iTimeDelta;            // render time (in seconds)
uniform int   iFrame;                // shader playback frame
uniform float iChannelTime[4];       // channel playback time (in seconds)
uniform vec3  iChannelResolution[4]; // channel resolution (in pixels)
uniform vec4  iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
// uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube
uniform vec4 iDate;                 // (year, month, day, time in seconds)
uniform float iSampleRate;           // sound sample rate (i.e., 44100)
// uniform vec4 gl_FragCoord;

mat2 rot(float a){
  return mat2(cos(a), -sin(a), sin(a), cos(a));
}
  
float hash(vec2 uv){
  return fract(12345. * sin(dot(uv, vec2(12.34, 56.78))));
}
  
float noise(vec2 uv){
  vec2 f = fract(uv);
  f = f * f * (3. - 2. * f);
  vec2 p = floor(uv);
  float res = mix(
    mix(hash(p),
    hash(p + vec2(1., 0.)), f.x),
    mix(hash(p + vec2(0., 1.)), hash(p + vec2(1., 1.)), f.x),
    f.y
  );
  return res;
}
  
void main(){
  vec2 uv = (gl_FragCoord - 0.5 * u_resolution.y) / u_resolution.x;

  float k = 2.;
  vec2 uvNoise = rot(k + 0.00001 * iTime) * uv * 10. + 0.2 * iTime;
  float res = 0.;
  float c = 0.5;

  for(int i = 0; i < 10; i++){
    res += c * noise(uvNoise);
      c /= 2.;
      uvNoise = rot(k + 0.00001 * iTime) * k * uvNoise + k + iTime;
  }
  //res -= 0.5;
  uv = rot(1.5 * noise(uv * 5. + 0.1 * iTime)) * uv;
  float line = smoothstep(0., 1., abs(sin(70. * uv.x) + res));
  line = smoothstep(0., 1., line);

  vec3 col = vec3(line);

  gl_FragColor = vec4(col,1.0);
}