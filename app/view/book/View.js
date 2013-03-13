/*
 * File: app/view/book/View.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.book.View', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.bookview',

    border: false,
    cls: 'item-ct',
    autoScroll: true,
    layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'image',
                    height: 201,
                    itemId: 'imgCt',
                    margin: '0 10 0 0',
                    width: 201
                },
                {
                    xtype: 'component',
                    border: false,
                    itemId: 'contentCt',
                    tpl: [
                        '<div class="name">{name} <span>${price}</span></div>',
                        '<div class="author">By {author}</div>',
                        '<div class="detail">{detail}</div>'
                    ],
                    width: 500
                }
            ]
        });

        me.callParent(arguments);
    },

    bind: function(record) {
        this.child('#imgCt').setSrc(record.get('image'));
        this.child('#contentCt').update(record.data);
    }

});