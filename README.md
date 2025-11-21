# ShaderIG: Anillos RGB Radiales Dinámicos

# Descripcion

Este shader GLSL genera un conjunto de **anillos concéntricos animados**, cuyos colores varían dinámicamente mediante funciones seno desfasadas. El resultado es un efecto visual vibrante y en constante movimiento que recuerda a patrones psicodélicos clásicos.

## Código Principal
```glsl
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
void main(){
  // Coords normalizadas, centro (0,0)
  vec2 u=(gl_FragCoord.xy*2.-u_resolution)/u_resolution.y;
  float d=length(u);//Distancia centro
  // RGB anillos 
  float r=abs(sin(d*8.+u_time));
  float g=abs(sin(d*8.+u_time+2.094));
  float b=abs(sin(d*8.+u_time+4.188));
  gl_FragColor=vec4(r,g,b,1.);
}
```
**Tamaño:** 405 bytes

## Motivación 

La motivación principal detrás de este shader fue **crear un efecto psicodélico**, inspirado en patrones pulsantes que evocan sensaciones de movimiento hipnótico.
La idea original surgió al explorar cómo **funciones trigonométricas simples**, combinadas con **desfases de color** y **distancias radiales**, pueden producir efectos muy potentes sin necesidad de texturas ni geometrías complejas.

## Características Visuales
- Anillos concéntricos RGB que se expanden y contraen suavemente.
- Gradientes animados sincronizados con el tiempo (`u_time`).
- Paleta cíclica, generando transiciones continuas entre rojo, verde y azul.
- Fondo negro y máxima saturación de color.
- Output compatible con WebGL y GLSL ES.

## Desarrollo Técnico

### 1. Coordenadas Normalizadas y Centro
El shader centra y normaliza las coordenadas en el espacio de pantalla para facilitar la generación de patrones circulares:

```glsl
vec2 u=(gl_FragCoord.xy*2.-u_resolution)/u_resolution.y;
float d=length(u);
```
- **Centrado**: `(gl_FragCoord.xy * 2.0 - u_resolution)` coloca el origen en el centro de la pantalla.
- **Normalización vertical**: divide por `u_resolution.y` para mantener proporciones en pantallas no cuadradas.
- **Radio**: `length(u)` calcula la distancia de cada píxel al centro, esencial para los anillos concéntricos.

### 2. Anillos y Patrón Dinámico
La clave visual es la modulación sinusoidal en función del radio y el tiempo, creando anillos animados:

```glsl
float r=abs(sin(d*8.+u_time));
float g=abs(sin(d*8.+u_time+2.094));
float b=abs(sin(d*8.+u_time+4.188));
```
- **Frecuencia**: `d*8.0` genera ocho anillos principales, modificable para más densidad.
- **Desfase**: `2.094` (≈120°) y `4.188` (≈240°) producen separación de color RGB.
- **Animación**: `u_time` asegura movimiento continuo de los colores y ondas.

### 3. Combinación de Colores RGB
Cada componente de color se obtiene desplazando la fase del seno, asegurando un ciclo uniforme por el espectro RGB:

- **Rojo**: Base rápida
- **Verde**: Desplazado en fase
- **Azul**: Segundo desfase en fase


## Requisitos Técnicos
- Compatible con GLSL ES (WebGL)
- Uniforms requeridos:
  - `u_resolution` (vec2): Resolución del lienzo.
  - `u_time` (float): Tiempo en segundos.

## Ejecución
1. Accede a [The Book of Shaders Editor](https://thebookofshaders.com/edit.php).
2. Copia el código completo del shader.
3. Pega el código en el editor.
4. El patrón se renderizará automáticamente.

## Resultado Final
El shader produce un patrón generativo de menos de 512 bytes, animado y visualmente atractivo.

![Preview](./CapturaShaderIG.png)




## Referencias
1. [The Book of Shaders - Shapes](https://thebookofshaders.com/07/)
2. [The Book of Shaders - Color](https://thebookofshaders.com/08/)
3. [Shadertoy - Sinusoidal Patterns](https://www.shadertoy.com/)
4. [GLSL Documentation](https://www.khronos.org/registry/OpenGL-Refpages/es2.0/)


## Autor
Jesús Santacruz Martín-Delgado
