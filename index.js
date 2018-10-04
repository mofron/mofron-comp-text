/**
 * @file   Text.js
 * @author simpart
 */
const mf   = require('mofron');
const Font = require('mofron-effect-font');
/**
 * @class Text
 * @brief text component for mofron
 */
mf.comp.Text = class extends mf.Component {
    constructor (po) {
        try {
            super();
            this.name('Text');
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
            this.size('0.16rem');
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
        try { return this.target().text(val); } catch (e) {
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
        try { return this.sizeValue('font-size', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try { return this.size(val); } catch (e) {
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
        try { return this.tgtColor('color', clr); } catch (e) {
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
    font (fnm, pth) {
        try {
            let ret = this.effect('Font');
            if (undefined === fnm) {
                /* getter */
                return (null === ret) ? null : [ret.fontName(), ret.path()];
            }
            /* setter */
            if (null === ret) {
                this.effect(new Font(fnm, pth));
            } else {
                ret.fontName(fnm);
                ret.path(pth);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    space (val) {
        try { return this.sizeValue('letter-spacing', val); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    weight (prm) {
        try {
            return this.style(
                (undefined === prm) ? 'font-weight' : { 'font-weight' : prm }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Text;
/* end of file */
