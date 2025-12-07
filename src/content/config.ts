import { defineCollection, z } from 'astro:content';

const journeyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    act: z.string(),
    dates: z.string(),
    location: z.string(),
    order: z.number(),
    highlight: z.string().optional(),
    image: z.string().optional(),
  }),
});

const timelineCollection = defineCollection({
  type: 'content',
  schema: z.object({
    day: z.number(),
    date: z.string(),
    title: z.string(),
    location: z.string(),
    type: z.enum(['default', 'birthday', 'nature', 'travel']).default('default'),
    highlight: z.object({
      title: z.string(),
      description: z.string(),
    }).optional(),
    image: z.string().optional(),
  }),
});

const hotelsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    name: z.string(),
    dates: z.string(),
    nights: z.number(),
    price: z.string(),
    status: z.enum(['pending', 'booked', 'priority']).default('pending'),
    notes: z.string().optional(),
    options: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'journey': journeyCollection,
  'timeline': timelineCollection,
  'hotels': hotelsCollection,
};
