#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

bool IsInSqure(vec2 pos, float squreSize);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float squareSize = 30.0;
    bool mouseHoverOnSqure = (IsInSqure(u_mouse, squareSize)) ? true : false;
    if (IsInSqure(gl_FragCoord.xy, squareSize)&&mouseHoverOnSqure) {
        gl_FragColor = vec4(1);
    }else if (IsInSqure(gl_FragCoord.xy, squareSize)&& ! mouseHoverOnSqure) {
        gl_FragColor = vec4(u_mouse.x / u_resolution.x, 0.0, u_mouse.y / u_resolution.y, 1.0);
    }else {
        gl_FragColor = vec4(st.x, 0, st.y, 1);
    }
}

bool IsInSqure(vec2 pos, float squreSize) {
    bool X1 = pos.x < u_resolution.x / 2.0 + squreSize / 2.0;
    bool X2 = pos.x > u_resolution.x / 2.0 - squreSize / 2.0;
    bool Y1 = pos.y < u_resolution.y / 2.0 + squreSize / 2.0;
    bool Y2 = pos.y > u_resolution.y / 2.0 - squreSize / 2.0;
    return X1 && X2 && Y1 && Y2;
}
