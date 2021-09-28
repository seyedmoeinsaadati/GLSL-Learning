#ifdef GL_ES
precision mediump float
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 resolution;

void main() {
    // gl_FragCoord is default input
    // gl_FragColor is default output
    // gl_FragCoord and gl_FragColor are called varying.
    // varying isn't unifrom because it will be different from thread to thread.
    vec2 st = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(st.x + sin(st.x), st.y + cos(st.y), 0.0, 1.0);
    
}