/*
 * File: app/controller/Books.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Books', {
    extend: 'Ext.app.Controller',

    models: [
        'Book',
        'Review'
    ],
    stores: [
        'Books',
        'Reviews'
    ],
    views: [
        'Main',
        'book.SideBar',
        'book.View',
        'review.List',
        'Header'
    ],

    refs: [
        {
            ref: 'bookSideBar',
            selector: 'booksidebar'
        },
        {
            ref: 'bookView',
            selector: 'bookview'
        },
        {
            ref: 'reviewList',
            selector: 'reviewlist'
        }
    ],

    onDataviewSelectionChange: function(model, selected, eOpts) {
        if (selected.length) {
            this.showBook(selected[0]);
        }
    },

    showBook: function(record) {
        var me = this;

        me.getBookView().bind(record);
        me.getReviewList().bind(record, me.getReviewsStore());
    },

    onBooksStoreLoad: function(store, records) {
        Ext.defer(function() {
            if (records.length) {
                this.getBookSideBar().getSelectionModel().select(records[0]);
            }
        }, 500, this);
    },

    init: function(application) {
        this.getBooksStore().on({
            scope: this,
            load : this.onBooksStoreLoad
        });

        this.control({
            "booksidebar": {
                selectionchange: this.onDataviewSelectionChange
            }
        });
    }

});
