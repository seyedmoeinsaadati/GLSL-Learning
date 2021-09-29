#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    
    // linear
    // gl_FragColor = vec4(gl_FragCoord.x / gl_FragCoord.y);
    gl_FragColor = vec4(gl_FragCoord.x / u_resolution.x); // vertical
    gl_FragColor = vec4(gl_FragCoord.y / u_resolution.y); // horisontal
    
    // circle
    // vec2 centerPoint = vec2(0.5);
    // vec2 coord = gl_FragCoord.xy / u_resolution.xy;
    // gl_FragColor = vec4(length(coord - centerPoint));
    // gl_FragColor = vec4(clamp(length(coord - centerPoint), 0.0, 1.0)) + vec4((u_mouse.x / u_resolution.x) * sin(u_time), (u_mouse.y / u_resolution.y) * sin(u_time), 0, 1);
    // gl_FragColor = vec4(clamp(length(coord - centerPoint), 0.0, 1.0)) + vec4(u_mouse.x / u_resolution.x, u_mouse.y / u_resolution.y, 0, 1);
    
    // circle mouse gradient
    // vec2 centerPoint = u_mouse.xy / u_resolution.xy;
    // vec2 coord = gl_FragCoord.xy / u_resolution.xy;
    // gl_FragColor = vec4(1.0 - length(coord - centerPoint));
    
}