# INTRO
https://angular.io/guide/what-is-angular

## 0. Que es Angular?  
* Es un framework.
* Trabaja con modulos.  
* Tiene 5 bloques de trabajo principales.  
   * Componentes
   * Rutas 
   * Directivas
   * Servicios
   * Modulos

A) **Components**   
Components are the main building block for Angular applications. Each component consists of:

* An HTML template that declares what renders on the page
* A TypeScript class that defines behavior
* A CSS selector that defines how the component is used in a template.

B) **Services**   
Los servicios son lugares centralizados de información:  
* Traer datos
* Guardar datos

C) **Directives**.  
Directives are classes that add additional behavior to elements in your Angular applications. 
Use Angular's built-in directives to manage forms, lists, styles, and what users see.

Kinds:
* component directives. 
* structural directives. 
* attribute directives. 

D) **Rutas**.  
Muestrar diferentes componentes basados en la URL del navegador web.

E) **Módulos**.  


## 1. Crear un proyecto en angular
1. Install Angular CLI.  
https://angular.io/cli

Check:  
```
ng --version
```

2. Use the next command to create a project. 
```
ng new <project>
```
We need type in prompt:  
```
Would you like to add Angular routing? (y/N) N
Which stylesheet format would you like to use? CSS
```
3. Run the project.  
```
ng serve -o
```
### Ficheros de config.
* tsconfig.json
Archivo de configuración de typescript.
* tsconfig.spec.json
Relación de config. de pruebas unitarias.
* tsconfig.app.json
Relación de config. de la appp.
* package.json
No se debe de tocar manualmente, solo por comandos, tiene dependencias y configuaraciones.
* angular.json
Contiene config. importantes de la aplciación referentes a recursos estaticos.
* editorconfig
No se usa.
* src
Es la carpeta de las fuentes
* node_modules
Dependencias, para producción no van todos, van pocos realmente.

### Ficheros de SRC

* **app/app.component.html**.  
Etiquetas html.  
* **app/app.component.ts**.   
Clase controlador.  
* **app/app.component.css**.  
Estilos del componente que se reflejan en HTML.
* **app/app.module.ts**.  
Agrupador de componentes relacionados.
* **assets**.  
Recursos CSS, Imagenes, Ficheros.
* **environment**.  
Lugar de variables de enterno de la aplicación, entornos DEV, PRD.
* **index.html**.  
Página global, punto de entrada de la aplicación.
* **main.ts**.  
Nunca se debe de modificar.
* **polyfills.ts**.  
Añade compatibilidad de navegadores, no se toca.
* **style.css**.  
Estilo CSS global.
* **tests.ts**.  
Clases de tipo de test.


## 2. Componentes

## 3. Modules

## 4. Data Binding

## 5. Angular CLI (Angular Command Line Interface)

## 6. Directivas

## 7. Flujo de control