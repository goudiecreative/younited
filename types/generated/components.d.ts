import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    featureDescription: Schema.Attribute.Text;
    featureHeading: Schema.Attribute.String;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedProgramFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_features';
  info: {
    displayName: 'programFeatures';
  };
  attributes: {
    featureDescription: Schema.Attribute.Text;
    featureHeading: Schema.Attribute.String;
    featureImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedProgramTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_testimonials';
  info: {
    displayName: 'programTestimonials';
  };
  attributes: {
    testimonial: Schema.Attribute.Text;
    testimonialName: Schema.Attribute.String;
    workTitle: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text;
    workTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.faq': SharedFaq;
      'shared.features': SharedFeatures;
      'shared.program-features': SharedProgramFeatures;
      'shared.program-testimonials': SharedProgramTestimonials;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
