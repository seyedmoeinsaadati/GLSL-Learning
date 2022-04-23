#if GL_ES 
precision mediump float;
#endif


uniform vec2 u_resolution;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float y) {    
     return  smoothstep( y-0.02, y, st.y) -
          smoothstep( y, y+0.02, st.y);
}
