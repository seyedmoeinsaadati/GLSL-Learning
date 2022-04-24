#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    // gl_FragCoord is default input (pixel position on screen)
    // gl_FragColor is default output (pixel color)
    // gl_FragCoord and gl_FragColor are called varying.
    // varying isn't unifrom because it will be different from thread to thread.
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    // exmaple 1
    // gl_FragColor = vec4(st.x + sin(st.x), st.y + cos(st.y), 0.0, 1.0);

    // exmaple 2
    gl_FragColor = vec4(st.x, st.y, gl_FragColor.x / gl_FragColor.y, 1.0);

}