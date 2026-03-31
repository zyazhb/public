var LZ="183",C6={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},w6={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zZ=0,tJ=1,IZ=2;var c9=1,m7=2,I9=3,C9=0,j8=1,x8=2,$6=0,n9=1,eJ=2,JQ=3,QQ=4,CZ=5;var w9=100,wZ=101,PZ=102,AZ=103,_Z=104,TZ=200,SZ=201,jZ=202,fZ=203,yZ=204,bZ=205,vZ=206,hZ=207,xZ=208,gZ=209,pZ=210,mZ=211,dZ=212,lZ=213,uZ=214,cZ=0,nZ=1,sZ=2,$Q=3,iZ=4,oZ=5,aZ=6,rZ=7,tZ=0,eZ=1,JW=2,r8=0,ZQ=1,WQ=2,KQ=3,s9=4,YQ=5,HQ=6,UQ=7;var P9=301,g6=302,d7=303,l7=304,i9=306,QW=1000,u7=1001,$W=1002,P6=1003,ZW=1004;var o9=1005;var f8=1006,c7=1007;var p6=1008;var t8=1009,WW=1010,KW=1011,a9=1012,XQ=1013,A6=1014,E6=1015,D6=1016,GQ=1017,NQ=1018,A9=1020,YW=35902,HW=35899,UW=1021,XW=1022,Z6=1023,m6=1026,d6=1027,GW=1028,qQ=1029,_9=1030,FQ=1031;var EQ=1033,n7=33776,s7=33777,i7=33778,o7=33779,DQ=35840,RQ=35841,OQ=35842,kQ=35843,MQ=36196,VQ=37492,BQ=37496,LQ=37488,zQ=37489,IQ=37490,CQ=37491,wQ=37808,PQ=37809,AQ=37810,_Q=37811,TQ=37812,SQ=37813,jQ=37814,fQ=37815,yQ=37816,bQ=37817,vQ=37818,hQ=37819,xQ=37820,gQ=37821,pQ=36492,mQ=36494,dQ=36495,lQ=36283,uQ=36284,cQ=36285,nQ=36286;var NW=0,qW=1,l6="",a7="srgb",r9="srgb-linear",sQ="linear",$8="srgb";var FW=512,EW=513,DW=514,r7=515,RW=516,OW=517,t7=518,kW=519;var iQ="300 es",oQ=2000;function bK(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function vK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function l9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function MW(){let J=l9("canvas");return J.style.display="block",J}var o$={},L9=null;function aQ(...J){let Q="THREE."+J.shift();if(L9)L9("log",Q,...J);else console.log(Q,...J)}function VW(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function C0(...J){J=VW(J);let Q="THREE."+J.shift();if(L9)L9("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function A0(...J){J=VW(J);let Q="THREE."+J.shift();if(L9)L9("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function u9(...J){let Q=J.join(" ");if(Q in o$)return;o$[Q]=!0,C0(...J)}function BW(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var LW={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class R6{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var L8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a$=1234567,V9=Math.PI/180,z9=180/Math.PI;function T9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(L8[J&255]+L8[J>>8&255]+L8[J>>16&255]+L8[J>>24&255]+"-"+L8[Q&255]+L8[Q>>8&255]+"-"+L8[Q>>16&15|64]+L8[Q>>24&255]+"-"+L8[$&63|128]+L8[$>>8&255]+"-"+L8[$>>16&255]+L8[$>>24&255]+L8[Z&255]+L8[Z>>8&255]+L8[Z>>16&255]+L8[Z>>24&255]).toLowerCase()}function p0(J,Q,$){return Math.max(Q,Math.min($,J))}function rQ(J,Q){return(J%Q+Q)%Q}function hK(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function xK(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function d9(J,Q,$){return(1-$)*J+$*Q}function gK(J,Q,$,Z){return d9(J,Q,1-Math.exp(-$*Z))}function pK(J,Q=1){return Q-Math.abs(rQ(J,Q*2)-Q)}function mK(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function dK(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function lK(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function uK(J,Q){return J+Math.random()*(Q-J)}function cK(J){return J*(0.5-Math.random())}function nK(J){if(J!==void 0)a$=J;let Q=a$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function sK(J){return J*V9}function iK(J){return J*z9}function oK(J){return(J&J-1)===0&&J!==0}function aK(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function rK(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function tK(J,Q,$,Z,W){let{cos:K,sin:Y}=Math,H=K($/2),U=Y($/2),X=K((Q+Z)/2),N=Y((Q+Z)/2),F=K((Q-Z)/2),G=Y((Q-Z)/2),E=K((Z-Q)/2),R=Y((Z-Q)/2);switch(W){case"XYX":J.set(H*N,U*F,U*G,H*X);break;case"YZY":J.set(U*G,H*N,U*F,H*X);break;case"ZXZ":J.set(U*F,U*G,H*N,H*X);break;case"XZX":J.set(H*N,U*R,U*E,H*X);break;case"YXY":J.set(U*E,H*N,U*R,H*X);break;case"ZYZ":J.set(U*R,U*E,H*N,H*X);break;default:C0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function M9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function _8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var tQ={DEG2RAD:V9,RAD2DEG:z9,generateUUID:T9,clamp:p0,euclideanModulo:rQ,mapLinear:hK,inverseLerp:xK,lerp:d9,damp:gK,pingpong:pK,smoothstep:mK,smootherstep:dK,randInt:lK,randFloat:uK,randFloatSpread:cK,seededRandom:nK,degToRad:sK,radToDeg:iK,isPowerOfTwo:oK,ceilPowerOfTwo:aK,floorPowerOfTwo:rK,setQuaternionFromProperEuler:tK,normalize:_8,denormalize:M9};class _0{constructor(J=0,Q=0){_0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(p0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(p0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class m8{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,Y){let H=$[Z+0],U=$[Z+1],X=$[Z+2],N=$[Z+3],F=W[K+0],G=W[K+1],E=W[K+2],R=W[K+3];if(N!==R||H!==F||U!==G||X!==E){let V=H*F+U*G+X*E+N*R;if(V<0)F=-F,G=-G,E=-E,R=-R,V=-V;let q=1-Y;if(V<0.9995){let D=Math.acos(V),B=Math.sin(D);q=Math.sin(q*D)/B,Y=Math.sin(Y*D)/B,H=H*q+F*Y,U=U*q+G*Y,X=X*q+E*Y,N=N*q+R*Y}else{H=H*q+F*Y,U=U*q+G*Y,X=X*q+E*Y,N=N*q+R*Y;let D=1/Math.sqrt(H*H+U*U+X*X+N*N);H*=D,U*=D,X*=D,N*=D}}J[Q]=H,J[Q+1]=U,J[Q+2]=X,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let Y=$[Z],H=$[Z+1],U=$[Z+2],X=$[Z+3],N=W[K],F=W[K+1],G=W[K+2],E=W[K+3];return J[Q]=Y*E+X*N+H*G-U*F,J[Q+1]=H*E+X*F+U*N-Y*G,J[Q+2]=U*E+X*G+Y*F-H*N,J[Q+3]=X*E-Y*N-H*F-U*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,Y=Math.cos,H=Math.sin,U=Y($/2),X=Y(Z/2),N=Y(W/2),F=H($/2),G=H(Z/2),E=H(W/2);switch(K){case"XYZ":this._x=F*X*N+U*G*E,this._y=U*G*N-F*X*E,this._z=U*X*E+F*G*N,this._w=U*X*N-F*G*E;break;case"YXZ":this._x=F*X*N+U*G*E,this._y=U*G*N-F*X*E,this._z=U*X*E-F*G*N,this._w=U*X*N+F*G*E;break;case"ZXY":this._x=F*X*N-U*G*E,this._y=U*G*N+F*X*E,this._z=U*X*E+F*G*N,this._w=U*X*N-F*G*E;break;case"ZYX":this._x=F*X*N-U*G*E,this._y=U*G*N+F*X*E,this._z=U*X*E-F*G*N,this._w=U*X*N+F*G*E;break;case"YZX":this._x=F*X*N+U*G*E,this._y=U*G*N+F*X*E,this._z=U*X*E-F*G*N,this._w=U*X*N-F*G*E;break;case"XZY":this._x=F*X*N-U*G*E,this._y=U*G*N-F*X*E,this._z=U*X*E+F*G*N,this._w=U*X*N+F*G*E;break;default:C0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],Y=Q[5],H=Q[9],U=Q[2],X=Q[6],N=Q[10],F=$+Y+N;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(X-H)*G,this._y=(W-U)*G,this._z=(K-Z)*G}else if($>Y&&$>N){let G=2*Math.sqrt(1+$-Y-N);this._w=(X-H)/G,this._x=0.25*G,this._y=(Z+K)/G,this._z=(W+U)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-$-N);this._w=(W-U)/G,this._x=(Z+K)/G,this._y=0.25*G,this._z=(H+X)/G}else{let G=2*Math.sqrt(1+N-$-Y);this._w=(K-Z)/G,this._x=(W+U)/G,this._y=(H+X)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(p0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,Y=Q._x,H=Q._y,U=Q._z,X=Q._w;return this._x=$*X+K*Y+Z*U-W*H,this._y=Z*X+K*H+W*Y-$*U,this._z=W*X+K*U+$*H-Z*Y,this._w=K*X-$*Y-Z*H-W*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,W=-W,K=-K,Y=-Y;let H=1-Q;if(Y<0.9995){let U=Math.acos(Y),X=Math.sin(U);H=Math.sin(H*U)/X,Q=Math.sin(Q*U)/X,this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+W*Q,this._w=this._w*H+K*Q,this._onChangeCallback()}else this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+W*Q,this._w=this._w*H+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(J=0,Q=0,$=0){S.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(r$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(r$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,Y=J.z,H=J.w,U=2*(K*Z-Y*$),X=2*(Y*Q-W*Z),N=2*(W*$-K*Q);return this.x=Q+H*U+K*N-Y*X,this.y=$+H*X+Y*U-W*N,this.z=Z+H*N+W*X-K*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(p0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,Y=Q.y,H=Q.z;return this.x=Z*H-W*Y,this.y=W*K-$*H,this.z=$*Y-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return wJ.copy(this).projectOnVector(J),this.sub(wJ)}reflect(J){return this.sub(wJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(p0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var wJ=new S,r$=new m8;class f0{constructor(J,Q,$,Z,W,K,Y,H,U){if(f0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,Y,H,U)}set(J,Q,$,Z,W,K,Y,H,U){let X=this.elements;return X[0]=J,X[1]=Z,X[2]=Y,X[3]=Q,X[4]=W,X[5]=H,X[6]=$,X[7]=K,X[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],Y=$[3],H=$[6],U=$[1],X=$[4],N=$[7],F=$[2],G=$[5],E=$[8],R=Z[0],V=Z[3],q=Z[6],D=Z[1],B=Z[4],L=Z[7],I=Z[2],f=Z[5],C=Z[8];return W[0]=K*R+Y*D+H*I,W[3]=K*V+Y*B+H*f,W[6]=K*q+Y*L+H*C,W[1]=U*R+X*D+N*I,W[4]=U*V+X*B+N*f,W[7]=U*q+X*L+N*C,W[2]=F*R+G*D+E*I,W[5]=F*V+G*B+E*f,W[8]=F*q+G*L+E*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],Y=J[5],H=J[6],U=J[7],X=J[8];return Q*K*X-Q*Y*U-$*W*X+$*Y*H+Z*W*U-Z*K*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],Y=J[5],H=J[6],U=J[7],X=J[8],N=X*K-Y*U,F=Y*H-X*W,G=U*W-K*H,E=Q*N+$*F+Z*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/E;return J[0]=N*R,J[1]=(Z*U-X*$)*R,J[2]=(Y*$-Z*K)*R,J[3]=F*R,J[4]=(X*Q-Z*H)*R,J[5]=(Z*W-Y*Q)*R,J[6]=G*R,J[7]=($*H-U*Q)*R,J[8]=(K*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,Y){let H=Math.cos(W),U=Math.sin(W);return this.set($*H,$*U,-$*(H*K+U*Y)+K+J,-Z*U,Z*H,-Z*(-U*K+H*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(PJ.makeScale(J,Q)),this}rotate(J){return this.premultiply(PJ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(PJ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var PJ=new f0,t$=new f0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),e$=new f0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function eK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,Y){if(this.enabled===!1||K===Y||!K||!Y)return W;if(this.spaces[K].transfer==="srgb")W.r=F6(W.r),W.g=F6(W.g),W.b=F6(W.b);if(this.spaces[K].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=B9(W.r),W.g=B9(W.g),W.b=B9(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,Y){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return u9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return u9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:t$,fromXYZ:e$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:t$,fromXYZ:e$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var m0=eK();function F6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function B9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var H9;class eQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(H9===void 0)H9=l9("canvas");H9.width=J.width,H9.height=J.height;let Z=H9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=H9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=l9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=F6(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(F6(Q[$]/255)*255);else Q[$]=F6(Q[$]);return{data:Q,width:J.width,height:J.height}}else return C0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var JY=0;class t9{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JY++}),this.uuid=T9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,Y=Z.length;K<Y;K++)if(Z[K].isDataTexture)W.push(AJ(Z[K].image));else W.push(AJ(Z[K]))}else W=AJ(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function AJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return eQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return C0("Texture: Unable to serialize Texture."),{}}var QY=0,_J=new S;class C8 extends R6{constructor(J=C8.DEFAULT_IMAGE,Q=C8.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,Y=1023,H=1009,U=C8.DEFAULT_ANISOTROPY,X=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:QY++}),this.uuid=T9(),this.name="",this.source=new t9(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=U,this.format=Y,this.internalFormat=null,this.type=H,this.offset=new _0(0,0),this.repeat=new _0(1,1),this.center=new _0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new f0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(_J).x}get height(){return this.source.getSize(_J).y}get depth(){return this.source.getSize(_J).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){C0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){C0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}C8.DEFAULT_IMAGE=null;C8.DEFAULT_MAPPING=300;C8.DEFAULT_ANISOTROPY=1;class U8{constructor(J=0,Q=0,$=0,Z=1){U8.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,Y=0.1,H=J.elements,U=H[0],X=H[4],N=H[8],F=H[1],G=H[5],E=H[9],R=H[2],V=H[6],q=H[10];if(Math.abs(X-F)<0.01&&Math.abs(N-R)<0.01&&Math.abs(E-V)<0.01){if(Math.abs(X+F)<0.1&&Math.abs(N+R)<0.1&&Math.abs(E+V)<0.1&&Math.abs(U+G+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let B=(U+1)/2,L=(G+1)/2,I=(q+1)/2,f=(X+F)/4,C=(N+R)/4,P=(E+V)/4;if(B>L&&B>I)if(B<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(B),Z=f/$,W=C/$;else if(L>I)if(L<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),$=f/Z,W=P/Z;else if(I<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(I),$=C/W,Z=P/W;return this.set($,Z,W,Q),this}let D=Math.sqrt((V-E)*(V-E)+(N-R)*(N-R)+(F-X)*(F-X));if(Math.abs(D)<0.001)D=1;return this.x=(V-E)/D,this.y=(N-R)/D,this.z=(F-X)/D,this.w=Math.acos((U+G+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this.w=p0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this.w=p0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(p0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J$ extends R6{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new U8(0,0,J,Q),this.scissorTest=!1,this.viewport=new U8(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},W=new C8(Z),K=$.count;for(let Y=0;Y<K;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new t9(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d8 extends J${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class e7 extends C8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q$ extends C8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t0{constructor(J,Q,$,Z,W,K,Y,H,U,X,N,F,G,E,R,V){if(t0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,Y,H,U,X,N,F,G,E,R,V)}set(J,Q,$,Z,W,K,Y,H,U,X,N,F,G,E,R,V){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=W,q[5]=K,q[9]=Y,q[13]=H,q[2]=U,q[6]=X,q[10]=N,q[14]=F,q[3]=G,q[7]=E,q[11]=R,q[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/U9.setFromMatrixColumn(J,0).length(),W=1/U9.setFromMatrixColumn(J,1).length(),K=1/U9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),Y=Math.sin($),H=Math.cos(Z),U=Math.sin(Z),X=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let F=K*X,G=K*N,E=Y*X,R=Y*N;Q[0]=H*X,Q[4]=-H*N,Q[8]=U,Q[1]=G+E*U,Q[5]=F-R*U,Q[9]=-Y*H,Q[2]=R-F*U,Q[6]=E+G*U,Q[10]=K*H}else if(J.order==="YXZ"){let F=H*X,G=H*N,E=U*X,R=U*N;Q[0]=F+R*Y,Q[4]=E*Y-G,Q[8]=K*U,Q[1]=K*N,Q[5]=K*X,Q[9]=-Y,Q[2]=G*Y-E,Q[6]=R+F*Y,Q[10]=K*H}else if(J.order==="ZXY"){let F=H*X,G=H*N,E=U*X,R=U*N;Q[0]=F-R*Y,Q[4]=-K*N,Q[8]=E+G*Y,Q[1]=G+E*Y,Q[5]=K*X,Q[9]=R-F*Y,Q[2]=-K*U,Q[6]=Y,Q[10]=K*H}else if(J.order==="ZYX"){let F=K*X,G=K*N,E=Y*X,R=Y*N;Q[0]=H*X,Q[4]=E*U-G,Q[8]=F*U+R,Q[1]=H*N,Q[5]=R*U+F,Q[9]=G*U-E,Q[2]=-U,Q[6]=Y*H,Q[10]=K*H}else if(J.order==="YZX"){let F=K*H,G=K*U,E=Y*H,R=Y*U;Q[0]=H*X,Q[4]=R-F*N,Q[8]=E*N+G,Q[1]=N,Q[5]=K*X,Q[9]=-Y*X,Q[2]=-U*X,Q[6]=G*N+E,Q[10]=F-R*N}else if(J.order==="XZY"){let F=K*H,G=K*U,E=Y*H,R=Y*U;Q[0]=H*X,Q[4]=-N,Q[8]=U*X,Q[1]=F*N+R,Q[5]=K*X,Q[9]=G*N-E,Q[2]=E*N-G,Q[6]=Y*X,Q[10]=R*N+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose($Y,J,ZY)}lookAt(J,Q,$){let Z=this.elements;if(v8.subVectors(J,Q),v8.lengthSq()===0)v8.z=1;if(v8.normalize(),M6.crossVectors($,v8),M6.lengthSq()===0){if(Math.abs($.z)===1)v8.x+=0.0001;else v8.z+=0.0001;v8.normalize(),M6.crossVectors($,v8)}return M6.normalize(),F7.crossVectors(v8,M6),Z[0]=M6.x,Z[4]=F7.x,Z[8]=v8.x,Z[1]=M6.y,Z[5]=F7.y,Z[9]=v8.y,Z[2]=M6.z,Z[6]=F7.z,Z[10]=v8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],Y=$[4],H=$[8],U=$[12],X=$[1],N=$[5],F=$[9],G=$[13],E=$[2],R=$[6],V=$[10],q=$[14],D=$[3],B=$[7],L=$[11],I=$[15],f=Z[0],C=Z[4],P=Z[8],O=Z[12],A=Z[1],l=Z[5],w=Z[9],j=Z[13],m=Z[2],b=Z[6],u=Z[10],p=Z[14],h=Z[3],e=Z[7],t=Z[11],X0=Z[15];return W[0]=K*f+Y*A+H*m+U*h,W[4]=K*C+Y*l+H*b+U*e,W[8]=K*P+Y*w+H*u+U*t,W[12]=K*O+Y*j+H*p+U*X0,W[1]=X*f+N*A+F*m+G*h,W[5]=X*C+N*l+F*b+G*e,W[9]=X*P+N*w+F*u+G*t,W[13]=X*O+N*j+F*p+G*X0,W[2]=E*f+R*A+V*m+q*h,W[6]=E*C+R*l+V*b+q*e,W[10]=E*P+R*w+V*u+q*t,W[14]=E*O+R*j+V*p+q*X0,W[3]=D*f+B*A+L*m+I*h,W[7]=D*C+B*l+L*b+I*e,W[11]=D*P+B*w+L*u+I*t,W[15]=D*O+B*j+L*p+I*X0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],Y=J[5],H=J[9],U=J[13],X=J[2],N=J[6],F=J[10],G=J[14],E=J[3],R=J[7],V=J[11],q=J[15],D=H*G-U*F,B=Y*G-U*N,L=Y*F-H*N,I=K*G-U*X,f=K*F-H*X,C=K*N-Y*X;return Q*(R*D-V*B+q*L)-$*(E*D-V*I+q*f)+Z*(E*B-R*I+q*C)-W*(E*L-R*f+V*C)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],Y=J[5],H=J[6],U=J[7],X=J[8],N=J[9],F=J[10],G=J[11],E=J[12],R=J[13],V=J[14],q=J[15],D=Q*Y-$*K,B=Q*H-Z*K,L=Q*U-W*K,I=$*H-Z*Y,f=$*U-W*Y,C=Z*U-W*H,P=X*R-N*E,O=X*V-F*E,A=X*q-G*E,l=N*V-F*R,w=N*q-G*R,j=F*q-G*V,m=D*j-B*w+L*l+I*A-f*O+C*P;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/m;return J[0]=(Y*j-H*w+U*l)*b,J[1]=(Z*w-$*j-W*l)*b,J[2]=(R*C-V*f+q*I)*b,J[3]=(F*f-N*C-G*I)*b,J[4]=(H*A-K*j-U*O)*b,J[5]=(Q*j-Z*A+W*O)*b,J[6]=(V*L-E*C-q*B)*b,J[7]=(X*C-F*L+G*B)*b,J[8]=(K*w-Y*A+U*P)*b,J[9]=($*A-Q*w-W*P)*b,J[10]=(E*f-R*L+q*D)*b,J[11]=(N*L-X*f-G*D)*b,J[12]=(Y*O-K*l-H*P)*b,J[13]=(Q*l-$*O+Z*P)*b,J[14]=(R*B-E*I-V*D)*b,J[15]=(X*I-N*B+F*D)*b,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,Y=J.y,H=J.z,U=W*K,X=W*Y;return this.set(U*K+$,U*Y-Z*H,U*H+Z*Y,0,U*Y+Z*H,X*Y+$,X*H-Z*K,0,U*H-Z*Y,X*H+Z*K,W*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,Y=Q._z,H=Q._w,U=W+W,X=K+K,N=Y+Y,F=W*U,G=W*X,E=W*N,R=K*X,V=K*N,q=Y*N,D=H*U,B=H*X,L=H*N,I=$.x,f=$.y,C=$.z;return Z[0]=(1-(R+q))*I,Z[1]=(G+L)*I,Z[2]=(E-B)*I,Z[3]=0,Z[4]=(G-L)*f,Z[5]=(1-(F+q))*f,Z[6]=(V+D)*f,Z[7]=0,Z[8]=(E+B)*C,Z[9]=(V-D)*C,Z[10]=(1-(F+R))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinant();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=U9.set(Z[0],Z[1],Z[2]).length(),Y=U9.set(Z[4],Z[5],Z[6]).length(),H=U9.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;n8.copy(this);let U=1/K,X=1/Y,N=1/H;return n8.elements[0]*=U,n8.elements[1]*=U,n8.elements[2]*=U,n8.elements[4]*=X,n8.elements[5]*=X,n8.elements[6]*=X,n8.elements[8]*=N,n8.elements[9]*=N,n8.elements[10]*=N,Q.setFromRotationMatrix(n8),$.x=K,$.y=Y,$.z=H,this}makePerspective(J,Q,$,Z,W,K,Y=2000,H=!1){let U=this.elements,X=2*W/(Q-J),N=2*W/($-Z),F=(Q+J)/(Q-J),G=($+Z)/($-Z),E,R;if(H)E=W/(K-W),R=K*W/(K-W);else if(Y===2000)E=-(K+W)/(K-W),R=-2*K*W/(K-W);else if(Y===2001)E=-K/(K-W),R=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return U[0]=X,U[4]=0,U[8]=F,U[12]=0,U[1]=0,U[5]=N,U[9]=G,U[13]=0,U[2]=0,U[6]=0,U[10]=E,U[14]=R,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,Y=2000,H=!1){let U=this.elements,X=2/(Q-J),N=2/($-Z),F=-(Q+J)/(Q-J),G=-($+Z)/($-Z),E,R;if(H)E=1/(K-W),R=K/(K-W);else if(Y===2000)E=-2/(K-W),R=-(K+W)/(K-W);else if(Y===2001)E=-1/(K-W),R=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return U[0]=X,U[4]=0,U[8]=0,U[12]=F,U[1]=0,U[5]=N,U[9]=0,U[13]=G,U[2]=0,U[6]=0,U[10]=E,U[14]=R,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var U9=new S,n8=new t0,$Y=new S(0,0,0),ZY=new S(1,1,1),M6=new S,F7=new S,v8=new S,JZ=new t0,QZ=new m8;class a8{constructor(J=0,Q=0,$=0,Z=a8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],Y=Z[8],H=Z[1],U=Z[5],X=Z[9],N=Z[2],F=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(p0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-X,G),this._z=Math.atan2(-K,W);else this._x=Math.atan2(F,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-p0(X,-1,1)),Math.abs(X)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(H,U);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(p0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,U);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-p0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-K,U);break;case"YZX":if(this._z=Math.asin(p0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-X,U),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-p0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(F,U),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-X,G),this._y=0;break;default:C0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return JZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(JZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return QZ.setFromEuler(this),this.setFromQuaternion(QZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}a8.DEFAULT_ORDER="XYZ";class e9{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var WY=0,$Z=new S,X9=new m8,H6=new t0,E7=new S,h9=new S,KY=new S,YY=new m8,ZZ=new S(1,0,0),WZ=new S(0,1,0),KZ=new S(0,0,1),YZ={type:"added"},HY={type:"removed"},G9={type:"childadded",child:null},TJ={type:"childremoved",child:null};class N8 extends R6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:WY++}),this.uuid=T9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=N8.DEFAULT_UP.clone();let J=new S,Q=new a8,$=new m8,Z=new S(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new t0},normalMatrix:{value:new f0}}),this.matrix=new t0,this.matrixWorld=new t0,this.matrixAutoUpdate=N8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=N8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return X9.setFromAxisAngle(J,Q),this.quaternion.multiply(X9),this}rotateOnWorldAxis(J,Q){return X9.setFromAxisAngle(J,Q),this.quaternion.premultiply(X9),this}rotateX(J){return this.rotateOnAxis(ZZ,J)}rotateY(J){return this.rotateOnAxis(WZ,J)}rotateZ(J){return this.rotateOnAxis(KZ,J)}translateOnAxis(J,Q){return $Z.copy(J).applyQuaternion(this.quaternion),this.position.add($Z.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(ZZ,J)}translateY(J){return this.translateOnAxis(WZ,J)}translateZ(J){return this.translateOnAxis(KZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(H6.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)E7.copy(J);else E7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),h9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)H6.lookAt(h9,E7,this.up);else H6.lookAt(E7,h9,this.up);if(this.quaternion.setFromRotationMatrix(H6),Z)H6.extractRotation(Z.matrixWorld),X9.setFromRotationMatrix(H6),this.quaternion.premultiply(X9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return A0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(YZ),G9.child=J,this.dispatchEvent(G9),G9.child=null;else A0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(HY),TJ.child=J,this.dispatchEvent(TJ),TJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),H6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),H6.multiply(J.parent.matrixWorld);return J.applyMatrix4(H6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(YZ),G9.child=J,this.dispatchEvent(G9),G9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(h9,J,KY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(h9,YY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,H){if(Y[H.uuid]===void 0)Y[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let H=Y.shapes;if(Array.isArray(H))for(let U=0,X=H.length;U<X;U++){let N=H[U];W(J.shapes,N)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let H=0,U=this.material.length;H<U;H++)Y.push(W(J.materials,this.material[H]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let H=this.animations[Y];Z.animations.push(W(J.animations,H))}}if(Q){let Y=K(J.geometries),H=K(J.materials),U=K(J.textures),X=K(J.images),N=K(J.shapes),F=K(J.skeletons),G=K(J.animations),E=K(J.nodes);if(Y.length>0)$.geometries=Y;if(H.length>0)$.materials=H;if(U.length>0)$.textures=U;if(X.length>0)$.images=X;if(N.length>0)$.shapes=N;if(F.length>0)$.skeletons=F;if(G.length>0)$.animations=G;if(E.length>0)$.nodes=E}return $.object=Z,$;function K(Y){let H=[];for(let U in Y){let X=Y[U];delete X.metadata,H.push(X)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),J.pivot!==null)this.pivot=J.pivot.clone();if(this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}N8.DEFAULT_UP=new S(0,1,0);N8.DEFAULT_MATRIX_AUTO_UPDATE=!0;N8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class q6 extends N8{constructor(){super();this.isGroup=!0,this.type="Group"}}var UY={type:"move"};class J7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new q6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new q6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new q6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,Y=this._targetRay,H=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){K=!0;for(let R of J.hand.values()){let V=Q.getJointPose(R,$),q=this._getHandJoint(U,R);if(V!==null)q.matrix.fromArray(V.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=V.radius;q.visible=V!==null}let X=U.joints["index-finger-tip"],N=U.joints["thumb-tip"],F=X.position.distanceTo(N.position),G=0.02,E=0.005;if(U.inputState.pinching&&F>G+E)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&F<=G-E)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(UY)}}}if(Y!==null)Y.visible=Z!==null;if(H!==null)H.visible=W!==null;if(U!==null)U.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new q6;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var zW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},V6={h:0,s:0,l:0},D7={h:0,s:0,l:0};function SJ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class y0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,m0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=m0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,m0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=m0.workingColorSpace){if(J=rQ(J,1),Q=p0(Q,0,1),$=p0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=SJ(K,W,J+0.3333333333333333),this.g=SJ(K,W,J),this.b=SJ(K,W,J-0.3333333333333333)}return m0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)C0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],Y=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:C0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else C0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=zW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else C0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=F6(J.r),this.g=F6(J.g),this.b=F6(J.b),this}copyLinearToSRGB(J){return this.r=B9(J.r),this.g=B9(J.g),this.b=B9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return m0.workingToColorSpace(z8.copy(this),J),Math.round(p0(z8.r*255,0,255))*65536+Math.round(p0(z8.g*255,0,255))*256+Math.round(p0(z8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=m0.workingColorSpace){m0.workingToColorSpace(z8.copy(this),Q);let{r:$,g:Z,b:W}=z8,K=Math.max($,Z,W),Y=Math.min($,Z,W),H,U,X=(Y+K)/2;if(Y===K)H=0,U=0;else{let N=K-Y;switch(U=X<=0.5?N/(K+Y):N/(2-K-Y),K){case $:H=(Z-W)/N+(Z<W?6:0);break;case Z:H=(W-$)/N+2;break;case W:H=($-Z)/N+4;break}H/=6}return J.h=H,J.s=U,J.l=X,J}getRGB(J,Q=m0.workingColorSpace){return m0.workingToColorSpace(z8.copy(this),Q),J.r=z8.r,J.g=z8.g,J.b=z8.b,J}getStyle(J="srgb"){m0.workingToColorSpace(z8.copy(this),J);let{r:Q,g:$,b:Z}=z8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(V6),this.setHSL(V6.h+J,V6.s+Q,V6.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(V6),J.getHSL(D7);let $=d9(V6.h,D7.h,Q),Z=d9(V6.s,D7.s,Q),W=d9(V6.l,D7.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var z8=new y0;y0.NAMES=zW;class Q7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new y0(J),this.density=Q}clone(){return new Q7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class JJ extends N8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new a8,this.environmentIntensity=1,this.environmentRotation=new a8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var s8=new S,U6=new S,jJ=new S,X6=new S,N9=new S,q9=new S,HZ=new S,fJ=new S,yJ=new S,bJ=new S,vJ=new U8,hJ=new U8,xJ=new U8;class I8{constructor(J=new S,Q=new S,$=new S){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),s8.subVectors(J,Q),Z.cross(s8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){s8.subVectors(Z,Q),U6.subVectors($,Q),jJ.subVectors(J,Q);let K=s8.dot(s8),Y=s8.dot(U6),H=s8.dot(jJ),U=U6.dot(U6),X=U6.dot(jJ),N=K*U-Y*Y;if(N===0)return W.set(0,0,0),null;let F=1/N,G=(U*H-Y*X)*F,E=(K*X-Y*H)*F;return W.set(1-G-E,E,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,X6)===null)return!1;return X6.x>=0&&X6.y>=0&&X6.x+X6.y<=1}static getInterpolation(J,Q,$,Z,W,K,Y,H){if(this.getBarycoord(J,Q,$,Z,X6)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,X6.x),H.addScaledVector(K,X6.y),H.addScaledVector(Y,X6.z),H}static getInterpolatedAttribute(J,Q,$,Z,W,K){return vJ.setScalar(0),hJ.setScalar(0),xJ.setScalar(0),vJ.fromBufferAttribute(J,Q),hJ.fromBufferAttribute(J,$),xJ.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(vJ,W.x),K.addScaledVector(hJ,W.y),K.addScaledVector(xJ,W.z),K}static isFrontFacing(J,Q,$,Z){return s8.subVectors($,Q),U6.subVectors(J,Q),s8.cross(U6).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return s8.subVectors(this.c,this.b),U6.subVectors(this.a,this.b),s8.cross(U6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return I8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return I8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return I8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return I8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return I8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,Y;N9.subVectors(Z,$),q9.subVectors(W,$),fJ.subVectors(J,$);let H=N9.dot(fJ),U=q9.dot(fJ);if(H<=0&&U<=0)return Q.copy($);yJ.subVectors(J,Z);let X=N9.dot(yJ),N=q9.dot(yJ);if(X>=0&&N<=X)return Q.copy(Z);let F=H*N-X*U;if(F<=0&&H>=0&&X<=0)return K=H/(H-X),Q.copy($).addScaledVector(N9,K);bJ.subVectors(J,W);let G=N9.dot(bJ),E=q9.dot(bJ);if(E>=0&&G<=E)return Q.copy(W);let R=G*U-H*E;if(R<=0&&U>=0&&E<=0)return Y=U/(U-E),Q.copy($).addScaledVector(q9,Y);let V=X*E-G*N;if(V<=0&&N-X>=0&&G-E>=0)return HZ.subVectors(W,Z),Y=(N-X)/(N-X+(G-E)),Q.copy(Z).addScaledVector(HZ,Y);let q=1/(V+R+F);return K=R*q,Y=F*q,Q.copy($).addScaledVector(N9,K).addScaledVector(q9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class u6{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(i8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(i8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=i8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,Y=W.count;K<Y;K++){if(J.isMesh===!0)J.getVertexPosition(K,i8);else i8.fromBufferAttribute(W,K);i8.applyMatrix4(J.matrixWorld),this.expandByPoint(i8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();R7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();R7.copy($.boundingBox)}R7.applyMatrix4(J.matrixWorld),this.union(R7)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,i8),i8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(x9),O7.subVectors(this.max,x9),F9.subVectors(J.a,x9),E9.subVectors(J.b,x9),D9.subVectors(J.c,x9),B6.subVectors(E9,F9),L6.subVectors(D9,E9),b6.subVectors(F9,D9);let Q=[0,-B6.z,B6.y,0,-L6.z,L6.y,0,-b6.z,b6.y,B6.z,0,-B6.x,L6.z,0,-L6.x,b6.z,0,-b6.x,-B6.y,B6.x,0,-L6.y,L6.x,0,-b6.y,b6.x,0];if(!gJ(Q,F9,E9,D9,O7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!gJ(Q,F9,E9,D9,O7))return!1;return k7.crossVectors(B6,L6),Q=[k7.x,k7.y,k7.z],gJ(Q,F9,E9,D9,O7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,i8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(i8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return G6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),G6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),G6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),G6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),G6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),G6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),G6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),G6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(G6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var G6=[new S,new S,new S,new S,new S,new S,new S,new S],i8=new S,R7=new u6,F9=new S,E9=new S,D9=new S,B6=new S,L6=new S,b6=new S,x9=new S,O7=new S,k7=new S,v6=new S;function gJ(J,Q,$,Z,W){for(let K=0,Y=J.length-3;K<=Y;K+=3){v6.fromArray(J,K);let H=W.x*Math.abs(v6.x)+W.y*Math.abs(v6.y)+W.z*Math.abs(v6.z),U=Q.dot(v6),X=$.dot(v6),N=Z.dot(v6);if(Math.max(-Math.max(U,X,N),Math.min(U,X,N))>H)return!1}return!0}var F8=new S,M7=new _0,XY=0;class p8{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)M7.fromBufferAttribute(this,Q),M7.applyMatrix3(J),this.setXY(Q,M7.x,M7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.applyMatrix3(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.applyMatrix4(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.applyNormalMatrix(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.transformDirection(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=M9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=_8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=M9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=_8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=M9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=_8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=M9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=_8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=M9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=_8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=_8(Q,this.array),$=_8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=_8(Q,this.array),$=_8($,this.array),Z=_8(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=_8(Q,this.array),$=_8($,this.array),Z=_8(Z,this.array),W=_8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class QJ extends p8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class $J extends p8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class H8 extends p8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var GY=new u6,g9=new S,pJ=new S;class S9{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else GY.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;g9.subVectors(J,this.center);let Q=g9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(g9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else pJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(g9.copy(J.center).add(pJ)),this.expandByPoint(g9.copy(J.center).sub(pJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var NY=0,g8=new t0,mJ=new N8,R9=new S,h8=new u6,p9=new u6,k8=new S;class w8 extends R6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NY++}),this.uuid=T9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((bK(J))?$J:QJ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new f0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return g8.makeRotationFromQuaternion(J),this.applyMatrix4(g8),this}rotateX(J){return g8.makeRotationX(J),this.applyMatrix4(g8),this}rotateY(J){return g8.makeRotationY(J),this.applyMatrix4(g8),this}rotateZ(J){return g8.makeRotationZ(J),this.applyMatrix4(g8),this}translate(J,Q,$){return g8.makeTranslation(J,Q,$),this.applyMatrix4(g8),this}scale(J,Q,$){return g8.makeScale(J,Q,$),this.applyMatrix4(g8),this}lookAt(J){return mJ.lookAt(J),mJ.updateMatrix(),this.applyMatrix4(mJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(R9).negate(),this.translate(R9.x,R9.y,R9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new H8($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)C0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new u6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){A0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(h8.setFromBufferAttribute(W),this.morphTargetsRelative)k8.addVectors(this.boundingBox.min,h8.min),this.boundingBox.expandByPoint(k8),k8.addVectors(this.boundingBox.max,h8.max),this.boundingBox.expandByPoint(k8);else this.boundingBox.expandByPoint(h8.min),this.boundingBox.expandByPoint(h8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))A0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new S9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){A0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let $=this.boundingSphere.center;if(h8.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let Y=Q[W];if(p9.setFromBufferAttribute(Y),this.morphTargetsRelative)k8.addVectors(h8.min,p9.min),h8.expandByPoint(k8),k8.addVectors(h8.max,p9.max),h8.expandByPoint(k8);else h8.expandByPoint(p9.min),h8.expandByPoint(p9.max)}h8.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)k8.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(k8));if(Q)for(let W=0,K=Q.length;W<K;W++){let Y=Q[W],H=this.morphTargetsRelative;for(let U=0,X=Y.count;U<X;U++){if(k8.fromBufferAttribute(Y,U),H)R9.fromBufferAttribute(J,U),k8.add(R9);Z=Math.max(Z,$.distanceToSquared(k8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))A0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){A0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new p8(new Float32Array(4*$.count),4));let K=this.getAttribute("tangent"),Y=[],H=[];for(let P=0;P<$.count;P++)Y[P]=new S,H[P]=new S;let U=new S,X=new S,N=new S,F=new _0,G=new _0,E=new _0,R=new S,V=new S;function q(P,O,A){U.fromBufferAttribute($,P),X.fromBufferAttribute($,O),N.fromBufferAttribute($,A),F.fromBufferAttribute(W,P),G.fromBufferAttribute(W,O),E.fromBufferAttribute(W,A),X.sub(U),N.sub(U),G.sub(F),E.sub(F);let l=1/(G.x*E.y-E.x*G.y);if(!isFinite(l))return;R.copy(X).multiplyScalar(E.y).addScaledVector(N,-G.y).multiplyScalar(l),V.copy(N).multiplyScalar(G.x).addScaledVector(X,-E.x).multiplyScalar(l),Y[P].add(R),Y[O].add(R),Y[A].add(R),H[P].add(V),H[O].add(V),H[A].add(V)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let P=0,O=D.length;P<O;++P){let A=D[P],l=A.start,w=A.count;for(let j=l,m=l+w;j<m;j+=3)q(J.getX(j+0),J.getX(j+1),J.getX(j+2))}let B=new S,L=new S,I=new S,f=new S;function C(P){I.fromBufferAttribute(Z,P),f.copy(I);let O=Y[P];B.copy(O),B.sub(I.multiplyScalar(I.dot(O))).normalize(),L.crossVectors(f,O);let l=L.dot(H[P])<0?-1:1;K.setXYZW(P,B.x,B.y,B.z,l)}for(let P=0,O=D.length;P<O;++P){let A=D[P],l=A.start,w=A.count;for(let j=l,m=l+w;j<m;j+=3)C(J.getX(j+0)),C(J.getX(j+1)),C(J.getX(j+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new p8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,G=$.count;F<G;F++)$.setXYZ(F,0,0,0);let Z=new S,W=new S,K=new S,Y=new S,H=new S,U=new S,X=new S,N=new S;if(J)for(let F=0,G=J.count;F<G;F+=3){let E=J.getX(F+0),R=J.getX(F+1),V=J.getX(F+2);Z.fromBufferAttribute(Q,E),W.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,V),X.subVectors(K,W),N.subVectors(Z,W),X.cross(N),Y.fromBufferAttribute($,E),H.fromBufferAttribute($,R),U.fromBufferAttribute($,V),Y.add(X),H.add(X),U.add(X),$.setXYZ(E,Y.x,Y.y,Y.z),$.setXYZ(R,H.x,H.y,H.z),$.setXYZ(V,U.x,U.y,U.z)}else for(let F=0,G=Q.count;F<G;F+=3)Z.fromBufferAttribute(Q,F+0),W.fromBufferAttribute(Q,F+1),K.fromBufferAttribute(Q,F+2),X.subVectors(K,W),N.subVectors(Z,W),X.cross(N),$.setXYZ(F+0,X.x,X.y,X.z),$.setXYZ(F+1,X.x,X.y,X.z),$.setXYZ(F+2,X.x,X.y,X.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)k8.fromBufferAttribute(J,Q),k8.normalize(),J.setXYZ(Q,k8.x,k8.y,k8.z)}toNonIndexed(){function J(Y,H){let{array:U,itemSize:X,normalized:N}=Y,F=new U.constructor(H.length*X),G=0,E=0;for(let R=0,V=H.length;R<V;R++){if(Y.isInterleavedBufferAttribute)G=H[R]*Y.data.stride+Y.offset;else G=H[R]*X;for(let q=0;q<X;q++)F[E++]=U[G++]}return new p8(F,X,N)}if(this.index===null)return C0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new w8,$=this.index.array,Z=this.attributes;for(let Y in Z){let H=Z[Y],U=J(H,$);Q.setAttribute(Y,U)}let W=this.morphAttributes;for(let Y in W){let H=[],U=W[Y];for(let X=0,N=U.length;X<N;X++){let F=U[X],G=J(F,$);H.push(G)}Q.morphAttributes[Y]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let Y=0,H=K.length;Y<H;Y++){let U=K[Y];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let U in H)if(H[U]!==void 0)J[U]=H[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let U=$[H];J.data.attributes[H]=U.toJSON(J.data)}let Z={},W=!1;for(let H in this.morphAttributes){let U=this.morphAttributes[H],X=[];for(let N=0,F=U.length;N<F;N++){let G=U[N];X.push(G.toJSON(J.data))}if(X.length>0)Z[H]=X,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let X=Z[U];this.setAttribute(U,X.clone(Q))}let W=J.morphAttributes;for(let U in W){let X=[],N=W[U];for(let F=0,G=N.length;F<G;F++)X.push(N[F].clone(Q));this.morphAttributes[U]=X}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let U=0,X=K.length;U<X;U++){let N=K[U];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var qY=0;class _6 extends R6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:qY++}),this.uuid=T9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){C0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){C0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let Y in W){let H=W[Y];delete H.metadata,K.push(H)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var N6=new S,dJ=new S,V7=new S,z6=new S,lJ=new S,B7=new S,uJ=new S;class c6{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,N6)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=N6.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return N6.copy(this.origin).addScaledVector(this.direction,Q),N6.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){dJ.copy(J).add(Q).multiplyScalar(0.5),V7.copy(Q).sub(J).normalize(),z6.copy(this.origin).sub(dJ);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(V7),Y=z6.dot(this.direction),H=-z6.dot(V7),U=z6.lengthSq(),X=Math.abs(1-K*K),N,F,G,E;if(X>0)if(N=K*H-Y,F=K*Y-H,E=W*X,N>=0)if(F>=-E)if(F<=E){let R=1/X;N*=R,F*=R,G=N*(N+K*F+2*Y)+F*(K*N+F+2*H)+U}else F=W,N=Math.max(0,-(K*F+Y)),G=-N*N+F*(F+2*H)+U;else F=-W,N=Math.max(0,-(K*F+Y)),G=-N*N+F*(F+2*H)+U;else if(F<=-E)N=Math.max(0,-(-K*W+Y)),F=N>0?-W:Math.min(Math.max(-W,-H),W),G=-N*N+F*(F+2*H)+U;else if(F<=E)N=0,F=Math.min(Math.max(-W,-H),W),G=F*(F+2*H)+U;else N=Math.max(0,-(K*W+Y)),F=N>0?W:Math.min(Math.max(-W,-H),W),G=-N*N+F*(F+2*H)+U;else F=K>0?-W:W,N=Math.max(0,-(K*F+Y)),G=-N*N+F*(F+2*H)+U;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(dJ).addScaledVector(V7,F);return G}intersectSphere(J,Q){N6.subVectors(J.center,this.origin);let $=N6.dot(this.direction),Z=N6.dot(N6)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),Y=$-K,H=$+K;if(H<0)return null;if(Y<0)return this.at(H,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,Y,H,U=1/this.direction.x,X=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(U>=0)$=(J.min.x-F.x)*U,Z=(J.max.x-F.x)*U;else $=(J.max.x-F.x)*U,Z=(J.min.x-F.x)*U;if(X>=0)W=(J.min.y-F.y)*X,K=(J.max.y-F.y)*X;else W=(J.max.y-F.y)*X,K=(J.min.y-F.y)*X;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(N>=0)Y=(J.min.z-F.z)*N,H=(J.max.z-F.z)*N;else Y=(J.max.z-F.z)*N,H=(J.min.z-F.z)*N;if($>H||Y>Z)return null;if(Y>$||$!==$)$=Y;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,N6)!==null}intersectTriangle(J,Q,$,Z,W){lJ.subVectors(Q,J),B7.subVectors($,J),uJ.crossVectors(lJ,B7);let K=this.direction.dot(uJ),Y;if(K>0){if(Z)return null;Y=1}else if(K<0)Y=-1,K=-K;else return null;z6.subVectors(this.origin,J);let H=Y*this.direction.dot(B7.crossVectors(z6,B7));if(H<0)return null;let U=Y*this.direction.dot(lJ.cross(z6));if(U<0)return null;if(H+U>K)return null;let X=-Y*z6.dot(uJ);if(X<0)return null;return this.at(X/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class n6 extends _6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new a8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var UZ=new t0,h6=new c6,L7=new S9,XZ=new S,z7=new S,I7=new S,C7=new S,cJ=new S,w7=new S,GZ=new S,P7=new S;class S8 extends N8{constructor(J=new w8,Q=new n6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){w7.set(0,0,0);for(let H=0,U=W.length;H<U;H++){let X=Y[H],N=W[H];if(X===0)continue;if(cJ.fromBufferAttribute(N,J),K)w7.addScaledVector(cJ,X);else w7.addScaledVector(cJ.sub(Q),X)}Q.add(w7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(L7.copy($.boundingSphere),L7.applyMatrix4(W),h6.copy(J.ray).recast(J.near),L7.containsPoint(h6.origin)===!1){if(h6.intersectSphere(L7,XZ)===null)return;if(h6.origin.distanceToSquared(XZ)>(J.far-J.near)**2)return}if(UZ.copy(W).invert(),h6.copy(J.ray).applyMatrix4(UZ),$.boundingBox!==null){if(h6.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,h6)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,Y=W.index,H=W.attributes.position,U=W.attributes.uv,X=W.attributes.uv1,N=W.attributes.normal,F=W.groups,G=W.drawRange;if(Y!==null)if(Array.isArray(K))for(let E=0,R=F.length;E<R;E++){let V=F[E],q=K[V.materialIndex],D=Math.max(V.start,G.start),B=Math.min(Y.count,Math.min(V.start+V.count,G.start+G.count));for(let L=D,I=B;L<I;L+=3){let f=Y.getX(L),C=Y.getX(L+1),P=Y.getX(L+2);if(Z=A7(this,q,J,$,U,X,N,f,C,P),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=V.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let V=E,q=R;V<q;V+=3){let D=Y.getX(V),B=Y.getX(V+1),L=Y.getX(V+2);if(Z=A7(this,K,J,$,U,X,N,D,B,L),Z)Z.faceIndex=Math.floor(V/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(K))for(let E=0,R=F.length;E<R;E++){let V=F[E],q=K[V.materialIndex],D=Math.max(V.start,G.start),B=Math.min(H.count,Math.min(V.start+V.count,G.start+G.count));for(let L=D,I=B;L<I;L+=3){let f=L,C=L+1,P=L+2;if(Z=A7(this,q,J,$,U,X,N,f,C,P),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=V.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),R=Math.min(H.count,G.start+G.count);for(let V=E,q=R;V<q;V+=3){let D=V,B=V+1,L=V+2;if(Z=A7(this,K,J,$,U,X,N,D,B,L),Z)Z.faceIndex=Math.floor(V/3),Q.push(Z)}}}}function FY(J,Q,$,Z,W,K,Y,H){let U;if(Q.side===1)U=Z.intersectTriangle(Y,K,W,!0,H);else U=Z.intersectTriangle(W,K,Y,Q.side===0,H);if(U===null)return null;P7.copy(H),P7.applyMatrix4(J.matrixWorld);let X=$.ray.origin.distanceTo(P7);if(X<$.near||X>$.far)return null;return{distance:X,point:P7.clone(),object:J}}function A7(J,Q,$,Z,W,K,Y,H,U,X){J.getVertexPosition(H,z7),J.getVertexPosition(U,I7),J.getVertexPosition(X,C7);let N=FY(J,Q,$,Z,z7,I7,C7,GZ);if(N){let F=new S;if(I8.getBarycoord(GZ,z7,I7,C7,F),W)N.uv=I8.getInterpolatedAttribute(W,H,U,X,F,new _0);if(K)N.uv1=I8.getInterpolatedAttribute(K,H,U,X,F,new _0);if(Y){if(N.normal=I8.getInterpolatedAttribute(Y,H,U,X,F,new S),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:H,b:U,c:X,normal:new S,materialIndex:0};I8.getNormal(z7,I7,C7,G.normal),N.face=G,N.barycoord=F}return N}class $$ extends C8{constructor(J=null,Q=1,$=1,Z,W,K,Y,H,U=1003,X=1003,N,F){super(null,K,Y,H,U,X,Z,W,N,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var nJ=new S,EY=new S,DY=new f0;class o8{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=nJ.subVectors($,Q).cross(EY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(nJ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||DY.getNormalMatrix(J),Z=this.coplanarPoint(nJ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var x6=new S9,RY=new _0(0.5,0.5),_7=new S;class $7{constructor(J=new o8,Q=new o8,$=new o8,Z=new o8,W=new o8,K=new o8){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],Y=W[1],H=W[2],U=W[3],X=W[4],N=W[5],F=W[6],G=W[7],E=W[8],R=W[9],V=W[10],q=W[11],D=W[12],B=W[13],L=W[14],I=W[15];if(Z[0].setComponents(U-K,G-X,q-E,I-D).normalize(),Z[1].setComponents(U+K,G+X,q+E,I+D).normalize(),Z[2].setComponents(U+Y,G+N,q+R,I+B).normalize(),Z[3].setComponents(U-Y,G-N,q-R,I-B).normalize(),$)Z[4].setComponents(H,F,V,L).normalize(),Z[5].setComponents(U-H,G-F,q-V,I-L).normalize();else if(Z[4].setComponents(U-H,G-F,q-V,I-L).normalize(),Q===2000)Z[5].setComponents(U+H,G+F,q+V,I+L).normalize();else if(Q===2001)Z[5].setComponents(H,F,V,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();x6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();x6.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(x6)}intersectsSprite(J){x6.center.set(0,0,0);let Q=RY.distanceTo(J.center);return x6.radius=0.7071067811865476+Q,x6.applyMatrix4(J.matrixWorld),this.intersectsSphere(x6)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(_7.x=Z.normal.x>0?J.max.x:J.min.x,_7.y=Z.normal.y>0?J.max.y:J.min.y,_7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(_7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s6 extends _6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var g7=new S,p7=new S,NZ=new t0,m9=new c6,T7=new S9,sJ=new S,qZ=new S;class ZJ extends N8{constructor(J=new w8,Q=new s6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)g7.fromBufferAttribute(Q,Z-1),p7.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=g7.distanceTo(p7);J.setAttribute("lineDistance",new H8($,1))}else C0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(T7.copy($.boundingSphere),T7.applyMatrix4(Z),T7.radius+=W,J.ray.intersectsSphere(T7)===!1)return;NZ.copy(Z).invert(),m9.copy(J.ray).applyMatrix4(NZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),H=Y*Y,U=this.isLineSegments?2:1,X=$.index,F=$.attributes.position;if(X!==null){let G=Math.max(0,K.start),E=Math.min(X.count,K.start+K.count);for(let R=G,V=E-1;R<V;R+=U){let q=X.getX(R),D=X.getX(R+1),B=S7(this,J,m9,H,q,D,R);if(B)Q.push(B)}if(this.isLineLoop){let R=X.getX(E-1),V=X.getX(G),q=S7(this,J,m9,H,R,V,E-1);if(q)Q.push(q)}}else{let G=Math.max(0,K.start),E=Math.min(F.count,K.start+K.count);for(let R=G,V=E-1;R<V;R+=U){let q=S7(this,J,m9,H,R,R+1,R);if(q)Q.push(q)}if(this.isLineLoop){let R=S7(this,J,m9,H,E-1,G,E-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function S7(J,Q,$,Z,W,K,Y){let H=J.geometry.attributes.position;if(g7.fromBufferAttribute(H,W),p7.fromBufferAttribute(H,K),$.distanceSqToSegment(g7,p7,sJ,qZ)>Z)return;sJ.applyMatrix4(J.matrixWorld);let X=Q.ray.origin.distanceTo(sJ);if(X<Q.near||X>Q.far)return;return{distance:X,point:qZ.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var FZ=new S,EZ=new S;class Z7 extends ZJ{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)FZ.fromBufferAttribute(Q,Z),EZ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+FZ.distanceTo(EZ);J.setAttribute("lineDistance",new H8($,1))}else C0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WJ extends C8{constructor(J=[],Q=301,$,Z,W,K,Y,H,U,X){super(J,Q,$,Z,W,K,Y,H,U,X);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class i6 extends C8{constructor(J,Q,$=1014,Z,W,K,Y=1003,H=1003,U,X=1026,N=1){if(X!==1026&&X!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:N};super(F,Z,W,K,Y,H,X,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new t9(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class Z$ extends i6{constructor(J,Q=1014,$=301,Z,W,K=1003,Y=1003,H,U=1026){let X={width:J,height:J,depth:1},N=[X,X,X,X,X,X];super(J,J,Q,$,Z,W,K,Y,H,U);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class KJ extends C8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class T6 extends w8{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let Y=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let H=[],U=[],X=[],N=[],F=0,G=0;E("z","y","x",-1,-1,$,Q,J,K,W,0),E("z","y","x",1,-1,$,Q,-J,K,W,1),E("x","z","y",1,1,J,$,Q,Z,K,2),E("x","z","y",1,-1,J,$,-Q,Z,K,3),E("x","y","z",1,-1,J,Q,$,Z,W,4),E("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(H),this.setAttribute("position",new H8(U,3)),this.setAttribute("normal",new H8(X,3)),this.setAttribute("uv",new H8(N,2));function E(R,V,q,D,B,L,I,f,C,P,O){let A=L/C,l=I/P,w=L/2,j=I/2,m=f/2,b=C+1,u=P+1,p=0,h=0,e=new S;for(let t=0;t<u;t++){let X0=t*l-j;for(let z0=0;z0<b;z0++){let U0=z0*A-w;e[R]=U0*D,e[V]=X0*B,e[q]=m,U.push(e.x,e.y,e.z),e[R]=0,e[V]=0,e[q]=f>0?1:-1,X.push(e.x,e.y,e.z),N.push(z0/C),N.push(1-t/P),p+=1}}for(let t=0;t<P;t++)for(let X0=0;X0<C;X0++){let z0=F+X0+b*t,U0=F+X0+b*(t+1),Y8=F+(X0+1)+b*(t+1),i0=F+(X0+1)+b*t;H.push(z0,U0,i0),H.push(U0,Y8,i0),h+=6}Y.addGroup(G,h,O),G+=h,F+=p}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new T6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class YJ extends w8{constructor(J=1,Q=1,$=1,Z=32,W=1,K=!1,Y=0,H=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:K,thetaStart:Y,thetaLength:H};let U=this;Z=Math.floor(Z),W=Math.floor(W);let X=[],N=[],F=[],G=[],E=0,R=[],V=$/2,q=0;if(D(),K===!1){if(J>0)B(!0);if(Q>0)B(!1)}this.setIndex(X),this.setAttribute("position",new H8(N,3)),this.setAttribute("normal",new H8(F,3)),this.setAttribute("uv",new H8(G,2));function D(){let L=new S,I=new S,f=0,C=(Q-J)/$;for(let P=0;P<=W;P++){let O=[],A=P/W,l=A*(Q-J)+J;for(let w=0;w<=Z;w++){let j=w/Z,m=j*H+Y,b=Math.sin(m),u=Math.cos(m);I.x=l*b,I.y=-A*$+V,I.z=l*u,N.push(I.x,I.y,I.z),L.set(b,C,u).normalize(),F.push(L.x,L.y,L.z),G.push(j,1-A),O.push(E++)}R.push(O)}for(let P=0;P<Z;P++)for(let O=0;O<W;O++){let A=R[O][P],l=R[O+1][P],w=R[O+1][P+1],j=R[O][P+1];if(J>0||O!==0)X.push(A,l,j),f+=3;if(Q>0||O!==W-1)X.push(l,w,j),f+=3}U.addGroup(q,f,0),q+=f}function B(L){let I=E,f=new _0,C=new S,P=0,O=L===!0?J:Q,A=L===!0?1:-1;for(let w=1;w<=Z;w++)N.push(0,V*A,0),F.push(0,A,0),G.push(0.5,0.5),E++;let l=E;for(let w=0;w<=Z;w++){let m=w/Z*H+Y,b=Math.cos(m),u=Math.sin(m);C.x=O*u,C.y=V*A,C.z=O*b,N.push(C.x,C.y,C.z),F.push(0,A,0),f.x=b*0.5+0.5,f.y=u*0.5*A+0.5,G.push(f.x,f.y),E++}for(let w=0;w<Z;w++){let j=I+w,m=l+w;if(L===!0)X.push(m,m+1,j);else X.push(m+1,m,j);P+=3}U.addGroup(q,P,L===!0?1:2),q+=P}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new YJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class HJ extends YJ{constructor(J=1,Q=1,$=32,Z=1,W=!1,K=0,Y=Math.PI*2){super(0,J,Q,$,Z,W,K,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:W,thetaStart:K,thetaLength:Y}}static fromJSON(J){return new HJ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}var j7=new S,f7=new S,iJ=new S,y7=new I8;class W7 extends w8{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let Z=Math.pow(10,4),W=Math.cos(V9*Q),K=J.getIndex(),Y=J.getAttribute("position"),H=K?K.count:Y.count,U=[0,0,0],X=["a","b","c"],N=[,,,],F={},G=[];for(let E=0;E<H;E+=3){if(K)U[0]=K.getX(E),U[1]=K.getX(E+1),U[2]=K.getX(E+2);else U[0]=E,U[1]=E+1,U[2]=E+2;let{a:R,b:V,c:q}=y7;if(R.fromBufferAttribute(Y,U[0]),V.fromBufferAttribute(Y,U[1]),q.fromBufferAttribute(Y,U[2]),y7.getNormal(iJ),N[0]=`${Math.round(R.x*Z)},${Math.round(R.y*Z)},${Math.round(R.z*Z)}`,N[1]=`${Math.round(V.x*Z)},${Math.round(V.y*Z)},${Math.round(V.z*Z)}`,N[2]=`${Math.round(q.x*Z)},${Math.round(q.y*Z)},${Math.round(q.z*Z)}`,N[0]===N[1]||N[1]===N[2]||N[2]===N[0])continue;for(let D=0;D<3;D++){let B=(D+1)%3,L=N[D],I=N[B],f=y7[X[D]],C=y7[X[B]],P=`${L}_${I}`,O=`${I}_${L}`;if(O in F&&F[O]){if(iJ.dot(F[O].normal)<=W)G.push(f.x,f.y,f.z),G.push(C.x,C.y,C.z);F[O]=null}else if(!(P in F))F[P]={index0:U[D],index1:U[B],normal:iJ.clone()}}}for(let E in F)if(F[E]){let{index0:R,index1:V}=F[E];j7.fromBufferAttribute(Y,R),f7.fromBufferAttribute(Y,V),G.push(j7.x,j7.y,j7.z),G.push(f7.x,f7.y,f7.z)}this.setAttribute("position",new H8(G,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class o6 extends w8{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,Y=Math.floor($),H=Math.floor(Z),U=Y+1,X=H+1,N=J/Y,F=Q/H,G=[],E=[],R=[],V=[];for(let q=0;q<X;q++){let D=q*F-K;for(let B=0;B<U;B++){let L=B*N-W;E.push(L,-D,0),R.push(0,0,1),V.push(B/Y),V.push(1-q/H)}}for(let q=0;q<H;q++)for(let D=0;D<Y;D++){let B=D+U*q,L=D+U*(q+1),I=D+1+U*(q+1),f=D+1+U*q;G.push(B,L,f),G.push(L,I,f)}this.setIndex(G),this.setAttribute("position",new H8(E,3)),this.setAttribute("normal",new H8(R,3)),this.setAttribute("uv",new H8(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o6(J.width,J.height,J.widthSegments,J.heightSegments)}}function a6(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)C0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function P8(J){let Q={};for(let $=0;$<J.length;$++){let Z=a6(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function OY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function W$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return m0.workingColorSpace}var IW={clone:a6,merge:P8},kY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class l8 extends _6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kY,this.fragmentShader=MY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=a6(J.uniforms),this.uniformsGroups=OY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class K$ extends l8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UJ extends _6{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new _0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new a8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class Y$ extends _6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class H$ extends _6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function b7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class r6{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let H=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let Y=$+K>>>1;if(J<Q[Y])K=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class U$ extends r6{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,Y=Z[W],H=Z[K];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,H=2*$-Q;break;case 2402:K=1,H=$+Z[1]-Z[0];break;default:K=J-1,H=Q}let U=($-Q)*0.5,X=this.valueSize;this._weightPrev=U/(Q-Y),this._weightNext=U/(H-$),this._offsetPrev=W*X,this._offsetNext=K*X}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,Y=this.valueSize,H=J*Y,U=H-Y,X=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,G=this._weightNext,E=($-Q)/(Z-Q),R=E*E,V=R*E,q=-F*V+2*F*R-F*E,D=(1+F)*V+(-1.5-2*F)*R+(-0.5+F)*E+1,B=(-1-G)*V+(1.5+G)*R+0.5*E,L=G*V-G*R;for(let I=0;I!==Y;++I)W[I]=q*K[X+I]+D*K[U+I]+B*K[H+I]+L*K[N+I];return W}}class X$ extends r6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,Y=this.valueSize,H=J*Y,U=H-Y,X=($-Q)/(Z-Q),N=1-X;for(let F=0;F!==Y;++F)W[F]=K[U+F]*N+K[H+F]*X;return W}}class G$ extends r6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class N$ extends r6{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,Y=this.valueSize,H=J*Y,U=H-Y,X=this.settings||this.DefaultSettings_,N=X.inTangents,F=X.outTangents;if(!N||!F){let R=($-Q)/(Z-Q),V=1-R;for(let q=0;q!==Y;++q)W[q]=K[U+q]*V+K[H+q]*R;return W}let G=Y*2,E=J-1;for(let R=0;R!==Y;++R){let V=K[U+R],q=K[H+R],D=E*G+R*2,B=F[D],L=F[D+1],I=J*G+R*2,f=N[I],C=N[I+1],P=($-Q)/(Z-Q),O,A,l,w,j;for(let m=0;m<8;m++){O=P*P,A=O*P,l=1-P,w=l*l,j=w*l;let u=j*Q+3*w*P*B+3*l*O*f+A*Z-$;if(Math.abs(u)<0.0000000001)break;let p=3*w*(B-Q)+6*l*P*(f-B)+3*O*(Z-f);if(Math.abs(p)<0.0000000001)break;P=P-u/p,P=Math.max(0,Math.min(1,P))}W[R]=j*V+3*w*P*L+3*l*O*C+A*q}return W}}class u8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=b7(Q,this.TimeBufferType),this.values=b7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:b7(J.times,Array),values:b7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new G$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new X$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new U$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new N$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.settings=this.settings;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return C0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let Y=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*Y,K*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)A0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)A0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let Y=0;Y!==W;Y++){let H=$[Y];if(typeof H==="number"&&isNaN(H)){A0("KeyframeTrack: Time is not a valid number.",this,Y,H),J=!1;break}if(K!==null&&K>H){A0("KeyframeTrack: Out of order keys.",this,Y,H,K),J=!1;break}K=H}if(Z!==void 0){if(vK(Z))for(let Y=0,H=Z.length;Y!==H;++Y){let U=Z[Y];if(isNaN(U)){A0("KeyframeTrack: Value is not a valid number.",this,Y,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let Y=1;Y<W;++Y){let H=!1,U=J[Y],X=J[Y+1];if(U!==X&&(Y!==1||U!==J[0]))if(!Z){let N=Y*$,F=N-$,G=N+$;for(let E=0;E!==$;++E){let R=Q[N+E];if(R!==Q[F+E]||R!==Q[G+E]){H=!0;break}}}else H=!0;if(H){if(Y!==K){J[K]=J[Y];let N=Y*$,F=K*$;for(let G=0;G!==$;++G)Q[F+G]=Q[N+G]}++K}}if(W>0){J[K]=J[W];for(let Y=W*$,H=K*$,U=0;U!==$;++U)Q[H+U]=Q[Y+U];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}u8.prototype.ValueTypeName="";u8.prototype.TimeBufferType=Float32Array;u8.prototype.ValueBufferType=Float32Array;u8.prototype.DefaultInterpolation=2301;class t6 extends u8{constructor(J,Q,$){super(J,Q,$)}}t6.prototype.ValueTypeName="bool";t6.prototype.ValueBufferType=Array;t6.prototype.DefaultInterpolation=2300;t6.prototype.InterpolantFactoryMethodLinear=void 0;t6.prototype.InterpolantFactoryMethodSmooth=void 0;class q$ extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}q$.prototype.ValueTypeName="color";class F$ extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}F$.prototype.ValueTypeName="number";class E$ extends r6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,Y=this.valueSize,H=($-Q)/(Z-Q),U=J*Y;for(let X=U+Y;U!==X;U+=4)m8.slerpFlat(W,0,K,U-Y,K,U,H);return W}}class XJ extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new E$(this.times,this.values,this.getValueSize(),J)}}XJ.prototype.ValueTypeName="quaternion";XJ.prototype.InterpolantFactoryMethodSmooth=void 0;class e6 extends u8{constructor(J,Q,$){super(J,Q,$)}}e6.prototype.ValueTypeName="string";e6.prototype.ValueBufferType=Array;e6.prototype.DefaultInterpolation=2300;e6.prototype.InterpolantFactoryMethodLinear=void 0;e6.prototype.InterpolantFactoryMethodSmooth=void 0;class D$ extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}D$.prototype.ValueTypeName="vector";class R${constructor(J,Q,$){let Z=this,W=!1,K=0,Y=0,H=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(X){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(X,K,Y)}W=!0},this.itemEnd=function(X){if(K++,Z.onProgress!==void 0)Z.onProgress(X,K,Y);if(K===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(X){if(Z.onError!==void 0)Z.onError(X)},this.resolveURL=function(X){if(H)return H(X);return X},this.setURLModifier=function(X){return H=X,this},this.addHandler=function(X,N){return U.push(X,N),this},this.removeHandler=function(X){let N=U.indexOf(X);if(N!==-1)U.splice(N,2);return this},this.getHandler=function(X){for(let N=0,F=U.length;N<F;N+=2){let G=U[N],E=U[N+1];if(G.global)G.lastIndex=0;if(G.test(X))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var CW=new R$;class O${constructor(J){if(this.manager=J!==void 0?J:CW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}O$.DEFAULT_MATERIAL_NAME="__DEFAULT";class GJ extends N8{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var oJ=new t0,DZ=new S,RZ=new S;class wW{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new t0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $7,this._frameExtents=new _0(1,1),this._viewportCount=1,this._viewports=[new U8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(DZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(DZ),RZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(RZ),Q.updateMatrixWorld(),oJ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oJ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(oJ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var v7=new S,h7=new m8,Q6=new S;class NJ extends N8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new t0,this.projectionMatrix=new t0,this.projectionMatrixInverse=new t0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(v7,h7,Q6),Q6.x===1&&Q6.y===1&&Q6.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(v7,h7,Q6.set(1,1,1)).invert()}updateWorldMatrix(J,Q){if(super.updateWorldMatrix(J,Q),this.matrixWorld.decompose(v7,h7,Q6),Q6.x===1&&Q6.y===1&&Q6.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(v7,h7,Q6.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var I6=new S,OZ=new _0,kZ=new _0;class T8 extends NJ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=z9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(V9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return z9*2*Math.atan(Math.tan(V9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){I6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(I6.x,I6.y).multiplyScalar(-J/I6.z),I6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(I6.x,I6.y).multiplyScalar(-J/I6.z)}getViewSize(J,Q){return this.getViewBounds(J,OZ,kZ),Q.subVectors(kZ,OZ)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(V9*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:U}=K;W+=K.offsetX*Z/H,Q-=K.offsetY*$/U,Z*=K.width/H,$*=K.height/U}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class K7 extends NJ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,Y=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=U*this.view.offsetX,K=W+U*this.view.width,Y-=X*this.view.offsetY,H=Y-X*this.view.height}this.projectionMatrix.makeOrthographic(W,K,Y,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class PW extends wW{constructor(){super(new K7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class j9 extends GJ{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(N8.DEFAULT_UP),this.updateMatrix(),this.target=new N8,this.shadow=new PW}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class qJ extends GJ{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var O9=-90,k9=1;class k$ extends N8{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new T8(O9,k9,J,Q);Z.layers=this.layers,this.add(Z);let W=new T8(O9,k9,J,Q);W.layers=this.layers,this.add(W);let K=new T8(O9,k9,J,Q);K.layers=this.layers,this.add(K);let Y=new T8(O9,k9,J,Q);Y.layers=this.layers,this.add(Y);let H=new T8(O9,k9,J,Q);H.layers=this.layers,this.add(H);let U=new T8(O9,k9,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,Y,H]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,Y,H,U,X]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,3,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,4,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),V&&J.autoClear===!1)J.clearDepth();J.render(Q,X),J.setRenderTarget(N,F,G),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class M$ extends T8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var V$="\\[\\]\\.:\\/",VY=new RegExp("["+V$+"]","g"),B$="[^"+V$+"]",BY="[^"+V$.replace("\\.","")+"]",LY=/((?:WC+[\/:])*)/.source.replace("WC",B$),zY=/(WCOD+)?/.source.replace("WCOD",BY),IY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",B$),CY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",B$),wY=new RegExp("^"+LY+zY+IY+CY+"$"),PY=["material","materials","bones","map"];class AW{constructor(J,Q,$){let Z=$||s0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class s0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||s0.parseTrackName(Q),this.node=s0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new s0(J,Q,$);else return new s0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(VY,"")}static parseTrackName(J){let Q=wY.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(PY.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let Y=W[K];if(Y.name===Q||Y.uuid===Q)return Y;let H=$(Y.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=s0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){C0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){A0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){A0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){A0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let X=0;X<J.length;X++)if(J[X].name===U){U=X;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){A0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){A0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){A0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){A0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let K=J[Z];if(K===void 0){let U=Q.nodeName;A0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){A0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){A0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))H=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}s0.Composite=AW;s0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};s0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};s0.prototype.GetterByBindingType=[s0.prototype._getValue_direct,s0.prototype._getValue_array,s0.prototype._getValue_arrayElement,s0.prototype._getValue_toArray];s0.prototype.SetterByBindingTypeAndVersioning=[[s0.prototype._setValue_direct,s0.prototype._setValue_direct_setNeedsUpdate,s0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_array,s0.prototype._setValue_array_setNeedsUpdate,s0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_arrayElement,s0.prototype._setValue_arrayElement_setNeedsUpdate,s0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_fromArray,s0.prototype._setValue_fromArray_setNeedsUpdate,s0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d1=new Float32Array(1);var MZ=new t0;class FJ{constructor(J,Q,$=0,Z=1/0){this.ray=new c6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new e9,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else A0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return MZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(MZ),this}intersectObject(J,Q=!0,$=[]){return rJ(J,this,$,Q),$.sort(VZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,W=J.length;Z<W;Z++)rJ(J[Z],this,$,Q);return $.sort(VZ),$}}function VZ(J,Q){return J.distance-Q.distance}function rJ(J,Q,$,Z){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)W=!1}if(W===!0&&Z===!0){let K=J.children;for(let Y=0,H=K.length;Y<H;Y++)rJ(K[Y],Q,$,!0)}}class Y7{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=p0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(p0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}var BZ=new S,x7,aJ;class f9 extends N8{constructor(J=new S(0,0,1),Q=new S(0,0,0),$=1,Z=16776960,W=$*0.2,K=W*0.2){super();if(this.type="ArrowHelper",x7===void 0)x7=new w8,x7.setAttribute("position",new H8([0,0,0,0,1,0],3)),aJ=new HJ(0.5,1,5,1),aJ.translate(0,-0.5,0);this.position.copy(Q),this.line=new ZJ(x7,new s6({color:Z,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new S8(aJ,new n6({color:Z,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(J),this.setLength($,W,K)}setDirection(J){if(J.y>0.99999)this.quaternion.set(0,0,0,1);else if(J.y<-0.99999)this.quaternion.set(1,0,0,0);else{BZ.set(J.z,0,-J.x).normalize();let Q=Math.acos(J.y);this.quaternion.setFromAxisAngle(BZ,Q)}}setLength(J,Q=J*0.2,$=Q*0.2){this.line.scale.set(1,Math.max(0.0001,J-Q),1),this.line.updateMatrix(),this.cone.scale.set($,Q,$),this.cone.position.y=J,this.cone.updateMatrix()}setColor(J){this.line.material.color.set(J),this.cone.material.color.set(J)}copy(J){return super.copy(J,!1),this.line.copy(J.line),this.cone.copy(J.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class EJ extends R6{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){C0("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function L$(J,Q,$,Z){let W=AY(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function AY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));if(typeof window<"u")if(window.__THREE__)C0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="183";function rW(){let J=null,Q=!1,$=null,Z=null;function W(K,Y){$(K,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function _Y(J){let Q=new WeakMap;function $(H,U){let{array:X,usage:N}=H,F=X.byteLength,G=J.createBuffer();J.bindBuffer(U,G),J.bufferData(U,X,N),H.onUploadCallback();let E;if(X instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&X instanceof Float16Array)E=J.HALF_FLOAT;else if(X instanceof Uint16Array)if(H.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(X instanceof Int16Array)E=J.SHORT;else if(X instanceof Uint32Array)E=J.UNSIGNED_INT;else if(X instanceof Int32Array)E=J.INT;else if(X instanceof Int8Array)E=J.BYTE;else if(X instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(X instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+X);return{buffer:G,type:E,bytesPerElement:X.BYTES_PER_ELEMENT,version:H.version,size:F}}function Z(H,U,X){let{array:N,updateRanges:F}=U;if(J.bindBuffer(X,H),F.length===0)J.bufferSubData(X,0,N);else{F.sort((E,R)=>E.start-R.start);let G=0;for(let E=1;E<F.length;E++){let R=F[G],V=F[E];if(V.start<=R.start+R.count+1)R.count=Math.max(R.count,V.start+V.count-R.start);else++G,F[G]=V}F.length=G+1;for(let E=0,R=F.length;E<R;E++){let V=F[E];J.bufferSubData(X,V.start*N.BYTES_PER_ELEMENT,N,V.start,V.count)}U.clearUpdateRanges()}U.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;let U=Q.get(H);if(U)J.deleteBuffer(U.buffer),Q.delete(H)}function Y(H,U){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let N=Q.get(H);if(!N||N.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let X=Q.get(H);if(X===void 0)Q.set(H,$(H,U));else if(X.version<H.version){if(X.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(X.buffer,H,U),X.version=H.version}}return{get:W,remove:K,update:Y}}var TY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SY=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vY=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xY=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dY=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lY=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uY=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cY=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eY=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J5=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q5=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y5="gl_FragColor = linearToOutputTexel( gl_FragColor );",H5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L5=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I5=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w5=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A5=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_5=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T5=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S5=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g5=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c5=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i5=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$H=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WH=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RH=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kH=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LH=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zH=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IH=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_H=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TH=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vH=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hH=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xH=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mH=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dH=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lH=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uH=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cH=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nH=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sH=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iH=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oH=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aH=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rH=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tH=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eH=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$U=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b0={alphahash_fragment:TY,alphahash_pars_fragment:SY,alphamap_fragment:jY,alphamap_pars_fragment:fY,alphatest_fragment:yY,alphatest_pars_fragment:bY,aomap_fragment:vY,aomap_pars_fragment:hY,batching_pars_vertex:xY,batching_vertex:gY,begin_vertex:pY,beginnormal_vertex:mY,bsdfs:dY,iridescence_fragment:lY,bumpmap_pars_fragment:uY,clipping_planes_fragment:cY,clipping_planes_pars_fragment:nY,clipping_planes_pars_vertex:sY,clipping_planes_vertex:iY,color_fragment:oY,color_pars_fragment:aY,color_pars_vertex:rY,color_vertex:tY,common:eY,cube_uv_reflection_fragment:J5,defaultnormal_vertex:Q5,displacementmap_pars_vertex:$5,displacementmap_vertex:Z5,emissivemap_fragment:W5,emissivemap_pars_fragment:K5,colorspace_fragment:Y5,colorspace_pars_fragment:H5,envmap_fragment:U5,envmap_common_pars_fragment:X5,envmap_pars_fragment:G5,envmap_pars_vertex:N5,envmap_physical_pars_fragment:L5,envmap_vertex:q5,fog_vertex:F5,fog_pars_vertex:E5,fog_fragment:D5,fog_pars_fragment:R5,gradientmap_pars_fragment:O5,lightmap_pars_fragment:k5,lights_lambert_fragment:M5,lights_lambert_pars_fragment:V5,lights_pars_begin:B5,lights_toon_fragment:z5,lights_toon_pars_fragment:I5,lights_phong_fragment:C5,lights_phong_pars_fragment:w5,lights_physical_fragment:P5,lights_physical_pars_fragment:A5,lights_fragment_begin:_5,lights_fragment_maps:T5,lights_fragment_end:S5,logdepthbuf_fragment:j5,logdepthbuf_pars_fragment:f5,logdepthbuf_pars_vertex:y5,logdepthbuf_vertex:b5,map_fragment:v5,map_pars_fragment:h5,map_particle_fragment:x5,map_particle_pars_fragment:g5,metalnessmap_fragment:p5,metalnessmap_pars_fragment:m5,morphinstance_vertex:d5,morphcolor_vertex:l5,morphnormal_vertex:u5,morphtarget_pars_vertex:c5,morphtarget_vertex:n5,normal_fragment_begin:s5,normal_fragment_maps:i5,normal_pars_fragment:o5,normal_pars_vertex:a5,normal_vertex:r5,normalmap_pars_fragment:t5,clearcoat_normal_fragment_begin:e5,clearcoat_normal_fragment_maps:JH,clearcoat_pars_fragment:QH,iridescence_pars_fragment:$H,opaque_fragment:ZH,packing:WH,premultiplied_alpha_fragment:KH,project_vertex:YH,dithering_fragment:HH,dithering_pars_fragment:UH,roughnessmap_fragment:XH,roughnessmap_pars_fragment:GH,shadowmap_pars_fragment:NH,shadowmap_pars_vertex:qH,shadowmap_vertex:FH,shadowmask_pars_fragment:EH,skinbase_vertex:DH,skinning_pars_vertex:RH,skinning_vertex:OH,skinnormal_vertex:kH,specularmap_fragment:MH,specularmap_pars_fragment:VH,tonemapping_fragment:BH,tonemapping_pars_fragment:LH,transmission_fragment:zH,transmission_pars_fragment:IH,uv_pars_fragment:CH,uv_pars_vertex:wH,uv_vertex:PH,worldpos_vertex:AH,background_vert:_H,background_frag:TH,backgroundCube_vert:SH,backgroundCube_frag:jH,cube_vert:fH,cube_frag:yH,depth_vert:bH,depth_frag:vH,distance_vert:hH,distance_frag:xH,equirect_vert:gH,equirect_frag:pH,linedashed_vert:mH,linedashed_frag:dH,meshbasic_vert:lH,meshbasic_frag:uH,meshlambert_vert:cH,meshlambert_frag:nH,meshmatcap_vert:sH,meshmatcap_frag:iH,meshnormal_vert:oH,meshnormal_frag:aH,meshphong_vert:rH,meshphong_frag:tH,meshphysical_vert:eH,meshphysical_frag:JU,meshtoon_vert:QU,meshtoon_frag:$U,points_vert:ZU,points_frag:WU,shadow_vert:KU,shadow_frag:YU,sprite_vert:HU,sprite_frag:UU},K0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new f0}},envmap:{envMap:{value:null},envMapRotation:{value:new f0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new f0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new f0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new f0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new f0},normalScale:{value:new _0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new f0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new f0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new f0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new f0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0},uvTransform:{value:new f0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new _0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new f0},alphaMap:{value:null},alphaMapTransform:{value:new f0},alphaTest:{value:0}}},K6={basic:{uniforms:P8([K0.common,K0.specularmap,K0.envmap,K0.aomap,K0.lightmap,K0.fog]),vertexShader:b0.meshbasic_vert,fragmentShader:b0.meshbasic_frag},lambert:{uniforms:P8([K0.common,K0.specularmap,K0.envmap,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.fog,K0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:b0.meshlambert_vert,fragmentShader:b0.meshlambert_frag},phong:{uniforms:P8([K0.common,K0.specularmap,K0.envmap,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.fog,K0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:b0.meshphong_vert,fragmentShader:b0.meshphong_frag},standard:{uniforms:P8([K0.common,K0.envmap,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.roughnessmap,K0.metalnessmap,K0.fog,K0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag},toon:{uniforms:P8([K0.common,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.gradientmap,K0.fog,K0.lights,{emissive:{value:new y0(0)}}]),vertexShader:b0.meshtoon_vert,fragmentShader:b0.meshtoon_frag},matcap:{uniforms:P8([K0.common,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.fog,{matcap:{value:null}}]),vertexShader:b0.meshmatcap_vert,fragmentShader:b0.meshmatcap_frag},points:{uniforms:P8([K0.points,K0.fog]),vertexShader:b0.points_vert,fragmentShader:b0.points_frag},dashed:{uniforms:P8([K0.common,K0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:b0.linedashed_vert,fragmentShader:b0.linedashed_frag},depth:{uniforms:P8([K0.common,K0.displacementmap]),vertexShader:b0.depth_vert,fragmentShader:b0.depth_frag},normal:{uniforms:P8([K0.common,K0.bumpmap,K0.normalmap,K0.displacementmap,{opacity:{value:1}}]),vertexShader:b0.meshnormal_vert,fragmentShader:b0.meshnormal_frag},sprite:{uniforms:P8([K0.sprite,K0.fog]),vertexShader:b0.sprite_vert,fragmentShader:b0.sprite_frag},background:{uniforms:{uvTransform:{value:new f0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:b0.background_vert,fragmentShader:b0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new f0}},vertexShader:b0.backgroundCube_vert,fragmentShader:b0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:b0.cube_vert,fragmentShader:b0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:b0.equirect_vert,fragmentShader:b0.equirect_frag},distance:{uniforms:P8([K0.common,K0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:b0.distance_vert,fragmentShader:b0.distance_frag},shadow:{uniforms:P8([K0.lights,K0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:b0.shadow_vert,fragmentShader:b0.shadow_frag}};K6.physical={uniforms:P8([K6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new f0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new f0},clearcoatNormalScale:{value:new _0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new f0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new f0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new f0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new f0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new f0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new f0},transmissionSamplerSize:{value:new _0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new f0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new f0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new f0},anisotropyVector:{value:new _0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new f0}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag};var DJ={r:0,b:0,g:0},J9=new a8,XU=new t0;function GU(J,Q,$,Z,W,K){let Y=new y0(0),H=W===!0?0:1,U,X,N=null,F=0,G=null;function E(B){let L=B.isScene===!0?B.background:null;if(L&&L.isTexture){let I=B.backgroundBlurriness>0;L=Q.get(L,I)}return L}function R(B){let L=!1,I=E(B);if(I===null)q(Y,H);else if(I&&I.isColor)q(I,1),L=!0;let f=J.xr.getEnvironmentBlendMode();if(f==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(f==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||L)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(B,L){let I=E(L);if(I&&(I.isCubeTexture||I.mapping===i9)){if(X===void 0)X=new S8(new T6(1,1,1),new l8({name:"BackgroundCubeMaterial",uniforms:a6(K6.backgroundCube.uniforms),vertexShader:K6.backgroundCube.vertexShader,fragmentShader:K6.backgroundCube.fragmentShader,side:j8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),X.geometry.deleteAttribute("uv"),X.onBeforeRender=function(f,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(X);if(J9.copy(L.backgroundRotation),J9.x*=-1,J9.y*=-1,J9.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1)J9.y*=-1,J9.z*=-1;if(X.material.uniforms.envMap.value=I,X.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,X.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,X.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,X.material.uniforms.backgroundRotation.value.setFromMatrix4(XU.makeRotationFromEuler(J9)),X.material.toneMapped=m0.getTransfer(I.colorSpace)!==$8,N!==I||F!==I.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=I,F=I.version,G=J.toneMapping;X.layers.enableAll(),B.unshift(X,X.geometry,X.material,0,0,null)}else if(I&&I.isTexture){if(U===void 0)U=new S8(new o6(2,2),new l8({name:"BackgroundMaterial",uniforms:a6(K6.background.uniforms),vertexShader:K6.background.vertexShader,fragmentShader:K6.background.fragmentShader,side:C9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=I,U.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,U.material.toneMapped=m0.getTransfer(I.colorSpace)!==$8,I.matrixAutoUpdate===!0)I.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(I.matrix),N!==I||F!==I.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=I,F=I.version,G=J.toneMapping;U.layers.enableAll(),B.unshift(U,U.geometry,U.material,0,0,null)}}function q(B,L){B.getRGB(DJ,W$(J)),$.buffers.color.setClear(DJ.r,DJ.g,DJ.b,L,K)}function D(){if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return Y},setClearColor:function(B,L=1){Y.set(B),H=L,q(Y,H)},getClearAlpha:function(){return H},setClearAlpha:function(B){H=B,q(Y,H)},render:R,addToRenderList:V,dispose:D}}function NU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=G(null),K=W,Y=!1;function H(w,j,m,b,u){let p=!1,h=F(w,b,m,j);if(K!==h)K=h,X(K.object);if(p=E(w,b,m,u),p)R(w,b,m,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(p||Y){if(Y=!1,I(w,j,m,b),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function X(w){return J.bindVertexArray(w)}function N(w){return J.deleteVertexArray(w)}function F(w,j,m,b){let u=b.wireframe===!0,p=Z[j.id];if(p===void 0)p={},Z[j.id]=p;let h=w.isInstancedMesh===!0?w.id:0,e=p[h];if(e===void 0)e={},p[h]=e;let t=e[m.id];if(t===void 0)t={},e[m.id]=t;let X0=t[u];if(X0===void 0)X0=G(U()),t[u]=X0;return X0}function G(w){let j=[],m=[],b=[];for(let u=0;u<$;u++)j[u]=0,m[u]=0,b[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:m,attributeDivisors:b,object:w,attributes:{},index:null}}function E(w,j,m,b){let u=K.attributes,p=j.attributes,h=0,e=m.getAttributes();for(let t in e)if(e[t].location>=0){let z0=u[t],U0=p[t];if(U0===void 0){if(t==="instanceMatrix"&&w.instanceMatrix)U0=w.instanceMatrix;if(t==="instanceColor"&&w.instanceColor)U0=w.instanceColor}if(z0===void 0)return!0;if(z0.attribute!==U0)return!0;if(U0&&z0.data!==U0.data)return!0;h++}if(K.attributesNum!==h)return!0;if(K.index!==b)return!0;return!1}function R(w,j,m,b){let u={},p=j.attributes,h=0,e=m.getAttributes();for(let t in e)if(e[t].location>=0){let z0=p[t];if(z0===void 0){if(t==="instanceMatrix"&&w.instanceMatrix)z0=w.instanceMatrix;if(t==="instanceColor"&&w.instanceColor)z0=w.instanceColor}let U0={};if(U0.attribute=z0,z0&&z0.data)U0.data=z0.data;u[t]=U0,h++}K.attributes=u,K.attributesNum=h,K.index=b}function V(){let w=K.newAttributes;for(let j=0,m=w.length;j<m;j++)w[j]=0}function q(w){D(w,0)}function D(w,j){let{newAttributes:m,enabledAttributes:b,attributeDivisors:u}=K;if(m[w]=1,b[w]===0)J.enableVertexAttribArray(w),b[w]=1;if(u[w]!==j)J.vertexAttribDivisor(w,j),u[w]=j}function B(){let{newAttributes:w,enabledAttributes:j}=K;for(let m=0,b=j.length;m<b;m++)if(j[m]!==w[m])J.disableVertexAttribArray(m),j[m]=0}function L(w,j,m,b,u,p,h){if(h===!0)J.vertexAttribIPointer(w,j,m,u,p);else J.vertexAttribPointer(w,j,m,b,u,p)}function I(w,j,m,b){V();let u=b.attributes,p=m.getAttributes(),h=j.defaultAttributeValues;for(let e in p){let t=p[e];if(t.location>=0){let X0=u[e];if(X0===void 0){if(e==="instanceMatrix"&&w.instanceMatrix)X0=w.instanceMatrix;if(e==="instanceColor"&&w.instanceColor)X0=w.instanceColor}if(X0!==void 0){let{normalized:z0,itemSize:U0}=X0,Y8=Q.get(X0);if(Y8===void 0)continue;let{buffer:i0,type:s,bytesPerElement:Z0}=Y8,F0=s===J.INT||s===J.UNSIGNED_INT||X0.gpuType===XQ;if(X0.isInterleavedBufferAttribute){let G0=X0.data,P0=G0.stride,d0=X0.offset;if(G0.isInstancedInterleavedBuffer){for(let l0=0;l0<t.locationSize;l0++)D(t.location+l0,G0.meshPerAttribute);if(w.isInstancedMesh!==!0&&b._maxInstanceCount===void 0)b._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let l0=0;l0<t.locationSize;l0++)q(t.location+l0);J.bindBuffer(J.ARRAY_BUFFER,i0);for(let l0=0;l0<t.locationSize;l0++)L(t.location+l0,U0/t.locationSize,s,z0,P0*Z0,(d0+U0/t.locationSize*l0)*Z0,F0)}else{if(X0.isInstancedBufferAttribute){for(let G0=0;G0<t.locationSize;G0++)D(t.location+G0,X0.meshPerAttribute);if(w.isInstancedMesh!==!0&&b._maxInstanceCount===void 0)b._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let G0=0;G0<t.locationSize;G0++)q(t.location+G0);J.bindBuffer(J.ARRAY_BUFFER,i0);for(let G0=0;G0<t.locationSize;G0++)L(t.location+G0,U0/t.locationSize,s,z0,U0*Z0,U0/t.locationSize*G0*Z0,F0)}}else if(h!==void 0){let z0=h[e];if(z0!==void 0)switch(z0.length){case 2:J.vertexAttrib2fv(t.location,z0);break;case 3:J.vertexAttrib3fv(t.location,z0);break;case 4:J.vertexAttrib4fv(t.location,z0);break;default:J.vertexAttrib1fv(t.location,z0)}}}}B()}function f(){A();for(let w in Z){let j=Z[w];for(let m in j){let b=j[m];for(let u in b){let p=b[u];for(let h in p)N(p[h].object),delete p[h];delete b[u]}}delete Z[w]}}function C(w){if(Z[w.id]===void 0)return;let j=Z[w.id];for(let m in j){let b=j[m];for(let u in b){let p=b[u];for(let h in p)N(p[h].object),delete p[h];delete b[u]}}delete Z[w.id]}function P(w){for(let j in Z){let m=Z[j];for(let b in m){let u=m[b];if(u[w.id]===void 0)continue;let p=u[w.id];for(let h in p)N(p[h].object),delete p[h];delete u[w.id]}}}function O(w){for(let j in Z){let m=Z[j],b=w.isInstancedMesh===!0?w.id:0,u=m[b];if(u===void 0)continue;for(let p in u){let h=u[p];for(let e in h)N(h[e].object),delete h[e];delete u[p]}if(delete m[b],Object.keys(m).length===0)delete Z[j]}}function A(){if(l(),Y=!0,K===W)return;K=W,X(K.object)}function l(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:A,resetDefaultState:l,dispose:f,releaseStatesOfGeometry:C,releaseStatesOfObject:O,releaseStatesOfProgram:P,initAttributes:V,enableAttribute:q,disableUnusedAttributes:B}}function qU(J,Q,$){let Z;function W(X){Z=X}function K(X,N){J.drawArrays(Z,X,N),$.update(N,Z,1)}function Y(X,N,F){if(F===0)return;J.drawArraysInstanced(Z,X,N,F),$.update(N,Z,F)}function H(X,N,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,N,0,F);let E=0;for(let R=0;R<F;R++)E+=N[R];$.update(E,Z,1)}function U(X,N,F,G){if(F===0)return;let E=Q.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<X.length;R++)Y(X[R],N[R],G[R]);else{E.multiDrawArraysInstancedWEBGL(Z,X,0,N,0,G,0,F);let R=0;for(let V=0;V<F;V++)R+=N[V]*G[V];$.update(R,Z,1)}}this.setMode=W,this.render=K,this.renderInstances=Y,this.renderMultiDraw=H,this.renderMultiDrawInstances=U}function FU(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(P){if(P!==Z6&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(P){let O=P===D6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==t8&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==E6&&!O)return!1;return!0}function U(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let X=$.precision!==void 0?$.precision:"highp",N=U(X);if(N!==X)C0("WebGLRenderer:",X,"not supported, using",N,"instead."),X=N;let F=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),B=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),f=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:U,textureFormatReadable:Y,textureTypeReadable:H,precision:X,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:R,maxTextureSize:V,maxCubemapSize:q,maxAttributes:D,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:I,maxSamples:f,samples:C}}function EU(J){let Q=this,$=null,Z=0,W=!1,K=!1,Y=new o8,H=new f0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let E=F.length!==0||G||Z!==0||W;return W=G,Z=F.length,E},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(F,G){$=N(F,G,0)},this.setState=function(F,G,E){let{clippingPlanes:R,clipIntersection:V,clipShadows:q}=F,D=J.get(F);if(!W||R===null||R.length===0||K&&!q)if(K)N(null);else X();else{let B=K?0:Z,L=B*4,I=D.clippingState||null;U.value=I,I=N(R,G,L,E);for(let f=0;f!==L;++f)I[f]=$[f];D.clippingState=I,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=B}};function X(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(F,G,E,R){let V=F!==null?F.length:0,q=null;if(V!==0){if(q=U.value,R!==!0||q===null){let D=E+V*4,B=G.matrixWorldInverse;if(H.getNormalMatrix(B),q===null||q.length<D)q=new Float32Array(D);for(let L=0,I=E;L!==V;++L,I+=4)Y.copy(F[L]).applyMatrix4(B,H),Y.normal.toArray(q,I),q[I+3]=Y.constant}U.value=q,U.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,q}}var S6=4,_W=[0.125,0.215,0.35,0.446,0.526,0.582],$9=20,DU=256,H7=new K7,TW=new y0,z$=null,I$=0,C$=0,w$=!1,RU=new S;class _${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:Y=RU}=W;z$=this._renderer.getRenderTarget(),I$=this._renderer.getActiveCubeFace(),C$=this._renderer.getActiveMipmapLevel(),w$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,H,Y),Q>0)this._blur(H,0,0,Q);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=fW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=jW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(z$,I$,C$),this._renderer.xr.enabled=w$,J.scissorTest=!1,y9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===P9||J.mapping===g6)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);z$=this._renderer.getRenderTarget(),I$=this._renderer.getActiveCubeFace(),C$=this._renderer.getActiveMipmapLevel(),w$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:f8,minFilter:f8,generateMipmaps:!1,type:D6,format:Z6,colorSpace:r9,depthBuffer:!1},Z=SW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=SW(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=OU(W)),this._blurMaterial=MU(W,J,Q),this._ggxMaterial=kU(W,J,Q)}return Z}_compileMaterial(J){let Q=new S8(new w8,J);this._renderer.compile(Q,H7)}_sceneToCubeUV(J,Q,$,Z,W){let H=new T8(90,1,Q,$),U=[1,-1,1,1,1,1],X=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,G=N.toneMapping;if(N.getClearColor(TW),N.toneMapping=r8,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new S8(new T6,new n6({name:"PMREM.Background",side:j8,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,V=R.material,q=!1,D=J.background;if(D){if(D.isColor)V.color.copy(D),J.background=null,q=!0}else V.color.copy(TW),q=!0;for(let B=0;B<6;B++){let L=B%3;if(L===0)H.up.set(0,U[B],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x+X[B],W.y,W.z);else if(L===1)H.up.set(0,0,U[B]),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y+X[B],W.z);else H.up.set(0,U[B],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y,W.z+X[B]);let I=this._cubeSize;if(y9(Z,L*I,B>2?I:0,I,I),N.setRenderTarget(Z),q)N.render(R,H);N.render(J,H)}N.toneMapping=G,N.autoClear=F,J.background=D}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===P9||J.mapping===g6;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=fW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=jW();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=W;let Y=W.uniforms;Y.envMap.value=J;let H=this._cubeSize;y9(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(K,H7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,K=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=K;let H=K.uniforms,U=$/(this._lodMeshes.length-1),X=Q/(this._lodMeshes.length-1),N=Math.sqrt(U*U-X*X),F=0+U*1.25,G=N*F,{_lodMax:E}=this,R=this._sizeLods[$],V=3*R*($>E-S6?$-E+S6:0),q=4*(this._cubeSize-R);H.envMap.value=J.texture,H.roughness.value=G,H.mipInt.value=E-Q,y9(W,V,q,3*R,2*R),Z.setRenderTarget(W),Z.render(Y,H7),H.envMap.value=W.texture,H.roughness.value=0,H.mipInt.value=E-$,y9(J,V,q,3*R,2*R),Z.setRenderTarget(J),Z.render(Y,H7)}_blur(J,Q,$,Z,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,$,Z,"latitudinal",W),this._halfBlur(K,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,K,Y){let H=this._renderer,U=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")A0("blur direction must be either latitudinal or longitudinal!");let X=3,N=this._lodMeshes[Z];N.material=U;let F=U.uniforms,G=this._sizeLods[$]-1,E=isFinite(W)?Math.PI/(2*G):2*Math.PI/(2*$9-1),R=W/E,V=isFinite(W)?1+Math.floor(X*R):$9;if(V>$9)C0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${V} samples when the maximum is set to ${$9}`);let q=[],D=0;for(let C=0;C<$9;++C){let P=C/R,O=Math.exp(-P*P/2);if(q.push(O),C===0)D+=O;else if(C<V)D+=2*O}for(let C=0;C<q.length;C++)q[C]=q[C]/D;if(F.envMap.value=J.texture,F.samples.value=V,F.weights.value=q,F.latitudinal.value=K==="latitudinal",Y)F.poleAxis.value=Y;let{_lodMax:B}=this;F.dTheta.value=E,F.mipInt.value=B-$;let L=this._sizeLods[Z],I=3*L*(Z>B-S6?Z-B+S6:0),f=4*(this._cubeSize-L);y9(Q,I,f,3*L,2*L),H.setRenderTarget(Q),H.render(N,H7)}}function OU(J){let Q=[],$=[],Z=[],W=J,K=J-S6+1+_W.length;for(let Y=0;Y<K;Y++){let H=Math.pow(2,W);Q.push(H);let U=1/H;if(Y>J-S6)U=_W[Y-J+S6-1];else if(Y===0)U=0;$.push(U);let X=1/(H-2),N=-X,F=1+X,G=[N,N,F,N,F,F,N,N,F,F,N,F],E=6,R=6,V=3,q=2,D=1,B=new Float32Array(V*R*E),L=new Float32Array(q*R*E),I=new Float32Array(D*R*E);for(let C=0;C<E;C++){let P=C%3*2/3-1,O=C>2?0:-1,A=[P,O,0,P+0.6666666666666666,O,0,P+0.6666666666666666,O+1,0,P,O,0,P+0.6666666666666666,O+1,0,P,O+1,0];B.set(A,V*R*C),L.set(G,q*R*C);let l=[C,C,C,C,C,C];I.set(l,D*R*C)}let f=new w8;if(f.setAttribute("position",new p8(B,V)),f.setAttribute("uv",new p8(L,q)),f.setAttribute("faceIndex",new p8(I,D)),Z.push(new S8(f,null)),W>S6)W--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function SW(J,Q,$){let Z=new d8(J,Q,$);return Z.texture.mapping=i9,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function y9(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function kU(J,Q,$){return new l8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:OJ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$6,depthTest:!1,depthWrite:!1})}function MU(J,Q,$){let Z=new Float32Array($9),W=new S(0,1,0);return new l8({name:"SphericalGaussianBlur",defines:{n:$9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:OJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$6,depthTest:!1,depthWrite:!1})}function jW(){return new l8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:OJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$6,depthTest:!1,depthWrite:!1})}function fW(){return new l8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:OJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$6,depthTest:!1,depthWrite:!1})}function OJ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class j$ extends d8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new WJ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new T6(5,5,5),W=new l8({name:"CubemapFromEquirect",uniforms:a6($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:j8,blending:$6});W.uniforms.tEquirect.value=Q;let K=new S8(Z,W),Y=Q.minFilter;if(Q.minFilter===p6)Q.minFilter=f8;return new k$(1,10,this).update(J,K),Q.minFilter=Y,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}function VU(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(G,E=!1){if(G===null||G===void 0)return null;if(E)return Y(G);return K(G)}function K(G){if(G&&G.isTexture){let E=G.mapping;if(E===d7||E===l7)if(Q.has(G)){let R=Q.get(G).texture;return H(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let V=new j$(R.height);return V.fromEquirectangularTexture(J,G),Q.set(G,V),G.addEventListener("dispose",X),H(V.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let E=G.mapping,R=E===d7||E===l7,V=E===P9||E===g6;if(R||V){let q=$.get(G),D=q!==void 0?q.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==D){if(Z===null)Z=new _$(J);return q=R?Z.fromEquirectangular(G,q):Z.fromCubemap(G,q),q.texture.pmremVersion=G.pmremVersion,$.set(G,q),q.texture}else if(q!==void 0)return q.texture;else{let B=G.image;if(R&&B&&B.height>0||V&&B&&U(B)){if(Z===null)Z=new _$(J);return q=R?Z.fromEquirectangular(G):Z.fromCubemap(G),q.texture.pmremVersion=G.pmremVersion,$.set(G,q),G.addEventListener("dispose",N),q.texture}else return null}}}return G}function H(G,E){if(E===d7)G.mapping=P9;else if(E===l7)G.mapping=g6;return G}function U(G){let E=0,R=6;for(let V=0;V<R;V++)if(G[V]!==void 0)E++;return E===R}function X(G){let E=G.target;E.removeEventListener("dispose",X);let R=Q.get(E);if(R!==void 0)Q.delete(E),R.dispose()}function N(G){let E=G.target;E.removeEventListener("dispose",N);let R=$.get(E);if(R!==void 0)$.delete(E),R.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:F}}function BU(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)u9("WebGLRenderer: "+Z+" extension not supported.");return W}}}function LU(J,Q,$,Z){let W={},K=new WeakMap;function Y(F){let G=F.target;if(G.index!==null)Q.remove(G.index);for(let R in G.attributes)Q.remove(G.attributes[R]);G.removeEventListener("dispose",Y),delete W[G.id];let E=K.get(G);if(E)Q.remove(E),K.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function H(F,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",Y),W[G.id]=!0,$.memory.geometries++,G}function U(F){let G=F.attributes;for(let E in G)Q.update(G[E],J.ARRAY_BUFFER)}function X(F){let G=[],E=F.index,R=F.attributes.position,V=0;if(R===void 0)return;if(E!==null){let B=E.array;V=E.version;for(let L=0,I=B.length;L<I;L+=3){let f=B[L+0],C=B[L+1],P=B[L+2];G.push(f,C,C,P,P,f)}}else{let B=R.array;V=R.version;for(let L=0,I=B.length/3-1;L<I;L+=3){let f=L+0,C=L+1,P=L+2;G.push(f,C,C,P,P,f)}}let q=new(R.count>=65535?$J:QJ)(G,1);q.version=V;let D=K.get(F);if(D)Q.remove(D);K.set(F,q)}function N(F){let G=K.get(F);if(G){let E=F.index;if(E!==null){if(G.version<E.version)X(F)}}else X(F);return K.get(F)}return{get:H,update:U,getWireframeAttribute:N}}function zU(J,Q,$){let Z;function W(G){Z=G}let K,Y;function H(G){K=G.type,Y=G.bytesPerElement}function U(G,E){J.drawElements(Z,E,K,G*Y),$.update(E,Z,1)}function X(G,E,R){if(R===0)return;J.drawElementsInstanced(Z,E,K,G*Y,R),$.update(E,Z,R)}function N(G,E,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,E,0,K,G,0,R);let q=0;for(let D=0;D<R;D++)q+=E[D];$.update(q,Z,1)}function F(G,E,R,V){if(R===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let D=0;D<G.length;D++)X(G[D]/Y,E[D],V[D]);else{q.multiDrawElementsInstancedWEBGL(Z,E,0,K,G,0,V,0,R);let D=0;for(let B=0;B<R;B++)D+=E[B]*V[B];$.update(D,Z,1)}}this.setMode=W,this.setIndex=H,this.render=U,this.renderInstances=X,this.renderMultiDraw=N,this.renderMultiDrawInstances=F}function IU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,Y,H){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=H*(K/3);break;case J.LINES:$.lines+=H*(K/2);break;case J.LINE_STRIP:$.lines+=H*(K-1);break;case J.LINE_LOOP:$.lines+=H*K;break;case J.POINTS:$.points+=H*K;break;default:A0("WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function CU(J,Q,$){let Z=new WeakMap,W=new U8;function K(Y,H,U){let X=Y.morphTargetInfluences,N=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,F=N!==void 0?N.length:0,G=Z.get(H);if(G===void 0||G.count!==F){let A=function(){P.dispose(),Z.delete(H),H.removeEventListener("dispose",A)};if(G!==void 0)G.texture.dispose();let E=H.morphAttributes.position!==void 0,R=H.morphAttributes.normal!==void 0,V=H.morphAttributes.color!==void 0,q=H.morphAttributes.position||[],D=H.morphAttributes.normal||[],B=H.morphAttributes.color||[],L=0;if(E===!0)L=1;if(R===!0)L=2;if(V===!0)L=3;let I=H.attributes.position.count*L,f=1;if(I>Q.maxTextureSize)f=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let C=new Float32Array(I*f*4*F),P=new e7(C,I,f,F);P.type=E6,P.needsUpdate=!0;let O=L*4;for(let l=0;l<F;l++){let w=q[l],j=D[l],m=B[l],b=I*f*4*l;for(let u=0;u<w.count;u++){let p=u*O;if(E===!0)W.fromBufferAttribute(w,u),C[b+p+0]=W.x,C[b+p+1]=W.y,C[b+p+2]=W.z,C[b+p+3]=0;if(R===!0)W.fromBufferAttribute(j,u),C[b+p+4]=W.x,C[b+p+5]=W.y,C[b+p+6]=W.z,C[b+p+7]=0;if(V===!0)W.fromBufferAttribute(m,u),C[b+p+8]=W.x,C[b+p+9]=W.y,C[b+p+10]=W.z,C[b+p+11]=m.itemSize===4?W.w:1}}G={count:F,texture:P,size:new _0(I,f)},Z.set(H,G),H.addEventListener("dispose",A)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let E=0;for(let V=0;V<X.length;V++)E+=X[V];let R=H.morphTargetsRelative?1:1-E;U.getUniforms().setValue(J,"morphTargetBaseInfluence",R),U.getUniforms().setValue(J,"morphTargetInfluences",X)}U.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function wU(J,Q,$,Z,W){let K=new WeakMap;function Y(X){let N=W.render.frame,F=X.geometry,G=Q.get(X,F);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(X.isInstancedMesh){if(X.hasEventListener("dispose",U)===!1)X.addEventListener("dispose",U);if(K.get(X)!==N){if($.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)$.update(X.instanceColor,J.ARRAY_BUFFER);K.set(X,N)}}if(X.isSkinnedMesh){let E=X.skeleton;if(K.get(E)!==N)E.update(),K.set(E,N)}return G}function H(){K=new WeakMap}function U(X){let N=X.target;if(N.removeEventListener("dispose",U),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:Y,dispose:H}}var PU={[ZQ]:"LINEAR_TONE_MAPPING",[WQ]:"REINHARD_TONE_MAPPING",[KQ]:"CINEON_TONE_MAPPING",[s9]:"ACES_FILMIC_TONE_MAPPING",[HQ]:"AGX_TONE_MAPPING",[UQ]:"NEUTRAL_TONE_MAPPING",[YQ]:"CUSTOM_TONE_MAPPING"};function AU(J,Q,$,Z,W){let K=new d8(Q,$,{type:J,depthBuffer:Z,stencilBuffer:W}),Y=new d8(Q,$,{type:D6,depthBuffer:!1,stencilBuffer:!1}),H=new w8;H.setAttribute("position",new H8([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new H8([0,2,0,0,2,0],2));let U=new K$({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),X=new S8(H,U),N=new K7(-1,1,1,-1,0,1),F=null,G=null,E=!1,R,V=null,q=[],D=!1;this.setSize=function(B,L){K.setSize(B,L),Y.setSize(B,L);for(let I=0;I<q.length;I++){let f=q[I];if(f.setSize)f.setSize(B,L)}},this.setEffects=function(B){q=B,D=q.length>0&&q[0].isRenderPass===!0;let{width:L,height:I}=K;for(let f=0;f<q.length;f++){let C=q[f];if(C.setSize)C.setSize(L,I)}},this.begin=function(B,L){if(E)return!1;if(B.toneMapping===r8&&q.length===0)return!1;if(V=L,L!==null){let{width:I,height:f}=L;if(K.width!==I||K.height!==f)this.setSize(I,f)}if(D===!1)B.setRenderTarget(K);return R=B.toneMapping,B.toneMapping=r8,!0},this.hasRenderPass=function(){return D},this.end=function(B,L){B.toneMapping=R,E=!0;let I=K,f=Y;for(let C=0;C<q.length;C++){let P=q[C];if(P.enabled===!1)continue;if(P.render(B,f,I,L),P.needsSwap!==!1){let O=I;I=f,f=O}}if(F!==B.outputColorSpace||G!==B.toneMapping){if(F=B.outputColorSpace,G=B.toneMapping,U.defines={},m0.getTransfer(F)===$8)U.defines.SRGB_TRANSFER="";let C=PU[G];if(C)U.defines[C]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=I.texture,B.setRenderTarget(V),B.render(X,N),V=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){K.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var tW=new C8,T$=new i6(1,1),eW=new e7,JK=new Q$,QK=new WJ,yW=[],bW=[],vW=new Float32Array(16),hW=new Float32Array(9),xW=new Float32Array(4);function b9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=yW[W];if(K===void 0)K=new Float32Array(W),yW[W]=K;if(Q!==0){Z.toArray(K,0);for(let Y=1,H=0;Y!==Q;++Y)H+=$,J[Y].toArray(K,H)}return K}function E8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function D8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function kJ(J,Q){let $=bW[Q];if($===void 0)$=new Int32Array(Q),bW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function _U(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function TU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(E8($,Q))return;J.uniform2fv(this.addr,Q),D8($,Q)}}function SU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(E8($,Q))return;J.uniform3fv(this.addr,Q),D8($,Q)}}function jU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(E8($,Q))return;J.uniform4fv(this.addr,Q),D8($,Q)}}function fU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(E8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),D8($,Q)}else{if(E8($,Z))return;xW.set(Z),J.uniformMatrix2fv(this.addr,!1,xW),D8($,Z)}}function yU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(E8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),D8($,Q)}else{if(E8($,Z))return;hW.set(Z),J.uniformMatrix3fv(this.addr,!1,hW),D8($,Z)}}function bU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(E8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),D8($,Q)}else{if(E8($,Z))return;vW.set(Z),J.uniformMatrix4fv(this.addr,!1,vW),D8($,Z)}}function vU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function hU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(E8($,Q))return;J.uniform2iv(this.addr,Q),D8($,Q)}}function xU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(E8($,Q))return;J.uniform3iv(this.addr,Q),D8($,Q)}}function gU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(E8($,Q))return;J.uniform4iv(this.addr,Q),D8($,Q)}}function pU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function mU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(E8($,Q))return;J.uniform2uiv(this.addr,Q),D8($,Q)}}function dU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(E8($,Q))return;J.uniform3uiv(this.addr,Q),D8($,Q)}}function lU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(E8($,Q))return;J.uniform4uiv(this.addr,Q),D8($,Q)}}function uU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)T$.compareFunction=$.isReversedDepthBuffer()?t7:r7,K=T$;else K=tW;$.setTexture2D(Q||K,W)}function cU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||JK,W)}function nU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||QK,W)}function sU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||eW,W)}function iU(J){switch(J){case 5126:return _U;case 35664:return TU;case 35665:return SU;case 35666:return jU;case 35674:return fU;case 35675:return yU;case 35676:return bU;case 5124:case 35670:return vU;case 35667:case 35671:return hU;case 35668:case 35672:return xU;case 35669:case 35673:return gU;case 5125:return pU;case 36294:return mU;case 36295:return dU;case 36296:return lU;case 35678:case 36198:case 36298:case 36306:case 35682:return uU;case 35679:case 36299:case 36307:return cU;case 35680:case 36300:case 36308:case 36293:return nU;case 36289:case 36303:case 36311:case 36292:return sU}}function oU(J,Q){J.uniform1fv(this.addr,Q)}function aU(J,Q){let $=b9(Q,this.size,2);J.uniform2fv(this.addr,$)}function rU(J,Q){let $=b9(Q,this.size,3);J.uniform3fv(this.addr,$)}function tU(J,Q){let $=b9(Q,this.size,4);J.uniform4fv(this.addr,$)}function eU(J,Q){let $=b9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function JX(J,Q){let $=b9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function QX(J,Q){let $=b9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function $X(J,Q){J.uniform1iv(this.addr,Q)}function ZX(J,Q){J.uniform2iv(this.addr,Q)}function WX(J,Q){J.uniform3iv(this.addr,Q)}function KX(J,Q){J.uniform4iv(this.addr,Q)}function YX(J,Q){J.uniform1uiv(this.addr,Q)}function HX(J,Q){J.uniform2uiv(this.addr,Q)}function UX(J,Q){J.uniform3uiv(this.addr,Q)}function XX(J,Q){J.uniform4uiv(this.addr,Q)}function GX(J,Q,$){let Z=this.cache,W=Q.length,K=kJ($,W);if(!E8(Z,K))J.uniform1iv(this.addr,K),D8(Z,K);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=T$;else Y=tW;for(let H=0;H!==W;++H)$.setTexture2D(Q[H]||Y,K[H])}function NX(J,Q,$){let Z=this.cache,W=Q.length,K=kJ($,W);if(!E8(Z,K))J.uniform1iv(this.addr,K),D8(Z,K);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||JK,K[Y])}function qX(J,Q,$){let Z=this.cache,W=Q.length,K=kJ($,W);if(!E8(Z,K))J.uniform1iv(this.addr,K),D8(Z,K);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||QK,K[Y])}function FX(J,Q,$){let Z=this.cache,W=Q.length,K=kJ($,W);if(!E8(Z,K))J.uniform1iv(this.addr,K),D8(Z,K);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||eW,K[Y])}function EX(J){switch(J){case 5126:return oU;case 35664:return aU;case 35665:return rU;case 35666:return tU;case 35674:return eU;case 35675:return JX;case 35676:return QX;case 5124:case 35670:return $X;case 35667:case 35671:return ZX;case 35668:case 35672:return WX;case 35669:case 35673:return KX;case 5125:return YX;case 36294:return HX;case 36295:return UX;case 36296:return XX;case 35678:case 36198:case 36298:case 36306:case 35682:return GX;case 35679:case 36299:case 36307:return NX;case 35680:case 36300:case 36308:case 36293:return qX;case 36289:case 36303:case 36311:case 36292:return FX}}class $K{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=iU(Q.type)}}class ZK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=EX(Q.type)}}class WK{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var P$=/(\w+)(\])?(\[|\.)?/g;function gW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function DX(J,Q,$){let Z=J.name,W=Z.length;P$.lastIndex=0;while(!0){let K=P$.exec(Z),Y=P$.lastIndex,H=K[1],U=K[2]==="]",X=K[3];if(U)H=H|0;if(X===void 0||X==="["&&Y+2===W){gW($,X===void 0?new $K(H,J,Q):new ZK(H,J,Q));break}else{let F=$.map[H];if(F===void 0)F=new WK(H),gW($,F);$=F}}}class G7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let Y=J.getActiveUniform(Q,K),H=J.getUniformLocation(Q,Y.name);DX(Y,H,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let Y=Q[W],H=$[Y.id];if(H.needsUpdate!==!1)Y.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function pW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var RX=37297,OX=0;function kX(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let Y=W;Y<K;Y++){let H=Y+1;Z.push(`${H===Q?">":" "} ${H}: ${$[Y]}`)}return Z.join(`
`)}var mW=new f0;function MX(J){m0._getMatrix(mW,m0.workingColorSpace,J);let Q=`mat3( ${mW.elements.map(($)=>$.toFixed(4))} )`;switch(m0.getTransfer(J)){case sQ:return[Q,"LinearTransferOETF"];case $8:return[Q,"sRGBTransferOETF"];default:return C0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let Y=/ERROR: 0:(\d+)/.exec(K);if(Y){let H=parseInt(Y[1]);return $.toUpperCase()+`

`+K+`

`+kX(J.getShaderSource(Q),H)}else return K}function VX(J,Q){let $=MX(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var BX={[ZQ]:"Linear",[WQ]:"Reinhard",[KQ]:"Cineon",[s9]:"ACESFilmic",[HQ]:"AgX",[UQ]:"Neutral",[YQ]:"Custom"};function LX(J,Q){let $=BX[Q];if($===void 0)return C0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var RJ=new S;function zX(){m0.getLuminanceCoefficients(RJ);let J=RJ.x.toFixed(4),Q=RJ.y.toFixed(4),$=RJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function IX(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(X7).join(`
`)}function CX(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function wX(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),Y=K.name,H=1;if(K.type===J.FLOAT_MAT2)H=2;if(K.type===J.FLOAT_MAT3)H=3;if(K.type===J.FLOAT_MAT4)H=4;$[Y]={type:K.type,location:J.getAttribLocation(Q,Y),locationSize:H}}return $}function X7(J){return J!==""}function lW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function uW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var PX=/^[ \t]*#include +<([\w\d./]+)>/gm;function S$(J){return J.replace(PX,_X)}var AX=new Map;function _X(J,Q){let $=b0[Q];if($===void 0){let Z=AX.get(Q);if(Z!==void 0)$=b0[Z],C0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return S$($)}var TX=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cW(J){return J.replace(TX,SX)}function SX(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function nW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var jX={[c9]:"SHADOWMAP_TYPE_PCF",[I9]:"SHADOWMAP_TYPE_VSM"};function fX(J){return jX[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yX={[P9]:"ENVMAP_TYPE_CUBE",[g6]:"ENVMAP_TYPE_CUBE",[i9]:"ENVMAP_TYPE_CUBE_UV"};function bX(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return yX[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var vX={[g6]:"ENVMAP_MODE_REFRACTION"};function hX(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return vX[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xX={[tZ]:"ENVMAP_BLENDING_MULTIPLY",[eZ]:"ENVMAP_BLENDING_MIX",[JW]:"ENVMAP_BLENDING_ADD"};function gX(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return xX[J.combine]||"ENVMAP_BLENDING_NONE"}function pX(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function mX(J,Q,$,Z){let W=J.getContext(),K=$.defines,Y=$.vertexShader,H=$.fragmentShader,U=fX($),X=bX($),N=hX($),F=gX($),G=pX($),E=IX($),R=CX(K),V=W.createProgram(),q,D,B=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(X7).join(`
`),q.length>0)q+=`
`;if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(X7).join(`
`),D.length>0)D+=`
`}else q=[nW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(X7).join(`
`),D=[nW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+X:"",$.envMap?"#define "+N:"",$.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==r8?"#define TONE_MAPPING":"",$.toneMapping!==r8?b0.tonemapping_pars_fragment:"",$.toneMapping!==r8?LX("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",b0.colorspace_pars_fragment,VX("linearToOutputTexel",$.outputColorSpace),zX(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(X7).join(`
`);if(Y=S$(Y),Y=lW(Y,$),Y=uW(Y,$),H=S$(H),H=lW(H,$),H=uW(H,$),Y=cW(Y),H=cW(H),$.isRawShaderMaterial!==!0)B=`#version 300 es
`,q=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,D=["#define varying in",$.glslVersion===iQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===iQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let L=B+q+Y,I=B+D+H,f=pW(W,W.VERTEX_SHADER,L),C=pW(W,W.FRAGMENT_SHADER,I);if(W.attachShader(V,f),W.attachShader(V,C),$.index0AttributeName!==void 0)W.bindAttribLocation(V,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(V,0,"position");W.linkProgram(V);function P(w){if(J.debug.checkShaderErrors){let j=W.getProgramInfoLog(V)||"",m=W.getShaderInfoLog(f)||"",b=W.getShaderInfoLog(C)||"",u=j.trim(),p=m.trim(),h=b.trim(),e=!0,t=!0;if(W.getProgramParameter(V,W.LINK_STATUS)===!1)if(e=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,V,f,C);else{let X0=dW(W,f,"vertex"),z0=dW(W,C,"fragment");A0("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(V,W.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+u+`
`+X0+`
`+z0)}else if(u!=="")C0("WebGLProgram: Program Info Log:",u);else if(p===""||h==="")t=!1;if(t)w.diagnostics={runnable:e,programLog:u,vertexShader:{log:p,prefix:q},fragmentShader:{log:h,prefix:D}}}W.deleteShader(f),W.deleteShader(C),O=new G7(W,V),A=wX(W,V)}let O;this.getUniforms=function(){if(O===void 0)P(this);return O};let A;this.getAttributes=function(){if(A===void 0)P(this);return A};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=W.getProgramParameter(V,RX);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(V),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=OX++,this.cacheKey=Q,this.usedTimes=1,this.program=V,this.vertexShader=f,this.fragmentShader=C,this}var dX=0;class KK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),K=this._getShaderCacheForMaterial(J);if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new YK(J),Q.set(J,$);return $}}class YK{constructor(J){this.id=dX++,this.code=J,this.usedTimes=0}}function lX(J,Q,$,Z,W,K){let Y=new e9,H=new KK,U=new Set,X=[],N=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(O){if(U.add(O),O===0)return"uv";return`uv${O}`}function V(O,A,l,w,j){let m=w.fog,b=j.geometry,u=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?w.environment:null,p=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,h=Q.get(O.envMap||u,p),e=!!h&&h.mapping===i9?h.image.height:null,t=E[O.type];if(O.precision!==null){if(G=Z.getMaxPrecision(O.precision),G!==O.precision)C0("WebGLProgram.getParameters:",O.precision,"not supported, using",G,"instead.")}let X0=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,z0=X0!==void 0?X0.length:0,U0=0;if(b.morphAttributes.position!==void 0)U0=1;if(b.morphAttributes.normal!==void 0)U0=2;if(b.morphAttributes.color!==void 0)U0=3;let Y8,i0,s,Z0;if(t){let o0=K6[t];Y8=o0.vertexShader,i0=o0.fragmentShader}else Y8=O.vertexShader,i0=O.fragmentShader,H.update(O),s=H.getVertexShaderID(O),Z0=H.getFragmentShaderID(O);let F0=J.getRenderTarget(),G0=J.state.buffers.depth.getReversed(),P0=j.isInstancedMesh===!0,d0=j.isBatchedMesh===!0,l0=!!O.map,u0=!!O.matcap,n0=!!h,J8=!!O.aoMap,g0=!!O.lightMap,q8=!!O.bumpMap,_=!!O.normalMap,M8=!!O.displacementMap,v0=!!O.emissiveMap,K8=!!O.metalnessMap,B0=!!O.roughnessMap,Z8=O.anisotropy>0,z=O.clearcoat>0,k=O.dispersion>0,v=O.iridescence>0,n=O.sheen>0,a=O.transmission>0,c=Z8&&!!O.anisotropyMap,E0=z&&!!O.clearcoatMap,W0=z&&!!O.clearcoatNormalMap,I0=z&&!!O.clearcoatRoughnessMap,T0=v&&!!O.iridescenceMap,r=v&&!!O.iridescenceThicknessMap,J0=n&&!!O.sheenColorMap,R0=n&&!!O.sheenRoughnessMap,w0=!!O.specularMap,N0=!!O.specularColorMap,h0=!!O.specularIntensityMap,T=a&&!!O.transmissionMap,Q0=a&&!!O.thicknessMap,$0=!!O.gradientMap,D0=!!O.alphaMap,i=O.alphaTest>0,o=!!O.alphaHash,O0=!!O.extensions,S0=r8;if(O.toneMapped){if(F0===null||F0.isXRRenderTarget===!0)S0=J.toneMapping}let W8={shaderID:t,shaderType:O.type,shaderName:O.name,vertexShader:Y8,fragmentShader:i0,defines:O.defines,customVertexShaderID:s,customFragmentShaderID:Z0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:G,batching:d0,batchingColor:d0&&j._colorsTexture!==null,instancing:P0,instancingColor:P0&&j.instanceColor!==null,instancingMorph:P0&&j.morphTexture!==null,outputColorSpace:F0===null?J.outputColorSpace:F0.isXRRenderTarget===!0?F0.texture.colorSpace:r9,alphaToCoverage:!!O.alphaToCoverage,map:l0,matcap:u0,envMap:n0,envMapMode:n0&&h.mapping,envMapCubeUVHeight:e,aoMap:J8,lightMap:g0,bumpMap:q8,normalMap:_,displacementMap:M8,emissiveMap:v0,normalMapObjectSpace:_&&O.normalMapType===qW,normalMapTangentSpace:_&&O.normalMapType===NW,metalnessMap:K8,roughnessMap:B0,anisotropy:Z8,anisotropyMap:c,clearcoat:z,clearcoatMap:E0,clearcoatNormalMap:W0,clearcoatRoughnessMap:I0,dispersion:k,iridescence:v,iridescenceMap:T0,iridescenceThicknessMap:r,sheen:n,sheenColorMap:J0,sheenRoughnessMap:R0,specularMap:w0,specularColorMap:N0,specularIntensityMap:h0,transmission:a,transmissionMap:T,thicknessMap:Q0,gradientMap:$0,opaque:O.transparent===!1&&O.blending===n9&&O.alphaToCoverage===!1,alphaMap:D0,alphaTest:i,alphaHash:o,combine:O.combine,mapUv:l0&&R(O.map.channel),aoMapUv:J8&&R(O.aoMap.channel),lightMapUv:g0&&R(O.lightMap.channel),bumpMapUv:q8&&R(O.bumpMap.channel),normalMapUv:_&&R(O.normalMap.channel),displacementMapUv:M8&&R(O.displacementMap.channel),emissiveMapUv:v0&&R(O.emissiveMap.channel),metalnessMapUv:K8&&R(O.metalnessMap.channel),roughnessMapUv:B0&&R(O.roughnessMap.channel),anisotropyMapUv:c&&R(O.anisotropyMap.channel),clearcoatMapUv:E0&&R(O.clearcoatMap.channel),clearcoatNormalMapUv:W0&&R(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I0&&R(O.clearcoatRoughnessMap.channel),iridescenceMapUv:T0&&R(O.iridescenceMap.channel),iridescenceThicknessMapUv:r&&R(O.iridescenceThicknessMap.channel),sheenColorMapUv:J0&&R(O.sheenColorMap.channel),sheenRoughnessMapUv:R0&&R(O.sheenRoughnessMap.channel),specularMapUv:w0&&R(O.specularMap.channel),specularColorMapUv:N0&&R(O.specularColorMap.channel),specularIntensityMapUv:h0&&R(O.specularIntensityMap.channel),transmissionMapUv:T&&R(O.transmissionMap.channel),thicknessMapUv:Q0&&R(O.thicknessMap.channel),alphaMapUv:D0&&R(O.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(_||Z8),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!b.attributes.uv&&(l0||D0),fog:!!m,useFog:O.fog===!0,fogExp2:!!m&&m.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||b.attributes.normal===void 0&&_===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:G0,skinning:j.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:z0,morphTextureStride:U0,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:S0,decodeVideoTexture:l0&&O.map.isVideoTexture===!0&&m0.getTransfer(O.map.colorSpace)===$8,decodeVideoTextureEmissive:v0&&O.emissiveMap.isVideoTexture===!0&&m0.getTransfer(O.emissiveMap.colorSpace)===$8,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===x8,flipSided:O.side===j8,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:O0&&O.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&O.extensions.multiDraw===!0||d0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return W8.vertexUv1s=U.has(1),W8.vertexUv2s=U.has(2),W8.vertexUv3s=U.has(3),U.clear(),W8}function q(O){let A=[];if(O.shaderID)A.push(O.shaderID);else A.push(O.customVertexShaderID),A.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let l in O.defines)A.push(l),A.push(O.defines[l]);if(O.isRawShaderMaterial===!1)D(A,O),B(A,O),A.push(J.outputColorSpace);return A.push(O.customProgramCacheKey),A.join()}function D(O,A){O.push(A.precision),O.push(A.outputColorSpace),O.push(A.envMapMode),O.push(A.envMapCubeUVHeight),O.push(A.mapUv),O.push(A.alphaMapUv),O.push(A.lightMapUv),O.push(A.aoMapUv),O.push(A.bumpMapUv),O.push(A.normalMapUv),O.push(A.displacementMapUv),O.push(A.emissiveMapUv),O.push(A.metalnessMapUv),O.push(A.roughnessMapUv),O.push(A.anisotropyMapUv),O.push(A.clearcoatMapUv),O.push(A.clearcoatNormalMapUv),O.push(A.clearcoatRoughnessMapUv),O.push(A.iridescenceMapUv),O.push(A.iridescenceThicknessMapUv),O.push(A.sheenColorMapUv),O.push(A.sheenRoughnessMapUv),O.push(A.specularMapUv),O.push(A.specularColorMapUv),O.push(A.specularIntensityMapUv),O.push(A.transmissionMapUv),O.push(A.thicknessMapUv),O.push(A.combine),O.push(A.fogExp2),O.push(A.sizeAttenuation),O.push(A.morphTargetsCount),O.push(A.morphAttributeCount),O.push(A.numDirLights),O.push(A.numPointLights),O.push(A.numSpotLights),O.push(A.numSpotLightMaps),O.push(A.numHemiLights),O.push(A.numRectAreaLights),O.push(A.numDirLightShadows),O.push(A.numPointLightShadows),O.push(A.numSpotLightShadows),O.push(A.numSpotLightShadowsWithMaps),O.push(A.numLightProbes),O.push(A.shadowMapType),O.push(A.toneMapping),O.push(A.numClippingPlanes),O.push(A.numClipIntersection),O.push(A.depthPacking)}function B(O,A){if(Y.disableAll(),A.instancing)Y.enable(0);if(A.instancingColor)Y.enable(1);if(A.instancingMorph)Y.enable(2);if(A.matcap)Y.enable(3);if(A.envMap)Y.enable(4);if(A.normalMapObjectSpace)Y.enable(5);if(A.normalMapTangentSpace)Y.enable(6);if(A.clearcoat)Y.enable(7);if(A.iridescence)Y.enable(8);if(A.alphaTest)Y.enable(9);if(A.vertexColors)Y.enable(10);if(A.vertexAlphas)Y.enable(11);if(A.vertexUv1s)Y.enable(12);if(A.vertexUv2s)Y.enable(13);if(A.vertexUv3s)Y.enable(14);if(A.vertexTangents)Y.enable(15);if(A.anisotropy)Y.enable(16);if(A.alphaHash)Y.enable(17);if(A.batching)Y.enable(18);if(A.dispersion)Y.enable(19);if(A.batchingColor)Y.enable(20);if(A.gradientMap)Y.enable(21);if(O.push(Y.mask),Y.disableAll(),A.fog)Y.enable(0);if(A.useFog)Y.enable(1);if(A.flatShading)Y.enable(2);if(A.logarithmicDepthBuffer)Y.enable(3);if(A.reversedDepthBuffer)Y.enable(4);if(A.skinning)Y.enable(5);if(A.morphTargets)Y.enable(6);if(A.morphNormals)Y.enable(7);if(A.morphColors)Y.enable(8);if(A.premultipliedAlpha)Y.enable(9);if(A.shadowMapEnabled)Y.enable(10);if(A.doubleSided)Y.enable(11);if(A.flipSided)Y.enable(12);if(A.useDepthPacking)Y.enable(13);if(A.dithering)Y.enable(14);if(A.transmission)Y.enable(15);if(A.sheen)Y.enable(16);if(A.opaque)Y.enable(17);if(A.pointsUvs)Y.enable(18);if(A.decodeVideoTexture)Y.enable(19);if(A.decodeVideoTextureEmissive)Y.enable(20);if(A.alphaToCoverage)Y.enable(21);O.push(Y.mask)}function L(O){let A=E[O.type],l;if(A){let w=K6[A];l=IW.clone(w.uniforms)}else l=O.uniforms;return l}function I(O,A){let l=N.get(A);if(l!==void 0)++l.usedTimes;else l=new mX(J,A,O,W),X.push(l),N.set(A,l);return l}function f(O){if(--O.usedTimes===0){let A=X.indexOf(O);X[A]=X[X.length-1],X.pop(),N.delete(O.cacheKey),O.destroy()}}function C(O){H.remove(O)}function P(){H.dispose()}return{getParameters:V,getProgramCacheKey:q,getUniforms:L,acquireProgram:I,releaseProgram:f,releaseShaderCache:C,programs:X,dispose:P}}function uX(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let H=J.get(Y);if(H===void 0)H={},J.set(Y,H);return H}function Z(Y){J.delete(Y)}function W(Y,H,U){J.get(Y)[H]=U}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function cX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function sW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function iW(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function H(G,E,R,V,q,D){let B=J[Q];if(B===void 0)B={id:G.id,object:G,geometry:E,material:R,materialVariant:Y(G),groupOrder:V,renderOrder:G.renderOrder,z:q,group:D},J[Q]=B;else B.id=G.id,B.object=G,B.geometry=E,B.material=R,B.materialVariant=Y(G),B.groupOrder=V,B.renderOrder=G.renderOrder,B.z=q,B.group=D;return Q++,B}function U(G,E,R,V,q,D){let B=H(G,E,R,V,q,D);if(R.transmission>0)Z.push(B);else if(R.transparent===!0)W.push(B);else $.push(B)}function X(G,E,R,V,q,D){let B=H(G,E,R,V,q,D);if(R.transmission>0)Z.unshift(B);else if(R.transparent===!0)W.unshift(B);else $.unshift(B)}function N(G,E){if($.length>1)$.sort(G||cX);if(Z.length>1)Z.sort(E||sW);if(W.length>1)W.sort(E||sW)}function F(){for(let G=Q,E=J.length;G<E;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:U,unshift:X,finish:F,sort:N}}function nX(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),Y;if(K===void 0)Y=new iW,J.set(Z,[Y]);else if(W>=K.length)Y=new iW,K.push(Y);else Y=K[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function sX(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new S,color:new y0};break;case"SpotLight":$={position:new S,direction:new S,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new S,color:new y0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new S,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":$={color:new y0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=$,$}}}function iX(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var oX=0;function aX(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function rX(J){let Q=new sX,$=iX(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let X=0;X<9;X++)Z.probe.push(new S);let W=new S,K=new t0,Y=new t0;function H(X){let N=0,F=0,G=0;for(let A=0;A<9;A++)Z.probe[A].set(0,0,0);let E=0,R=0,V=0,q=0,D=0,B=0,L=0,I=0,f=0,C=0,P=0;X.sort(aX);for(let A=0,l=X.length;A<l;A++){let w=X[A],j=w.color,m=w.intensity,b=w.distance,u=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===_9)u=w.shadow.map.texture;else u=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)N+=j.r*m,F+=j.g*m,G+=j.b*m;else if(w.isLightProbe){for(let p=0;p<9;p++)Z.probe[p].addScaledVector(w.sh.coefficients[p],m);P++}else if(w.isDirectionalLight){let p=Q.get(w);if(p.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let h=w.shadow,e=$.get(w);e.shadowIntensity=h.intensity,e.shadowBias=h.bias,e.shadowNormalBias=h.normalBias,e.shadowRadius=h.radius,e.shadowMapSize=h.mapSize,Z.directionalShadow[E]=e,Z.directionalShadowMap[E]=u,Z.directionalShadowMatrix[E]=w.shadow.matrix,B++}Z.directional[E]=p,E++}else if(w.isSpotLight){let p=Q.get(w);p.position.setFromMatrixPosition(w.matrixWorld),p.color.copy(j).multiplyScalar(m),p.distance=b,p.coneCos=Math.cos(w.angle),p.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),p.decay=w.decay,Z.spot[V]=p;let h=w.shadow;if(w.map){if(Z.spotLightMap[f]=w.map,f++,h.updateMatrices(w),w.castShadow)C++}if(Z.spotLightMatrix[V]=h.matrix,w.castShadow){let e=$.get(w);e.shadowIntensity=h.intensity,e.shadowBias=h.bias,e.shadowNormalBias=h.normalBias,e.shadowRadius=h.radius,e.shadowMapSize=h.mapSize,Z.spotShadow[V]=e,Z.spotShadowMap[V]=u,I++}V++}else if(w.isRectAreaLight){let p=Q.get(w);p.color.copy(j).multiplyScalar(m),p.halfWidth.set(w.width*0.5,0,0),p.halfHeight.set(0,w.height*0.5,0),Z.rectArea[q]=p,q++}else if(w.isPointLight){let p=Q.get(w);if(p.color.copy(w.color).multiplyScalar(w.intensity),p.distance=w.distance,p.decay=w.decay,w.castShadow){let h=w.shadow,e=$.get(w);e.shadowIntensity=h.intensity,e.shadowBias=h.bias,e.shadowNormalBias=h.normalBias,e.shadowRadius=h.radius,e.shadowMapSize=h.mapSize,e.shadowCameraNear=h.camera.near,e.shadowCameraFar=h.camera.far,Z.pointShadow[R]=e,Z.pointShadowMap[R]=u,Z.pointShadowMatrix[R]=w.shadow.matrix,L++}Z.point[R]=p,R++}else if(w.isHemisphereLight){let p=Q.get(w);p.skyColor.copy(w.color).multiplyScalar(m),p.groundColor.copy(w.groundColor).multiplyScalar(m),Z.hemi[D]=p,D++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=K0.LTC_FLOAT_1,Z.rectAreaLTC2=K0.LTC_FLOAT_2;else Z.rectAreaLTC1=K0.LTC_HALF_1,Z.rectAreaLTC2=K0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=G;let O=Z.hash;if(O.directionalLength!==E||O.pointLength!==R||O.spotLength!==V||O.rectAreaLength!==q||O.hemiLength!==D||O.numDirectionalShadows!==B||O.numPointShadows!==L||O.numSpotShadows!==I||O.numSpotMaps!==f||O.numLightProbes!==P)Z.directional.length=E,Z.spot.length=V,Z.rectArea.length=q,Z.point.length=R,Z.hemi.length=D,Z.directionalShadow.length=B,Z.directionalShadowMap.length=B,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=I,Z.spotShadowMap.length=I,Z.directionalShadowMatrix.length=B,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=I+f-C,Z.spotLightMap.length=f,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=P,O.directionalLength=E,O.pointLength=R,O.spotLength=V,O.rectAreaLength=q,O.hemiLength=D,O.numDirectionalShadows=B,O.numPointShadows=L,O.numSpotShadows=I,O.numSpotMaps=f,O.numLightProbes=P,Z.version=oX++}function U(X,N){let F=0,G=0,E=0,R=0,V=0,q=N.matrixWorldInverse;for(let D=0,B=X.length;D<B;D++){let L=X[D];if(L.isDirectionalLight){let I=Z.directional[F];I.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(q),F++}else if(L.isSpotLight){let I=Z.spot[E];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(q),I.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(q),E++}else if(L.isRectAreaLight){let I=Z.rectArea[R];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(q),Y.identity(),K.copy(L.matrixWorld),K.premultiply(q),Y.extractRotation(K),I.halfWidth.set(L.width*0.5,0,0),I.halfHeight.set(0,L.height*0.5,0),I.halfWidth.applyMatrix4(Y),I.halfHeight.applyMatrix4(Y),R++}else if(L.isPointLight){let I=Z.point[G];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(q),G++}else if(L.isHemisphereLight){let I=Z.hemi[V];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(q),V++}}}return{setup:H,setupView:U,state:Z}}function oW(J){let Q=new rX(J),$=[],Z=[];function W(N){X.camera=N,$.length=0,Z.length=0}function K(N){$.push(N)}function Y(N){Z.push(N)}function H(){Q.setup($)}function U(N){Q.setupView($,N)}let X={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:X,setupLights:H,setupLightsView:U,pushLight:K,pushShadow:Y}}function tX(J){let Q=new WeakMap;function $(W,K=0){let Y=Q.get(W),H;if(Y===void 0)H=new oW(J),Q.set(W,[H]);else if(K>=Y.length)H=new oW(J),Y.push(H);else H=Y[K];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var eX=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q1=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],$1=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],aW=new t0,U7=new S,A$=new S;function Z1(J,Q,$){let Z=new $7,W=new _0,K=new _0,Y=new U8,H=new Y$,U=new H$,X={},N=$.maxTextureSize,F={[C9]:j8,[j8]:C9,[x8]:x8},G=new l8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _0},radius:{value:4}},vertexShader:eX,fragmentShader:J1}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let R=new w8;R.setAttribute("position",new p8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new S8(R,G),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c9;let D=this.type;this.render=function(C,P,O){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(C.length===0)return;if(this.type===m7)C0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=c9;let A=J.getRenderTarget(),l=J.getActiveCubeFace(),w=J.getActiveMipmapLevel(),j=J.state;if(j.setBlending($6),j.buffers.depth.getReversed()===!0)j.buffers.color.setClear(0,0,0,0);else j.buffers.color.setClear(1,1,1,1);j.buffers.depth.setTest(!0),j.setScissorTest(!1);let m=D!==this.type;if(m)P.traverse(function(b){if(b.material)if(Array.isArray(b.material))b.material.forEach((u)=>u.needsUpdate=!0);else b.material.needsUpdate=!0});for(let b=0,u=C.length;b<u;b++){let p=C[b],h=p.shadow;if(h===void 0){C0("WebGLShadowMap:",p,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;W.copy(h.mapSize);let e=h.getFrameExtents();if(W.multiply(e),K.copy(h.mapSize),W.x>N||W.y>N){if(W.x>N)K.x=Math.floor(N/e.x),W.x=K.x*e.x,h.mapSize.x=K.x;if(W.y>N)K.y=Math.floor(N/e.y),W.y=K.y*e.y,h.mapSize.y=K.y}let t=J.state.buffers.depth.getReversed();if(h.camera._reversedDepth=t,h.map===null||m===!0){if(h.map!==null){if(h.map.depthTexture!==null)h.map.depthTexture.dispose(),h.map.depthTexture=null;h.map.dispose()}if(this.type===I9){if(p.isPointLight){C0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}h.map=new d8(W.x,W.y,{format:_9,type:D6,minFilter:f8,magFilter:f8,generateMipmaps:!1}),h.map.texture.name=p.name+".shadowMap",h.map.depthTexture=new i6(W.x,W.y,E6),h.map.depthTexture.name=p.name+".shadowMapDepth",h.map.depthTexture.format=m6,h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=P6,h.map.depthTexture.magFilter=P6}else{if(p.isPointLight)h.map=new j$(W.x),h.map.depthTexture=new Z$(W.x,A6);else h.map=new d8(W.x,W.y),h.map.depthTexture=new i6(W.x,W.y,A6);if(h.map.depthTexture.name=p.name+".shadowMap",h.map.depthTexture.format=m6,this.type===c9)h.map.depthTexture.compareFunction=t?t7:r7,h.map.depthTexture.minFilter=f8,h.map.depthTexture.magFilter=f8;else h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=P6,h.map.depthTexture.magFilter=P6}h.camera.updateProjectionMatrix()}let X0=h.map.isWebGLCubeRenderTarget?6:1;for(let z0=0;z0<X0;z0++){if(h.map.isWebGLCubeRenderTarget)J.setRenderTarget(h.map,z0),J.clear();else{if(z0===0)J.setRenderTarget(h.map),J.clear();let U0=h.getViewport(z0);Y.set(K.x*U0.x,K.y*U0.y,K.x*U0.z,K.y*U0.w),j.viewport(Y)}if(p.isPointLight){let{camera:U0,matrix:Y8}=h,i0=p.distance||U0.far;if(i0!==U0.far)U0.far=i0,U0.updateProjectionMatrix();U7.setFromMatrixPosition(p.matrixWorld),U0.position.copy(U7),A$.copy(U0.position),A$.add(Q1[z0]),U0.up.copy($1[z0]),U0.lookAt(A$),U0.updateMatrixWorld(),Y8.makeTranslation(-U7.x,-U7.y,-U7.z),aW.multiplyMatrices(U0.projectionMatrix,U0.matrixWorldInverse),h._frustum.setFromProjectionMatrix(aW,U0.coordinateSystem,U0.reversedDepth)}else h.updateMatrices(p);Z=h.getFrustum(),I(P,O,h.camera,p,this.type)}if(h.isPointLightShadow!==!0&&this.type===I9)B(h,O);h.needsUpdate=!1}D=this.type,q.needsUpdate=!1,J.setRenderTarget(A,l,w)};function B(C,P){let O=Q.update(V);if(G.defines.VSM_SAMPLES!==C.blurSamples)G.defines.VSM_SAMPLES=C.blurSamples,E.defines.VSM_SAMPLES=C.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new d8(W.x,W.y,{format:_9,type:D6});G.uniforms.shadow_pass.value=C.map.depthTexture,G.uniforms.resolution.value=C.mapSize,G.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(P,null,O,G,V,null),E.uniforms.shadow_pass.value=C.mapPass.texture,E.uniforms.resolution.value=C.mapSize,E.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(P,null,O,E,V,null)}function L(C,P,O,A){let l=null,w=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)l=w;else if(l=O.isPointLight===!0?U:H,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let j=l.uuid,m=P.uuid,b=X[j];if(b===void 0)b={},X[j]=b;let u=b[m];if(u===void 0)u=l.clone(),b[m]=u,P.addEventListener("dispose",f);l=u}if(l.visible=P.visible,l.wireframe=P.wireframe,A===I9)l.side=P.shadowSide!==null?P.shadowSide:P.side;else l.side=P.shadowSide!==null?P.shadowSide:F[P.side];if(l.alphaMap=P.alphaMap,l.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,l.map=P.map,l.clipShadows=P.clipShadows,l.clippingPlanes=P.clippingPlanes,l.clipIntersection=P.clipIntersection,l.displacementMap=P.displacementMap,l.displacementScale=P.displacementScale,l.displacementBias=P.displacementBias,l.wireframeLinewidth=P.wireframeLinewidth,l.linewidth=P.linewidth,O.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let j=J.properties.get(l);j.light=O}return l}function I(C,P,O,A,l){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&l===I9)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let m=Q.update(C),b=C.material;if(Array.isArray(b)){let u=m.groups;for(let p=0,h=u.length;p<h;p++){let e=u[p],t=b[e.materialIndex];if(t&&t.visible){let X0=L(C,t,A,l);C.onBeforeShadow(J,C,P,O,m,X0,e),J.renderBufferDirect(O,null,m,X0,C,e),C.onAfterShadow(J,C,P,O,m,X0,e)}}}else if(b.visible){let u=L(C,b,A,l);C.onBeforeShadow(J,C,P,O,m,u,null),J.renderBufferDirect(O,null,m,u,C,null),C.onAfterShadow(J,C,P,O,m,u,null)}}}let j=C.children;for(let m=0,b=j.length;m<b;m++)I(j[m],P,O,A,l)}function f(C){C.target.removeEventListener("dispose",f);for(let O in X){let A=X[O],l=C.target.uuid;if(l in A)A[l].dispose(),delete A[l]}}}function W1(J,Q){function $(){let T=!1,Q0=new U8,$0=null,D0=new U8(0,0,0,0);return{setMask:function(i){if($0!==i&&!T)J.colorMask(i,i,i,i),$0=i},setLocked:function(i){T=i},setClear:function(i,o,O0,S0,W8){if(W8===!0)i*=S0,o*=S0,O0*=S0;if(Q0.set(i,o,O0,S0),D0.equals(Q0)===!1)J.clearColor(i,o,O0,S0),D0.copy(Q0)},reset:function(){T=!1,$0=null,D0.set(-1,0,0,0)}}}function Z(){let T=!1,Q0=!1,$0=null,D0=null,i=null;return{setReversed:function(o){if(Q0!==o){let O0=Q.get("EXT_clip_control");if(o)O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.ZERO_TO_ONE_EXT);else O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.NEGATIVE_ONE_TO_ONE_EXT);Q0=o;let S0=i;i=null,this.setClear(S0)}},getReversed:function(){return Q0},setTest:function(o){if(o)F0(J.DEPTH_TEST);else G0(J.DEPTH_TEST)},setMask:function(o){if($0!==o&&!T)J.depthMask(o),$0=o},setFunc:function(o){if(Q0)o=LW[o];if(D0!==o){switch(o){case cZ:J.depthFunc(J.NEVER);break;case nZ:J.depthFunc(J.ALWAYS);break;case sZ:J.depthFunc(J.LESS);break;case $Q:J.depthFunc(J.LEQUAL);break;case iZ:J.depthFunc(J.EQUAL);break;case oZ:J.depthFunc(J.GEQUAL);break;case aZ:J.depthFunc(J.GREATER);break;case rZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}D0=o}},setLocked:function(o){T=o},setClear:function(o){if(i!==o){if(i=o,Q0)o=1-o;J.clearDepth(o)}},reset:function(){T=!1,$0=null,D0=null,i=null,Q0=!1}}}function W(){let T=!1,Q0=null,$0=null,D0=null,i=null,o=null,O0=null,S0=null,W8=null;return{setTest:function(o0){if(!T)if(o0)F0(J.STENCIL_TEST);else G0(J.STENCIL_TEST)},setMask:function(o0){if(Q0!==o0&&!T)J.stencilMask(o0),Q0=o0},setFunc:function(o0,Y6,e8){if($0!==o0||D0!==Y6||i!==e8)J.stencilFunc(o0,Y6,e8),$0=o0,D0=Y6,i=e8},setOp:function(o0,Y6,e8){if(o!==o0||O0!==Y6||S0!==e8)J.stencilOp(o0,Y6,e8),o=o0,O0=Y6,S0=e8},setLocked:function(o0){T=o0},setClear:function(o0){if(W8!==o0)J.clearStencil(o0),W8=o0},reset:function(){T=!1,Q0=null,$0=null,D0=null,i=null,o=null,O0=null,S0=null,W8=null}}}let K=new $,Y=new Z,H=new W,U=new WeakMap,X=new WeakMap,N={},F={},G=new WeakMap,E=[],R=null,V=!1,q=null,D=null,B=null,L=null,I=null,f=null,C=null,P=new y0(0,0,0),O=0,A=!1,l=null,w=null,j=null,m=null,b=null,u=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,h=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)h=parseFloat(/^WebGL (\d)/.exec(e)[1]),p=h>=1;else if(e.indexOf("OpenGL ES")!==-1)h=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),p=h>=2;let t=null,X0={},z0=J.getParameter(J.SCISSOR_BOX),U0=J.getParameter(J.VIEWPORT),Y8=new U8().fromArray(z0),i0=new U8().fromArray(U0);function s(T,Q0,$0,D0){let i=new Uint8Array(4),o=J.createTexture();J.bindTexture(T,o),J.texParameteri(T,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(T,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let O0=0;O0<$0;O0++)if(T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texImage3D(Q0,0,J.RGBA,1,1,D0,0,J.RGBA,J.UNSIGNED_BYTE,i);else J.texImage2D(Q0+O0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,i);return o}let Z0={};Z0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),Z0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),Z0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),Y.setClear(1),H.setClear(0),F0(J.DEPTH_TEST),Y.setFunc($Q),q8(!1),_(tJ),F0(J.CULL_FACE),J8($6);function F0(T){if(N[T]!==!0)J.enable(T),N[T]=!0}function G0(T){if(N[T]!==!1)J.disable(T),N[T]=!1}function P0(T,Q0){if(F[T]!==Q0){if(J.bindFramebuffer(T,Q0),F[T]=Q0,T===J.DRAW_FRAMEBUFFER)F[J.FRAMEBUFFER]=Q0;if(T===J.FRAMEBUFFER)F[J.DRAW_FRAMEBUFFER]=Q0;return!0}return!1}function d0(T,Q0){let $0=E,D0=!1;if(T){if($0=G.get(Q0),$0===void 0)$0=[],G.set(Q0,$0);let i=T.textures;if($0.length!==i.length||$0[0]!==J.COLOR_ATTACHMENT0){for(let o=0,O0=i.length;o<O0;o++)$0[o]=J.COLOR_ATTACHMENT0+o;$0.length=i.length,D0=!0}}else if($0[0]!==J.BACK)$0[0]=J.BACK,D0=!0;if(D0)J.drawBuffers($0)}function l0(T){if(R!==T)return J.useProgram(T),R=T,!0;return!1}let u0={[w9]:J.FUNC_ADD,[wZ]:J.FUNC_SUBTRACT,[PZ]:J.FUNC_REVERSE_SUBTRACT};u0[AZ]=J.MIN,u0[_Z]=J.MAX;let n0={[TZ]:J.ZERO,[SZ]:J.ONE,[jZ]:J.SRC_COLOR,[yZ]:J.SRC_ALPHA,[pZ]:J.SRC_ALPHA_SATURATE,[xZ]:J.DST_COLOR,[vZ]:J.DST_ALPHA,[fZ]:J.ONE_MINUS_SRC_COLOR,[bZ]:J.ONE_MINUS_SRC_ALPHA,[gZ]:J.ONE_MINUS_DST_COLOR,[hZ]:J.ONE_MINUS_DST_ALPHA,[mZ]:J.CONSTANT_COLOR,[dZ]:J.ONE_MINUS_CONSTANT_COLOR,[lZ]:J.CONSTANT_ALPHA,[uZ]:J.ONE_MINUS_CONSTANT_ALPHA};function J8(T,Q0,$0,D0,i,o,O0,S0,W8,o0){if(T===$6){if(V===!0)G0(J.BLEND),V=!1;return}if(V===!1)F0(J.BLEND),V=!0;if(T!==CZ){if(T!==q||o0!==A){if(D!==w9||I!==w9)J.blendEquation(J.FUNC_ADD),D=w9,I=w9;if(o0)switch(T){case n9:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case eJ:J.blendFunc(J.ONE,J.ONE);break;case JQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case QQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:A0("WebGLState: Invalid blending: ",T);break}else switch(T){case n9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case eJ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case JQ:A0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case QQ:A0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:A0("WebGLState: Invalid blending: ",T);break}B=null,L=null,f=null,C=null,P.set(0,0,0),O=0,q=T,A=o0}return}if(i=i||Q0,o=o||$0,O0=O0||D0,Q0!==D||i!==I)J.blendEquationSeparate(u0[Q0],u0[i]),D=Q0,I=i;if($0!==B||D0!==L||o!==f||O0!==C)J.blendFuncSeparate(n0[$0],n0[D0],n0[o],n0[O0]),B=$0,L=D0,f=o,C=O0;if(S0.equals(P)===!1||W8!==O)J.blendColor(S0.r,S0.g,S0.b,W8),P.copy(S0),O=W8;q=T,A=!1}function g0(T,Q0){T.side===x8?G0(J.CULL_FACE):F0(J.CULL_FACE);let $0=T.side===j8;if(Q0)$0=!$0;q8($0),T.blending===n9&&T.transparent===!1?J8($6):J8(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),Y.setFunc(T.depthFunc),Y.setTest(T.depthTest),Y.setMask(T.depthWrite),K.setMask(T.colorWrite);let D0=T.stencilWrite;if(H.setTest(D0),D0)H.setMask(T.stencilWriteMask),H.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),H.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass);v0(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?F0(J.SAMPLE_ALPHA_TO_COVERAGE):G0(J.SAMPLE_ALPHA_TO_COVERAGE)}function q8(T){if(l!==T){if(T)J.frontFace(J.CW);else J.frontFace(J.CCW);l=T}}function _(T){if(T!==zZ){if(F0(J.CULL_FACE),T!==w)if(T===tJ)J.cullFace(J.BACK);else if(T===IZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else G0(J.CULL_FACE);w=T}function M8(T){if(T!==j){if(p)J.lineWidth(T);j=T}}function v0(T,Q0,$0){if(T){if(F0(J.POLYGON_OFFSET_FILL),m!==Q0||b!==$0){if(m=Q0,b=$0,Y.getReversed())Q0=-Q0;J.polygonOffset(Q0,$0)}}else G0(J.POLYGON_OFFSET_FILL)}function K8(T){if(T)F0(J.SCISSOR_TEST);else G0(J.SCISSOR_TEST)}function B0(T){if(T===void 0)T=J.TEXTURE0+u-1;if(t!==T)J.activeTexture(T),t=T}function Z8(T,Q0,$0){if($0===void 0)if(t===null)$0=J.TEXTURE0+u-1;else $0=t;let D0=X0[$0];if(D0===void 0)D0={type:void 0,texture:void 0},X0[$0]=D0;if(D0.type!==T||D0.texture!==Q0){if(t!==$0)J.activeTexture($0),t=$0;J.bindTexture(T,Q0||Z0[T]),D0.type=T,D0.texture=Q0}}function z(){let T=X0[t];if(T!==void 0&&T.type!==void 0)J.bindTexture(T.type,null),T.type=void 0,T.texture=void 0}function k(){try{J.compressedTexImage2D(...arguments)}catch(T){A0("WebGLState:",T)}}function v(){try{J.compressedTexImage3D(...arguments)}catch(T){A0("WebGLState:",T)}}function n(){try{J.texSubImage2D(...arguments)}catch(T){A0("WebGLState:",T)}}function a(){try{J.texSubImage3D(...arguments)}catch(T){A0("WebGLState:",T)}}function c(){try{J.compressedTexSubImage2D(...arguments)}catch(T){A0("WebGLState:",T)}}function E0(){try{J.compressedTexSubImage3D(...arguments)}catch(T){A0("WebGLState:",T)}}function W0(){try{J.texStorage2D(...arguments)}catch(T){A0("WebGLState:",T)}}function I0(){try{J.texStorage3D(...arguments)}catch(T){A0("WebGLState:",T)}}function T0(){try{J.texImage2D(...arguments)}catch(T){A0("WebGLState:",T)}}function r(){try{J.texImage3D(...arguments)}catch(T){A0("WebGLState:",T)}}function J0(T){if(Y8.equals(T)===!1)J.scissor(T.x,T.y,T.z,T.w),Y8.copy(T)}function R0(T){if(i0.equals(T)===!1)J.viewport(T.x,T.y,T.z,T.w),i0.copy(T)}function w0(T,Q0){let $0=X.get(Q0);if($0===void 0)$0=new WeakMap,X.set(Q0,$0);let D0=$0.get(T);if(D0===void 0)D0=J.getUniformBlockIndex(Q0,T.name),$0.set(T,D0)}function N0(T,Q0){let D0=X.get(Q0).get(T);if(U.get(Q0)!==D0)J.uniformBlockBinding(Q0,D0,T.__bindingPointIndex),U.set(Q0,D0)}function h0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),N={},t=null,X0={},F={},G=new WeakMap,E=[],R=null,V=!1,q=null,D=null,B=null,L=null,I=null,f=null,C=null,P=new y0(0,0,0),O=0,A=!1,l=null,w=null,j=null,m=null,b=null,Y8.set(0,0,J.canvas.width,J.canvas.height),i0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),Y.reset(),H.reset()}return{buffers:{color:K,depth:Y,stencil:H},enable:F0,disable:G0,bindFramebuffer:P0,drawBuffers:d0,useProgram:l0,setBlending:J8,setMaterial:g0,setFlipSided:q8,setCullFace:_,setLineWidth:M8,setPolygonOffset:v0,setScissorTest:K8,activeTexture:B0,bindTexture:Z8,unbindTexture:z,compressedTexImage2D:k,compressedTexImage3D:v,texImage2D:T0,texImage3D:r,updateUBOMapping:w0,uniformBlockBinding:N0,texStorage2D:W0,texStorage3D:I0,texSubImage2D:n,texSubImage3D:a,compressedTexSubImage2D:c,compressedTexSubImage3D:E0,scissor:J0,viewport:R0,reset:h0}}function K1(J,Q,$,Z,W,K,Y){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),X=new _0,N=new WeakMap,F,G=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function R(z,k){return E?new OffscreenCanvas(z,k):l9("canvas")}function V(z,k,v){let n=1,a=Z8(z);if(a.width>v||a.height>v)n=v/Math.max(a.width,a.height);if(n<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let c=Math.floor(n*a.width),E0=Math.floor(n*a.height);if(F===void 0)F=R(c,E0);let W0=k?R(c,E0):F;return W0.width=c,W0.height=E0,W0.getContext("2d").drawImage(z,0,0,c,E0),C0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+c+"x"+E0+")."),W0}else{if("data"in z)C0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return z}return z}function q(z){return z.generateMipmaps}function D(z){J.generateMipmap(z)}function B(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(z,k,v,n,a=!1){if(z!==null){if(J[z]!==void 0)return J[z];C0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let c=k;if(k===J.RED){if(v===J.FLOAT)c=J.R32F;if(v===J.HALF_FLOAT)c=J.R16F;if(v===J.UNSIGNED_BYTE)c=J.R8}if(k===J.RED_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.R8UI;if(v===J.UNSIGNED_SHORT)c=J.R16UI;if(v===J.UNSIGNED_INT)c=J.R32UI;if(v===J.BYTE)c=J.R8I;if(v===J.SHORT)c=J.R16I;if(v===J.INT)c=J.R32I}if(k===J.RG){if(v===J.FLOAT)c=J.RG32F;if(v===J.HALF_FLOAT)c=J.RG16F;if(v===J.UNSIGNED_BYTE)c=J.RG8}if(k===J.RG_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.RG8UI;if(v===J.UNSIGNED_SHORT)c=J.RG16UI;if(v===J.UNSIGNED_INT)c=J.RG32UI;if(v===J.BYTE)c=J.RG8I;if(v===J.SHORT)c=J.RG16I;if(v===J.INT)c=J.RG32I}if(k===J.RGB_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.RGB8UI;if(v===J.UNSIGNED_SHORT)c=J.RGB16UI;if(v===J.UNSIGNED_INT)c=J.RGB32UI;if(v===J.BYTE)c=J.RGB8I;if(v===J.SHORT)c=J.RGB16I;if(v===J.INT)c=J.RGB32I}if(k===J.RGBA_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(v===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(v===J.UNSIGNED_INT)c=J.RGBA32UI;if(v===J.BYTE)c=J.RGBA8I;if(v===J.SHORT)c=J.RGBA16I;if(v===J.INT)c=J.RGBA32I}if(k===J.RGB){if(v===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(v===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(k===J.RGBA){let E0=a?sQ:m0.getTransfer(n);if(v===J.FLOAT)c=J.RGBA32F;if(v===J.HALF_FLOAT)c=J.RGBA16F;if(v===J.UNSIGNED_BYTE)c=E0===$8?J.SRGB8_ALPHA8:J.RGBA8;if(v===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(v===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function I(z,k){let v;if(z){if(k===null||k===A6||k===A9)v=J.DEPTH24_STENCIL8;else if(k===E6)v=J.DEPTH32F_STENCIL8;else if(k===a9)v=J.DEPTH24_STENCIL8,C0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===A6||k===A9)v=J.DEPTH_COMPONENT24;else if(k===E6)v=J.DEPTH_COMPONENT32F;else if(k===a9)v=J.DEPTH_COMPONENT16;return v}function f(z,k){if(q(z)===!0||z.isFramebufferTexture&&z.minFilter!==P6&&z.minFilter!==f8)return Math.log2(Math.max(k.width,k.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return k.mipmaps.length;else return 1}function C(z){let k=z.target;if(k.removeEventListener("dispose",C),O(k),k.isVideoTexture)N.delete(k)}function P(z){let k=z.target;k.removeEventListener("dispose",P),l(k)}function O(z){let k=Z.get(z);if(k.__webglInit===void 0)return;let v=z.source,n=G.get(v);if(n){let a=n[k.__cacheKey];if(a.usedTimes--,a.usedTimes===0)A(z);if(Object.keys(n).length===0)G.delete(v)}Z.remove(z)}function A(z){let k=Z.get(z);J.deleteTexture(k.__webglTexture);let v=z.source,n=G.get(v);delete n[k.__cacheKey],Y.memory.textures--}function l(z){let k=Z.get(z);if(z.depthTexture)z.depthTexture.dispose(),Z.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(k.__webglFramebuffer[n]))for(let a=0;a<k.__webglFramebuffer[n].length;a++)J.deleteFramebuffer(k.__webglFramebuffer[n][a]);else J.deleteFramebuffer(k.__webglFramebuffer[n]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[n])}else{if(Array.isArray(k.__webglFramebuffer))for(let n=0;n<k.__webglFramebuffer.length;n++)J.deleteFramebuffer(k.__webglFramebuffer[n]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let n=0;n<k.__webglColorRenderbuffer.length;n++)if(k.__webglColorRenderbuffer[n])J.deleteRenderbuffer(k.__webglColorRenderbuffer[n])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let v=z.textures;for(let n=0,a=v.length;n<a;n++){let c=Z.get(v[n]);if(c.__webglTexture)J.deleteTexture(c.__webglTexture),Y.memory.textures--;Z.remove(v[n])}Z.remove(z)}let w=0;function j(){w=0}function m(){let z=w;if(z>=W.maxTextures)C0("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+W.maxTextures);return w+=1,z}function b(z){let k=[];return k.push(z.wrapS),k.push(z.wrapT),k.push(z.wrapR||0),k.push(z.magFilter),k.push(z.minFilter),k.push(z.anisotropy),k.push(z.internalFormat),k.push(z.format),k.push(z.type),k.push(z.generateMipmaps),k.push(z.premultiplyAlpha),k.push(z.flipY),k.push(z.unpackAlignment),k.push(z.colorSpace),k.join()}function u(z,k){let v=Z.get(z);if(z.isVideoTexture)K8(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&v.__version!==z.version){let n=z.image;if(n===null)C0("WebGLRenderer: Texture marked for update but no image data found.");else if(n.complete===!1)C0("WebGLRenderer: Texture marked for update but image is incomplete");else{Z0(v,z,k);return}}else if(z.isExternalTexture)v.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,v.__webglTexture,J.TEXTURE0+k)}function p(z,k){let v=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&v.__version!==z.version){Z0(v,z,k);return}else if(z.isExternalTexture)v.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,v.__webglTexture,J.TEXTURE0+k)}function h(z,k){let v=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&v.__version!==z.version){Z0(v,z,k);return}$.bindTexture(J.TEXTURE_3D,v.__webglTexture,J.TEXTURE0+k)}function e(z,k){let v=Z.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&v.__version!==z.version){F0(v,z,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,v.__webglTexture,J.TEXTURE0+k)}let t={[QW]:J.REPEAT,[u7]:J.CLAMP_TO_EDGE,[$W]:J.MIRRORED_REPEAT},X0={[P6]:J.NEAREST,[ZW]:J.NEAREST_MIPMAP_NEAREST,[o9]:J.NEAREST_MIPMAP_LINEAR,[f8]:J.LINEAR,[c7]:J.LINEAR_MIPMAP_NEAREST,[p6]:J.LINEAR_MIPMAP_LINEAR},z0={[FW]:J.NEVER,[kW]:J.ALWAYS,[EW]:J.LESS,[r7]:J.LEQUAL,[DW]:J.EQUAL,[t7]:J.GEQUAL,[RW]:J.GREATER,[OW]:J.NOTEQUAL};function U0(z,k){if(k.type===E6&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===f8||k.magFilter===c7||k.magFilter===o9||k.magFilter===p6||k.minFilter===f8||k.minFilter===c7||k.minFilter===o9||k.minFilter===p6))C0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,t[k.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,t[k.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,t[k.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,X0[k.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,X0[k.minFilter]),k.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,z0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===P6)return;if(k.minFilter!==o9&&k.minFilter!==p6)return;if(k.type===E6&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let v=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,W.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function Y8(z,k){let v=!1;if(z.__webglInit===void 0)z.__webglInit=!0,k.addEventListener("dispose",C);let n=k.source,a=G.get(n);if(a===void 0)a={},G.set(n,a);let c=b(k);if(c!==z.__cacheKey){if(a[c]===void 0)a[c]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,v=!0;a[c].usedTimes++;let E0=a[z.__cacheKey];if(E0!==void 0){if(a[z.__cacheKey].usedTimes--,E0.usedTimes===0)A(k)}z.__cacheKey=c,z.__webglTexture=a[c].texture}return v}function i0(z,k,v){return Math.floor(Math.floor(z/v)/k)}function s(z,k,v,n){let c=z.updateRanges;if(c.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,v,n,k.data);else{c.sort((r,J0)=>r.start-J0.start);let E0=0;for(let r=1;r<c.length;r++){let J0=c[E0],R0=c[r],w0=J0.start+J0.count,N0=i0(R0.start,k.width,4),h0=i0(J0.start,k.width,4);if(R0.start<=w0+1&&N0===h0&&i0(R0.start+R0.count-1,k.width,4)===N0)J0.count=Math.max(J0.count,R0.start+R0.count-J0.start);else++E0,c[E0]=R0}c.length=E0+1;let W0=J.getParameter(J.UNPACK_ROW_LENGTH),I0=J.getParameter(J.UNPACK_SKIP_PIXELS),T0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let r=0,J0=c.length;r<J0;r++){let R0=c[r],w0=Math.floor(R0.start/4),N0=Math.ceil(R0.count/4),h0=w0%k.width,T=Math.floor(w0/k.width),Q0=N0,$0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,h0),J.pixelStorei(J.UNPACK_SKIP_ROWS,T),$.texSubImage2D(J.TEXTURE_2D,0,h0,T,Q0,1,v,n,k.data)}z.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,W0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,I0),J.pixelStorei(J.UNPACK_SKIP_ROWS,T0)}}function Z0(z,k,v){let n=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)n=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)n=J.TEXTURE_3D;let a=Y8(z,k),c=k.source;$.bindTexture(n,z.__webglTexture,J.TEXTURE0+v);let E0=Z.get(c);if(c.version!==E0.__version||a===!0){$.activeTexture(J.TEXTURE0+v);let W0=m0.getPrimaries(m0.workingColorSpace),I0=k.colorSpace===l6?null:m0.getPrimaries(k.colorSpace),T0=k.colorSpace===l6||W0===I0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,T0);let r=V(k.image,!1,W.maxTextureSize);r=B0(k,r);let J0=K.convert(k.format,k.colorSpace),R0=K.convert(k.type),w0=L(k.internalFormat,J0,R0,k.colorSpace,k.isVideoTexture);U0(n,k);let N0,h0=k.mipmaps,T=k.isVideoTexture!==!0,Q0=E0.__version===void 0||a===!0,$0=c.dataReady,D0=f(k,r);if(k.isDepthTexture){if(w0=I(k.format===d6,k.type),Q0)if(T)$.texStorage2D(J.TEXTURE_2D,1,w0,r.width,r.height);else $.texImage2D(J.TEXTURE_2D,0,w0,r.width,r.height,0,J0,R0,null)}else if(k.isDataTexture)if(h0.length>0){if(T&&Q0)$.texStorage2D(J.TEXTURE_2D,D0,w0,h0[0].width,h0[0].height);for(let i=0,o=h0.length;i<o;i++)if(N0=h0[i],T){if($0)$.texSubImage2D(J.TEXTURE_2D,i,0,0,N0.width,N0.height,J0,R0,N0.data)}else $.texImage2D(J.TEXTURE_2D,i,w0,N0.width,N0.height,0,J0,R0,N0.data);k.generateMipmaps=!1}else if(T){if(Q0)$.texStorage2D(J.TEXTURE_2D,D0,w0,r.width,r.height);if($0)s(k,r,J0,R0)}else $.texImage2D(J.TEXTURE_2D,0,w0,r.width,r.height,0,J0,R0,r.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(T&&Q0)$.texStorage3D(J.TEXTURE_2D_ARRAY,D0,w0,h0[0].width,h0[0].height,r.depth);for(let i=0,o=h0.length;i<o;i++)if(N0=h0[i],k.format!==Z6)if(J0!==null)if(T){if($0)if(k.layerUpdates.size>0){let O0=L$(N0.width,N0.height,k.format,k.type);for(let S0 of k.layerUpdates){let W8=N0.data.subarray(S0*O0/N0.data.BYTES_PER_ELEMENT,(S0+1)*O0/N0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,S0,N0.width,N0.height,1,J0,W8)}k.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,N0.width,N0.height,r.depth,J0,N0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,w0,N0.width,N0.height,r.depth,0,N0.data,0,0);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(T){if($0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,N0.width,N0.height,r.depth,J0,R0,N0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,w0,N0.width,N0.height,r.depth,0,J0,R0,N0.data)}else{if(T&&Q0)$.texStorage2D(J.TEXTURE_2D,D0,w0,h0[0].width,h0[0].height);for(let i=0,o=h0.length;i<o;i++)if(N0=h0[i],k.format!==Z6)if(J0!==null)if(T){if($0)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,N0.width,N0.height,J0,N0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,w0,N0.width,N0.height,0,N0.data);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(T){if($0)$.texSubImage2D(J.TEXTURE_2D,i,0,0,N0.width,N0.height,J0,R0,N0.data)}else $.texImage2D(J.TEXTURE_2D,i,w0,N0.width,N0.height,0,J0,R0,N0.data)}else if(k.isDataArrayTexture)if(T){if(Q0)$.texStorage3D(J.TEXTURE_2D_ARRAY,D0,w0,r.width,r.height,r.depth);if($0)if(k.layerUpdates.size>0){let i=L$(r.width,r.height,k.format,k.type);for(let o of k.layerUpdates){let O0=r.data.subarray(o*i/r.data.BYTES_PER_ELEMENT,(o+1)*i/r.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,o,r.width,r.height,1,J0,R0,O0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,r.width,r.height,r.depth,J0,R0,r.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,w0,r.width,r.height,r.depth,0,J0,R0,r.data);else if(k.isData3DTexture)if(T){if(Q0)$.texStorage3D(J.TEXTURE_3D,D0,w0,r.width,r.height,r.depth);if($0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,r.width,r.height,r.depth,J0,R0,r.data)}else $.texImage3D(J.TEXTURE_3D,0,w0,r.width,r.height,r.depth,0,J0,R0,r.data);else if(k.isFramebufferTexture){if(Q0)if(T)$.texStorage2D(J.TEXTURE_2D,D0,w0,r.width,r.height);else{let{width:i,height:o}=r;for(let O0=0;O0<D0;O0++)$.texImage2D(J.TEXTURE_2D,O0,w0,i,o,0,J0,R0,null),i>>=1,o>>=1}}else if(h0.length>0){if(T&&Q0){let i=Z8(h0[0]);$.texStorage2D(J.TEXTURE_2D,D0,w0,i.width,i.height)}for(let i=0,o=h0.length;i<o;i++)if(N0=h0[i],T){if($0)$.texSubImage2D(J.TEXTURE_2D,i,0,0,J0,R0,N0)}else $.texImage2D(J.TEXTURE_2D,i,w0,J0,R0,N0);k.generateMipmaps=!1}else if(T){if(Q0){let i=Z8(r);$.texStorage2D(J.TEXTURE_2D,D0,w0,i.width,i.height)}if($0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,J0,R0,r)}else $.texImage2D(J.TEXTURE_2D,0,w0,J0,R0,r);if(q(k))D(n);if(E0.__version=c.version,k.onUpdate)k.onUpdate(k)}z.__version=k.version}function F0(z,k,v){if(k.image.length!==6)return;let n=Y8(z,k),a=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+v);let c=Z.get(a);if(a.version!==c.__version||n===!0){$.activeTexture(J.TEXTURE0+v);let E0=m0.getPrimaries(m0.workingColorSpace),W0=k.colorSpace===l6?null:m0.getPrimaries(k.colorSpace),I0=k.colorSpace===l6||E0===W0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0);let T0=k.isCompressedTexture||k.image[0].isCompressedTexture,r=k.image[0]&&k.image[0].isDataTexture,J0=[];for(let o=0;o<6;o++){if(!T0&&!r)J0[o]=V(k.image[o],!0,W.maxCubemapSize);else J0[o]=r?k.image[o].image:k.image[o];J0[o]=B0(k,J0[o])}let R0=J0[0],w0=K.convert(k.format,k.colorSpace),N0=K.convert(k.type),h0=L(k.internalFormat,w0,N0,k.colorSpace),T=k.isVideoTexture!==!0,Q0=c.__version===void 0||n===!0,$0=a.dataReady,D0=f(k,R0);U0(J.TEXTURE_CUBE_MAP,k);let i;if(T0){if(T&&Q0)$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,h0,R0.width,R0.height);for(let o=0;o<6;o++){i=J0[o].mipmaps;for(let O0=0;O0<i.length;O0++){let S0=i[O0];if(k.format!==Z6)if(w0!==null)if(T){if($0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0,0,0,S0.width,S0.height,w0,S0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0,h0,S0.width,S0.height,0,S0.data);else C0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(T){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0,0,0,S0.width,S0.height,w0,N0,S0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0,h0,S0.width,S0.height,0,w0,N0,S0.data)}}}else{if(i=k.mipmaps,T&&Q0){if(i.length>0)D0++;let o=Z8(J0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,h0,o.width,o.height)}for(let o=0;o<6;o++)if(r){if(T){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,J0[o].width,J0[o].height,w0,N0,J0[o].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,h0,J0[o].width,J0[o].height,0,w0,N0,J0[o].data);for(let O0=0;O0<i.length;O0++){let W8=i[O0].image[o].image;if(T){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0+1,0,0,W8.width,W8.height,w0,N0,W8.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0+1,h0,W8.width,W8.height,0,w0,N0,W8.data)}}else{if(T){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,w0,N0,J0[o])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,h0,w0,N0,J0[o]);for(let O0=0;O0<i.length;O0++){let S0=i[O0];if(T){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0+1,0,0,w0,N0,S0.image[o])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+o,O0+1,h0,w0,N0,S0.image[o])}}}if(q(k))D(J.TEXTURE_CUBE_MAP);if(c.__version=a.version,k.onUpdate)k.onUpdate(k)}z.__version=k.version}function G0(z,k,v,n,a,c){let E0=K.convert(v.format,v.colorSpace),W0=K.convert(v.type),I0=L(v.internalFormat,E0,W0,v.colorSpace),T0=Z.get(k),r=Z.get(v);if(r.__renderTarget=k,!T0.__hasExternalTextures){let J0=Math.max(1,k.width>>c),R0=Math.max(1,k.height>>c);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,c,I0,J0,R0,k.depth,0,E0,W0,null);else $.texImage2D(a,c,I0,J0,R0,0,E0,W0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),v0(k))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,n,a,r.__webglTexture,0,M8(k));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,n,a,r.__webglTexture,c);$.bindFramebuffer(J.FRAMEBUFFER,null)}function P0(z,k,v){if(J.bindRenderbuffer(J.RENDERBUFFER,z),k.depthBuffer){let n=k.depthTexture,a=n&&n.isDepthTexture?n.type:null,c=I(k.stencilBuffer,a),E0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v0(k))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,M8(k),c,k.width,k.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,M8(k),c,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,c,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,z)}else{let n=k.textures;for(let a=0;a<n.length;a++){let c=n[a],E0=K.convert(c.format,c.colorSpace),W0=K.convert(c.type),I0=L(c.internalFormat,E0,W0,c.colorSpace);if(v0(k))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,M8(k),I0,k.width,k.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,M8(k),I0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,I0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function d0(z,k,v){let n=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let a=Z.get(k.depthTexture);if(a.__renderTarget=k,!a.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(n){if(a.__webglInit===void 0)a.__webglInit=!0,k.depthTexture.addEventListener("dispose",C);if(a.__webglTexture===void 0){a.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),U0(J.TEXTURE_CUBE_MAP,k.depthTexture);let T0=K.convert(k.depthTexture.format),r=K.convert(k.depthTexture.type),J0;if(k.depthTexture.format===m6)J0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===d6)J0=J.DEPTH24_STENCIL8;for(let R0=0;R0<6;R0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,J0,k.width,k.height,0,T0,r,null)}}else u(k.depthTexture,0);let c=a.__webglTexture,E0=M8(k),W0=n?J.TEXTURE_CUBE_MAP_POSITIVE_X+v:J.TEXTURE_2D,I0=k.depthTexture.format===d6?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===m6)if(v0(k))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,I0,W0,c,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,I0,W0,c,0);else if(k.depthTexture.format===d6)if(v0(k))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,I0,W0,c,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,I0,W0,c,0);else throw Error("Unknown depthTexture format")}function l0(z){let k=Z.get(z),v=z.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==z.depthTexture){let n=z.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(n){let a=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,n.removeEventListener("dispose",a)};n.addEventListener("dispose",a),k.__depthDisposeCallback=a}k.__boundDepthTexture=n}if(z.depthTexture&&!k.__autoAllocateDepthBuffer)if(v)for(let n=0;n<6;n++)d0(k.__webglFramebuffer[n],z,n);else{let n=z.texture.mipmaps;if(n&&n.length>0)d0(k.__webglFramebuffer[0],z,0);else d0(k.__webglFramebuffer,z,0)}else if(v){k.__webglDepthbuffer=[];for(let n=0;n<6;n++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[n]),k.__webglDepthbuffer[n]===void 0)k.__webglDepthbuffer[n]=J.createRenderbuffer(),P0(k.__webglDepthbuffer[n],z,!1);else{let a=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=k.__webglDepthbuffer[n];J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,c)}}else{let n=z.texture.mipmaps;if(n&&n.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),P0(k.__webglDepthbuffer,z,!1);else{let a=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,c)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(z,k,v){let n=Z.get(z);if(k!==void 0)G0(n.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(v!==void 0)l0(z)}function n0(z){let k=z.texture,v=Z.get(z),n=Z.get(k);z.addEventListener("dispose",P);let a=z.textures,c=z.isWebGLCubeRenderTarget===!0,E0=a.length>1;if(!E0){if(n.__webglTexture===void 0)n.__webglTexture=J.createTexture();n.__version=k.version,Y.memory.textures++}if(c){v.__webglFramebuffer=[];for(let W0=0;W0<6;W0++)if(k.mipmaps&&k.mipmaps.length>0){v.__webglFramebuffer[W0]=[];for(let I0=0;I0<k.mipmaps.length;I0++)v.__webglFramebuffer[W0][I0]=J.createFramebuffer()}else v.__webglFramebuffer[W0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){v.__webglFramebuffer=[];for(let W0=0;W0<k.mipmaps.length;W0++)v.__webglFramebuffer[W0]=J.createFramebuffer()}else v.__webglFramebuffer=J.createFramebuffer();if(E0)for(let W0=0,I0=a.length;W0<I0;W0++){let T0=Z.get(a[W0]);if(T0.__webglTexture===void 0)T0.__webglTexture=J.createTexture(),Y.memory.textures++}if(z.samples>0&&v0(z)===!1){v.__webglMultisampledFramebuffer=J.createFramebuffer(),v.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let W0=0;W0<a.length;W0++){let I0=a[W0];v.__webglColorRenderbuffer[W0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,v.__webglColorRenderbuffer[W0]);let T0=K.convert(I0.format,I0.colorSpace),r=K.convert(I0.type),J0=L(I0.internalFormat,T0,r,I0.colorSpace,z.isXRRenderTarget===!0),R0=M8(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,R0,J0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,v.__webglColorRenderbuffer[W0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)v.__webglDepthRenderbuffer=J.createRenderbuffer(),P0(v.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(c){$.bindTexture(J.TEXTURE_CUBE_MAP,n.__webglTexture),U0(J.TEXTURE_CUBE_MAP,k);for(let W0=0;W0<6;W0++)if(k.mipmaps&&k.mipmaps.length>0)for(let I0=0;I0<k.mipmaps.length;I0++)G0(v.__webglFramebuffer[W0][I0],z,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,I0);else G0(v.__webglFramebuffer[W0],z,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0);if(q(k))D(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(E0){for(let W0=0,I0=a.length;W0<I0;W0++){let T0=a[W0],r=Z.get(T0),J0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)J0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(J0,r.__webglTexture),U0(J0,T0),G0(v.__webglFramebuffer,z,T0,J.COLOR_ATTACHMENT0+W0,J0,0),q(T0))D(J0)}$.unbindTexture()}else{let W0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)W0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(W0,n.__webglTexture),U0(W0,k),k.mipmaps&&k.mipmaps.length>0)for(let I0=0;I0<k.mipmaps.length;I0++)G0(v.__webglFramebuffer[I0],z,k,J.COLOR_ATTACHMENT0,W0,I0);else G0(v.__webglFramebuffer,z,k,J.COLOR_ATTACHMENT0,W0,0);if(q(k))D(W0);$.unbindTexture()}if(z.depthBuffer)l0(z)}function J8(z){let k=z.textures;for(let v=0,n=k.length;v<n;v++){let a=k[v];if(q(a)){let c=B(z),E0=Z.get(a).__webglTexture;$.bindTexture(c,E0),D(c),$.unbindTexture()}}}let g0=[],q8=[];function _(z){if(z.samples>0){if(v0(z)===!1){let{textures:k,width:v,height:n}=z,a=J.COLOR_BUFFER_BIT,c=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=Z.get(z),W0=k.length>1;if(W0)for(let T0=0;T0<k.length;T0++)$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);let I0=z.texture.mipmaps;if(I0&&I0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let T0=0;T0<k.length;T0++){if(z.resolveDepthBuffer){if(z.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(W0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[T0]);let r=Z.get(k[T0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,r,0)}if(J.blitFramebuffer(0,0,v,n,0,0,v,n,a,J.NEAREST),U===!0){if(g0.length=0,q8.length=0,g0.push(J.COLOR_ATTACHMENT0+T0),z.depthBuffer&&z.resolveDepthBuffer===!1)g0.push(c),q8.push(c),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,q8);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,g0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),W0)for(let T0=0;T0<k.length;T0++){$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[T0]);let r=Z.get(k[T0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+T0,J.TEXTURE_2D,r,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&U){let k=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function M8(z){return Math.min(W.maxSamples,z.samples)}function v0(z){let k=Z.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function K8(z){let k=Y.render.frame;if(N.get(z)!==k)N.set(z,k),z.update()}function B0(z,k){let{colorSpace:v,format:n,type:a}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return k;if(v!==r9&&v!==l6)if(m0.getTransfer(v)===$8){if(n!==Z6||a!==t8)C0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else A0("WebGLTextures: Unsupported texture color space:",v);return k}function Z8(z){if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement)X.width=z.naturalWidth||z.width,X.height=z.naturalHeight||z.height;else if(typeof VideoFrame<"u"&&z instanceof VideoFrame)X.width=z.displayWidth,X.height=z.displayHeight;else X.width=z.width,X.height=z.height;return X}this.allocateTextureUnit=m,this.resetTextureUnits=j,this.setTexture2D=u,this.setTexture2DArray=p,this.setTexture3D=h,this.setTextureCube=e,this.rebindTextures=u0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=J8,this.updateMultisampleRenderTarget=_,this.setupDepthRenderbuffer=l0,this.setupFrameBufferTexture=G0,this.useMultisampledRTT=v0,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function Y1(J,Q){function $(Z,W=l6){let K,Y=m0.getTransfer(W);if(Z===t8)return J.UNSIGNED_BYTE;if(Z===GQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===NQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===YW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===HW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===WW)return J.BYTE;if(Z===KW)return J.SHORT;if(Z===a9)return J.UNSIGNED_SHORT;if(Z===XQ)return J.INT;if(Z===A6)return J.UNSIGNED_INT;if(Z===E6)return J.FLOAT;if(Z===D6)return J.HALF_FLOAT;if(Z===UW)return J.ALPHA;if(Z===XW)return J.RGB;if(Z===Z6)return J.RGBA;if(Z===m6)return J.DEPTH_COMPONENT;if(Z===d6)return J.DEPTH_STENCIL;if(Z===GW)return J.RED;if(Z===qQ)return J.RED_INTEGER;if(Z===_9)return J.RG;if(Z===FQ)return J.RG_INTEGER;if(Z===EQ)return J.RGBA_INTEGER;if(Z===n7||Z===s7||Z===i7||Z===o7)if(Y===$8)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===n7)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===s7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===i7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===o7)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===n7)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===s7)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===i7)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===o7)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===DQ||Z===RQ||Z===OQ||Z===kQ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===DQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===RQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===OQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===kQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===MQ||Z===VQ||Z===BQ||Z===LQ||Z===zQ||Z===IQ||Z===CQ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===MQ||Z===VQ)return Y===$8?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===BQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===LQ)return K.COMPRESSED_R11_EAC;if(Z===zQ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===IQ)return K.COMPRESSED_RG11_EAC;if(Z===CQ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===wQ||Z===PQ||Z===AQ||Z===_Q||Z===TQ||Z===SQ||Z===jQ||Z===fQ||Z===yQ||Z===bQ||Z===vQ||Z===hQ||Z===xQ||Z===gQ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===wQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===PQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===AQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===_Q)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===TQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===SQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===jQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===fQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===yQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===bQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===vQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===hQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===xQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===gQ)return Y===$8?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===pQ||Z===mQ||Z===dQ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===pQ)return Y===$8?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===mQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===dQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===lQ||Z===uQ||Z===cQ||Z===nQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===lQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===uQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===cQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===nQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===A9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new KJ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new l8({vertexShader:H1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new S8(new o6(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UK extends R6{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,Y="local-floor",H=1,U=null,X=null,N=null,F=null,G=null,E=null,R=typeof XRWebGLBinding<"u",V=new HK,q={},D=Q.getContextAttributes(),B=null,L=null,I=[],f=[],C=new _0,P=null,O=new T8;O.viewport=new U8;let A=new T8;A.viewport=new U8;let l=[O,A],w=new M$,j=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let Z0=I[s];if(Z0===void 0)Z0=new J7,I[s]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(s){let Z0=I[s];if(Z0===void 0)Z0=new J7,I[s]=Z0;return Z0.getGripSpace()},this.getHand=function(s){let Z0=I[s];if(Z0===void 0)Z0=new J7,I[s]=Z0;return Z0.getHandSpace()};function b(s){let Z0=f.indexOf(s.inputSource);if(Z0===-1)return;let F0=I[Z0];if(F0!==void 0)F0.update(s.inputSource,s.frame,U||K),F0.dispatchEvent({type:s.type,data:s.inputSource})}function u(){Z.removeEventListener("select",b),Z.removeEventListener("selectstart",b),Z.removeEventListener("selectend",b),Z.removeEventListener("squeeze",b),Z.removeEventListener("squeezestart",b),Z.removeEventListener("squeezeend",b),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",p);for(let s=0;s<I.length;s++){let Z0=f[s];if(Z0===null)continue;f[s]=null,I[s].disconnect(Z0)}j=null,m=null,V.reset();for(let s in q)delete q[s];J.setRenderTarget(B),G=null,F=null,N=null,Z=null,L=null,i0.stop(),$.isPresenting=!1,J.setPixelRatio(P),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,$.isPresenting===!0)C0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(Y=s,$.isPresenting===!0)C0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||K},this.setReferenceSpace=function(s){U=s},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(B=J.getRenderTarget(),Z.addEventListener("select",b),Z.addEventListener("selectstart",b),Z.addEventListener("selectend",b),Z.addEventListener("squeeze",b),Z.addEventListener("squeezestart",b),Z.addEventListener("squeezeend",b),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",p),D.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(C),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let F0={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(Z,Q,F0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),L=new d8(G.framebufferWidth,G.framebufferHeight,{format:Z6,type:t8,colorSpace:J.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}else{let F0=null,G0=null,P0=null;if(D.depth)P0=D.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,F0=D.stencil?d6:m6,G0=D.stencil?A9:A6;let d0={colorFormat:Q.RGBA8,depthFormat:P0,scaleFactor:W};N=this.getBinding(),F=N.createProjectionLayer(d0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),L=new d8(F.textureWidth,F.textureHeight,{format:Z6,type:t8,depthTexture:new i6(F.textureWidth,F.textureHeight,G0,void 0,void 0,void 0,void 0,void 0,void 0,F0),stencilBuffer:D.stencil,colorSpace:J.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(H),U=null,K=await Z.requestReferenceSpace(Y),i0.setContext(Z),i0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function p(s){for(let Z0=0;Z0<s.removed.length;Z0++){let F0=s.removed[Z0],G0=f.indexOf(F0);if(G0>=0)f[G0]=null,I[G0].disconnect(F0)}for(let Z0=0;Z0<s.added.length;Z0++){let F0=s.added[Z0],G0=f.indexOf(F0);if(G0===-1){for(let d0=0;d0<I.length;d0++)if(d0>=f.length){f.push(F0),G0=d0;break}else if(f[d0]===null){f[d0]=F0,G0=d0;break}if(G0===-1)break}let P0=I[G0];if(P0)P0.connect(F0)}}let h=new S,e=new S;function t(s,Z0,F0){h.setFromMatrixPosition(Z0.matrixWorld),e.setFromMatrixPosition(F0.matrixWorld);let G0=h.distanceTo(e),P0=Z0.projectionMatrix.elements,d0=F0.projectionMatrix.elements,l0=P0[14]/(P0[10]-1),u0=P0[14]/(P0[10]+1),n0=(P0[9]+1)/P0[5],J8=(P0[9]-1)/P0[5],g0=(P0[8]-1)/P0[0],q8=(d0[8]+1)/d0[0],_=l0*g0,M8=l0*q8,v0=G0/(-g0+q8),K8=v0*-g0;if(Z0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(K8),s.translateZ(v0),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),P0[10]===-1)s.projectionMatrix.copy(Z0.projectionMatrix),s.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let B0=l0+v0,Z8=u0+v0,z=_-K8,k=M8+(G0-K8),v=n0*u0/Z8*B0,n=J8*u0/Z8*B0;s.projectionMatrix.makePerspective(z,k,v,n,B0,Z8),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function X0(s,Z0){if(Z0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(Z0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:Z0,far:F0}=s;if(V.texture!==null){if(V.depthNear>0)Z0=V.depthNear;if(V.depthFar>0)F0=V.depthFar}if(w.near=A.near=O.near=Z0,w.far=A.far=O.far=F0,j!==w.near||m!==w.far)Z.updateRenderState({depthNear:w.near,depthFar:w.far}),j=w.near,m=w.far;w.layers.mask=s.layers.mask|6,O.layers.mask=w.layers.mask&-5,A.layers.mask=w.layers.mask&-3;let G0=s.parent,P0=w.cameras;X0(w,G0);for(let d0=0;d0<P0.length;d0++)X0(P0[d0],G0);if(P0.length===2)t(w,O,A);else w.projectionMatrix.copy(O.projectionMatrix);z0(s,w,G0)};function z0(s,Z0,F0){if(F0===null)s.matrix.copy(Z0.matrixWorld);else s.matrix.copy(F0.matrixWorld),s.matrix.invert(),s.matrix.multiply(Z0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(Z0.projectionMatrix),s.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=z9*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return w},this.getFoveation=function(){if(F===null&&G===null)return;return H},this.setFoveation=function(s){if(H=s,F!==null)F.fixedFoveation=s;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=s},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(w)},this.getCameraTexture=function(s){return q[s]};let U0=null;function Y8(s,Z0){if(X=Z0.getViewerPose(U||K),E=Z0,X!==null){let F0=X.views;if(G!==null)J.setRenderTargetFramebuffer(L,G.framebuffer),J.setRenderTarget(L);let G0=!1;if(F0.length!==w.cameras.length)w.cameras.length=0,G0=!0;for(let u0=0;u0<F0.length;u0++){let n0=F0[u0],J8=null;if(G!==null)J8=G.getViewport(n0);else{let q8=N.getViewSubImage(F,n0);if(J8=q8.viewport,u0===0)J.setRenderTargetTextures(L,q8.colorTexture,q8.depthStencilTexture),J.setRenderTarget(L)}let g0=l[u0];if(g0===void 0)g0=new T8,g0.layers.enable(u0),g0.viewport=new U8,l[u0]=g0;if(g0.matrix.fromArray(n0.transform.matrix),g0.matrix.decompose(g0.position,g0.quaternion,g0.scale),g0.projectionMatrix.fromArray(n0.projectionMatrix),g0.projectionMatrixInverse.copy(g0.projectionMatrix).invert(),g0.viewport.set(J8.x,J8.y,J8.width,J8.height),u0===0)w.matrix.copy(g0.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale);if(G0===!0)w.cameras.push(g0)}let P0=Z.enabledFeatures;if(P0&&P0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){N=$.getBinding();let u0=N.getDepthInformation(F0[0]);if(u0&&u0.isValid&&u0.texture)V.init(u0,Z.renderState)}if(P0&&P0.includes("camera-access")&&R){J.state.unbindTexture(),N=$.getBinding();for(let u0=0;u0<F0.length;u0++){let n0=F0[u0].camera;if(n0){let J8=q[n0];if(!J8)J8=new KJ,q[n0]=J8;let g0=N.getCameraImage(n0);J8.sourceTexture=g0}}}}for(let F0=0;F0<I.length;F0++){let G0=f[F0],P0=I[F0];if(G0!==null&&P0!==void 0)P0.update(G0,Z0,U||K)}if(U0)U0(s,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});E=null}let i0=new rW;i0.setAnimationLoop(Y8),this.setAnimationLoop=function(s){U0=s},this.dispose=function(){}}}var Q9=new a8,X1=new t0;function G1(J,Q){function $(q,D){if(q.matrixAutoUpdate===!0)q.updateMatrix();D.value.copy(q.matrix)}function Z(q,D){if(D.color.getRGB(q.fogColor.value,W$(J)),D.isFog)q.fogNear.value=D.near,q.fogFar.value=D.far;else if(D.isFogExp2)q.fogDensity.value=D.density}function W(q,D,B,L,I){if(D.isMeshBasicMaterial)K(q,D);else if(D.isMeshLambertMaterial){if(K(q,D),D.envMap)q.envMapIntensity.value=D.envMapIntensity}else if(D.isMeshToonMaterial)K(q,D),F(q,D);else if(D.isMeshPhongMaterial){if(K(q,D),N(q,D),D.envMap)q.envMapIntensity.value=D.envMapIntensity}else if(D.isMeshStandardMaterial){if(K(q,D),G(q,D),D.isMeshPhysicalMaterial)E(q,D,I)}else if(D.isMeshMatcapMaterial)K(q,D),R(q,D);else if(D.isMeshDepthMaterial)K(q,D);else if(D.isMeshDistanceMaterial)K(q,D),V(q,D);else if(D.isMeshNormalMaterial)K(q,D);else if(D.isLineBasicMaterial){if(Y(q,D),D.isLineDashedMaterial)H(q,D)}else if(D.isPointsMaterial)U(q,D,B,L);else if(D.isSpriteMaterial)X(q,D);else if(D.isShadowMaterial)q.color.value.copy(D.color),q.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function K(q,D){if(q.opacity.value=D.opacity,D.color)q.diffuse.value.copy(D.color);if(D.emissive)q.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)q.map.value=D.map,$(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.bumpMap){if(q.bumpMap.value=D.bumpMap,$(D.bumpMap,q.bumpMapTransform),q.bumpScale.value=D.bumpScale,D.side===j8)q.bumpScale.value*=-1}if(D.normalMap){if(q.normalMap.value=D.normalMap,$(D.normalMap,q.normalMapTransform),q.normalScale.value.copy(D.normalScale),D.side===j8)q.normalScale.value.negate()}if(D.displacementMap)q.displacementMap.value=D.displacementMap,$(D.displacementMap,q.displacementMapTransform),q.displacementScale.value=D.displacementScale,q.displacementBias.value=D.displacementBias;if(D.emissiveMap)q.emissiveMap.value=D.emissiveMap,$(D.emissiveMap,q.emissiveMapTransform);if(D.specularMap)q.specularMap.value=D.specularMap,$(D.specularMap,q.specularMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest;let B=Q.get(D),L=B.envMap,I=B.envMapRotation;if(L){if(q.envMap.value=L,Q9.copy(I),Q9.x*=-1,Q9.y*=-1,Q9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)Q9.y*=-1,Q9.z*=-1;q.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Q9)),q.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=D.reflectivity,q.ior.value=D.ior,q.refractionRatio.value=D.refractionRatio}if(D.lightMap)q.lightMap.value=D.lightMap,q.lightMapIntensity.value=D.lightMapIntensity,$(D.lightMap,q.lightMapTransform);if(D.aoMap)q.aoMap.value=D.aoMap,q.aoMapIntensity.value=D.aoMapIntensity,$(D.aoMap,q.aoMapTransform)}function Y(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,D.map)q.map.value=D.map,$(D.map,q.mapTransform)}function H(q,D){q.dashSize.value=D.dashSize,q.totalSize.value=D.dashSize+D.gapSize,q.scale.value=D.scale}function U(q,D,B,L){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.size.value=D.size*B,q.scale.value=L*0.5,D.map)q.map.value=D.map,$(D.map,q.uvTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function X(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.rotation.value=D.rotation,D.map)q.map.value=D.map,$(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function N(q,D){q.specular.value.copy(D.specular),q.shininess.value=Math.max(D.shininess,0.0001)}function F(q,D){if(D.gradientMap)q.gradientMap.value=D.gradientMap}function G(q,D){if(q.metalness.value=D.metalness,D.metalnessMap)q.metalnessMap.value=D.metalnessMap,$(D.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=D.roughness,D.roughnessMap)q.roughnessMap.value=D.roughnessMap,$(D.roughnessMap,q.roughnessMapTransform);if(D.envMap)q.envMapIntensity.value=D.envMapIntensity}function E(q,D,B){if(q.ior.value=D.ior,D.sheen>0){if(q.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),q.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)q.sheenColorMap.value=D.sheenColorMap,$(D.sheenColorMap,q.sheenColorMapTransform);if(D.sheenRoughnessMap)q.sheenRoughnessMap.value=D.sheenRoughnessMap,$(D.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(q.clearcoat.value=D.clearcoat,q.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)q.clearcoatMap.value=D.clearcoatMap,$(D.clearcoatMap,q.clearcoatMapTransform);if(D.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,$(D.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(q.clearcoatNormalMap.value=D.clearcoatNormalMap,$(D.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===j8)q.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)q.dispersion.value=D.dispersion;if(D.iridescence>0){if(q.iridescence.value=D.iridescence,q.iridescenceIOR.value=D.iridescenceIOR,q.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)q.iridescenceMap.value=D.iridescenceMap,$(D.iridescenceMap,q.iridescenceMapTransform);if(D.iridescenceThicknessMap)q.iridescenceThicknessMap.value=D.iridescenceThicknessMap,$(D.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(D.transmission>0){if(q.transmission.value=D.transmission,q.transmissionSamplerMap.value=B.texture,q.transmissionSamplerSize.value.set(B.width,B.height),D.transmissionMap)q.transmissionMap.value=D.transmissionMap,$(D.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=D.thickness,D.thicknessMap)q.thicknessMap.value=D.thicknessMap,$(D.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=D.attenuationDistance,q.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(q.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)q.anisotropyMap.value=D.anisotropyMap,$(D.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=D.specularIntensity,q.specularColor.value.copy(D.specularColor),D.specularColorMap)q.specularColorMap.value=D.specularColorMap,$(D.specularColorMap,q.specularColorMapTransform);if(D.specularIntensityMap)q.specularIntensityMap.value=D.specularIntensityMap,$(D.specularIntensityMap,q.specularIntensityMapTransform)}function R(q,D){if(D.matcap)q.matcap.value=D.matcap}function V(q,D){let B=Q.get(D).light;q.referencePosition.value.setFromMatrixPosition(B.matrixWorld),q.nearDistance.value=B.shadow.camera.near,q.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function N1(J,Q,$,Z){let W={},K={},Y=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(B,L){let I=L.program;Z.uniformBlockBinding(B,I)}function X(B,L){let I=W[B.id];if(I===void 0)R(B),I=N(B),W[B.id]=I,B.addEventListener("dispose",q);let f=L.program;Z.updateUBOMapping(B,f);let C=Q.render.frame;if(K[B.id]!==C)G(B),K[B.id]=C}function N(B){let L=F();B.__bindingPointIndex=L;let I=J.createBuffer(),f=B.__size,C=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,f,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,I),I}function F(){for(let B=0;B<H;B++)if(Y.indexOf(B)===-1)return Y.push(B),B;return A0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(B){let L=W[B.id],I=B.uniforms,f=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let C=0,P=I.length;C<P;C++){let O=Array.isArray(I[C])?I[C]:[I[C]];for(let A=0,l=O.length;A<l;A++){let w=O[A];if(E(w,C,A,f)===!0){let j=w.__offset,m=Array.isArray(w.value)?w.value:[w.value],b=0;for(let u=0;u<m.length;u++){let p=m[u],h=V(p);if(typeof p==="number"||typeof p==="boolean")w.__data[0]=p,J.bufferSubData(J.UNIFORM_BUFFER,j+b,w.__data);else if(p.isMatrix3)w.__data[0]=p.elements[0],w.__data[1]=p.elements[1],w.__data[2]=p.elements[2],w.__data[3]=0,w.__data[4]=p.elements[3],w.__data[5]=p.elements[4],w.__data[6]=p.elements[5],w.__data[7]=0,w.__data[8]=p.elements[6],w.__data[9]=p.elements[7],w.__data[10]=p.elements[8],w.__data[11]=0;else p.toArray(w.__data,b),b+=h.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,j,w.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(B,L,I,f){let C=B.value,P=L+"_"+I;if(f[P]===void 0){if(typeof C==="number"||typeof C==="boolean")f[P]=C;else f[P]=C.clone();return!0}else{let O=f[P];if(typeof C==="number"||typeof C==="boolean"){if(O!==C)return f[P]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function R(B){let L=B.uniforms,I=0,f=16;for(let P=0,O=L.length;P<O;P++){let A=Array.isArray(L[P])?L[P]:[L[P]];for(let l=0,w=A.length;l<w;l++){let j=A[l],m=Array.isArray(j.value)?j.value:[j.value];for(let b=0,u=m.length;b<u;b++){let p=m[b],h=V(p),e=I%f,t=e%h.boundary,X0=e+t;if(I+=t,X0!==0&&f-X0<h.storage)I+=f-X0;j.__data=new Float32Array(h.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=I,I+=h.storage}}}let C=I%f;if(C>0)I+=f-C;return B.__size=I,B.__cache={},this}function V(B){let L={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")L.boundary=4,L.storage=4;else if(B.isVector2)L.boundary=8,L.storage=8;else if(B.isVector3||B.isColor)L.boundary=16,L.storage=12;else if(B.isVector4)L.boundary=16,L.storage=16;else if(B.isMatrix3)L.boundary=48,L.storage=48;else if(B.isMatrix4)L.boundary=64,L.storage=64;else if(B.isTexture)C0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else C0("WebGLRenderer: Unsupported uniform value type.",B);return L}function q(B){let L=B.target;L.removeEventListener("dispose",q);let I=Y.indexOf(L.__bindingPointIndex);Y.splice(I,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete K[L.id]}function D(){for(let B in W)J.deleteBuffer(W[B]);Y=[],W={},K={}}return{bind:U,update:X,dispose:D}}var q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),W6=null;function F1(){if(W6===null)W6=new $$(q1,16,16,_9,D6),W6.name="DFG_LUT",W6.minFilter=f8,W6.magFilter=f8,W6.wrapS=u7,W6.wrapT=u7,W6.generateMipmaps=!1,W6.needsUpdate=!0;return W6}class f${constructor(J={}){let{canvas:Q=MW(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:Y=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:U=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:G=t8}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=K;let R=G,V=new Set([EQ,FQ,qQ]),q=new Set([t8,A6,a9,A9,GQ,NQ]),D=new Uint32Array(4),B=new Int32Array(4),L=null,I=null,f=[],C=[],P=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=r8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,A=!1;this._outputColorSpace=a7;let l=0,w=0,j=null,m=-1,b=null,u=new U8,p=new U8,h=null,e=new y0(0),t=0,X0=Q.width,z0=Q.height,U0=1,Y8=null,i0=null,s=new U8(0,0,X0,z0),Z0=new U8(0,0,X0,z0),F0=!1,G0=new $7,P0=!1,d0=!1,l0=new t0,u0=new S,n0=new U8,J8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},g0=!1;function q8(){return j===null?U0:1}let _=$;function M8(M,y){return Q.getContext(M,y)}try{let M={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:H,preserveDrawingBuffer:U,powerPreference:X,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${LZ}`);if(Q.addEventListener("webglcontextlost",o,!1),Q.addEventListener("webglcontextrestored",O0,!1),Q.addEventListener("webglcontextcreationerror",S0,!1),_===null){if(_=M8("webgl2",M),_===null)if(M8("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(M){throw A0("WebGLRenderer: "+M.message),M}let v0,K8,B0,Z8,z,k,v,n,a,c,E0,W0,I0,T0,r,J0,R0,w0,N0,h0,T,Q0,$0;function D0(){if(v0=new BU(_),v0.init(),T=new Y1(_,v0),K8=new FU(_,v0,J,T),B0=new W1(_,v0),K8.reversedDepthBuffer&&F)B0.buffers.depth.setReversed(!0);Z8=new IU(_),z=new uX,k=new K1(_,v0,B0,z,K8,T,Z8),v=new VU(O),n=new _Y(_),Q0=new NU(_,n),a=new LU(_,n,Z8,Q0),c=new wU(_,a,n,Q0,Z8),w0=new CU(_,K8,k),r=new EU(z),E0=new lX(O,v,v0,K8,Q0,r),W0=new G1(O,z),I0=new nX,T0=new tX(v0),R0=new GU(O,v,B0,c,E,H),J0=new Z1(O,c,K8),$0=new N1(_,Z8,K8,B0),N0=new qU(_,v0,Z8),h0=new zU(_,v0,Z8),Z8.programs=E0.programs,O.capabilities=K8,O.extensions=v0,O.properties=z,O.renderLists=I0,O.shadowMap=J0,O.state=B0,O.info=Z8}if(D0(),R!==t8)P=new AU(R,Q.width,Q.height,Z,W);let i=new UK(O,_);this.xr=i,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){let M=v0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=v0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return U0},this.setPixelRatio=function(M){if(M===void 0)return;U0=M,this.setSize(X0,z0,!1)},this.getSize=function(M){return M.set(X0,z0)},this.setSize=function(M,y,d=!0){if(i.isPresenting){C0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(X0=M,z0=y,Q.width=Math.floor(M*U0),Q.height=Math.floor(y*U0),d===!0)Q.style.width=M+"px",Q.style.height=y+"px";if(P!==null)P.setSize(Q.width,Q.height);this.setViewport(0,0,M,y)},this.getDrawingBufferSize=function(M){return M.set(X0*U0,z0*U0).floor()},this.setDrawingBufferSize=function(M,y,d){X0=M,z0=y,U0=d,Q.width=Math.floor(M*d),Q.height=Math.floor(y*d),this.setViewport(0,0,M,y)},this.setEffects=function(M){if(R===t8){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let y=0;y<M.length;y++)if(M[y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(u)},this.getViewport=function(M){return M.copy(s)},this.setViewport=function(M,y,d,g){if(M.isVector4)s.set(M.x,M.y,M.z,M.w);else s.set(M,y,d,g);B0.viewport(u.copy(s).multiplyScalar(U0).round())},this.getScissor=function(M){return M.copy(Z0)},this.setScissor=function(M,y,d,g){if(M.isVector4)Z0.set(M.x,M.y,M.z,M.w);else Z0.set(M,y,d,g);B0.scissor(p.copy(Z0).multiplyScalar(U0).round())},this.getScissorTest=function(){return F0},this.setScissorTest=function(M){B0.setScissorTest(F0=M)},this.setOpaqueSort=function(M){Y8=M},this.setTransparentSort=function(M){i0=M},this.getClearColor=function(M){return M.copy(R0.getClearColor())},this.setClearColor=function(){R0.setClearColor(...arguments)},this.getClearAlpha=function(){return R0.getClearAlpha()},this.setClearAlpha=function(){R0.setClearAlpha(...arguments)},this.clear=function(M=!0,y=!0,d=!0){let g=0;if(M){let x=!1;if(j!==null){let Y0=j.texture.format;x=V.has(Y0)}if(x){let Y0=j.texture.type,q0=q.has(Y0),H0=R0.getClearColor(),k0=R0.getClearAlpha(),V0=H0.r,j0=H0.g,x0=H0.b;if(q0)D[0]=V0,D[1]=j0,D[2]=x0,D[3]=k0,_.clearBufferuiv(_.COLOR,0,D);else B[0]=V0,B[1]=j0,B[2]=x0,B[3]=k0,_.clearBufferiv(_.COLOR,0,B)}else g|=_.COLOR_BUFFER_BIT}if(y)g|=_.DEPTH_BUFFER_BIT;if(d)g|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(g!==0)_.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",o,!1),Q.removeEventListener("webglcontextrestored",O0,!1),Q.removeEventListener("webglcontextcreationerror",S0,!1),R0.dispose(),I0.dispose(),T0.dispose(),z.dispose(),v.dispose(),c.dispose(),Q0.dispose(),$0.dispose(),E0.dispose(),i.dispose(),i.removeEventListener("sessionstart",m$),i.removeEventListener("sessionend",d$),f6.stop()};function o(M){M.preventDefault(),aQ("WebGLRenderer: Context Lost."),A=!0}function O0(){aQ("WebGLRenderer: Context Restored."),A=!1;let M=Z8.autoReset,y=J0.enabled,d=J0.autoUpdate,g=J0.needsUpdate,x=J0.type;D0(),Z8.autoReset=M,J0.enabled=y,J0.autoUpdate=d,J0.needsUpdate=g,J0.type=x}function S0(M){A0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function W8(M){let y=M.target;y.removeEventListener("dispose",W8),o0(y)}function o0(M){Y6(M),z.remove(M)}function Y6(M){let y=z.get(M).programs;if(y!==void 0){if(y.forEach(function(d){E0.releaseProgram(d)}),M.isShaderMaterial)E0.releaseShaderCache(M)}}this.renderBufferDirect=function(M,y,d,g,x,Y0){if(y===null)y=J8;let q0=x.isMesh&&x.matrixWorld.determinant()<0,H0=_K(M,y,d,g,x);B0.setMaterial(g,q0);let k0=d.index,V0=1;if(g.wireframe===!0){if(k0=a.getWireframeAttribute(d),k0===void 0)return;V0=2}let j0=d.drawRange,x0=d.attributes.position,L0=j0.start*V0,a0=(j0.start+j0.count)*V0;if(Y0!==null)L0=Math.max(L0,Y0.start*V0),a0=Math.min(a0,(Y0.start+Y0.count)*V0);if(k0!==null)L0=Math.max(L0,0),a0=Math.min(a0,k0.count);else if(x0!==void 0&&x0!==null)L0=Math.max(L0,0),a0=Math.min(a0,x0.count);let G8=a0-L0;if(G8<0||G8===1/0)return;Q0.setup(x,g,H0,d,k0);let X8,r0=N0;if(k0!==null)X8=n.get(k0),r0=h0,r0.setIndex(X8);if(x.isMesh)if(g.wireframe===!0)B0.setLineWidth(g.wireframeLinewidth*q8()),r0.setMode(_.LINES);else r0.setMode(_.TRIANGLES);else if(x.isLine){let B8=g.linewidth;if(B8===void 0)B8=1;if(B0.setLineWidth(B8*q8()),x.isLineSegments)r0.setMode(_.LINES);else if(x.isLineLoop)r0.setMode(_.LINE_LOOP);else r0.setMode(_.LINE_STRIP)}else if(x.isPoints)r0.setMode(_.POINTS);else if(x.isSprite)r0.setMode(_.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)u9("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),r0.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(!v0.get("WEBGL_multi_draw")){let{_multiDrawStarts:B8,_multiDrawCounts:M0,_multiDrawCount:b8}=x,c0=k0?n.get(k0).bytesPerElement:1,c8=z.get(g).currentProgram.getUniforms();for(let J6=0;J6<b8;J6++)c8.setValue(_,"_gl_DrawID",J6),r0.render(B8[J6]/c0,M0[J6])}else r0.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)r0.renderInstances(L0,G8,x.count);else if(d.isInstancedBufferGeometry){let B8=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,M0=Math.min(d.instanceCount,B8);r0.renderInstances(L0,G8,M0)}else r0.render(L0,G8)};function e8(M,y,d){if(M.transparent===!0&&M.side===x8&&M.forceSinglePass===!1)M.side=j8,M.needsUpdate=!0,q7(M,y,d),M.side=C9,M.needsUpdate=!0,q7(M,y,d),M.side=x8;else q7(M,y,d)}this.compile=function(M,y,d=null){if(d===null)d=M;if(I=T0.get(d),I.init(y),C.push(I),d.traverseVisible(function(x){if(x.isLight&&x.layers.test(y.layers)){if(I.pushLight(x),x.castShadow)I.pushShadow(x)}}),M!==d)M.traverseVisible(function(x){if(x.isLight&&x.layers.test(y.layers)){if(I.pushLight(x),x.castShadow)I.pushShadow(x)}});I.setupLights();let g=new Set;return M.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let Y0=x.material;if(Y0)if(Array.isArray(Y0))for(let q0=0;q0<Y0.length;q0++){let H0=Y0[q0];e8(H0,d,x),g.add(H0)}else e8(Y0,d,x),g.add(Y0)}),I=C.pop(),g},this.compileAsync=function(M,y,d=null){let g=this.compile(M,y,d);return new Promise((x)=>{function Y0(){if(g.forEach(function(q0){if(z.get(q0).currentProgram.isReady())g.delete(q0)}),g.size===0){x(M);return}setTimeout(Y0,10)}if(v0.get("KHR_parallel_shader_compile")!==null)Y0();else setTimeout(Y0,10)})};let IJ=null;function AK(M){if(IJ)IJ(M)}function m$(){f6.stop()}function d$(){f6.start()}let f6=new rW;if(f6.setAnimationLoop(AK),typeof self<"u")f6.setContext(self);this.setAnimationLoop=function(M){IJ=M,i.setAnimationLoop(M),M===null?f6.stop():f6.start()},i.addEventListener("sessionstart",m$),i.addEventListener("sessionend",d$),this.render=function(M,y){if(y!==void 0&&y.isCamera!==!0){A0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;let d=i.enabled===!0&&i.isPresenting===!0,g=P!==null&&(j===null||d)&&P.begin(O,j);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(i.enabled===!0&&i.isPresenting===!0&&(P===null||P.isCompositing()===!1)){if(i.cameraAutoUpdate===!0)i.updateCamera(y);y=i.getCamera()}if(M.isScene===!0)M.onBeforeRender(O,M,y,j);if(I=T0.get(M,C.length),I.init(y),C.push(I),l0.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),G0.setFromProjectionMatrix(l0,oQ,y.reversedDepth),d0=this.localClippingEnabled,P0=r.init(this.clippingPlanes,d0),L=I0.get(M,f.length),L.init(),f.push(L),i.enabled===!0&&i.isPresenting===!0){let q0=O.xr.getDepthSensingMesh();if(q0!==null)CJ(q0,y,-1/0,O.sortObjects)}if(CJ(M,y,0,O.sortObjects),L.finish(),O.sortObjects===!0)L.sort(Y8,i0);if(g0=i.enabled===!1||i.isPresenting===!1||i.hasDepthSensing()===!1,g0)R0.addToRenderList(L,M);if(this.info.render.frame++,P0===!0)r.beginShadows();let x=I.state.shadowsArray;if(J0.render(x,M,y),P0===!0)r.endShadows();if(this.info.autoReset===!0)this.info.reset();if((g&&P.hasRenderPass())===!1){let{opaque:q0,transmissive:H0}=L;if(I.setupLights(),y.isArrayCamera){let k0=y.cameras;if(H0.length>0)for(let V0=0,j0=k0.length;V0<j0;V0++){let x0=k0[V0];u$(q0,H0,M,x0)}if(g0)R0.render(M);for(let V0=0,j0=k0.length;V0<j0;V0++){let x0=k0[V0];l$(L,M,x0,x0.viewport)}}else{if(H0.length>0)u$(q0,H0,M,y);if(g0)R0.render(M);l$(L,M,y)}}if(j!==null&&w===0)k.updateMultisampleRenderTarget(j),k.updateRenderTargetMipmap(j);if(g)P.end(O);if(M.isScene===!0)M.onAfterRender(O,M,y);if(Q0.resetDefaultState(),m=-1,b=null,C.pop(),C.length>0){if(I=C[C.length-1],P0===!0)r.setGlobalState(O.clippingPlanes,I.state.camera)}else I=null;if(f.pop(),f.length>0)L=f[f.length-1];else L=null};function CJ(M,y,d,g){if(M.visible===!1)return;if(M.layers.test(y.layers)){if(M.isGroup)d=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(y)}else if(M.isLight){if(I.pushLight(M),M.castShadow)I.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||G0.intersectsSprite(M)){if(g)n0.setFromMatrixPosition(M.matrixWorld).applyMatrix4(l0);let q0=c.update(M),H0=M.material;if(H0.visible)L.push(M,q0,H0,d,n0.z,null)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||G0.intersectsObject(M)){let q0=c.update(M),H0=M.material;if(g){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();n0.copy(M.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();n0.copy(q0.boundingSphere.center)}n0.applyMatrix4(M.matrixWorld).applyMatrix4(l0)}if(Array.isArray(H0)){let k0=q0.groups;for(let V0=0,j0=k0.length;V0<j0;V0++){let x0=k0[V0],L0=H0[x0.materialIndex];if(L0&&L0.visible)L.push(M,q0,L0,d,n0.z,x0)}}else if(H0.visible)L.push(M,q0,H0,d,n0.z,null)}}}let Y0=M.children;for(let q0=0,H0=Y0.length;q0<H0;q0++)CJ(Y0[q0],y,d,g)}function l$(M,y,d,g){let{opaque:x,transmissive:Y0,transparent:q0}=M;if(I.setupLightsView(d),P0===!0)r.setGlobalState(O.clippingPlanes,d);if(g)B0.viewport(u.copy(g));if(x.length>0)N7(x,y,d);if(Y0.length>0)N7(Y0,y,d);if(q0.length>0)N7(q0,y,d);B0.buffers.depth.setTest(!0),B0.buffers.depth.setMask(!0),B0.buffers.color.setMask(!0),B0.setPolygonOffset(!1)}function u$(M,y,d,g){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[g.id]===void 0){let L0=v0.has("EXT_color_buffer_half_float")||v0.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[g.id]=new d8(1,1,{generateMipmaps:!0,type:L0?D6:t8,minFilter:p6,samples:Math.max(4,K8.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:m0.workingColorSpace})}let Y0=I.state.transmissionRenderTarget[g.id],q0=g.viewport||u;Y0.setSize(q0.z*O.transmissionResolutionScale,q0.w*O.transmissionResolutionScale);let H0=O.getRenderTarget(),k0=O.getActiveCubeFace(),V0=O.getActiveMipmapLevel();if(O.setRenderTarget(Y0),O.getClearColor(e),t=O.getClearAlpha(),t<1)O.setClearColor(16777215,0.5);if(O.clear(),g0)R0.render(d);let j0=O.toneMapping;O.toneMapping=r8;let x0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(I.setupLightsView(g),P0===!0)r.setGlobalState(O.clippingPlanes,g);if(N7(M,d,g),k.updateMultisampleRenderTarget(Y0),k.updateRenderTargetMipmap(Y0),v0.has("WEBGL_multisampled_render_to_texture")===!1){let L0=!1;for(let a0=0,G8=y.length;a0<G8;a0++){let X8=y[a0],{object:r0,geometry:B8,material:M0,group:b8}=X8;if(M0.side===x8&&r0.layers.test(g.layers)){let c0=M0.side;M0.side=j8,M0.needsUpdate=!0,c$(r0,d,g,B8,M0,b8),M0.side=c0,M0.needsUpdate=!0,L0=!0}}if(L0===!0)k.updateMultisampleRenderTarget(Y0),k.updateRenderTargetMipmap(Y0)}if(O.setRenderTarget(H0,k0,V0),O.setClearColor(e,t),x0!==void 0)g.viewport=x0;O.toneMapping=j0}function N7(M,y,d){let g=y.isScene===!0?y.overrideMaterial:null;for(let x=0,Y0=M.length;x<Y0;x++){let q0=M[x],{object:H0,geometry:k0,group:V0}=q0,j0=q0.material;if(j0.allowOverride===!0&&g!==null)j0=g;if(H0.layers.test(d.layers))c$(H0,y,d,k0,j0,V0)}}function c$(M,y,d,g,x,Y0){if(M.onBeforeRender(O,y,d,g,x,Y0),M.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),x.onBeforeRender(O,y,d,g,M,Y0),x.transparent===!0&&x.side===x8&&x.forceSinglePass===!1)x.side=j8,x.needsUpdate=!0,O.renderBufferDirect(d,y,g,x,M,Y0),x.side=C9,x.needsUpdate=!0,O.renderBufferDirect(d,y,g,x,M,Y0),x.side=x8;else O.renderBufferDirect(d,y,g,x,M,Y0);M.onAfterRender(O,y,d,g,x,Y0)}function q7(M,y,d){if(y.isScene!==!0)y=J8;let g=z.get(M),x=I.state.lights,Y0=I.state.shadowsArray,q0=x.state.version,H0=E0.getParameters(M,x.state,Y0,y,d),k0=E0.getProgramCacheKey(H0),V0=g.programs;g.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?y.environment:null,g.fog=y.fog;let j0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(g.envMap=v.get(M.envMap||g.environment,j0),g.envMapRotation=g.environment!==null&&M.envMap===null?y.environmentRotation:M.envMapRotation,V0===void 0)M.addEventListener("dispose",W8),V0=new Map,g.programs=V0;let x0=V0.get(k0);if(x0!==void 0){if(g.currentProgram===x0&&g.lightsStateVersion===q0)return s$(M,H0),x0}else H0.uniforms=E0.getUniforms(M),M.onBeforeCompile(H0,O),x0=E0.acquireProgram(H0,k0),V0.set(k0,x0),g.uniforms=H0.uniforms;let L0=g.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)L0.clippingPlanes=r.uniform;if(s$(M,H0),g.needsLights=SK(M),g.lightsStateVersion=q0,g.needsLights)L0.ambientLightColor.value=x.state.ambient,L0.lightProbe.value=x.state.probe,L0.directionalLights.value=x.state.directional,L0.directionalLightShadows.value=x.state.directionalShadow,L0.spotLights.value=x.state.spot,L0.spotLightShadows.value=x.state.spotShadow,L0.rectAreaLights.value=x.state.rectArea,L0.ltc_1.value=x.state.rectAreaLTC1,L0.ltc_2.value=x.state.rectAreaLTC2,L0.pointLights.value=x.state.point,L0.pointLightShadows.value=x.state.pointShadow,L0.hemisphereLights.value=x.state.hemi,L0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,L0.spotLightMatrix.value=x.state.spotLightMatrix,L0.spotLightMap.value=x.state.spotLightMap,L0.pointShadowMatrix.value=x.state.pointShadowMatrix;return g.currentProgram=x0,g.uniformsList=null,x0}function n$(M){if(M.uniformsList===null){let y=M.currentProgram.getUniforms();M.uniformsList=G7.seqWithValue(y.seq,M.uniforms)}return M.uniformsList}function s$(M,y){let d=z.get(M);d.outputColorSpace=y.outputColorSpace,d.batching=y.batching,d.batchingColor=y.batchingColor,d.instancing=y.instancing,d.instancingColor=y.instancingColor,d.instancingMorph=y.instancingMorph,d.skinning=y.skinning,d.morphTargets=y.morphTargets,d.morphNormals=y.morphNormals,d.morphColors=y.morphColors,d.morphTargetsCount=y.morphTargetsCount,d.numClippingPlanes=y.numClippingPlanes,d.numIntersection=y.numClipIntersection,d.vertexAlphas=y.vertexAlphas,d.vertexTangents=y.vertexTangents,d.toneMapping=y.toneMapping}function _K(M,y,d,g,x){if(y.isScene!==!0)y=J8;k.resetTextureUnits();let Y0=y.fog,q0=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?y.environment:null,H0=j===null?O.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:r9,k0=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V0=v.get(g.envMap||q0,k0),j0=g.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,x0=!!d.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),L0=!!d.morphAttributes.position,a0=!!d.morphAttributes.normal,G8=!!d.morphAttributes.color,X8=r8;if(g.toneMapped){if(j===null||j.isXRRenderTarget===!0)X8=O.toneMapping}let r0=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,B8=r0!==void 0?r0.length:0,M0=z.get(g),b8=I.state.lights;if(P0===!0){if(d0===!0||M!==b){let O8=M===b&&g.id===m;r.setState(g,M,O8)}}let c0=!1;if(g.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==b8.state.version)c0=!0;else if(M0.outputColorSpace!==H0)c0=!0;else if(x.isBatchedMesh&&M0.batching===!1)c0=!0;else if(!x.isBatchedMesh&&M0.batching===!0)c0=!0;else if(x.isBatchedMesh&&M0.batchingColor===!0&&x.colorTexture===null)c0=!0;else if(x.isBatchedMesh&&M0.batchingColor===!1&&x.colorTexture!==null)c0=!0;else if(x.isInstancedMesh&&M0.instancing===!1)c0=!0;else if(!x.isInstancedMesh&&M0.instancing===!0)c0=!0;else if(x.isSkinnedMesh&&M0.skinning===!1)c0=!0;else if(!x.isSkinnedMesh&&M0.skinning===!0)c0=!0;else if(x.isInstancedMesh&&M0.instancingColor===!0&&x.instanceColor===null)c0=!0;else if(x.isInstancedMesh&&M0.instancingColor===!1&&x.instanceColor!==null)c0=!0;else if(x.isInstancedMesh&&M0.instancingMorph===!0&&x.morphTexture===null)c0=!0;else if(x.isInstancedMesh&&M0.instancingMorph===!1&&x.morphTexture!==null)c0=!0;else if(M0.envMap!==V0)c0=!0;else if(g.fog===!0&&M0.fog!==Y0)c0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==r.numPlanes||M0.numIntersection!==r.numIntersection))c0=!0;else if(M0.vertexAlphas!==j0)c0=!0;else if(M0.vertexTangents!==x0)c0=!0;else if(M0.morphTargets!==L0)c0=!0;else if(M0.morphNormals!==a0)c0=!0;else if(M0.morphColors!==G8)c0=!0;else if(M0.toneMapping!==X8)c0=!0;else if(M0.morphTargetsCount!==B8)c0=!0}else c0=!0,M0.__version=g.version;let c8=M0.currentProgram;if(c0===!0)c8=q7(g,y,x);let J6=!1,y6=!1,K9=!1,Q8=c8.getUniforms(),V8=M0.uniforms;if(B0.useProgram(c8.program))J6=!0,y6=!0,K9=!0;if(g.id!==m)m=g.id,y6=!0;if(J6||b!==M){if(B0.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();Q8.setValue(_,"projectionMatrix",M.projectionMatrix),Q8.setValue(_,"viewMatrix",M.matrixWorldInverse);let k6=Q8.map.cameraPosition;if(k6!==void 0)k6.setValue(_,u0.setFromMatrixPosition(M.matrixWorld));if(K8.logarithmicDepthBuffer)Q8.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)Q8.setValue(_,"isOrthographic",M.isOrthographicCamera===!0);if(b!==M)b=M,y6=!0,K9=!0}if(M0.needsLights){if(b8.state.directionalShadowMap.length>0)Q8.setValue(_,"directionalShadowMap",b8.state.directionalShadowMap,k);if(b8.state.spotShadowMap.length>0)Q8.setValue(_,"spotShadowMap",b8.state.spotShadowMap,k);if(b8.state.pointShadowMap.length>0)Q8.setValue(_,"pointShadowMap",b8.state.pointShadowMap,k)}if(x.isSkinnedMesh){Q8.setOptional(_,x,"bindMatrix"),Q8.setOptional(_,x,"bindMatrixInverse");let O8=x.skeleton;if(O8){if(O8.boneTexture===null)O8.computeBoneTexture();Q8.setValue(_,"boneTexture",O8.boneTexture,k)}}if(x.isBatchedMesh){if(Q8.setOptional(_,x,"batchingTexture"),Q8.setValue(_,"batchingTexture",x._matricesTexture,k),Q8.setOptional(_,x,"batchingIdTexture"),Q8.setValue(_,"batchingIdTexture",x._indirectTexture,k),Q8.setOptional(_,x,"batchingColorTexture"),x._colorsTexture!==null)Q8.setValue(_,"batchingColorTexture",x._colorsTexture,k)}let O6=d.morphAttributes;if(O6.position!==void 0||O6.normal!==void 0||O6.color!==void 0)w0.update(x,d,c8);if(y6||M0.receiveShadow!==x.receiveShadow)M0.receiveShadow=x.receiveShadow,Q8.setValue(_,"receiveShadow",x.receiveShadow);if((g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial)&&g.envMap===null&&y.environment!==null)V8.envMapIntensity.value=y.environmentIntensity;if(V8.dfgLUT!==void 0)V8.dfgLUT.value=F1();if(y6){if(Q8.setValue(_,"toneMappingExposure",O.toneMappingExposure),M0.needsLights)TK(V8,K9);if(Y0&&g.fog===!0)W0.refreshFogUniforms(V8,Y0);W0.refreshMaterialUniforms(V8,g,U0,z0,I.state.transmissionRenderTarget[M.id]),G7.upload(_,n$(M0),V8,k)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)G7.upload(_,n$(M0),V8,k),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)Q8.setValue(_,"center",x.center);if(Q8.setValue(_,"modelViewMatrix",x.modelViewMatrix),Q8.setValue(_,"normalMatrix",x.normalMatrix),Q8.setValue(_,"modelMatrix",x.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let O8=g.uniformsGroups;for(let k6=0,Y9=O8.length;k6<Y9;k6++){let i$=O8[k6];$0.update(i$,c8),$0.bind(i$,c8)}}return c8}function TK(M,y){M.ambientLightColor.needsUpdate=y,M.lightProbe.needsUpdate=y,M.directionalLights.needsUpdate=y,M.directionalLightShadows.needsUpdate=y,M.pointLights.needsUpdate=y,M.pointLightShadows.needsUpdate=y,M.spotLights.needsUpdate=y,M.spotLightShadows.needsUpdate=y,M.rectAreaLights.needsUpdate=y,M.hemisphereLights.needsUpdate=y}function SK(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,y,d){let g=z.get(M);if(g.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;z.get(M.texture).__webglTexture=y,z.get(M.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:d,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,y){let d=z.get(M);d.__webglFramebuffer=y,d.__useDefaultFramebuffer=y===void 0};let jK=_.createFramebuffer();this.setRenderTarget=function(M,y=0,d=0){j=M,l=y,w=d;let g=null,x=!1,Y0=!1;if(M){let H0=z.get(M);if(H0.__useDefaultFramebuffer!==void 0){B0.bindFramebuffer(_.FRAMEBUFFER,H0.__webglFramebuffer),u.copy(M.viewport),p.copy(M.scissor),h=M.scissorTest,B0.viewport(u),B0.scissor(p),B0.setScissorTest(h),m=-1;return}else if(H0.__webglFramebuffer===void 0)k.setupRenderTarget(M);else if(H0.__hasExternalTextures)k.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let j0=M.depthTexture;if(H0.__boundDepthTexture!==j0){if(j0!==null&&z.has(j0)&&(M.width!==j0.image.width||M.height!==j0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(M)}}let k0=M.texture;if(k0.isData3DTexture||k0.isDataArrayTexture||k0.isCompressedArrayTexture)Y0=!0;let V0=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(V0[y]))g=V0[y][d];else g=V0[y];x=!0}else if(M.samples>0&&k.useMultisampledRTT(M)===!1)g=z.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(V0))g=V0[d];else g=V0;u.copy(M.viewport),p.copy(M.scissor),h=M.scissorTest}else u.copy(s).multiplyScalar(U0).floor(),p.copy(Z0).multiplyScalar(U0).floor(),h=F0;if(d!==0)g=jK;if(B0.bindFramebuffer(_.FRAMEBUFFER,g))B0.drawBuffers(M,g);if(B0.viewport(u),B0.scissor(p),B0.setScissorTest(h),x){let H0=z.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+y,H0.__webglTexture,d)}else if(Y0){let H0=y;for(let k0=0;k0<M.textures.length;k0++){let V0=z.get(M.textures[k0]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+k0,V0.__webglTexture,d,H0)}}else if(M!==null&&d!==0){let H0=z.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,H0.__webglTexture,d)}m=-1},this.readRenderTargetPixels=function(M,y,d,g,x,Y0,q0,H0=0){if(!(M&&M.isWebGLRenderTarget)){A0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k0=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&q0!==void 0)k0=k0[q0];if(k0){B0.bindFramebuffer(_.FRAMEBUFFER,k0);try{let V0=M.textures[H0],j0=V0.format,x0=V0.type;if(M.textures.length>1)_.readBuffer(_.COLOR_ATTACHMENT0+H0);if(!K8.textureFormatReadable(j0)){A0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K8.textureTypeReadable(x0)){A0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=M.width-g&&(d>=0&&d<=M.height-x))_.readPixels(y,d,g,x,T.convert(j0),T.convert(x0),Y0)}finally{let V0=j!==null?z.get(j).__webglFramebuffer:null;B0.bindFramebuffer(_.FRAMEBUFFER,V0)}}},this.readRenderTargetPixelsAsync=async function(M,y,d,g,x,Y0,q0,H0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k0=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&q0!==void 0)k0=k0[q0];if(k0)if(y>=0&&y<=M.width-g&&(d>=0&&d<=M.height-x)){B0.bindFramebuffer(_.FRAMEBUFFER,k0);let V0=M.textures[H0],j0=V0.format,x0=V0.type;if(M.textures.length>1)_.readBuffer(_.COLOR_ATTACHMENT0+H0);if(!K8.textureFormatReadable(j0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K8.textureTypeReadable(x0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let L0=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,L0),_.bufferData(_.PIXEL_PACK_BUFFER,Y0.byteLength,_.STREAM_READ),_.readPixels(y,d,g,x,T.convert(j0),T.convert(x0),0);let a0=j!==null?z.get(j).__webglFramebuffer:null;B0.bindFramebuffer(_.FRAMEBUFFER,a0);let G8=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await BW(_,G8,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,L0),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Y0),_.deleteBuffer(L0),_.deleteSync(G8),Y0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,y=null,d=0){let g=Math.pow(2,-d),x=Math.floor(M.image.width*g),Y0=Math.floor(M.image.height*g),q0=y!==null?y.x:0,H0=y!==null?y.y:0;k.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,d,0,0,q0,H0,x,Y0),B0.unbindTexture()};let fK=_.createFramebuffer(),yK=_.createFramebuffer();if(this.copyTextureToTexture=function(M,y,d=null,g=null,x=0,Y0=0){let q0,H0,k0,V0,j0,x0,L0,a0,G8,X8=M.isCompressedTexture?M.mipmaps[Y0]:M.image;if(d!==null)q0=d.max.x-d.min.x,H0=d.max.y-d.min.y,k0=d.isBox3?d.max.z-d.min.z:1,V0=d.min.x,j0=d.min.y,x0=d.isBox3?d.min.z:0;else{let V8=Math.pow(2,-x);if(q0=Math.floor(X8.width*V8),H0=Math.floor(X8.height*V8),M.isDataArrayTexture)k0=X8.depth;else if(M.isData3DTexture)k0=Math.floor(X8.depth*V8);else k0=1;V0=0,j0=0,x0=0}if(g!==null)L0=g.x,a0=g.y,G8=g.z;else L0=0,a0=0,G8=0;let r0=T.convert(y.format),B8=T.convert(y.type),M0;if(y.isData3DTexture)k.setTexture3D(y,0),M0=_.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)k.setTexture2DArray(y,0),M0=_.TEXTURE_2D_ARRAY;else k.setTexture2D(y,0),M0=_.TEXTURE_2D;_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,y.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,y.unpackAlignment);let b8=_.getParameter(_.UNPACK_ROW_LENGTH),c0=_.getParameter(_.UNPACK_IMAGE_HEIGHT),c8=_.getParameter(_.UNPACK_SKIP_PIXELS),J6=_.getParameter(_.UNPACK_SKIP_ROWS),y6=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,X8.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,X8.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,V0),_.pixelStorei(_.UNPACK_SKIP_ROWS,j0),_.pixelStorei(_.UNPACK_SKIP_IMAGES,x0);let K9=M.isDataArrayTexture||M.isData3DTexture,Q8=y.isDataArrayTexture||y.isData3DTexture;if(M.isDepthTexture){let V8=z.get(M),O6=z.get(y),O8=z.get(V8.__renderTarget),k6=z.get(O6.__renderTarget);B0.bindFramebuffer(_.READ_FRAMEBUFFER,O8.__webglFramebuffer),B0.bindFramebuffer(_.DRAW_FRAMEBUFFER,k6.__webglFramebuffer);for(let Y9=0;Y9<k0;Y9++){if(K9)_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,z.get(M).__webglTexture,x,x0+Y9),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,z.get(y).__webglTexture,Y0,G8+Y9);_.blitFramebuffer(V0,j0,q0,H0,L0,a0,q0,H0,_.DEPTH_BUFFER_BIT,_.NEAREST)}B0.bindFramebuffer(_.READ_FRAMEBUFFER,null),B0.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(x!==0||M.isRenderTargetTexture||z.has(M)){let V8=z.get(M),O6=z.get(y);B0.bindFramebuffer(_.READ_FRAMEBUFFER,fK),B0.bindFramebuffer(_.DRAW_FRAMEBUFFER,yK);for(let O8=0;O8<k0;O8++){if(K9)_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,V8.__webglTexture,x,x0+O8);else _.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,V8.__webglTexture,x);if(Q8)_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,O6.__webglTexture,Y0,G8+O8);else _.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,O6.__webglTexture,Y0);if(x!==0)_.blitFramebuffer(V0,j0,q0,H0,L0,a0,q0,H0,_.COLOR_BUFFER_BIT,_.NEAREST);else if(Q8)_.copyTexSubImage3D(M0,Y0,L0,a0,G8+O8,V0,j0,q0,H0);else _.copyTexSubImage2D(M0,Y0,L0,a0,V0,j0,q0,H0)}B0.bindFramebuffer(_.READ_FRAMEBUFFER,null),B0.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(Q8)if(M.isDataTexture||M.isData3DTexture)_.texSubImage3D(M0,Y0,L0,a0,G8,q0,H0,k0,r0,B8,X8.data);else if(y.isCompressedArrayTexture)_.compressedTexSubImage3D(M0,Y0,L0,a0,G8,q0,H0,k0,r0,X8.data);else _.texSubImage3D(M0,Y0,L0,a0,G8,q0,H0,k0,r0,B8,X8);else if(M.isDataTexture)_.texSubImage2D(_.TEXTURE_2D,Y0,L0,a0,q0,H0,r0,B8,X8.data);else if(M.isCompressedTexture)_.compressedTexSubImage2D(_.TEXTURE_2D,Y0,L0,a0,X8.width,X8.height,r0,X8.data);else _.texSubImage2D(_.TEXTURE_2D,Y0,L0,a0,q0,H0,r0,B8,X8);if(_.pixelStorei(_.UNPACK_ROW_LENGTH,b8),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,c0),_.pixelStorei(_.UNPACK_SKIP_PIXELS,c8),_.pixelStorei(_.UNPACK_SKIP_ROWS,J6),_.pixelStorei(_.UNPACK_SKIP_IMAGES,y6),Y0===0&&y.generateMipmaps)_.generateMipmap(M0);B0.unbindTexture()},this.initRenderTarget=function(M){if(z.get(M).__webglFramebuffer===void 0)k.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)k.setTextureCube(M,0);else if(M.isData3DTexture)k.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)k.setTexture2DArray(M,0);else k.setTexture2D(M,0);B0.unbindTexture()},this.resetState=function(){l=0,w=0,j=null,B0.reset(),Q0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=m0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=m0._getUnpackColorSpace()}}var XK={type:"change"},b$={type:"start"},NK={type:"end"},MJ=new c6,GK=new o8,D1=Math.cos(70*tQ.DEG2RAD),R8=new S,y8=2*Math.PI,e0={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},y$=0.000001;class v$ extends EJ{constructor(J,Q=null){super(J,Q);if(this.state=e0.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:C6.ROTATE,MIDDLE:C6.DOLLY,RIGHT:C6.PAN},this.touches={ONE:w6.ROTATE,TWO:w6.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new m8,this._lastTargetPosition=new S,this._quat=new m8().setFromUnitVectors(J.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y7,this._sphericalDelta=new Y7,this._scale=1,this._panOffset=new S,this._rotateStart=new _0,this._rotateEnd=new _0,this._rotateDelta=new _0,this._panStart=new _0,this._panEnd=new _0,this._panDelta=new _0,this._dollyStart=new _0,this._dollyEnd=new _0,this._dollyDelta=new _0,this._dollyDirection=new S,this._mouse=new _0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O1.bind(this),this._onPointerDown=R1.bind(this),this._onPointerUp=k1.bind(this),this._onContextMenu=C1.bind(this),this._onMouseWheel=B1.bind(this),this._onKeyDown=L1.bind(this),this._onTouchStart=z1.bind(this),this._onTouchMove=I1.bind(this),this._onMouseDown=M1.bind(this),this._onMouseMove=V1.bind(this),this._interceptControlDown=w1.bind(this),this._interceptControlUp=P1.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(XK),this.update(),this.state=e0.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(R8.copy(Q).sub(this.target),R8.applyQuaternion(this._quat),this._spherical.setFromVector3(R8),this.autoRotate&&this.state===e0.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=y8;else if($>Math.PI)$-=y8;if(Z<-Math.PI)Z+=y8;else if(Z>Math.PI)Z-=y8;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=K!=this._spherical.radius}if(R8.setFromSpherical(this._spherical),R8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(R8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let Y=R8.length();K=this._clampDistance(Y*this._scale);let H=Y-K;this.object.position.addScaledVector(this._dollyDirection,H),this.object.updateMatrixWorld(),W=!!H}else if(this.object.isOrthographicCamera){let Y=new S(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let H=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=H!==this.object.zoom;let U=new S(this._mouse.x,this._mouse.y,0);U.unproject(this.object),this.object.position.sub(U).add(Y),this.object.updateMatrixWorld(),K=R8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(MJ.origin.copy(this.object.position),MJ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(MJ.direction))<D1)this.object.lookAt(this.target);else GK.setFromNormalAndCoplanarPoint(this.object.up,this.target),MJ.intersectPlane(GK,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>y$||8*(1-this._lastQuaternion.dot(this.object.quaternion))>y$||this._lastTargetPosition.distanceToSquared(this.target)>y$)return this.dispatchEvent(XK),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return y8/60*this.autoRotateSpeed*J;else return y8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){R8.setFromMatrixColumn(Q,0),R8.multiplyScalar(-J),this._panOffset.add(R8)}_panUp(J,Q){if(this.screenSpacePanning===!0)R8.setFromMatrixColumn(Q,1);else R8.setFromMatrixColumn(Q,0),R8.crossVectors(this.object.up,R8);R8.multiplyScalar(J),this._panOffset.add(R8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;R8.copy(Z).sub(this.target);let W=R8.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,W=Q-$.top,K=$.width,Y=$.height;this._mouse.x=Z/K*2-1,this._mouse.y=-(W/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new _0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function R1(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function O1(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function k1(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(NK),this.state=e0.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function M1(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case C6.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=e0.DOLLY;break;case C6.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=e0.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=e0.ROTATE}break;case C6.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=e0.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=e0.PAN}break;default:this.state=e0.NONE}if(this.state!==e0.NONE)this.dispatchEvent(b$)}function V1(J){switch(this.state){case e0.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case e0.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case e0.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function B1(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==e0.NONE)return;J.preventDefault(),this.dispatchEvent(b$),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(NK)}function L1(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function z1(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case w6.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=e0.TOUCH_ROTATE;break;case w6.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=e0.TOUCH_PAN;break;default:this.state=e0.NONE}break;case 2:switch(this.touches.TWO){case w6.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=e0.TOUCH_DOLLY_PAN;break;case w6.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=e0.TOUCH_DOLLY_ROTATE;break;default:this.state=e0.NONE}break;default:this.state=e0.NONE}if(this.state!==e0.NONE)this.dispatchEvent(b$)}function I1(J){switch(this._trackPointer(J),this.state){case e0.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case e0.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case e0.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case e0.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=e0.NONE}}function C1(J){if(this.enabled===!1)return;J.preventDefault()}function w1(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function P1(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class VJ extends N8{constructor(J=document.createElement("div")){super();this.isCSS2DObject=!0,this.element=J,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new _0(0.5,0.5),this.addEventListener("removed",function(){this.traverse(function(Q){if(Q.element&&Q.element instanceof Q.element.ownerDocument.defaultView.Element&&Q.element.parentNode!==null)Q.element.remove()})})}copy(J,Q){return super.copy(J,Q),this.element=J.element.cloneNode(!0),this.center=J.center,this}}var v9=new S,qK=new t0,FK=new t0,EK=new S,DK=new S;class h${constructor(J={}){let Q=this,$,Z,W,K,Y={objects:new WeakMap},H=J.element!==void 0?J.element:document.createElement("div");H.style.overflow="hidden",this.domElement=H,this.sortObjects=!0,this.getSize=function(){return{width:$,height:Z}},this.render=function(E,R){if(E.matrixWorldAutoUpdate===!0)E.updateMatrixWorld();if(R.parent===null&&R.matrixWorldAutoUpdate===!0)R.updateMatrixWorld();if(qK.copy(R.matrixWorldInverse),FK.multiplyMatrices(R.projectionMatrix,qK),X(E,E,R),this.sortObjects)G(E)},this.setSize=function(E,R){$=E,Z=R,W=$/2,K=Z/2,H.style.width=E+"px",H.style.height=R+"px"};function U(E){if(E.isCSS2DObject)E.element.style.display="none";for(let R=0,V=E.children.length;R<V;R++)U(E.children[R])}function X(E,R,V){if(E.visible===!1){U(E);return}if(E.isCSS2DObject){v9.setFromMatrixPosition(E.matrixWorld),v9.applyMatrix4(FK);let q=v9.z>=-1&&v9.z<=1&&E.layers.test(V.layers)===!0,D=E.element;if(D.style.display=q===!0?"":"none",q===!0){if(E.onBeforeRender(Q,R,V),D.style.transform="translate("+-100*E.center.x+"%,"+-100*E.center.y+"%)translate("+(v9.x*W+W)+"px,"+(-v9.y*K+K)+"px)",D.parentNode!==H)H.appendChild(D);E.onAfterRender(Q,R,V)}let B={distanceToCameraSquared:N(V,E)};Y.objects.set(E,B)}for(let q=0,D=E.children.length;q<D;q++)X(E.children[q],R,V)}function N(E,R){return EK.setFromMatrixPosition(E.matrixWorld),DK.setFromMatrixPosition(R.matrixWorld),EK.distanceToSquared(DK)}function F(E){let R=[];return E.traverseVisible(function(V){if(V.isCSS2DObject)R.push(V)}),R}function G(E){let R=F(E).sort(function(q,D){if(q.renderOrder!==D.renderOrder)return D.renderOrder-q.renderOrder;let B=Y.objects.get(q).distanceToCameraSquared,L=Y.objects.get(D).distanceToCameraSquared;return B-L}),V=R.length;for(let q=0,D=R.length;q<D;q++)R[q].element.style.zIndex=V-q}}}var RK=`Lens,Focal Length,Region,F/1.8,F/2.2,F/2.8,F/4,F/5.6,F/7.1,F/8,F/11
RF 24mm f/1.8 Macro STM IS,24mm,Center,4847.0,5239.0,5388.0,5441.0,5209.0,,4720,4427
RF 24mm f/1.8 Macro STM IS,24mm,Near Center,4060.0,4215.0,4288.0,4313.0,4272.0,,4125,3887
RF 24mm f/1.8 Macro STM IS,24mm,Border,2634.0,2862.0,3731.0,3871.0,3852.0,,3615,3251
RF 24mm f/1.8 Macro STM IS,24mm,Extreme,2212.0,2231.0,3060.0,3733.0,3715.0,,3612,3230
RF 50mm f/1.8 STM,50mm,Center,4530.0,4700.0,4904.0,5037.0,4969.0,,4653,4238
RF 50mm f/1.8 STM,50mm,Near Center,4080.0,4327.0,4470.0,4634.0,4686.0,,4494,4155
RF 50mm f/1.8 STM,50mm,Border,3958.0,4282.0,4438.0,4595.0,4652.0,,4492,4122
RF 50mm f/1.8 STM,50mm,Extreme,2114.0,2402.0,3253.0,4360.0,4739.0,,4630,4215
RF 100-400mm f/5.6-8 IS,100mm,Center,,,,,4758.0,,4563,4367
RF 100-400mm f/5.6-8 IS,100mm,Near Center,,,,,4439.0,,4284,4118
RF 100-400mm f/5.6-8 IS,100mm,Border,,,,,3642.0,,4028,3875
RF 100-400mm f/5.6-8 IS,100mm,Extreme,,,,,3107.0,,3906,3857
RF 100-400mm f/5.6-8 IS,200mm,Center,,,,,,4599.0,4617,4364
RF 100-400mm f/5.6-8 IS,200mm,Near Center,,,,,,4408.0,4395,4212
RF 100-400mm f/5.6-8 IS,200mm,Border,,,,,,4150.0,4135,3999
RF 100-400mm f/5.6-8 IS,200mm,Extreme,,,,,,3925.0,3869,3783
RF 100-400mm f/5.6-8 IS,300mm,Center,,,,,,,4515,4384
RF 100-400mm f/5.6-8 IS,300mm,Near Center,,,,,,,4393,4236
RF 100-400mm f/5.6-8 IS,300mm,Border,,,,,,,3583,3561
RF 100-400mm f/5.6-8 IS,300mm,Extreme,,,,,,,3101,3074
RF 100-400mm f/5.6-8 IS,400mm,Center,,,,,,,4370,4342
RF 100-400mm f/5.6-8 IS,400mm,Near Center,,,,,,,4173,4084
RF 100-400mm f/5.6-8 IS,400mm,Border,,,,,,,3195,3105
RF 100-400mm f/5.6-8 IS,400mm,Extreme,,,,,,,2798,2684`;var OK=["Center","Near Center","Border","Extreme"];function kK(J){let Q=J.trim().match(/^F\/([\d.]+)$/i);if(!Q?.[1])return null;return Number(Q[1])}function _1(J,Q,$){let Z=J.trim();if(Z==="")return NaN;let W=Number(Z);if(!Number.isFinite(W))throw Error(`Bad number in row ${Q}, ${$}: ${J}`);return W}function MK(J){let Q=J.split(/\r?\n/).map((N)=>N.trim()).filter(Boolean);if(Q.length<2)throw Error("CSV needs a header and at least one data row");let $=Q[0];if(!$)throw Error("Empty CSV");let Z=$.split(",").map((N)=>N.trim());if(Z[0]!=="Lens"||Z[1]!=="Focal Length"||Z[2]!=="Region")throw Error('Expected columns "Lens", "Focal Length", "Region", then F-stop columns');let K=Z.slice(3).map((N)=>{if(kK(N)==null)throw Error(`Not an F-stop column: ${N}`);return N}),Y=3,H=Y+K.length,U=new Map;for(let N=1;N<Q.length;N++){let F=Q[N];if(!F)continue;let G=F.split(",").map((L)=>L.trim());while(G.length<H)G.push("");let E=G[0]?.trim()??"",R=G[1]?.trim()??"",V=G[2]?.trim()??"";if(!E||!R||!V)throw Error(`Row ${N+1}: Lens, Focal Length, and Region must be non-empty`);let q=K.map((L,I)=>_1(G[Y+I]??"",N+1,L)),D=`${E}\x00${R}`,B=U.get(D);if(!B)B=new Map,U.set(D,B);B.set(V,q)}let X=[];for(let[N,F]of U){let G=N.indexOf("\x00"),E=G>=0?N.slice(0,G):N,R=G>=0?N.slice(G+1):"",V=[];for(let q of OK){let D=F.get(q);if(!D)throw Error(`Lens "${E}" (${R}) missing region "${q}"`);V.push(D)}X.push({lens:E,focalLength:R,regions:[...OK],apertures:K,z:V})}return X}function VK(J){return J.map((Q)=>{let $=kK(Q);if($==null)throw Error(`Bad aperture header: ${Q}`);return $})}var T1="Canon RF 24mm f/1.8 Macro STM IS",S1="Canon RF 50mm f/1.8 STM",j1=[[0,"rgb(13, 71, 161)"],[0.35,"rgb(0, 172, 193)"],[0.65,"rgb(0, 200, 83)"],[1,"rgb(178, 255, 89)"]],f1=[[0,"rgb(255, 235, 59)"],[0.4,"rgb(255, 152, 0)"],[0.75,"rgb(230, 74, 25)"],[1,"rgb(183, 28, 28)"]],zJ=1500,CK=5500,W9=6,A8=-7,Z9=7,x$={x:16007006,y:2278750,z:3900150},BK=790042,j6={exposure:1.22,ambient:0.58,key:1.2,fill:0.58,rim:0.4,fogDensity:0.022};function y1(J,Q,$,Z){let W=document.createElement("div");W.className="light-panel",W.innerHTML=`
    <h2 class="light-panel-title">Lighting</h2>
    <div class="light-row">
      <span class="light-label">Exposure</span>
      <input type="range" id="lc-exposure" min="0.55" max="2.2" step="0.02" />
      <span class="light-value" data-for="lc-exposure"></span>
    </div>
    <div class="light-row">
      <span class="light-label">Ambient</span>
      <input type="range" id="lc-ambient" min="0" max="1.4" step="0.02" />
      <span class="light-value" data-for="lc-ambient"></span>
    </div>
    <div class="light-row">
      <span class="light-label">Key</span>
      <input type="range" id="lc-key" min="0" max="2.2" step="0.02" />
      <span class="light-value" data-for="lc-key"></span>
    </div>
    <div class="light-row">
      <span class="light-label">Fill</span>
      <input type="range" id="lc-fill" min="0" max="1.4" step="0.02" />
      <span class="light-value" data-for="lc-fill"></span>
    </div>
    <div class="light-row">
      <span class="light-label">Rim</span>
      <input type="range" id="lc-rim" min="0" max="1.2" step="0.02" />
      <span class="light-value" data-for="lc-rim"></span>
    </div>
    <div class="light-row">
      <span class="light-label">Fog</span>
      <input type="range" id="lc-fog" min="0" max="0.09" step="0.001" />
      <span class="light-value" data-for="lc-fog"></span>
    </div>
    <button type="button" class="light-reset" id="lc-reset">Reset to defaults</button>
  `,J.appendChild(W);let K=()=>{$.renderer.toneMappingExposure=Q.exposure,$.ambient.intensity=Q.ambient,$.key.intensity=Q.key,$.fill.intensity=Q.fill,$.rim.intensity=Q.rim,$.fog.density=Q.fogDensity},Y=[["exposure","lc-exposure"],["ambient","lc-ambient"],["key","lc-key"],["fill","lc-fill"],["rim","lc-rim"],["fogDensity","lc-fog"]],H=(X,N)=>{if(X==="fogDensity")return N.toFixed(3);if(X==="exposure")return N.toFixed(2);return N.toFixed(2)},U=()=>{for(let[X,N]of Y){let F=W.querySelector(`#${N}`),G=W.querySelector(`[data-for="${N}"]`);F.value=String(Q[X]),G.textContent=H(X,Q[X])}};for(let[X,N]of Y){let F=W.querySelector(`#${N}`);F.addEventListener("input",()=>{Q[X]=parseFloat(F.value);let G=W.querySelector(`[data-for="${N}"]`);G.textContent=H(X,Q[X]),K()})}W.querySelector("#lc-reset")?.addEventListener("click",()=>{Object.assign(Q,Z),U(),K()}),U(),K()}function b1(J){let Q=J.lens.includes("24mm")?T1:J.lens.includes("50mm")?S1:J.lens;if(J.focalLength&&/\d+-\d+mm/i.test(J.lens))return`${Q} (${J.focalLength})`;return Q}function v1(J){if(J.lens.includes("24mm"))return j1;if(J.lens.includes("50mm"))return f1;return[[0,"#334155"],[1,"#e2e8f0"]]}function BJ(J){let Q=J.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(Q)return new y0(Number(Q[1])/255,Number(Q[2])/255,Number(Q[3])/255);return new y0(J)}function h1(J,Q){let $=Math.max(0,Math.min(1,Q));for(let W=0;W<J.length-1;W++){let K=J[W],Y=J[W+1];if(!K||!Y)continue;let[H,U]=K,[X,N]=Y;if($<=X||W===J.length-2){if($<H)return BJ(U);if($>X)continue;let F=X===H?0:($-H)/(X-H),G=BJ(U),E=BJ(N);return G.clone().lerp(E,F)}}let Z=J[J.length-1];if(!Z)return new y0(8947848);return BJ(Z[1])}function wK(J){let Q=(J-zJ)/(CK-zJ);return Math.max(0,Math.min(1,Q))*W9}function PK(J,Q){let $=J[0],Z=J[J.length-1];if($===void 0||Z===void 0)return A8;let W=Math.max(Z-$,0.000001);return(Q-$)/W*(Z9-A8)+A8}function x1(J,Q,$){let Z=v1(J),W=J.regions.length,K=J.apertures.length,Y=[],H=[],U=[],X=[],N=(B,L,I)=>{let f=Q[B];if(f===void 0)throw Error(`Missing aperture numeric at column ${B}`);let C=(I-zJ)/(CK-zJ),P=h1(Z,Math.max(0,Math.min(1,C)));Y.push(PK(Q,f),wK(I),L),H.push(P.r,P.g,P.b),U.push(B),X.push(L)};for(let B=0;B<W-1;B++)for(let L=0;L<K-1;L++){let I=J.z[B],f=J.z[B+1];if(!I||!f)continue;let C=I[L],P=I[L+1],O=f[L],A=f[L+1];if(![C,P,O,A].every((l)=>typeof l==="number"&&Number.isFinite(l)))continue;N(L,B,C),N(L+1,B,P),N(L,B+1,O),N(L+1,B,P),N(L+1,B+1,A),N(L,B+1,O)}let F=new w8;F.setAttribute("position",new H8(Y,3)),F.setAttribute("color",new H8(H,3)),F.setAttribute("colIdx",new H8(U,1)),F.setAttribute("rowIdx",new H8(X,1)),F.computeVertexNormals();let G=new UJ({vertexColors:!0,side:x8,metalness:0.12,roughness:0.45,transparent:!0,opacity:0.62,depthWrite:!1}),E=new S8(F,G);E.renderOrder=$,E.castShadow=!0,E.receiveShadow=!0;let R=new W7(F,22),V=new s6({color:16777215,transparent:!0,opacity:0.18,depthWrite:!1}),q=new Z7(R,V);q.renderOrder=$+0.1;let D=new q6;return D.add(E),D.add(q),{group:D,mesh:E,edges:q,title:b1(J),grid:J,renderOrder:$}}var LK=new S,zK=new S,IK=new S,LJ=new S;function g1(J,Q){let $=Q.face;if(!$)return null;let Z=J.mesh.geometry,W=Z.getAttribute("position"),K=Z.getAttribute("colIdx"),Y=Z.getAttribute("rowIdx");if(!W||!K||!Y)return null;let{a:H,b:U,c:X}=$,N,F,G,E=Q.barycoord;if(E)N=E.x,F=E.y,G=E.z;else{let I=Q.point.clone();if(J.mesh.worldToLocal(I),LK.fromBufferAttribute(W,H),zK.fromBufferAttribute(W,U),IK.fromBufferAttribute(W,X),!I8.getBarycoord(I,LK,zK,IK,LJ))return null;N=LJ.x,F=LJ.y,G=LJ.z}let R,V;if(N>=F&&N>=G)R=Math.round(K.getX(H)),V=Math.round(Y.getX(H));else if(F>=N&&F>=G)R=Math.round(K.getX(U)),V=Math.round(Y.getX(U));else R=Math.round(K.getX(X)),V=Math.round(Y.getX(X));let q=J.grid;if(R<0||R>=q.apertures.length||V<0||V>=q.regions.length)return null;let D=q.z[V]?.[R],B=Number.isFinite(D)?D:null,L=q.apertures[R];return{aperture:L?L.replace(/^F\//i,"ƒ/"):"",region:q.regions[V]??"",lwph:B}}function g$(J){let Q=document.createElement("div");return Q.className="axis-label-title",Q.textContent=J,new VJ(Q)}function p$(J){let Q=document.createElement("div");return Q.className="axis-tick",Q.textContent=J,new VJ(Q)}function p1(J,Q,$){let Z=Math.max(Q.regions.length-1,0.001),W=new S(A8,0,0),K=new q6;K.name="chartAxes";let Y=0.38,H=0.26,U=new f9(new S(1,0,0),W,Z9-A8,x$.x,Y,H),X=new f9(new S(0,1,0),W,W9,x$.y,Y,H),N=new f9(new S(0,0,1),W,Z,x$.z,Y*0.85,H*0.85);for(let C of[U,X,N]){let P=C.line.material;P.transparent=!0,P.opacity=0.92;let O=C.cone.material;O.transparent=!0,O.opacity=0.95}K.add(U,X,N);let F=new T6(Z9-A8,W9,Z),G=new W7(F),E=new s6({color:6583435,transparent:!0,opacity:0.35}),R=new Z7(G,E);R.position.set(A8+(Z9-A8)/2,W9/2,Z/2),K.add(R);let V=new o6(Z9-A8,Z),q=new n6({color:1976635,transparent:!0,opacity:0.12,side:x8}),D=new S8(V,q);D.rotation.x=-Math.PI/2,D.position.set(A8+(Z9-A8)/2,-0.02,Z/2),K.add(D);let B=g$("X · Aperture (ƒ-number)");B.position.set((A8+Z9)/2,-0.55,-0.65),K.add(B);for(let C=0;C<Q.apertures.length;C++){let P=$[C];if(P===void 0)continue;let O=PK($,P),A=Q.apertures[C]??"",l=p$(A.replace(/^F\//i,"ƒ/"));l.position.set(O,-0.38,-0.45),K.add(l)}let L=g$("Y · LW/PH");L.position.set(A8-1.15,W9/2,-0.55),K.add(L);let I=[1500,2500,3500,4500,5500];for(let C of I){let P=p$(String(C));P.position.set(A8-0.55,wK(C),0),K.add(P)}let f=g$("Z · Sensor position");f.position.set(A8-1,-0.45,Z/2),K.add(f);for(let C=0;C<Q.regions.length;C++){let P=p$(Q.regions[C]??"");P.position.set(A8-0.5,-0.22,C),K.add(P)}J.add(K)}async function m1(){let J=document.getElementById("chart");if(!J)throw Error("#chart not found");let Q=MK(RK);if(Q.length<2)throw Error("Expected at least two lenses in CSV");let $=Q[0];if($===void 0)throw Error("Expected at least two lenses in CSV");let Z=VK($.apertures);for(let j of Q)if(!(j.apertures.length===$.apertures.length&&j.apertures.every((b,u)=>b===$.apertures[u])))throw Error("All lenses must share the same aperture columns");let W=Q.map((j,m)=>x1(j,Z,m));J.innerHTML="";let K=document.createElement("div");K.id="canvas-wrap";let Y=document.createElement("canvas");K.appendChild(Y),J.appendChild(K);let H=new h$;H.domElement.style.position="absolute",H.domElement.style.top="0",H.domElement.style.left="0",H.domElement.style.pointerEvents="none",K.appendChild(H.domElement);let U=document.createElement("div");U.id="hud",U.innerHTML=`
    <header class="hud-header">
      <h1>Resolution (LW/PH)</h1>
      <p class="hud-sub">Shared axes: X aperture · Y resolution · Z field · orbit / zoom · toggle series</p>
    </header>
    <div id="layer-panel" class="layer-panel"></div>
    <div id="tooltip" class="tooltip" hidden></div>
  `,J.appendChild(U);let X=U.querySelector("#layer-panel");if(!X)throw Error("#layer-panel missing");let N=U.querySelector("#tooltip");if(!N)throw Error("#tooltip missing");for(let j=0;j<W.length;j++){let m=W[j];if(!m)continue;let b=`layer-${j}`,u=document.createElement("label");u.className="layer-row",u.innerHTML=`<input type="checkbox" id="${b}" checked /> <span class="layer-name"></span>`;let p=u.querySelector(".layer-name"),h=u.querySelector("input");if(!p||!h)continue;p.textContent=m.title,h.addEventListener("change",()=>{m.group.visible=h.checked}),X.appendChild(u)}let F=new JJ;F.background=new y0(BK);let G=new Q7(BK,j6.fogDensity);F.fog=G;let E=($.regions.length-1)/2,R=new T8(42,Y.clientWidth/Math.max(Y.clientHeight,1),0.1,120);R.position.set(20,6.5,E+12);let V=new f$({canvas:Y,antialias:!0,powerPreference:"high-performance"});V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(Y.clientWidth,Y.clientHeight),V.shadowMap.enabled=!0,V.shadowMap.type=m7,V.toneMapping=s9,V.toneMappingExposure=j6.exposure,V.outputColorSpace=a7;let q=new v$(R,Y);q.enableDamping=!0,q.dampingFactor=0.06,q.target.set(0,W9*0.38,E),q.maxPolarAngle=Math.PI*0.52,q.minDistance=7,q.maxDistance=52;let D=new qJ(9741240,j6.ambient);F.add(D);let B=new j9(16775408,j6.key);B.position.set(12,20,E+10),B.castShadow=!0,B.shadow.mapSize.set(2048,2048),B.shadow.camera.near=1,B.shadow.camera.far=56,B.shadow.camera.left=-20,B.shadow.camera.right=20,B.shadow.camera.top=18,B.shadow.camera.bottom=-6,F.add(B);let L=new j9(8246268,j6.fill);L.position.set(-14,8,E-8),F.add(L);let I=new j9(16498468,j6.rim);I.position.set(0,W9+1.5,-4),F.add(I),p1(F,$,Z);let f={...j6};y1(U,f,{renderer:V,ambient:D,key:B,fill:L,rim:I,fog:G},{...j6});for(let j of W)j.mesh.userData.layer=j,F.add(j.group);let C=new FJ,P=new _0,O=(j)=>{let m=Y.getBoundingClientRect();P.x=(j.clientX-m.left)/m.width*2-1,P.y=-((j.clientY-m.top)/m.height)*2+1,C.setFromCamera(P,R);let u=C.intersectObjects(W.filter((t)=>t.group.visible).map((t)=>t.mesh),!1)[0];if(!u?.object.userData.layer){N.hidden=!0,Y.style.cursor="";return}let p=u.object.userData.layer;Y.style.cursor="crosshair";let h=g1(p,u);if(!h){N.hidden=!0;return}N.hidden=!1,N.style.left=`${j.clientX+14}px`,N.style.top=`${j.clientY+14}px`;let e=h.lwph!=null?`<span class="lwph">${Math.round(h.lwph)} LW/PH</span>`:'<span class="lwph nodata">No data at this ƒ-stop / field</span>';N.innerHTML=`<strong>${p.title}</strong><br/>Aperture ${h.aperture}<br/>${h.region}<br/>${e}`};Y.addEventListener("pointermove",O),Y.addEventListener("pointerleave",()=>{N.hidden=!0,Y.style.cursor=""});let A=()=>{let{clientWidth:j,clientHeight:m}=K;R.aspect=j/Math.max(m,1),R.updateProjectionMatrix(),V.setSize(j,m),H.setSize(j,m)};window.addEventListener("resize",A),A();let l=0;function w(){requestAnimationFrame(w),l+=0.006,I.position.z=E+Math.sin(l)*2.5,q.update(),V.render(F,R),H.render(F,R)}w()}m1().catch((J)=>{console.error(J);let Q=document.getElementById("chart");if(Q)Q.textContent=String(J)});
