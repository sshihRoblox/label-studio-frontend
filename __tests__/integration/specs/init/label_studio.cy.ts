import { LabelStudio } from 'cypress/objects/LabelStudio';

describe('Label Studio UI init', () => {
  it('Initialize Label Studio', () => {
    LabelStudio.init({
      config: '<View></View>',
      task: { 
        annotations: [],
        predictions: [],
        id: 1,
        data: {
          image: 'https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg',
        },
      }, 
    });
  });
});
