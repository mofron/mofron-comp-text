/**
 * @file   Text.js
 * @author simpart
 */
let mf = require('mofron');

/**
 * @class Text
 * @brief text component for mofron
 */
mf.comp.Text = class extends mf.Component {
    
    constructor (po) {
        try {
            super(po);
            this.name('Text');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */
    initDomConts (prm) {
        try {
            /* init vdom contents */
            this.vdom().addChild(
                new mf.Dom('div', this)
            );
            
            /* set contents */
            this.text((null === prm) ? '' : prm);
            
            /* set font */
            let fnt = this.theme().font(0);
            if (null !== fnt) {
                this.font(fnt, true);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents setter / getter
     *
     * @param val : (string) text contents
     * @return (string) text contents
     * @note do not specify parameters, if use as getter
     */
    text (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.target().text();
            }
            /* setter */
            this.target().text(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size setter / getter
     *
     * @param val : (number) font size (px)
     * @param val : (string,null) font size (manual)
     * @return (string) font size
     * @note do not specify parameters, if use as getter
     */
    size (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mf.func.getLength(
                    this.style('font-size')
                );
            }
            /* setter */
            this.style({
                'font-size' : ('number' === typeof val) ? val + 'px' : val
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter / getter
     * 
     * @param clr : (mofron.Color) color object
     * @return (string) color
     * @note do not specify parameters, if use as getter
     */
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mf.func.getColorObj(this.style('color'));
            }
            /* setter */
            if (false === mf.func.isInclude(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'color' : clr.getStyle() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font setter / getter
     * 
     * @param fnt : (object) mofron.util.Font object
     * @param thm : (boolean) theme flag
     *                        true  : set font as theme
     *                        false : set font (default)
     * @return (object) mofron.util.Font object
     * @note do not specify parameters, if use as getter
     */
    font (fnt, thm) {
        try {
            if (undefined === fnt) {
                /* getter */
                return this.style('font-family');
            }
            /* setter */
            var _thm = (undefined === thm) ? false : thm;
            if ( (false     === mf.func.isInclude(fnt, 'Font')) ||
                 ('boolean' !== typeof _thm) ) {
                throw new Error('invalid parameter');
            }
            if (false === _thm) {
                this.style({ 'font-family' : fnt.getFamilyStyle() });
            } else {
                var clnm = this.target().className();
                for (var idx in clnm) {
                    if (clnm[idx] === fnt.className()) {
                        return;
                    }
                }
                this.target().className(fnt.className());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    space (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mf.func.getLength(
                    this.style('letter-spacing')
                );
            }
            /* setter */
            if ('number' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.style({
                'letter-spacing' : val + 'px'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.text = {};
module.exports = mofron.comp.Text;
