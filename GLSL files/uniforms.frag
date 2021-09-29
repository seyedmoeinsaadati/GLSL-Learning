#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; // time in seconds since load
uniform vec2 u_resolution; // canvas size (width, height)
uniform vec2 u_mouse; // mouse position in screen pixels

void main() {
	gl_FragColor = vec4(sin(u_time) * 2.0, u_mouse.x / u_resolution.x, u_mouse.y / u_resolution.y, 1.00);
}