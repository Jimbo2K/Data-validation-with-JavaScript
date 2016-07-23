# Data validation with JavaScript / *Validación de datos con JavaScript*
##Functions with js and regular expressions for data validation (especially for forms)

** First of all : ** Data validation , especially for forms, must be twofold, browser's side and especially server's side. The code used in this repository corresponds **only to the browser's side**.

### Why perform validation with JavaScript?

Although HTML 5 implements its own formulary validation system, its performance depends largely on the browser used. So maybe it won't work in every browser.

Also in some cases it requires specific validations that HTML 5 can not performed (eg: the date format varies by country and it is important to adapt it for improving accessibility).

### Using regular expressions

Validations can be performed using only JavaScript code, even if mixed with regular expressions is greatly minimized.

As not everyone is acquainted with using regular expressions, I've tried to make two versions for each validation function, with and without mixture of js and regular expressions.

You can find more about regular expressions in this link from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions "Mozilla Developer Network")

##Revs.
**30/06/2016** An html example added to check the validation functions from jvalidations.js. The example includes an HTML file (ejemplo.html), an CSS style (estilo.css) and a JS file (ejemplo.js) for the events that trigger validations.
***
##Funciones con js y expresiones regulares para validación de datos (especialmente formularios)
**Lo primero:** La validación de datos, sobre todo para formularios, debe ser doble, del lado del navegador y sobre todo del servidor. El código empleado en este repositorio corresponde **sólo del lado del navegador**.

###¿Por qué realizar validación con JavaScript?

Aunque HTML 5 implementa su propio sistema de validación para formularios, su funcionamiento depende en gran medida del navegador que utilice el formulario pudiendo funcionar o no.

Además en algunos casos será preciso realizar validaciones específicas que HTML 5 no puede llevar a cabo (por ejemplo: el formato de fecha varía según el país y es importante adaptarlo por accesibilidad).

### Uso de expresiones regulares

Las validaciones se pueden realizar empleando sólo código JavaScript, aunque si se mezcla con expresiones regulares se puede minimizar en gran medida.

Como no todo el mundo está familiarizado con el uso de expresiones regulares, he intentado hacer dos versiones para cada función de validación, con y sin mezcla de expresiones regulares y js.

Puedes encontrar más información sobre expresiones regulares en este nelace a [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions "Mozilla Developer Network")

##Revs.
**30/06/2016** Un ejemplo HTML añadido para probar las funciones de jvalidations.js. El ejemplo incluye un archivo HTML (ejemplo.html), una hoja de estilo CSS (estilo.css) y un archivo JS (ejemplo.js) para los eventos que desencadenan las validaciones.