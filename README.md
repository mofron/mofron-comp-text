# mofron-comp-text
Base of Text Component for [mofron](https://github.com/mofron/mofron)

# sample
please see [here](https://github.com/mofron/mofron) about an overview of mofron

```javascript
let mf   = require('mofron');
let Text = require('mofron-comp-text');

new Text({
    text   : 'TEST',  // require
    size    : 40,
    color   : new mf.Color(255,0,0),
    font    : new mf.Font('serif'),
    space   : 10,
    visible : true
});
```

#class specification

| Method          | Parameter                               |    Description                  |
|:------------------|:--------------------------------------|:-------------------------------|
| text                 | string : text contents (option)    | set parameter : update text contents<br>no parameter : get text contents |
| size                 | number(px) : text size (option)    | set parameter : update text size<br>no parameter : get text size |
| color              | object : color object (option)       | set parameter : update text color<br>no parameter : get text color|
| font                 | object : font object (option)      | set parameter : update text  font<br>no parameter : get text font|
| space                 | number(px) : letter spacing size  | set parameter : update text  space<br>no parameter : get text font|
