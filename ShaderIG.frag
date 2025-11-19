#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
void main(){
  // Coords normalizadas, centro (0,0)
  vec2 u=(gl_FragCoord.xy*2.-u_resolution)/u_resolution.y;
  float d=length(u);//Distancia centro
  // RGB anillos 
  float r=abs(sin(d*8.+u_time));
  float g=abs(sin(d*8.+u_time+2.094));
  float b=abs(sin(d*8.+u_time+4.188));
  gl_FragColor=vec4(r,g,b,1.);
}