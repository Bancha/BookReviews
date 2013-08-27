/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'MyApp.view.Header',
        'MyApp.view.book.SideBar',
        'MyApp.view.book.View',
        'MyApp.view.review.List'
    ],

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    dockedItems: [
                        {
                            xtype: 'header',
                            html: 'Book Reviews',
                            itemId: 'header',
                            flex: 1,
                            dock: 'top'
                        },
                        {
                            xtype: 'booksidebar',
                            itemId: 'sidebar',
                            width: 180,
                            flex: 1,
                            dock: 'left'
                        }
                    ],
                    items: [
                        {
                            xtype: 'bookview',
                            itemId: 'book',
                            flex: 2
                        },
                        {
                            xtype: 'reviewlist',
                            itemId: 'reviews',
                            flex: 1
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});