import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'xv0mb460',
  dataset: 'production',
  useCdn: true,
  token:
    'skB3LSCCvyO9pfAOBftWGVsPPYYTpqOnlO0dKVn89IJNJrXXPWK6eAqWLyYKMxrAa2MsenPr9ZkeUIYX5bB3tLzLBDMlBk6EcMXXe6Hz0koXam20AXnEjKYikes4cPmHoS7SCUfAVuQYOGfPs8LJxUXkQpHs9dANyUVZbLTGXuY5oTbmKVnd',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
