import { defineField, defineType } from 'sanity';

export const ProductType= defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'productname',
            title: 'Product name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title:'slug',
            type: 'slug',
            options: {source: 'productname'},
          }),

    ],
});