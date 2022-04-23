#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line on Y using a value between 0.0-1.0
float linearPlot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

// Plot a line on Y using a value between 0.0-1.0
float powerPlot(vec2 st, float y) {    
     return  smoothstep( y-0.02, y, st.y) -
          smoothstep( y, y+0.02, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

    float y1 = step(0.5, st.x);

    vec3 color = vec3(y1);

    // Plot a line
    // float pct = linearPlot(st);
    float pct = powerPlot(st, y1);
    
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

	gl_FragColor = vec4(color,1.0);
}
