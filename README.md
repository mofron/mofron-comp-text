# mofron-comp-text
Text Component for mofron

# sample
```html
<html>
    <head></head>
    <body style="margin:0px;padding:0px;"></body>
    <script src='./path/to/webpack/output.js'></script>
</html>
```

```javascript
require('mofron'); 
require('mofron-comp-button');

var text = new mofron.comp.Text('Test');
text.visible(true);      // push to DOM
text.size(50);             // set font-size (50px)
```

#class specification
| Method          | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| text                 | string : text contents (option)                                   | set parameter : update text contents<br>no parameter : get text contents |
| size                 | number(px) : text size (option)                                 | set parameter : update text size<br>no parameter : gettext size |
| color              | color : color object (option)                                       | set parameter : update text color<br>no parameter : get text color|
