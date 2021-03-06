#ifdef GL_ES
precision mediump float;
#endif

// read-only
uniform float u_time; // time in seconds since load
uniform vec2 u_resolution; // canvas size (width, height)
uniform vec2 u_mouse; // mouse position in screen pixels

void main() {
	float c = clamp(u_time, 0.0, 1.0);
	gl_FragColor = vec4(c, u_mouse.x / u_resolution.x, u_mouse.y / u_resolution.y, 1.00);
}
