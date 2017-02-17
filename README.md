# mofron-comp-text
Text Component for mofron

# sample
please see [here](https://github.com/simpart/mofron) about an overview of mofron

```javascript
require('mofron');
require('mofron-comp-text');

new mofron.comp.Text({
    text       : 'TEST',  // required
    size       : 40,
    color      : new mofron.util.Color(255,0,0),
    font       : new mofron.util.Font('serif'),
    link       : './',
    visible    : true
});
```

#class specification
| Method          | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| text                 | string : text contents (option)                                   | set parameter : update text contents<br>no parameter : get text contents |
| size                 | number(px) : text size (option)                                 | set parameter : update text size<br>no parameter : get text size |
| color              | object : color object (option)                                     | set parameter : update text color<br>no parameter : get text color|
| link            | string : link url<br>boolean : new tab flag (option)| set link text|
| font                 | object : font object (option)                                       | set parameter : update text  font<br>no parameter : get text font|
