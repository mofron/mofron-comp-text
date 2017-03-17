/**
 * @file   Text.js
 * @author simpart
 */

/**
 * @class Text
 * @brief text component for mofron
 */
mofron.comp.Text = class extends mofron.Component {
    /**
     * initialize member, exec option
     *
     * @param prm_opt : (string) text contents
     * @param prm_opt : (object) component option
     */
    constructor (prm_opt) {
        try {
            super();
            this.name('Text');
            
            this.m_link = new Array(
                              null,  /* url */
                              null   /* new tab flag */
                          );
            
            /* set prameter / option */
            this.prmOpt(prm_opt);
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
                            new mofron.Dom('div', this)
                        );
            
            /* set text contents */
            this.text((null === prm) ? '' : prm);
            
            /* set font theme */
            this.font(
                (null === this.theme().getFont(0)) ? undefined : this.theme().getFont(0),
                true
            );
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
                return mofron.func.getLength(this.style('font-size'));
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
                return mofron.func.getColorObj(this.style('color'));
            }
            /* setter */
            if (false === mofron.func.isObject(clr, 'Color')) {
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
            if ( (false     === mofron.func.isObject(fnt, 'Font')) ||
                 ('boolean' !== typeof _thm) ) {
                throw new Error('invalid parameter');
            }
            if (false === _thm) {
                this.style({ 'font-family' : fnt.getFamilyStyle() });
            } else {
                this.target().className(fnt.className());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.text = {};
module.exports = mofron.comp.Text;
