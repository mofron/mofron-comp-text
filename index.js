/**
 * @file   Text.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class Text
 * @brief text component for mofron
 */
mf.comp.Text = class extends mf.Component {
    constructor (po) {
        try {
            super();
            this.name('Text');
            this.sizeType('rem');
            this.prmMap('text');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     */
    initDomConts () {
        try {
            super.initDomConts();
            /* set init contents */
            this.text('');
            /* set default size */
            this.size(0.16);
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
    size (prm) {
        try {
            return mf.func.compSize(this, 'font-size', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            return this.size(val);
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
    mainColor (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mf.func.getColor(this.style('color'));
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
                return mf.func.getSize(
                    this.style('letter-spacing'),
                    this.sizeType()
                );
            }
            /* setter */
            if ('number' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.style({
                'letter-spacing' : val + this.sizeType()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    weight (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.style('font-weight');
            }
            /* setter */
            this.style({ 'font-weight' : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Text;
/* end of file */
