#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

bool InCircle(vec2 pos, float radius);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float radius = 50.0;
    bool mouseHoverOnSqure = (InCircle(u_mouse, radius)) ? true : false;
    if (InCircle(gl_FragCoord.xy, radius)&& mouseHoverOnSqure) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    } else if (InCircle(gl_FragCoord.xy, radius)&& ! mouseHoverOnSqure) {
        gl_FragColor = vec4(u_mouse.x / u_resolution.x, 0.0, u_mouse.y / u_resolution.y, 1.0);
    } else {
        gl_FragColor = vec4(st.x, 0, st.y, 1.000);
    }
    
    //gl_FragColor += vec4(sin(u_time), 0, cos(u_time), 1);
}

bool InCircle(vec2 pos, float radius) {
    return pow(pos.x - u_resolution.x / 2.0, 2.0) + pow(pos.y - u_resolution.y / 2.0, 2.0) < (radius * radius);
}