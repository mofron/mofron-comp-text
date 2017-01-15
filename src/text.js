/**
 * @file   Text.js
 * @brief  Text Component for mofron
 * @author simpart
 */

mofron.comp.Text = class extends mofron.comp.Base {
    
    /**
     * initialize font theme
     *
     * @param prm : (string) text contents
     * @param opt : (object) component option
     */
    constructor (prm, opt) {
        try {
            super(prm, opt);
            /* font theme */
            this.m_font = null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param vd : (object) vdom object
     * @param prm : (string) text contents
     */
    initDomConts (vd, prm) {
        try {
            this.name('Text');
            if ('string' != (typeof prm)) {
                throw new Error('invalid parameter');
            }
            
            /* init vdom contents */
            var text = new mofron.util.Vdom('div');
            text.text(prm);
            vd.addChild(text);
            this.target = text;
            
            /* set style */
            this.size(15);
            
            /* set font theme */
            this.m_theme.get(new mofron.util.Font(''));
            if (null !== this.m_font) {
                this.setFontTheme(this.m_font);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents setter/getter
     *
     * @param val : (string) text contents
     * @return (string) text contents
     */
    text (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.getTarget().text();
            }
            if ('string' !== (typeof _val)) {
                throw new Error('invalid parameter');
            }
            this.getTarget().text(_val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size setter / getter
     *
     * @param val : (number) font pixel size (option)
     * @return (number) font size
     */
    size (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.style('font-size');
            }
            /* setter */
            if ('number' != (typeof val)) {
                throw new Error('invalid parameter');
            }
            this.style('font-size', val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    //align (tp) {
    //    try {
    //        //var style = new mofron.other.Styles(this, ' .text-conts');
    //        //style.style('text-align', tp);
    //    } catch (e) {
    //        console.error(e.stack);
    //        throw e;
    //    }
    //}
    
    /**
     * set link text
     *
     * @param url : (string) link url
     * @param tab : (bool) new tab flag
     */
    setLink (url, tab) {
        try {
            var _tab  = (tab === undefined) ? false : tab;
            var click = null;
            
            if (false === _tab) {
                click = new mofron.event.Click(function(){
                    window.location.href = url;
                });
            } else {
                click = new mofron.event.Click(function(){
                    window.open(url, '_blank');
                });
            }
            
            this.style('cursor', 'pointer');
            this.addEvent(click);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text color setter/getter
     * 
     * @param clr : (mofron.util.Color) color object
     * @return (string) color (no-parameter)
     */
    color (clr) {
        try {
            var _clr = (clr === undefined) ? null : clr;
            if (null === _clr) {
                return this.style('color');
            }
            if ('object' !== (typeof _clr)) {
                throw new Error('invalid parameter');
            }
            this.style('color', _clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font setter/getter
     * 
     * @param fnt : (mofron.util.Font) font object
     * @return (string) font
     */
    font (fnt) {
        try {
            var _fnt = (fnt === undefined) ? null : fnt;
            if (null === _fnt) {
                /* getter */
                return this.style('font-family');
            }
            /* setter */
            if ('object' !== (typeof _fnt)) {
                throw new Error('invalid parameter');
            }
            this.style('font-family', _fnt.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set font theme to class name
     * 
     * @param fnt : (object) font object
     */
    setFontTheme (fnt) {
        try {
            var _fnt = (fnt === undefined) ? null : fnt;
            if ('object' !== _fnt) {
                throw new Error('invalid parameter');
            }
            this.getTarget().addClname(fnt.getThemeClass());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
