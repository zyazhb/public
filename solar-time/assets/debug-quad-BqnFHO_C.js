import{c as e,s as t}from"./index-CpCA6RDW.js";import{T as n,_ as r,b as i,j as a,m as o,n as s,t as c,u as l,w as u}from"./earth-CMoS76Y4.js";var d=`uniform vec3 uSun;
varying vec2 vUv;

void main() {
  float lon = (vUv.x * 360.0 - 180.0) * 0.01745329252;
  float lat = (vUv.y * 180.0 - 90.0) * 0.01745329252;
  float cosLat = cos(lat);
  vec3 ecef = vec3(cosLat * cos(lon), cosLat * sin(lon), sin(lat));
  vec3 normal = vec3(ecef.x, ecef.z, -ecef.y);
  float altitude = dot(normalize(normal), uSun);
  float day = smoothstep(-0.104528, -0.014538, altitude);
  gl_FragColor = vec4(day, 0.0, 0.0, 1.0);
}
`;function f(f,p){let m=new s({canvas:f,antialias:!1,alpha:!1,preserveDrawingBuffer:!0});m.outputColorSpace=l,m.setPixelRatio(1),m.setSize(360,180,!1);let h=e(t(p)),g=new n({uniforms:{uSun:{value:new a(h[0],h[1],h[2])}},vertexShader:c,fragmentShader:d}),_=new u;_.add(new o(new i(2,2),g)),m.render(_,new r(-1,1,1,-1,0,1)),f.dataset.ready=`1`}export{f as mountShaderDebug};