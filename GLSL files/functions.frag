#if GL_ES 
precision mediump float;
#endif


uniform vec2 u_resolution;

#define PI 3.14159

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float y) {    
     return  smoothstep( y-0.02, y, st.y) -
          smoothstep( y, y+0.02, st.y);
}

float expImpulse( float x, float k )
{
    float h = k*x;
    return h*exp(1.0-h);
}

float parabola( float x, float k )
{
    return pow( 4.0*x*(1.0-x), k );
}

float sinc( float x, float k )
{
    float a = PI*(k*x-1.0);
    return sin(a)/a;
}