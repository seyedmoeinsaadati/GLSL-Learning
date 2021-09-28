#ifdef GL_ES
precision mediump float;
precision lowp float;
precision highp float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(0.251, 0.3255, 0.1059, 1.0);
}

// data types
// float, vec2, vec3, vec4, mat2, mat3, mat4, sampler2D and samplerCube

// math funcs
// sin(), cos(), tan(), asin(), acos(), atan(), pow(), exp(), log(), sqrt(), abs(), sign(), floor(), ceil(), fract(), mod(), min(), max() and clamp()
